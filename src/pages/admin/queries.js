import Head from 'next/head'
import AdminLayout from '@/components/layout-admin'
import Link from 'next/link'
import axios from "axios";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {getRole, isTokenValid} from "@/utils/JWTVerifier";
import VendorQuery from '@/components/vendor-query';
import { API_URL } from '@/utils/constants';

export default function Queries() {
    const router = useRouter();
    const [queries, setQueries] = useState(null);
    const [pageNo, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(0);
    const [tokenExists, setTokenExists] = useState(false);
    let isReady = router.isReady;
    const setResolution = (id) => {
        setQueries(old => [...old.filter((curr) => curr.id !== id)]);

    }
    const getQueries = async () => {
        const url = new URLSearchParams({
            pageNo: pageNo,
            pageSize: 4
        })
        axios.get(
            API_URL + "/api/feedback/getAllQueries?" + url
        ).then((response) => {
            setQueries(response.data.unresolvedQueries.content);
            setPageSize(response.data.unresolvedQueries.totalPages);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getQueries();
    }, [pageNo]);

    useEffect(() => {
        const jwtToken = localStorage.getItem("token_admin")
        if (jwtToken === undefined || !isTokenValid(jwtToken) || getRole(jwtToken) !== 'ROLE_ADMIN')
            router.push("/admin");
        else
            setTokenExists(true);
    }, []);


    return (
      <>
        <Head>
          <meta name="description" content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."/>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/logo.png' />
          <title>Un-Resolved Queries</title>
        </Head>

        {tokenExists && (
          <AdminLayout>
            <main className='md:ml-32 overflow-hidden font-quest'>
              <div className='px-5 py-24 md:py-0 md:my-10 mx-auto'>
                <div className='md:ml-20 md:mt-10'>
                  <h1 className='body-font text-primary text-3xl'>
                    UNRESOLVED QUERIES
                  </h1>
                </div>

                <hr className='h-px md:ml-20 my-6 bg-black border-1'></hr>

                <div className='flex flex-col mt-4 md:ml-20 lg:mr-20 text-black'>
                  {queries &&
                    queries.map((q, index) => {
                      return (
                        <VendorQuery
                          key={q.id}
                          queryId={q.id}
                          name={q.vendorName}
                          query={q.query}
                          email={q.email}
                          image={q.image}
                          setResolution={setResolution}
                          i={index}
                        />
                      );
                    })}
                  {queries && queries.length === 0 && (
                    <h1 className='text-center text-xl text-black font-light'>
                      No queries to be resolved
                    </h1>
                  )}
                </div>
                {queries && queries.length !== 0 && (
                  <div className='flex justify-center mt-32'>
                    <button
                      className='bg-[#fab337] hover:bg-[#ffa200] text-white font-small py-2 px-5 rounded mr-6'
                      onClick={() => {
                        setPage(pageNo === 0 ? 0 : pageNo - 1);
                      }}>
                      Prev
                    </button>
                    <button
                      className='bg-[#fab337] hover:bg-[#ffa200] text-white font-small py-2 px-5 rounded ml-6'
                      onClick={() => {
                        setPage(pageNo === pageSize - 1 ? pageNo : pageNo + 1);
                      }}>
                      Next
                    </button>
                  </div>
                )}
                <div className='mt-14 flex justify-center'>
                  <Link href='/admin/resolvedqueries'>
                    <button
                      type='button'
                      className='mt-2 text-white bg-bg font-medium rounded-full text-sm px-5 py-2.5
          text-center mr-2 mb-2'>
                      Resolved Queries
                    </button>
                  </Link>
                </div>
              </div>
            </main>
          </AdminLayout>
        )}
      </>
    );
}
