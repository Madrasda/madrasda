import Head from "next/head";
import VendorLayout from "@/components/layout-vendor";
import LineGraph from "@/components/linegraph";
import Image from "next/image";
import WithdrawModal from "@/components/withdraw-modal";
import Link from "next/link";
import {getRole, isTokenValid} from "@/utils/JWTVerifier";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { async } from "@firebase/util";
import { API_URL } from "@/utils/constants";

export default function Dashboard(props) {
  const [tokenExists, setTokenExists] = useState(false);
  const router = useRouter();
  let isReady = router.isReady;
  const [details, setDetails] = useState(null);
  const [designs, setDesigns] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  const getVendorDetails = async () => {
    const response = await axios.get(API_URL + "/api/vendor/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token_vendor"),
      },
    });
    if(response.status !== 200) {
      localStorage.removeItem("token_vendor")
      router.push("/vendor")
    }
    setDetails(response.data);
  };

  const getDesigns = async () => {
    const response = await axios.get(
      API_URL + "/api/vendor/designs",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_vendor"),
        },
      }
    );
    setDesigns(response.data);
  };

  const requestPayout = async () => {
    const response = await axios.post(
      API_URL + "/api/vendor/requestPayout",
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_vendor"),
        },
      }
    );
    getVendorDetails();
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem("token_vendor");
    if (jwtToken === undefined || !isTokenValid(jwtToken) || getRole(jwtToken) !== 'ROLE_VENDOR')
      router.push("/vendor");
    else {
      setTokenExists(true);
      getVendorDetails();
      getDesigns();
    }
  }, []);
  if (loading && isReady)
    return (
      <div className='z-50 h-screen w-screen overflow-hidden'>
        <Image
          src='/loader.gif'
          width={1920}
          height={1080}
          className='object-cover object-center w-full h-full'
        />
      </div>
    );

  return (
    <div>
      <Head>
      <meta name="description" content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
        <title>Madrasda | Dashboard</title>
      </Head>
      {tokenExists && details && (
        <VendorLayout>
          <main
            className='body-font font-raj overflow-hidden
                                md:ml-32'>
            <div className=' flex flex-col mt-20 px-5 md:my-10 mx-auto'>
              <h1
                className='text-5xl text-logo font-semibold tracking-wider
                               md:ml-20 md:mt-10'>
                DASHBOARD
              </h1>

              <section className='text-gray-600 body-font'>
                <div className='container px-5 py-14 mx-auto'>
                  <div className='flex flex-wrap md:ml-10 text-center justify-around'>
                    <div className='p-4'>
                      <h1 className='title-font font-bold text-xl'>
                        Total Products
                      </h1>
                      <h2 className='title-font font-bold text-3xl text-primary'>
                        {details.salesAnalysis
                          ? details.salesAnalysis.totalProducts
                          : 0}
                      </h2>
                    </div>
                    <div className='p-4'>
                      <h1 className='title-font font-bold text-xl'>
                        Total Orders
                      </h1>
                      <h2 className='title-font font-bold text-3xl text-primary'>
                        {details.salesAnalysis
                          ? details.salesAnalysis.totalOrders
                          : 0}
                      </h2>
                    </div>
                    <div className='p-4'>
                      <h1 className='title-font font-bold text-xl'>
                        Total Profit Earned
                      </h1>
                      <h2 className='title-font font-bold  text-3xl text-primary'>
                        {details.salesAnalysis
                          ? Number(
                              details.salesAnalysis.totalProfit
                            ).toLocaleString("en-IN")
                          : 0}
                      </h2>
                    </div>
                    <div className='p-4 flex flex-col items-center'>
                      <h1 className='title-font font-bold text-xl'>
                        Outstanding Payout
                      </h1>
                      <h2 className='title-font font-bold  text-3xl text-primary'>
                        ₹{Number(details.payoutAmount).toLocaleString("en-IN")}
                      </h2>
                      {!details.payoutRequested && (
                        <WithdrawModal
                          requested={details.payoutRequested}
                          profit={details.payoutAmount}
                          withdraw={(e) => {
                            if (e) requestPayout();
                          }}
                        />
                      )}
                      {details.payoutRequested && (
                        <h1 className='text-sm'>Payout Requested</h1>
                      )}
                    </div>
                  </div>
                </div>
              </section>

              {/* <div className='hidden md:block'> */}
              <div className='md:ml-20 flex justify-center items-center'>
                <LineGraph
                  monthlySales={
                    details.salesAnalysis
                      ? details.salesAnalysis.monthlySales
                      : []
                  }
                />
              </div>
              {/* </div> */}

              <div
                className='flex flex-col justify-center items-center
                                md:mt-[75%] md:ml-20
                                lg:mt-12'>
                <h1 className='text-primary text-4xl font-semibold'>WOAH!</h1>
                <div
                  className='flex text-lg justify-center items-center lg:w-full
                                    sm:w-1/3'>
                  <h2 className='p-1'>We have sold</h2>
                  <h3 className='text-primary p-1 font-semibold text-2xl'>
                    {details.salesAnalysis
                      ? details.salesAnalysis.productsSoldToday
                      : 0}
                  </h3>
                  <h2 className='p-1'>products sold in the last 24 hours!</h2>
                </div>
              </div>

              {designs && (
                <div
                  className="mt-4
                             md:ml-20 md:mt-20">
                  <div className='flex flex-col flex-wrap justify-center items-center px-5 pt-10 md:pl-10'>
                    <h1
                      className='text-2xl text-primary font-semibold
                                    md:text-3xl'>
                      ADD A DESIGNS
                    </h1>
                    <Link href={`/vendor/designgallery`}>
                      <Image
                        src='/add-template-icon.png'
                        width={90}
                        height={90}
                        className='cursor-pointer m-2'
                      />
                    </Link>
                  </div>
                  {/* <div className='flex flex-wrap justify-between items-center py-10'>
                    {designs[0] && (
                      <Image
                        className='w-1/3 p-2 lg:w-1/5 md:p-none md:mx-8'
                        src={designs[0].imgUrl}
                        width={200}
                        height={233.33}
                      />
                    )}
                    {designs[1] && (
                      <Image
                        className='w-1/3 p-2 lg:w-1/5 md:p-none md:mx-8'
                        src={designs[1].imgUrl}
                        width={200}
                        height={233.33}
                      />
                    )}
                    {designs[2] && (
                      <Image
                        className='w-1/3 p-2 lg:w-1/5 md:p-none md:mx-8'
                        src={designs[2].imgUrl}
                        width={200}
                        height={233.33}
                      />
                    )}
                    {designs[3] && (
                      <Image
                        className='w-1/3 p-2 lg:w-1/5 md:p-none md:mx-8'
                        src={designs[3].imgUrl}
                        width={200}
                        height={233.33}
                      />
                    )}
                    {designs[4] && (
                      <Image
                        className='w-1/3 p-2 lg:w-1/5 md:p-none md:mx-8'
                        src={designs[4].imgUrl}
                        width={200}
                        height={233.33}
                      />
                    )}
                    {designs[5] && (
                      <Image
                        className='w-1/3 p-2 lg:w-1/5 md:p-none md:mx-8'
                        src={designs[5].imgUrl}
                        width={200}
                        height={233.33}
                      />
                    )}
                  </div> */}
                </div>
              )}

              {details.salesAnalysis && (
                <div
                  className="bg-[url('/templates-area.png')] bg-no-repeat bg-cover mt-20
                                md:ml-20">
                  <h1
                    className='pl-5 pt-10 text-lg text-white font-semibold
                                   md:pl-10 md:text-3xl'>
                    TOP SELLERS THIS WEEK
                  </h1>
                  <div className='flex py-10 justify-around flex-wrap'>
                    {details.productLadder[1] && (
                      <div className='flex flex-col items-center pt-16 w-1/3 p-2'>
                        <Image
                          src={details.productLadder[1].imgUrl}
                          width={200}
                          height={233.33}
                          className='object-contain'
                        />
                        <div
                          className='py-4 px-5 z-1 -mt-4 w-fit border-4 border-primary rounded-full bg-white
                             text-xl text-red font-semibold italic'>
                          #2
                        </div>
                      </div>
                    )}
                    {details.productLadder[0] && (
                      <div className='flex flex-col items-center pb-26 w-1/3 p-2'>
                        <Image
                          src={details.productLadder[0].imgUrl}
                          width={200}
                          height={233.33}
                          className='object-contain'
                        />
                        <div
                          className='py-4 px-5 z-1 -mt-4 w-fit border-4 border-primary rounded-full bg-white
                          text-xl text-red font-semibold italic'>
                          #1
                        </div>
                      </div>
                    )}
                    {details.productLadder[2] && (
                      <div className='flex flex-col items-center pt-32 w-1/3 p-2'>
                        <Image
                          src={details.productLadder[2].imgUrl}
                          width={200}
                          height={233.33}
                          className='object-contain'
                        />
                        <div
                          className='py-4 px-5 z-1 -mt-4 w-fit border-4 border-primary rounded-full bg-white
                          text-xl text-red font-semibold italic'>
                          #3
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </main>
        </VendorLayout>
      )}
    </div>
  );
}
