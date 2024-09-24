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
export default function RegisterForm() {
  const router = useRouter();
  let isReady = router.isReady;
  const [name, setName] = useState(null);
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

  const registerCustomer = (e) => {
    e.preventDefault();
    if (!userName || !password || !name) {
      setMessage("Please fill all the details");
      setSeverity("warning");
      setOpen(true);
      return;
    }
    axios
      .post(
        API_URL + "/api/auth/registerClient",
        {
          name: name,
          email: userName,
          password: password,
        }
      )
      .then(() => {
        setMessage("Succesfully Registered");
        setSeverity("success");
        setOpen(true);
        setName("");
      })
      .catch((err) => {
        setMessage("Account already exists");
        setSeverity("error");
        setOpen(true);
        console.log(err);
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
        <title>Madrasda | Register</title>
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
            Create an account
          </h1>
          <form onSubmit={registerCustomer} className='flex flex-col gap-4'>
            <input
              className='px-4 py-2 rounded-md border border-primary focus:outline-none'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Name'
            />
            <input
              className='px-4 py-2 rounded-md border border-primary focus:outline-none'
              type='email'
              onChange={(e) => setUserName(e.target.value)}
              placeholder='Email'
            />

            <input
              className='px-3 py-2 rounded-md border border-primary focus:outline-none'
              type='password'
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
            <Link
              className='font-quest text-gray hover:text-shadowGrey text-xs text-right w-full'
              href='/login'>
              Already have account? Login here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
