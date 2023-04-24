import React from 'react'
import ClientLayout from '@/components/layout-client'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from "next/router";
import { useEffect,useState } from 'react';
import { isTokenValid, getRole } from '@/utils/JWTVerifier';
import Image from "next/image";

export default function contact() {
  const router = useRouter();
  let isReady = router.isReady;
  const [details, setDetails] = useState(null);
  const [designs, setDesigns] = useState(null);
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
    setLoading(false);
      }, 1000);
  }, []);

  useEffect(() => {
    const jwtToken = localStorage.getItem('token');
    if(jwtToken && getRole(jwtToken) === "ROLE_ADMIN")
        router.push("/admin");
    if(jwtToken && getRole(jwtToken) === "ROLE_VENDOR")
        router.push("/vendor");
    if(jwtToken && isTokenValid(jwtToken))
        setClient(true);
    else
        setClient(false);
  }, [])

  if(loading && isReady)
  return (<div className='z-50 h-screen w-screen overflow-hidden'>
  <Image src="/loader.gif" width={1920} height={1080} className="object-cover object-center w-full h-full"/>
  </div>);
  return (
    <>
        <Head>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/100px logo.png" />
            <title>Contact Us</title>
        </Head>
        <div className="bg-[url(https://cdn.discordapp.com/attachments/981618787491127306/1088401159821213717/bg.png)]">
        <ClientLayout client={client}>
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We will get back to you by 48 hrs. Thank You</p>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                      <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                      <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                      <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <Link href="/">
                    <button className="flex mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none rounded text-lg">Submit</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </section>
        </ClientLayout>
        </div>
    </>
  )
}
