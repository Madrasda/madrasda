import Head from 'next/head'
import {Inter} from '@next/font/google'
import {useRef, useState} from "react";
import axios from "axios";
import Image from "next/image";
import Otp from "@/components/Otp";
import Login from "@/components/Login";
import {useRouter} from "next/router";

// import './ToggleSwitch.css'

const inter = Inter({subsets: ['latin']})


export default function LoginForm() {
    const phoneRef = useRef();
    const otpRef = useRef();
    const router = useRouter();
    const [showOtp, setShowOtp] = useState(false);
    const [invalidMessage, setInvalidMessage] = useState("");
    const [phone, setPhone] = useState("");
    const submitPhoneHandler = () => {
        const phone = phoneRef.current.value;
        if (/^[0-9]{10}$/.test(phone)) {
            axios.post("http://localhost:8080/api/auth/loginClient?phone=" + phone)
                .then(response => {
                    setShowOtp(true);
                    setInvalidMessage("");
                    setPhone(phone);
                })
                .catch(err => console.log(err));
        } else {
            setInvalidMessage("Invalid Phone Number")
        }
    }
    const onSubmitOtpHandler = (event) => {

        const otp = otpRef.current.value;
        if (otp.length === 6) {
            axios.post("http://localhost:8080/api/auth/verifyOtp?" + "phone=" + phone + "&otp=" + otp)
                .then(response => {
                    console.log(response);
                    if(response.status === 200) {
                        localStorage.setItem("token", response.data.token);
                        router.push("/");
                    }
                    else {
                        setInvalidMessage("Invalid OTP")
                    }
                })
                .catch(err => console.log(err));
        }
        else{
            setInvalidMessage("Invalid OTP")
        }
    }

    return (
        <>
            <Head>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/logo.png"/>
                <title>Madrasda | Login</title>
            </Head>
            <div
                className="bg-center bg-no-repeat bg-cover flex bg-[url(https://cdn.discordapp.com/attachments/812329575953858620/1078262102269104199/Login.png)] w-screen h-screen">
                <div
                    className='w-full bg-cover bg-center flex-center flex-row bg-transparent max-w-md m-auto backdrop-blur-md bg-black/60 rounded-3xl drop-shadow-2xl py-8 px-16'>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-24">
                            <Image src="/logo.png" alt="LOGO" width={300} height={300}/>
                        </div>
                    </div>
                    <div className='flex flex-wrap mt-2 justify-center'>
                    </div>
                    {showOtp && <Otp otpRef={otpRef} onSubmitOtpHandler={onSubmitOtpHandler}/>}
                    {!showOtp && <Login phoneRef={phoneRef} submitPhoneHandler={submitPhoneHandler}/>}
                    <h3 className='text-xl text-primary font-medium mt-2 mb-12 text-center'>
                        {invalidMessage}
                    </h3>
                    <br/>

                </div>
            </div>
        </>
    );
}
