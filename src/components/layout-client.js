import NavClient from "./nav-client"
import Footer from "./footer"
import {forwardRef, Suspense, useContext, useState} from "react"
import {Snackbar} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import {getRole} from "@/utils/JWTVerifier";
import {UserContext} from "../../context/context";
const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function ClientLayout({ children, message, severity, state, setState }) {

    const handleClose = (event, reason) => {
      console.log(reason);
      if (reason === "clickaway") {
        return;
      }
      setState(false);
    };
    return (
      <>
        <NavClient />
        <main className='bg-home bg-opacity-90 scroll-smooth'>{children}</main>
        <Footer />
        <Snackbar
          className={"mt-14"}
          open={state}
          autoHideDuration={1400}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert onClose={handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
      </>
    );
}
