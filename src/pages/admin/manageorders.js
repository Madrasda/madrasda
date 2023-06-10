import Head from "next/head";
import SearchVendor from "@/components/search-vendor";
import Payments from "@/components/payments";
import AdminLayout from "@/components/layout-admin";
import axios from "axios";
import {useEffect, useState} from "react";
import { useRouter } from "next/router";
import { isTokenValid, getRole } from "@/utils/JWTVerifier";
import {Button} from "@mui/material";
import {uuidv4} from "@firebase/util";
import OrderDetailsModal from "@/components/orderdetails-modal";
import { set_cptable } from "xlsx";
import * as cptable from 'xlsx/dist/cpexcel.full.mjs';
set_cptable(cptable);
import XLSX from "xlsx";
import { JsonToExcel } from "react-json-to-excel";

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
      <meta name="description" content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
        <title>Madrasda | Recent Orders</title>
      </Head>
      {isAdmin && <AdminLayout>
        <main className='body-font md:ml-32 overflow-hidden font-quest'>
          <div className='px-5 my-10 mx-auto'>
            <h1 className='text-3xl text-primary pt-7 md:pt-0 md:ml-20 md:mt-10'>
              Recent Orders
            </h1>
            <div className='hidden justify-end mr-10 md:flex'>
            <Button
              css={{ fontFamily: "$algeria" }}
              style={{
                background: "linear-gradient(45deg, #ffa000 30%, #ffc107 90%)",
              }}
              variant={'contained'}
              onClick={() => {
                const table = document.getElementById("download");
                const wb = XLSX.utils.table_to_book(table);
                XLSX.writeFile(wb, "RecentOrders.xlsx");
              }}>
              <b>Export as Excel</b>
            </Button>
          </div>
            <div className='mt-4 md:ml-20'>
              <Payments />
            </div>
          </div>
        </main>
      </AdminLayout>}
    </>
  );
}
