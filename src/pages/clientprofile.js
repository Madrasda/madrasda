import ClientLayout from "@/components/layout-client";
import OrderDetailsModal from "@/components/orderdetails-modal";
import Head from "next/head";
import Image from "next/image";
import { forwardRef, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isTokenValid, getRole, getPhone } from "@/utils/JWTVerifier";
import { UserContext } from "context/context";
import axios from "axios";
import { uuidv4 } from "@firebase/util";
import { Button, Paper, Snackbar } from "@mui/material";
import { InsertEmoticon } from "@mui/icons-material";
import CancelOrderModal from "@/components/cancel-order";
import MuiAlert from "@mui/material/Alert";
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function ClientProfile() {
  const router = useRouter();
  let isReady = router.isReady;
  const ctx = useContext(UserContext);
  const [phone, setPhone] = useState(0);
  const [details, setDetails] = useState([]);
  const [designs, setDesigns] = useState(null);
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [state, setState] = useState(false);
  useEffect(() => {
    const jwtToken = localStorage.getItem("token_client");
    if (jwtToken && isTokenValid(jwtToken)) {
      setClient(true);
      setPhone(getPhone(jwtToken));
      getOrderHistory();
    } else {
      setClient(false);
      router.push("/login");
    }
  }, []);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setState(false);
  };
  const getOrderHistory = async () => {
    const response = await axios.get(
      //   https://spring-madrasda-2f6mra4vwa-em.a.run.app
      "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/transaction/getAllOrdersById/",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_client"),
        },
      }
    );
    setDetails(response.data.reverse());
  };
  if (loading && isReady)
    return (
      <div className="z-50 h-screen w-screen overflow-hidden">
        <Image
          src="/loader.gif"
          width={1920}
          height={1080}
          className="object-cover object-center w-full h-full"
        />
      </div>
    );
  return (
    <>
      <Head>
        <meta
          name='description'
          content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
        <title>Madrasda | Profile</title>
      </Head>

      <ClientLayout client={client}>
        <Snackbar open={state} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
        <section className='body-font font-quest bg-off-white'>
          <div className='px-5 py-24 mx-auto'>
            <h1 className='text-2xl font-bold text-primary md:ml-16 md:text-3xl md:mt-4'>
              My Profile
            </h1>
            <div className='flex flex-col md:flex-row md:space-x-5 mt-4 md:ml-16'>
              <h2 className='md:ml-2 title-font font-medium text-lg md:text-xl'>
                Phone Number
              </h2>
              <input
                type='text'
                className='bg-tertiary text-black text-lg md:text-xl outline-none focus:ring-primary cursor-default'
                placeholder={phone}
                readOnly
              />
            </div>

            {details && (
              <h1 className='font-bold text-2xl mt-10 md:ml-16 text-primary'>
                Order History
              </h1>
            )}
            {details && details.length === 0 && (
              <h1 className='ml-16 text-gray text-xl'>No history of orders!</h1>
            )}
            {details &&
              details.map((order) => (
                <Paper
                  key={uuidv4()}
                  className='px-3 w-full items-center h-fit md:w-10/12 md:ml-16 mb-4 mt-8 relative'>
                  <div className='w-full flex flex-col md:flex-row items-center py-3'>
                    <div className='flex flex-wrap m-2 space-x-2 md:w-1/5 sm:w-full'>
                      {order.orderItems.slice(0, 2).map((item) => {
                        return (
                          <Image
                            key={uuidv4()}
                            src={item.product.colors[0].images[0]}
                            width={75}
                            height={75}
                            alt={"product image"}
                          />
                        );
                      })}
                    </div>
                    <div className='w-full p-3 pl-0 '>
                      {!order.cancelled && (
                        <h6 className='font-semibold text-3xl mt-2'>
                          <span
                            className={`${
                              order.status === "DELIVERED"
                                ? "text-[#3aca3a] font-black tracking-widest"
                                : "text-black font-light"
                            }`}>
                            {order.status === "NEW"
                              ? "ORDER IS COOKING!"
                              : order.status === "IN TRANSIT"
                              ? "SHIPPING IN PROGRESS"
                              : order.status}
                          </span>
                        </h6>
                      )}

                      <h6 className='font-semibold text-3xl mt-2'>
                        <span className='font-light text-red'>
                          {order.cancelled && "Order Cancelled!"}
                        </span>
                      </h6>
                    </div>
                    <div className='md:absolute items-center flex space-x-3  md:right-0 p-4'>
                      <CancelOrderModal
                        orderDate={order.orderDate}
                        transactionId={order.id}
                        cancelRequested={order.cancelRequested}
                        cancelled={order.cancelled}
                        setMessage={setMessage}
                        setSeverity={setSeverity}
                        setOpenSnackbar={setState}
                        setDetails={setDetails}
                      />
                      <OrderDetailsModal order={order} key={order.id} />
                    </div>
                  </div>
                </Paper>
              ))}
          </div>
        </section>
      </ClientLayout>
    </>
  );
}
