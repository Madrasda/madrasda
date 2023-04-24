import React from "react";
import {Button} from "@mui/material";

const Otp = (props) => {
    return (<>
        <h1 className='text-2xl text-white font-medium mt-2 mb-12 text-center'>
            Please enter your OTP
        </h1>
        <div>
            <input
                type='text'
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
                sx={{
                    backgroundColor: '#ab1641 !important', // sets the background color to primary
                    color: 'white', // sets the text color to white
                    '&:hover': {
                        backgroundColor: '#c51a4c !important', // sets the background color on hover to accent
                    },
                }}
                className={"w-full"}
                type={"submit"}
                onClick={props.onSubmitOtpHandler}
            >
                Submit
            </Button>

        </div>
    </>);
}
export default Otp;
