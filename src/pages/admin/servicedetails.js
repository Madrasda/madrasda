import Head from "next/head";
import SearchVendor from "@/components/search-vendor";
import Payments from "@/components/payments";
import AdminLayout from "@/components/layout-admin";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { isTokenValid, getRole } from "@/utils/JWTVerifier";
import { useRouter } from "next/router";

export default function CustomerDetails () {

    const router = useRouter();
    const [tokenExists, setTokenExists] = useState(false);
    let isReady = router.isReady;

    useEffect(() => {
        const jwtToken = localStorage.getItem("token_admin")
        if(jwtToken === undefined || !isTokenValid(jwtToken) || getRole(jwtToken) !== 'ROLE_ADMIN')
          router.push("/admin");
        else
          setTokenExists(true);
    }, []);
    return (
        <>
            <Head>
            <meta name="description" content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo.png" />
            <title>Madrasda | Service Details</title>
            </Head>

            {tokenExists && <AdminLayout>
                <main className="overflow-y-scroll font-quest
                                md:ml-32">
                <div className="px-5 my-10 mx-auto">
                <h1 className="text-3xl text-primary md:ml-20 md:mt-10 font-quest">SERVICE DETAILS</h1>
                <div className='flex mt-4 md:ml-20 lg:mr-44'>
                    <div className="container mt-8 bg-[#ebe8e8] rounded-lg">
                        <div className=" ml-8 mb-2 mr-20 mt-4 ">
                            <h1 className="text-xl md:text-2xl text-[#1b1b60] mb-6">Ship Rocket</h1>
                            <div className="flex mb-2">
                                <h2 className="text-lg w-2/3 md:w-96 text-[#b56016] flex items-center">Services</h2>
                                <input type="text" className="bg-[#ebe8e8] text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="Shipping, Invoices" disabled readonly/>
                            </div>
                            <div className="flex mb-2">
                                <h2 for="last_name" className="w-2/3 md:w-96 text-lg text-[#b56016] flex items-center">Payment</h2>
                                <input type="text" className="bg-[#ebe8e8]  text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="Rs.20/500gms" disabled readonly/>
                            </div>
                            <div className="flex mb-2">
                                <h2 for="last_name" className="w-2/3 md:w-96 text-lg text-[#b56016] flex items-center">Credentials</h2>
                                <input type="text" className="bg-[#ebe8e8]  text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="sales.iclothing@gmail.com" disabled readonly/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex mt-4 md:ml-20 lg:mr-44'>
                    <div className="container mt-8 bg-[#ebe8e8] rounded-lg">
                        <div className=" ml-8 mb-2 mr-20 mt-4 ">
                            <h1 className="text-xl md:text-2xl text-[#1b1b60] mb-6">Razor Pay</h1>
                            <div className="flex mb-2">
                                <h2 className="text-lg w-2/3 md:w-96 text-[#b56016] flex items-center">Services</h2>
                                <input type="text" className="bg-[#ebe8e8] text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="Payment" disabled readonly/>
                            </div>
                            <div className="flex mb-2">
                                <h2 for="last_name" className="w-2/3 md:w-96 text-lg text-[#b56016] flex items-center">Credentials</h2>
                                <input type="text" className="bg-[#ebe8e8]  text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="sales.iclothing@gmail.com" disabled readonly/>
                            </div>
                            <div className="flex mb-2">
                                <h2 for="last_name" className="w-2/3 md:w-96 text-lg text-[#b56016] flex items-center">Key ID</h2>
                                <input type="text" className="bg-[#ebe8e8]  text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="rzp_test_ZGOoepGBbA5Y9P" disabled readonly/>
                            </div>
                            <div className="flex mb-2">
                                <h2 for="last_name" className="w-2/3 md:w-96 text-lg text-[#b56016] flex items-center">Secret Key</h2>
                                <input type="text" className="bg-[#ebe8e8]  text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="RzE1JEOSepBhh8g5LHXDqzsF" disabled readonly/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex mt-4 md:ml-20 lg:mr-44'>
                    <div className="container mt-8 bg-[#ebe8e8] rounded-lg">
                        <div className=" ml-8 mb-2 mr-20 mt-4 ">
                            <h1 className="text-xl md:text-2xl text-[#1b1b60] mb-6">Google Cloud Platform</h1>
                            <div className="flex mb-2">
                                <h2 className="text-lg w-2/3 md:w-96 text-[#b56016] flex items-center">Services</h2>
                                <input type="text" className="bg-[#ebe8e8] text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="Deployment" disabled readonly/>
                            </div>
                            <div className="flex mb-2">
                                <h2 for="last_name" className="w-2/3 md:w-96 text-lg text-[#b56016] flex items-center">Payment</h2>
                                <input type="text" className="bg-[#ebe8e8]  text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="" disabled readonly/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex mt-4 md:ml-20 lg:mr-44'>
                    <div className="container mt-8 bg-[#ebe8e8] rounded-lg">
                        <div className=" ml-8 mb-2 mr-20 mt-4 ">
                            <h1 className="text-xl md:text-2xl text-[#1b1b60] mb-6">Twillio</h1>
                            <div className="flex mb-2">
                                <h2 className="text-lg w-2/3 md:w-96 text-[#b56016] flex items-center">Services</h2>
                                <input type="text" className="bg-[#ebe8e8] text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="OTP SMS verification" disabled readonly/>
                            </div>
                            <div className="flex mb-2">
                                <h2 for="last_name" className="w-2/3 md:w-96 text-lg text-[#b56016] flex items-center">Service SID</h2>
                                <input type="text" className="bg-[#ebe8e8]  text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="" disabled readonly/>
                            </div>
                            <div className="flex mb-2">
                                <h2 for="last_name" className="w-2/3 md:w-96 text-lg text-[#b56016] flex items-center">Account SID</h2>
                                <input type="text" className="bg-[#ebe8e8]  text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="" disabled readonly/>
                            </div>
                            <div className="flex mb-2">
                                <h2 for="last_name" className="w-2/3 md:w-96 text-lg text-[#b56016] flex items-center">Auth Token</h2>
                                <input type="text" className="bg-[#ebe8e8]  text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="" disabled readonly/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex mt-4 md:ml-20 lg:mr-44'>
                    <div className="container mt-8 bg-[#ebe8e8] rounded-lg">
                        <div className=" ml-8 mb-2 mr-20 mt-4 ">
                            <h1 className="text-xl md:text-2xl text-[#1b1b60] mb-6">Firebase</h1>
                            <div className="flex mb-2">
                                <h2 className="text-lg w-2/3 md:w-96 text-[#b56016] flex items-center">Services</h2>
                                <input type="text" className="bg-[#ebe8e8] text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="Store Images" disabled readonly/>
                            </div>
                            <div className="flex mb-2">
                                <h2 for="last_name" className="w-2/3 md:w-96 text-lg text-[#b56016] flex items-center">API Key</h2>
                                <input type="text" className="bg-[#ebe8e8]  text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="" disabled readonly/>
                            </div>
                            <div className="flex mb-2">
                                <h2 for="last_name" className="w-2/3 md:w-96 text-lg text-[#b56016] flex items-center">Auth Domain</h2>
                                <input type="text" className="bg-[#ebe8e8]  text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="" disabled readonly/>
                            </div>
                            <div className="flex mb-2">
                                <h2 for="last_name" className="w-2/3 md:w-96 text-lg text-[#b56016] flex items-center">Project IS</h2>
                                <input type="text" className="bg-[#ebe8e8]  text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="" disabled readonly/>
                            </div>
                            <div className="flex mb-2">
                                <h2 for="last_name" className="w-2/3 md:w-96 text-lg text-[#b56016] flex items-center">Storage Bucket</h2>
                                <input type="text" className="bg-[#ebe8e8]  text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="" disabled readonly/>
                            </div>
                            <div className="flex mb-2">
                                <h2 for="last_name" className="w-2/3 md:w-96 text-lg text-[#b56016] flex items-center">Message Sender ID</h2>
                                <input type="text" className="bg-[#ebe8e8]  text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="" disabled readonly/>
                            </div>
                            <div className="flex mb-2">
                                <h2 for="last_name" className="w-2/3 md:w-96 text-lg text-[#b56016] flex items-center">APP ID</h2>
                                <input type="text" className="bg-[#ebe8e8]  text-[#1b1b60] text-lg w-5/6 md:w-96 p-2.5" value="" disabled readonly/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </main>
            </AdminLayout>}
        </>
    )
}
