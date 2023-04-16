import {useState} from "react";

const Otp = (props) => {
    return (
        <>
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
                <button type="submit" onClick={props.onSubmitOtpHandler}
                        className={`bg-[#A5153F] cursor-pointer py-2 px-5 text-l text-white rounded focus:outline-none `}>
                    Submit
                </button>
            </div>
        </>
    )
        ;
}
export default Otp;
