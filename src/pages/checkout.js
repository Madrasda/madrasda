import Head from "next/head";
import ClientLayout from "@/components/layout-client";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context/context";
import { getRole, isTokenValid } from "@/utils/JWTVerifier";
import { uuidv4 } from "@firebase/util";
import axios from "axios";
import {
  Backdrop,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import CartItem from "@/components/CartItem";
import { API_URL } from "@/utils/constants";

export default function Checkout() {
  const [subTotal, setSubtotal] = React.useState(0);
  const [shippingCharges, setShippingCharges] = useState(-1);
  const [quantityState, changeState] = useState(1);
  const [previousTimeoutId, setPreviousTimeoutId] = useState();
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const [client, setClient] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [validPincode, setValidPincode] = useState(false);
  const [visible, setVisible] = useState(false);
  const email = useRef();
  const [country, setCountry] = useState("");
  const firstName = useRef();
  const lastName = useRef();
  const addressLine1 = useRef();
  const addressLine2 = useRef();
  const phoneRef = useRef();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [isNotRedirected, setIsNotRedirected] = useState(false);
  const [paymentLink, setPaymentLink] = useState("");
  const router = useRouter();
  const ctx = useContext(UserContext);
  const closeModal = () => {
    setVisible(false);
    setValidPincode(false);
    setShippingCharges(-1);
    setSpinner(false);
    setError(true);
  };
  const openModal = () => setVisible(true);

  useEffect(() => {
    if (
      !isTokenValid(localStorage.getItem("token_client")) ||
      getRole(localStorage.getItem("token_client")) !== "ROLE_CUSTOMER"
    ) {
      router.push("/login");
    } else {
      if (ctx.cart.cartItems) {
        if (ctx.cart.cartItems.length === 0) {
          router.push("/");
        } else {
          const sum = ctx.cart.cartItems.reduce(
            (prev, curr) =>
              (prev +=
                curr.quantity *
                Math.ceil(
                  (curr.product.total * (100 - curr.product.discount)) / 100
                )),
            0
          );
          const timeoutId = setTimeout(() => {
            if(sum < 500)
              handleChange({target: {value: pincode}})
            else setShippingCharges(0);
          }, 1000)
          setSubtotal(Math.ceil(sum));
          clearTimeout(previousTimeoutId);
          setPreviousTimeoutId(timeoutId);
        }
      }
    }
  }, [ctx.cart]);

  const getShippingCharges = (text) => {
    setError(false);
    setSpinner(true);
    axios
      .get(
        // spring-madrasda-2f6mra4vwa-em.a.run.app
          API_URL + "/api/payment/getShippingCharges/" +
          text,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token_client"),
          },
        }
      )
      .then((response) => {
        setShippingCharges(response.data);
        setSpinner(false);
        setValidPincode(true);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setSpinner(false);
          setShippingCharges(-100);
        }
        setValidPincode(false);
        setSpinner(false);
        if (err.response.status === 409) {
          setVisible(true);
        }
      });
  };
