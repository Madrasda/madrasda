import NavClient from "./nav-client"
import Footer from "./footer"
import {forwardRef, Suspense, useState} from "react"
import {Snackbar} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function ClientLayout({ children, client, message, severity, state, setState }) {

    const handleClose = (event, reason) => {
        console.log(reason);
        if (reason === 'clickaway') {
            return;
        }

        setState(false);
    };
  return (
    <>
      <NavClient client={client} />
      <main>{children}</main>
      <Footer />
        <Snackbar className={"mt-14"} open={state} autoHideDuration={1400}
                  onClose={handleClose} anchorOrigin={{vertical: "top", horizontal: "right"}}>
            <Alert onClose={handleClose} severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    </>
  )
}
