import NavClient from "./nav-client";
import Footer from "./footer";
import { forwardRef, Suspense, useContext, useState } from "react";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { getRole } from "@/utils/JWTVerifier";
import { UserContext } from "../../context/context";
import Head from "next/head";
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function ClientLayout({
  children,
  message,
  severity,
  state,
  setState,
}) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState(false);
  };
  return (
    <>
    <Head>
        <meta name="description" content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
        <title>Madrasda | Official merchandise | Indian content creators</title>
      </Head>
      <NavClient />
      <main className="bg-tertiary bg-opacity-90 scroll-smooth">
        {children}
      </main>
      {/* <Footer /> */}
      <Snackbar
        className={"mt-14"}
        open={state}
        autoHideDuration={1400}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
