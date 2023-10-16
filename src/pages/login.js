import Head from "next/head";
import { forwardRef, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { getRole, isTokenValid } from "@/utils/JWTVerifier";
import Image from "next/image";
import Otp from "@/components/Otp";
import Login from "@/components/Login";
import { useRouter } from "next/router";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { UserContext } from "../../context/context";

const Alert = forwardRef(function Alert(props, ref) {
  //snackbar alert
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});
export default function LoginForm() {
  const router = useRouter();
  let isReady = router.isReady;
  const [details, setDetails] = useState(null);
  const [designs, setDesigns] = useState(null);
  const [loading, setLoading] = useState(false);
  const [spinner, setSpinnerState] = useState(false); //spinner
  const phoneRef = useRef();
  const ctx = useContext(UserContext);
  const [showOtp, setShowOtp] = useState(false);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const submitPhoneHandler = () => {
    const phone = phoneRef.current.value;
    if (/^[0-9]{10}$/.test(phone)) {
      axios
        .post(
          "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/auth/loginClient?phone=" +
            phone
        )
        .then((response) => {
          setShowOtp(true);
          setPhone(phone);
        })
        .then(() => setSpinnerState(false))
        .catch((err) => {
          setOpen(true); //snackbar
          setMessage(err.data); //snackbar
          setSeverity("error"); //snackbar
          console.log(err);
        });

      setSpinnerState(true);
    } else {
      setOpen(true);
      setMessage("Invalid Phone Number");
      setSeverity("error");
    }
  };
  const onSubmitOtpHandler = (event) => {
    const otp = event;
    if (otp.length === 6) {
      setSpinnerState(true);
      axios
        .post(
          "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/auth/verifyOtp?" +
            "phone=" +
            phone +
            "&otp=" +
            otp
        )
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("token_client", response.data.token);
            ctx.setIsLoggedIn(false);
          }
        })
        .then(() => {
          router.back();
        })
        .catch((err) => {
          setOpen(true);
          setMessage("Invalid OTP");
          setSeverity("error");
          setSpinnerState(false);
        });
    } else {
      setOpen(true);
      setMessage("Invalid OTP");
      setSeverity("error");
    }
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading && isReady)
    return (
      <div className='z-50 h-screen w-screen overflow-hidden'>
        <Image
          src='/loader.gif'
          alt='Loading...'
          width={1920}
          height={1080}
          className='object-cover object-center w-full h-full'
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
        <title>Madrasda | Login</title>
      </Head>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={spinner}>
        <CircularProgress color='inherit' />
      </Backdrop>
      <Snackbar
        className={"mt-14"}
        open={open}
        autoHideDuration={1400}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
      <div className='bg-center bg-no-repeat bg-cover flex bg-[url(/socialmedia.webp)] w-screen h-screen'>
        <div className='w-full bg-cover bg-center flex-center flex-row bg-transparent m-auto backdrop-blur-md max-w-md bg-black/90 rounded-3xl drop-shadow-2xl py-8 px-4 md:px-16'>
          <div className='flex flex-wrap justify-center'>
            <div className='w-24'>
              <Image src='/logo.png' alt='LOGO' width={300} height={300} />
            </div>
          </div>

          {showOtp && <Otp onSubmitOtpHandler={onSubmitOtpHandler} />}
          {!showOtp && (
            <Login
              phoneRef={phoneRef}
              submitPhoneHandler={submitPhoneHandler}
            />
          )}
          <br />
        </div>
      </div>
    </>
  );
}
