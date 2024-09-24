import VendorLayout from '@/components/layout-vendor'
import Table from '@/components/table'
import Head from 'next/head'
import PieChart from '@/components/piechart'
import LineGraph from '@/components/linegraph'
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {getRole, isTokenValid} from "@/utils/JWTVerifier"
import { API_URL } from '@/utils/constants'

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
    const jwtToken = localStorage.getItem("token_vendor")
    if (jwtToken === undefined || !isTokenValid(jwtToken) || getRole(jwtToken) !== 'ROLE_VENDOR')
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
        API_URL + "/api/vendor/" , {
          headers : {
            Authorization : "Bearer " + localStorage.getItem('token_vendor')
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
      <meta name="description" content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
        <title>Madrasda | Analytics</title>
      </Head>

      {tokenExists && (
        <VendorLayout>
          {details && (
            <main
              className='body-font font-raj overflow-hidden 
                       md:ml-32'>
              <div className='mt-20 px-5 md:my-10 mx-auto'>
                <div className='md:ml-20 md:mt-10'>
                  <h1 className='title-font font-medium text-primary text-3xl'>
                    HERE IS YOUR ANALYSIS
                  </h1>
                  <h2 className='title-font text-3xl ml-2 mt-3 font-semibold text-[#545354]'>
                    {details.vendor.name}
                  </h2>
                </div>
                {/* -------- STATISTICS -------- */}
                <section className='text-gray-600 body-font'>
                  <div className='container md:px-5 md:py-14 md:mx-8'>
                    <div className='flex flex-wrap justify-around -m-4 text-center'>
                      <div className='p-4'>
                        <h1 className='title-font font-bold text-xl text-[#535253]'>
                          Total Products
                        </h1>
                        <h2 className='title-font font-bold text-3xl text-primary'>
                          {details.salesAnalysis
                            ? details.salesAnalysis.totalProducts
                            : 0}
                        </h2>
                      </div>
                      <div className='p-4'>
                        <h1 className='title-font font-bold text-xl text-[#535253]'>
                          Total Orders
                        </h1>
                        <h2 className='title-font font-bold text-3xl text-primary'>
                          {details.salesAnalysis
                            ? details.salesAnalysis.totalOrders
                            : 0}
                        </h2>
                      </div>
                      <div className='p-4'>
                        <h1 className='title-font font-bold text-xl text-[#535253]'>
                          Total Profit Earned
                        </h1>
                        <h2 className='title-font font-bold  text-3xl text-primary'>
                          ₹
                          {details.salesAnalysis
                            ? details.salesAnalysis.totalProfit
                            : 0}
                        </h2>
                      </div>
                    </div>
                  </div>
                </section>
                {/* --------- STATISTICS END -------- */}

                {/* --------- LINE GRAPH -------- */}
                <h2
                  className='text-primary font-semibold text-2xl
                        md:mt-20 md:ml-20'>
                  Sales Profit
                </h2>
                <div
                  className='flex justify-center items-center
                          md:ml-20 mb-20'>
                  <LineGraph
                    monthlySales={
                      details.salesAnalysis
                        ? details.salesAnalysis.monthlySales
                        : []
                    }
                  />
                </div>
                {/* --------- LINE GRAPH END -------- */}

                {/* --------- PIE CHART -------- */}
                {details.productLadder && (
                  <div>
                    <h2
                      className='text-primary font-semibold text-2xl
                          md:ml-20'>
                      Product Contribution
                    </h2>
                    <div
                      className='flex justify-center items-center
                              md:ml-20'>
                      <PieChart
                        products={getProductsLabel(details.productLadder)}
                        prodData={getProductsContribution(
                          details.productLadder
                        )}
                      />
                    </div>
                  </div>
                )}
                {/* --------- PIE CHART END -------- */}

                {/* -------- TABLE ------- */}
                {details.productLadder && (
                  <div>
                    <h2
                      className='text-primary font-semibold text-2xl
                        md:mt-20 md:ml-20'>
                      Product Summary
                    </h2>
                    <div className='mt-4 md:ml-20'>
                      <Table products={details.productLadder} />
                    </div>
                  </div>
                )}
                {/* -------- TABLE END ------- */}
              </div>
            </main>
          )}
        </VendorLayout>
      )}
    </>
  );
}
