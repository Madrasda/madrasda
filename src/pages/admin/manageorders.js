import Head from "next/head";
import Payments from "@/components/payments";
import AdminLayout from "@/components/layout-admin";
import {useEffect, useState} from "react";
import { useRouter } from "next/router";
import { isTokenValid, getRole } from "@/utils/JWTVerifier";

import { set_cptable } from "xlsx";
import * as cptable from 'xlsx/dist/cpexcel.full.mjs';
set_cptable(cptable);
import XLSX from "xlsx";
import ManageOrderTable from "@/components/manageordertable";

export default function CustomerDetails() {
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const jwtToken = localStorage.getItem("token_admin");

    if (jwtToken === undefined || !isTokenValid(jwtToken)) {
      router.push("/admin");
    } else {
      setIsAdmin(true);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name='description'
          content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
        <title>Madrasda | Recent Orders</title>
      </Head>
      {isAdmin && (
        <AdminLayout>
          <main className='body-font md:ml-32 overflow-hidden font-quest'>
            <div className='pl-24 my-10 mx-auto relative'>
              
              <div className='mt-4 flex flex-col gap-8'>
                <Payments />
                {/* <ManageOrderTable /> */}
              </div>
            </div>
          </main>
        </AdminLayout>
      )}
    </>
  );
}
