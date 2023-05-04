import React, { useState } from "react";
import { Button, Input } from "@mui/material";

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
      <div>
        <Input
          type='numeric'
          color='warning'
          className={
            "w-full p-2 text-primary rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
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
          className={"w-full hover:bg-accent bg-primary text-white"}
          type={"submit"}
          onClick={() => {
            if (otp.length === 6) {
              props.onSubmitOtpHandler(otp);
            }
          }}>
          Submit
        </Button>
      </div>
    </form>
  );
};
export default Otp;
