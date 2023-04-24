import VendorLayout from '@/components/layout-vendor'
import Table from '@/components/table'
import Head from 'next/head'
import PieChart from '@/components/piechart'
import LineGraph from '@/components/linegraph'
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isTokenValid } from "@/utils/JWTVerifier"

export default function Analytics () {
  const [tokenExists, setTokenExists] = useState(false);
  const [details, setDetails] = useState(null);
  const router = useRouter();
  let isReady = router.isReady;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
    setLoading(false);
      }, 1000);
  }, []);

  useEffect(() => {
    const jwtToken = localStorage.getItem("token")
    if(jwtToken === undefined || !isTokenValid(jwtToken))
      router.push("/vendor");
    else{
      setTokenExists(true);
      getVendorDetails();
    }
  }, []);

  const getProductsLabel = (ladder) => {
    var label = [];
    ladder.forEach((item) => {
      if(label.indexOf(item.name) === -1)
      label.push(item.name);
    });
    return label;
  }

  const getProductsContribution = (ladder) => {
    var label = [];
    ladder.forEach((item) => {
      if(label.indexOf(item.returnsContribution) === -1)
      label.push(item.returnsContribution);
    });
    return label;
  }

  const getVendorDetails = async () => {
      const response = await axios.get(
        "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/vendor/" , { 
          headers : {
            Authorization : "Bearer " + localStorage.getItem('token')
          }
        }  
      );
      setDetails(response.data);
  }

  if(loading && isReady && details)
  return (<div className='z-50 h-screen w-screen overflow-hidden'>
  <Image src="/loader.gif" width={1920} height={1080} className="object-cover object-center w-full h-full"/>
  </div>);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <title>Madrasda | Analytics</title>
      </Head>
      
      <VendorLayout>
        {
          details &&
          <main className='body-font font-algeria overflow-hidden 
                       md:ml-36'>
      <div className="mt-20 px-5 md:my-10 mx-auto">
        <div className="md:ml-20 md:mt-10">
          <h1 className="title-font font-medium text-primary text-3xl">HERE IS YOUR ANALYSIS</h1>
          <h2 className="title-font mt-3 font-bold text-2xl">{details.vendor.name}</h2>
        </div>
      {/* -------- STATISTICS -------- */}
        <section className="text-gray-600 body-font">
              <div className="container px-5 py-14 mx-8">
                  <div className="flex flex-wrap justify-between -m-4 text-center md:ml-2">
                  <div className="p-4">
                      <h1 className="title-font font-bold text-xl">Total Products</h1>
                      <h2 className="title-font font-bold text-3xl text-primary">{details.salesAnalysis ? details.salesAnalysis.totalProducts : 0}</h2>
                  </div>
                  <div className="p-4">
                      <h1 className="title-font font-bold text-xl">Total Orders</h1>
                      <h2 className="title-font font-bold text-3xl text-primary">{details.salesAnalysis ? details.salesAnalysis.totalOrders : 0}</h2>
                  </div> 
                  <div className="p-4">
                      <h1 className="title-font font-bold text-xl">Total Profit Earned</h1>
                      <h2 className="title-font font-bold  text-3xl text-primary">₹{details.salesAnalysis ? details.salesAnalysis.totalProfit : 0}</h2>
                  </div>
                  </div>
              </div>  
          </section>
{/* --------- STATISTICS END -------- */}

{/* --------- LINE GRAPH -------- */}
          <h2 className='text-primary font-semibold text-2xl
                        md:mt-20 md:ml-20'>Sales Profit</h2>
          <div className='flex justify-center items-center
                          md:ml-20 '>
            <LineGraph monthlySales = {details.salesAnalysis ? details.salesAnalysis.monthlySales : []} />
          </div>
{/* --------- LINE GRAPH END -------- */}

{/* --------- PIE CHART -------- */}
          {
            details.productLadder &&
            <div>
              <h2 className='text-primary font-semibold text-2xl
                          md:ml-20 md:-mt-[80%]
                          lg:-mt-72'>Product Contribution</h2>
              <div className='flex justify-center items-center
                              md:ml-20'>
                <PieChart products={getProductsLabel(details.productLadder)} prodData={getProductsContribution(details.productLadder)} />
              </div>  
            </div>
          }
{/* --------- PIE CHART END -------- */}

{/* -------- TABLE ------- */}
          { details.productLadder && 
            <div>
              <h2 className='text-primary font-semibold text-2xl
                        md:mt-20 md:ml-20'>Product Ladder</h2>
              <div className='mt-4 md:ml-20'>
                <Table products={details.productLadder} />
              </div>
            </div>
          }  
{/* -------- TABLE END ------- */}
        </div>
        </main>}
      </VendorLayout>
    </>
  )
}
