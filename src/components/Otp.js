import React, {useState} from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Button, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const Otp = (props) => {
  const [otp, setOtp] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmitOtpHandler(otp);
      }}>
      <h1 className='text-2xl text-white font-medium mt-2 mb-12 text-center'>
        Please enter your OTP
      </h1>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className='w-full hidden md:block'>
          <MuiOtpInput
            display={"flex"}
            gap={"5px"}
            length={6}
            value={otp}
            className={
              "w-full text-primary rounded-md outline-none text-xs md:text-sm transition duration-150 ease-in-out mb-4"
            }
            onChange={(value) => setOtp(value)}
          />
        </div>
        <div className='w-full block md:hidden'>

        </div>
        <div className='flex justify-center items-center mt-4'>
          <Button
            variant={"contained"}
            className={"w-full hover:bg-accent bg-primary text-white"}
            type={"submit"}>
            Submit
          </Button>
        </div>
      </ThemeProvider>
    </form>
  );
};
export default Otp;
