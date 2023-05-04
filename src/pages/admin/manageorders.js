import Head from "next/head";
import SearchVendor from "@/components/search-vendor";
import Payments from "@/components/payments";
import AdminLayout from "@/components/layout-admin";
import axios from "axios";
import {useEffect, useState} from "react";
import { useRouter } from "next/router";
import { isTokenValid, getRole } from "@/utils/JWTVerifier";

export default function CustomerDetails() {
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();
  const verifyToken = async () => {
    const url = new URLSearchParams({
      token: localStorage.getItem("token"),
    });
    axios
      .get("http://localhost:8080/api/auth/?" + url)
      .then((response) => {
        console.log("refreshed");
      })
      .catch((err) => {
        localStorage.removeItem("token");
        router.push("/admin");
      });
  };
  useEffect(() => {
    const jwtToken = localStorage.getItem("token");

    if (jwtToken === undefined || !isTokenValid(jwtToken) || getRole(jwtToken) !== 'ROLE_ADMIN')
      router.push("/admin");
    else{
      setIsAdmin(true)
    }
  }, []);

  return (
    <>
      <Head>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
        <title>Madrasda | Customer Details</title>
      </Head>
      {isAdmin && <AdminLayout>
        <main className='body-font md:ml-32 overflow-hidden font-quest'>
          <div className='px-5 my-10 mx-auto'>
            <h1 className='text-3xl text-primary md:ml-20 md:mt-10'>
              CUSTOMER DETAILS
            </h1>
            <div className='mt-4 md:ml-20'>
              <Payments />
            </div>
          </div>
        </main>
      </AdminLayout>}
    </>
  );
}