// https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/webhook/updateShipmentStatus
  const handleChange = (event) => {
    const text = event.target.value;
    const pincodeRegex = /^[1-9][0-9]{5}$/;
    setPincode((oldText) => {
      setTimeout(() => {
        if (pincodeRegex.test(text.trim())) {
          getShippingCharges(text);
        } else {
          setError(true);
          setValidPincode(false);
        }
      }, 300);
      return text;
    });
  };
  const handlePhoneChange = (event) => {
    const inputPhone = event.target.value;
    const phoneRegex = /^[0-9]{10,}$/;
    if (phoneRegex.test(inputPhone)) {
      setPhone(inputPhone);
      setError(false);
      setValidPhone((old) => {
        return true;
      });
    } else {
      setPhone(inputPhone);
      setValidPhone(false);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validPhone || !validPincode) return;

    const transaction = {
      billingIsShipping: true,
      shippingAddress: {
        name: firstName.current.value + " " + lastName.current.value,
        addressLine1: addressLine1.current.value,
        addressLine2: addressLine2.current.value,
        city: city,
        state: state,
        postalCode: pincode,
        country: country,
        email: email.current.value,
        phone: phoneRef.current.value,
      },
      orderTotal: Math.ceil(subTotal),
      orderItems: ctx.cart.cartItems.map((item) => {
        return {
          product: {
            id: item.product.id,
            colors: [{ sizes: [{ sku: item.product.sizeDTO.sku }] }],
          },
          quantity: item.quantity,
        };
      }),
    };
    axios
      .post(
        //https://spring-madrasda-2f6mra4vwa-em.a.run.app
          //http://localhost:8080
        API_URL + "/api/payment/createOrder",
        transaction,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token_client"),
          },
        }
      )
      .then((response) => {
        console.log(response);
        setPaymentLink(response.data);
        setTimeout(() => {
          setIsNotRedirected(true);
        }, 2000);
        router.replace(response.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) {
          alert("No delivery available");
          setShippingCharges(-100);
        }
      });
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem("token_client");
    if (jwtToken && getRole(jwtToken) === "ROLE_ADMIN") router.push("/admin");
    if (jwtToken && getRole(jwtToken) === "ROLE_VENDOR") router.push("/vendor");
    if (jwtToken && isTokenValid(jwtToken)) setClient(true);
    else setClient(false);
  }, []);

  useEffect(() => {
    const pincodeRegex = /^[1-9][0-9]{5}$/;
    if (pincodeRegex.test(pincode.trim())) {
      axios
        .get(
          `https://api.opencagedata.com/geocode/v1/json?key=518b0ac375bb4bb8bb17019ae3e63818&q=${pincode}`
        )
        .then((response) => {
          const array = response.data.results;
          array.forEach((r) => {
            if (r.components.country === "India") {
              setCountry(r.components.country);
              setState(r.components.state);
              if (r.components.city) setCity(r.components.city);
            }
          });
        })
        .catch((err) => console.log(err));
      getShippingCharges(pincode);
    }
  }, [pincode, quantityState]);

  return (
    <>
      <Head>
        <meta
          name='description'
          content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
        <title>Madrasda | Checkout</title>
      </Head>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={spinner}>
        <CircularProgress color='inherit' />
      </Backdrop>
      <ClientLayout client={client}>
        <Dialog
          open={visible}
          onClose={closeModal}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'>
          <DialogTitle id='alert-dialog-title'>
            {"Area Not Serviceable!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              The Pincode you provided is not serviceable by us. Please choose
              another delivery address.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModal} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <main>
          <div className='min-w-screen min-h-screen bg-gray-50 py-5'>
            <div className='px-5'>
              <div className='mb-2'>
                <a
                  href='#'
                  className='focus:outline-none hover:underline text-gray text-sm'>
                  <i className='mdi mdi-arrow-left text-gray-400'></i>Back
                </a>
              </div>
              <div className='mb-2'>
                <h1 className='text-3xl text-primary md:ml-20 mt-10'>
                  ADD ADDRESS
                </h1>
              </div>
              <div className='mb-5 md:ml-20 text-gray-400'>
                <a
                  href='./'
                  className='focus:outline-none hover:underline text-gray-500'>
                  Home
                </a>{" "}
                / <span className='text-gray-600'>Checkout</span>
              </div>
            </div>
            <hr className='h-px md:ml-20 mr-12 ml-5 my-6 bg-black border-1 dark:bg-primary'></hr>
            <div className='w-full bg-white border-gray-200 px-5 py-10 text-gray-800 pr-12'>
              <div className='w-full'>
                <div className='-mx-3 md:ml-20 md:flex items-start'>
                  {/* CART DETAILS */}
                  <div className='px-3 md:w-5/12'>
                    {ctx.cart.cartItems &&
                      ctx.cart.cartItems.map((item) => (
                        <CartItem
                          key={uuidv4()}
                          id={item.id}
                          qty={item.quantity}
                          product={item.product}
                          callback={() => {
                            changeState(uuidv4());
                          }}
                        />
                      ))}
                    <hr className='h-px my-6 border-[#D9D9D9] border-1 '></hr>
                    <div className='mb-6 pb-6 text-lg border-b border-[#D9D9D9] text-black'>
                      <div className='w-full flex mb-3 items-center'>
                        <div className='flex-grow'>
                          <span className='text-black'>Subtotal</span>
                        </div>
                        <div className='pl-3'>
                          <span className='font-medium'>
                            ₹{Math.ceil(subTotal)}
                          </span>
                        </div>
                      </div>
                      <div className='w-full flex items-center'>
                        <div className='flex-grow'>
                          <span className='text-black'>Shipping</span>
                        </div>
                        <div className='pl-3'>
                          <span className='font-medium'>
                            {shippingCharges === -1 ||
                            shippingCharges === -100 ? (
                              <h4 className={"text-red"}>
                                {shippingCharges === -1 &&
                                  "Enter a valid Pincode"}
                                {shippingCharges === -100 &&
                                  "Too many items"}
                              </h4>
                            ) : shippingCharges === 0 ? (
                              "FREE"
                            ) : (
                              "₹" + shippingCharges
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='mb-6 pb-6 border-b border-gray md:border-none text-gray-800 text-xl'>
                      <div className='w-full flex items-center'>
                        <div className='flex-grow'>
                          <span className='text-gray-600'>Total</span>
                          <p className='text-sm text-black'>
                            Including all taxes
                          </p>
                        </div>
                        <div className='pl-3'>
                          <span className='font-medium text-black text-sm'>
                            INR
                          </span>{" "}
                          <span className='font-medium text-2xl'>
                            ₹
                            {Math.ceil(subTotal +
                              ((shippingCharges < 0) ? 0 : shippingCharges))}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ADDRESS FORM */}
                  <div className='px-3 md:w-7/12 lg:pr-10'>
                    <h2 className='ml-2 mb-6 title-font font-medium text-xl'>
                      Shipping Details
                    </h2>
                    <form onSubmit={handleSubmit}>
                      <div className='mb-4'>
                        <div className='mb-2 ml-2 mt-1 flex items-center space-x-2 w-full'>
                          <TextField
                            label={"Email"}
                            required={true}
                            variant='outlined'
                            type={"email"}
                            className={"w-2/3"}
                            placeholder='example@gmail.com'
                            inputRef={email}
                          />
                          <span>+91</span>
                          <TextField
                            label={"Phone"}
                            required={true}
                            error={error}
                            variant={"outlined"}
                            placeholder={"+91xxxxxxxxxx"}
                            className={"w-auto"}
                            helperText={error && "Invalid Phone"}
                            inputProps={{
                              type: "numeric",
                              maxLength: 10,
                              inputMode: "numeric",
                            }}
                            value={phone}
                            inputRef={phoneRef}
                            onChange={handlePhoneChange}
                          />
                        </div>
                      </div>
                      <div className='mb-4 ml-2 mt-1 flex flex-row space-x-2'>
                        <TextField
                          className='href w-full'
                          label='First Name'
                          required={true}
                          inputRef={firstName}
                        />
                        <TextField
                          className='href w-full'
                          label='Last Name'
                          inputRef={lastName}
                        />
                      </div>
                      <div className='mb-3 ml-2 mt-1 flex flex-row space-x-2'>
                        <TextField
                          className={`block w-full `}
                          label='Pincode'
                          error={error}
                          onChange={handleChange}
                          helperText={error && "Invalid Pincode"}
                          value={pincode}
                          inputProps={{ minLength: 6, maxLength: 6 }}
                          required
                        />
                        <TextField
                          className='block w-full '
                          label='State'
                          required={true}
                          onChange={(e) => setState(e.target.value)}
                          value={state}
                        />
                        <TextField
                          className='block w-full'
                          label='City'
                          required={true}
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                      <div>
                        <div className='mb-4 ml-2 mt-1 '>
                          <TextField
                            className='w-full'
                            label='Country'
                            required={true}
                            onChange={(e) => setCountry(e.target.value)}
                            value={country}
                          />
                        </div>

                        <div className='mb-4 ml-2 mt-1 '>
                          <TextField
                            className='href w-full '
                            label='Address Line 1'
                            required={true}
                            inputRef={addressLine1}
                          />
                        </div>
                        <div className='mb-6 ml-2 mt-1 '>
                          <TextField
                            className='href w-full '
                            label='Address Line 2 (Optional)'
                            inputRef={addressLine2}
                          />
                        </div>
                      </div>
                      <div className='flex justify-end'>
                          {/* <Button 
                            css={{ fontFamily: "$algeria" }}
                            style={{
                              cursor: "pointer",
                              background:
                                "linear-gradient(45deg, #ffa000 30%, #ffc107 90%)",
                              color: "white",
                            }}
                            variant={"contained"}
                            disabled={!validPhone || !validPincode}
                            type={"submit"}
                            className={`font-bold text-white py-2 px-4 mr-2 mb-2`}>
                            Proceed to Payment
                          </Button> */}
                        <a /*{className='bg-primary text-white mx-auto w-full ' type='submit'}*/
                          href="#"
                          style={{ background: "linear-gradient(45deg, #ffa000 30%, #ffc107 90%)"}}
                          onClick={handleSubmit}
                          className={`font-semibold rounded-[5px] text-white py-2 px-4 mr-2 mb-2 cursor-pointer font-algeria uppercase`}>
                          Proceed to Payment
                        </a>
                        {
                          isNotRedirected && <a href={paymentLink}>Click here if you are not redirected to payment page</a>
                        }
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </ClientLayout>
    </>
  );
}
