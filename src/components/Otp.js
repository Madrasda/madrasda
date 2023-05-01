import React from "react";
import {Button} from "@mui/material";

const Otp = (props) => {
    return (<>
        <h1 className='text-2xl text-white font-medium mt-2 mb-12 text-center'>
            Please enter your OTP
        </h1>
        <div>
            <input
                type='numeric'
                className={'w-full p-2 text-primary rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'}
                id='otp'
                placeholder='Enter OTP'
                ref={props.otpRef}
                required={true}
            />
        </div>
        <div className='flex justify-center items-center mt-4'>
            <Button
                variant={"contained"}
                className={"w-full hover:bg-accent bg-primary text-white"}
                type={"submit"}
                onClick={props.onSubmitOtpHandler}
            >
                Submit
            </Button>

        </div>
    </>);
}
export default Otp;
