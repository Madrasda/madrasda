import NavVendor from "./nav-vendor"
import Footer from "./footer"
import {Snackbar} from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import {forwardRef, useState} from "react";

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function VendorLayout({ children, message, severity, state, setState }) {
    const [open, setOpen] = useState(state);

    const handleClose = (event, reason) => {
        console.log(reason);
        if (reason === 'clickaway') {
            return;
        }

        setState(false);
    };
    return (
        <>
            <NavVendor/>
            <main>{children}</main>
            <Snackbar open={state} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>

        </>
    );
}
