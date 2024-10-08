import VendorLayout from '@/components/layout-vendor'
import React from 'react'
import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link';
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import {getRole, isTokenValid} from "@/utils/JWTVerifier"
import { Password } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { API_URL } from '@/utils/constants';


export default function VendorProfile() {
  const [tokenExists, setTokenExists] = useState(false)
  const router = useRouter();
  let isReady = router.isReady;
  const [loading, setLoading] = useState(false);
  const newPasswordRef = useRef();
	const confirmPasswordRef = useRef();
	const changePassword = (e) => {
		if (newPasswordRef.current.value === confirmPasswordRef.current.value) {
			axios.put(API_URL + "/api/vendor/updatePassword?" + confirmPasswordRef.current.value , {}, {
				headers: {
					"Authorization": "Bearer " + localStorage.getItem("token_vendor")
				},
        params: {
          newPassword: newPasswordRef.current.value,
        }
			}).then(response => {
				localStorage.removeItem("token_vendor");
				router.push("/vendor")
			});
		}
	}
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
    setLoading(false);
      }, 1000);
  }, []);
  useEffect(() => {
    const jwtToken = localStorage.getItem("token_vendor")
    if (jwtToken === undefined || !isTokenValid(jwtToken) || getRole(jwtToken) !== 'ROLE_VENDOR')
      router.push("/vendor");
    else
      setTokenExists(true);
  }, []);

  if(loading)
  return (<div className='z-50 h-screen w-screen overflow-hidden'>
  <Image src="/loader.gif" width={1920} height={1080} className="object-cover object-center w-full h-full"/>
  </div>);
  return (
    <>
     <Head>
     <meta name="description" content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.png" />
      <title>Madrasda | Change Password</title>
    </Head>

    {tokenExists && <VendorLayout>
    <section className="body-font font-algeria overflow-hidden md:ml-56 lg:ml-32">
      <div className="mt-20 md:px-5 md:my-10 mx-auto lg:ml-20 md:mt-10">
        <h1 className="text-3xl text-primary">CHANGE PASSWORD</h1>
        <div className="grid gap-6 mt-10 ml-2 mb-2 
                            md:grid-row
                            lg:mr-96">
                
                <TextField label={'New Password'} inputRef={newPasswordRef} className='rounded p-3 mb-3'/>
					      <TextField label={'Re-type New Password'} inputRef={confirmPasswordRef} className='rounded p-3'/>
                
                <div className=" mt-14 flex justify-center ">
  
                  <Button css={{ fontFamily: "$algeria" }}
                          style={{
              background:"linear-gradient(45deg, #ffa000 30%, #ffc107 90%)",
              color:"white",
            }}
                          type={'submit'} className={"text-white bg-primary font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2"}
                          onClick={changePassword}>Change Password</Button>
                
                </div>
            </div>
      </div>
    </section>
    </VendorLayout> }
    </>
  )
}
