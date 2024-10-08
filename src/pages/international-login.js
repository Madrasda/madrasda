import Head from "next/head";
import { forwardRef, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { UserContext } from "../../context/context";
import { Button } from "@nextui-org/react";
import { isTokenValid } from "@/utils/JWTVerifier";
import Link from "next/link";
import { API_URL } from "@/utils/constants";

const Alert = forwardRef(function Alert(props, ref) {
  //snackbar alert
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});
export default function LoginForm() {
  const router = useRouter();
  let isReady = router.isReady;
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [spinner, setSpinnerState] = useState(false); //spinner
  const ctx = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const loginCustomer = (e) => {
    e.preventDefault();
    if (!userName || !password) return;
    axios
      .post(
        API_URL + "/api/auth/authenticateClient",
        {
          email: userName,
          password: password,
        }
      )
      .then((res) => {
        localStorage.setItem("token_client", res.data.token);
        router.back();
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        setSeverity("error");
        setOpen(true);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token_client");
    if (token && isTokenValid(token)) router.back();
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
          <h1 className='text-white text-center font-quest text-2xl my-4'>
            Login to your account
          </h1>
          <form onSubmit={loginCustomer} className='flex flex-col gap-4'>
            <input
              className='px-4 py-2 rounded-md border border-primary focus:outline-none'
              type='text'
              required
              onChange={(e) => setUserName(e.target.value)}
              placeholder='Phone or Email'
            />
            <input
              className='px-3 py-2 rounded-md border border-primary focus:outline-none'
              type='password'
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
            />
            <Button
              type='submit'
              variant='contained'
              style={{ backgroundColor: "#FFA000", borderRadius: "0.375rem" }}>
              Login
            </Button>
          </form>
          <br />
          <div className='text-gray text-xs flex flex-col space-y-6'>
            <div className='flex flex-col'>
              <Link
                className='font-quest text-gray hover:text-shadowGrey text-xs text-right w-full'
                href='/international-register'>
                New here? Register here
              </Link>
              <Link
                className='font-quest text-gray hover:text-shadowGrey text-xs text-right w-full '
                href='/login'>
                Are you a local Customer , Login Here
              </Link>
            </div>
            <p>
              ⓘ We have removed login through OTP, now customers will have to
              enter their password. Already registered customers can login with
              the default password as
              <span className='italic bold text-sm'>"password"</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
