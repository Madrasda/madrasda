import VendorLayout from '@/components/layout-vendor'
import React from 'react'
import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link';
import axios from "axios";
import { useEffect,useState } from "react";
import { useRouter } from "next/router";
import { isTokenValid } from "@/utils/JWTVerifier";

export default function VendorProfile(props) {

  const [tokenExists, setTokenExists] = useState(false)
  const router = useRouter();
  let isReady = router.isReady;
  const { id } = router.query;
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
    setLoading(false);
      }, 1000);
  }, []);
  const getVendorDetails = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/vendor/" , { 
        headers : {
          Authorization : "Bearer " + localStorage.getItem('token')
        }
      }  
    );
    setDetails(response.data);
    console.log(response.data);
}

useEffect(() => {
  if(isReady)
      getVendorDetails();
}, [isReady]);

  useEffect(() => {
    const jwtToken = localStorage.getItem("token")
    if(jwtToken === undefined || !isTokenValid(jwtToken))
      router.push("/vendor");
    else
      setTokenExists(true);
  }, []);

  if(loading && isReady)
  return (<div className='z-50 h-screen w-screen overflow-hidden'>
  <Image src="/loader.gif" width={1920} height={1080} className="object-cover object-center w-full h-full"/>
  </div>);
  return (
    <>
     <Head>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.png" />
      <title>Madrasda | Vendor Profile</title>
    </Head>
    {!tokenExists && <h1> LOADING... </h1>}
    { tokenExists && details &&
      <VendorLayout>
    <section className="body-font font-algeria overflow-hidden md:ml-56 lg:ml-36">
      <div className="mt-20 md:px-5 md:my-10 mx-auto lg:ml-20 md:mt-10">
        <h1 className="text-3xl text-primary">PROFILE</h1>
        <div className="grid gap-6 mt-10 ml-2 mb-2 
                            md:grid-row
                            lg:mr-96">
                              <Image className="rounded-3xl" src={details.vendor.imgUrl} width={100} height={100} />
                <div>
                    <label for="first_name" className="block mb-2 text-lg font-medium text-black">Company Name :</label>
                    <h1 type="text" className="bg-black-50 border-b border-gray text-black text-sm block w-full p-2.5">{details.vendor.companyName}
                    </h1>
                </div>
                <div>
                    <label for="last_name" className="block mb-2 text-lg font-medium text-black">Copmany URL :</label>
                    <h1 type="text" className="bg-black-50 border-b  border-gray  text-black text-sm block w-full p-2.5">{details.vendor.companyUrl}
                    </h1>
                </div>
                <div>
                    <label for="company" className="block mb-2 text-lg font-medium text-black">Email :</label>
                    <h1 type="text" className="bg-black-50 border-b  border-gray  text-black text-sm block w-full p-2.5">{details.vendor.email}
                    </h1>
                </div>  
                <div>
                    <label for="phone" className="block mb-2 text-lg font-medium text-black ">Phone Number :</label>
                    <h1 type="text" className="bg-black-50 border-b  border-gray  text-black text-sm block w-full p-2.5">{details.vendor.phoneNumber || "+91 xxxxxxxxxx"}
                    </h1>
                </div>
                <div className=" mt-14 flex justify-center ">
                <Link href="/vendor/changepassword">
                  <button type="button" class="text-white bg-black font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Change Password</button>
                </Link>
                <Link href ="/vendor">
                  <button type="button" class="text-white bg-primary font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Logout</button>
                </Link>
                </div>
            </div>
      </div>
    </section>
    </VendorLayout>
  }
    </>
  )
}
