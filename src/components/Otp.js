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
        <div className='w-full'>
        <TextField
						variant={'filled'}
						type='numeric'
						color='warning'
						className={
							"w-full text-primary rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
						}
						id='otp'
						placeholder='Enter OTP'
						onChange={(e) => setOtp(e.target.value)}
						required={true}
					/>
        </div>
        <div className='flex justify-center items-center mt-4'>
          <Button
            variant={"contained"}
            className={"w-full "}
            type={"submit"}>
            Submit
          </Button>
        </div>
      </ThemeProvider>
    </form>
  );
};
export default Otp;
