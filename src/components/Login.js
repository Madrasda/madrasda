import Link from "next/link";
import {TextField} from "@mui/material";
import React from "react";

const Login = (props) => {
    return <>
        <h1 className='text-2xl text-white font-medium mt-2 mb-12 text-center'>
            LOGIN
        </h1>
        <div>
            <TextField
                variant="outlined"
                label={"Phone Number"}
                inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}} id="number"
                inputRef={props.phoneRef}
                className={'w-full'}
                required={true}
                sx={{
                    color: "white",
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white',
                            color: 'white'
                        },
                        '&:hover fieldset': {
                            borderColor: 'gray',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white',
                        },
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'red',
                    },

                }}
            />
        </div>

        <div className="flex justify-center items-center mt-4">
            <button
                type='submit'
                className={`text-white shadow-lg shadow-shadowGrey bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded mr-2 mb-2`}
                onClick={props.submitPhoneHandler}>
                Login
            </button>


        </div>

        <div className="w-100 underline text-white text-sm text-center mt-3">
            <Link href="/vendor">
                {`You're a Vendor?`}
            </Link>
        </div>
    </>;

}
export default Login
