import Link from "next/link";
import {Button, TextField} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from "react";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
const Login = (props) => {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.submitPhoneHandler();
        }}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <h1 className='text-2xl text-white font-medium mt-2 mb-12 text-center'>
            Login
          </h1>
          <div>
            <TextField
              variant='filled'
              label={"Phone Number"}
              color='warning'
              InputProps={{ className: "text-primary" }}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              id='number'
              inputRef={props.phoneRef}
              className={"w-full"}
              required={true}
            />
          </div>

          <div className='flex justify-center items-center mt-6 w-full'>
            <Button
              variant={"contained"}
              className={"w-full hover:bg-accent bg-primary text-white"}
              type={"submit"}>
              Login
            </Button>
          </div>

          <div className='w-100 underline text-white text-sm text-center mt-6'>
            <Link href='/vendor'>{`Are you a Vendor?`}</Link>
          </div>
        </ThemeProvider>
      </form>
    );

}
export default Login
