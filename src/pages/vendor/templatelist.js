import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import SearchVendor from "@/components/search-vendor";
import VendorLayout from "@/components/layout-vendor";
import Mockup from "@/components/mockup";
import MockupModal from "@/components/mockup-modal";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getRole, isTokenValid } from "@/utils/JWTVerifier";
import MockupModel from "@/components/mockupmodel";
import CloseConfirm from "@/components/close-confirm-modal";
import { uuidv4 } from "@firebase/util";
import { API_URL } from "@/utils/constants";

export default function TemplateList() {
  const [products, setProducts] = useState(null);
  const [pageNo, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const [mockupDetails, setMockupDetails] = useState(null);
  const [totalElements, setTotalElements] = useState(0);
  const [colors, setColors] = useState(null);
  const [sizes, setSizes] = useState(null);
  const [tokenExists, setTokenExists] = useState(false);
  const [mockups, setMockups] = useState([]);
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
    const jwtToken = localStorage.getItem("token_vendor");
    if (
      jwtToken === undefined ||
      !isTokenValid(jwtToken) ||
      getRole(jwtToken) !== "ROLE_VENDOR"
    )
      router.push("/vendor");
    else {
      setTokenExists(true);
      getAllMockups();
      getVendorProducts();
    }
  }, []);

  useEffect(() => {
    getVendorProducts();
  }, [pageNo]);

  const getVendorProducts = async () => {
    const url = new URLSearchParams({
      pageNo: pageNo,
      pageSize: 5,
    });
    const response = await axios.get(
      API_URL + "/api/templates/getTemplates?" +
        url,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_vendor"),
        },
      }
    );
    setProducts(response.data.content);
    setPageSize(response.data.totalPages);
  };

  const getAllMockups = async () => {
    const params = new URLSearchParams({
      pageSize: 10000,
    });
    const response = await axios.get(
      API_URL + "/api/mockup/getAllMockups?" +
        params,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_vendor"),
        },
      }
    );
    setMockups(response.data.content);
  };

  const getAvailableSizes = (skuMapping) => {
    var availableSizes = [];
    skuMapping.forEach((sku) => {
      if (!availableSizes.includes(sku.size.size))
        availableSizes.push(sku.size.size);
    });
    return availableSizes;
  };

  const getAvailableColors = (skuMapping) => {
    var availableColors = [];
    skuMapping.forEach((sku) => {
      if (!availableColors.includes(sku.color.hexValue))
        availableColors.push(sku.color.hexValue);
    });
    return availableColors;
  };

  const deleteTemplate = async (tempId) => {
    const response = await axios.delete(
      API_URL + "/api/templates/deleteTemplate/" +
        tempId,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_vendor"),
        },
      }
    );
    getVendorProducts();
  };

  if (loading && isReady)
    return (
      <div className="z-50 h-screen w-screen overflow-hidden">
        <Image
          src="/loader.gif"
          width={1920}
          height={1080}
          className="object-cover object-center w-full h-full"
        />
      </div>
    );

  return (
    <>
      <Head>
      <meta name="description" content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <title>Madrasda | Create Template</title>
      </Head>

      {tokenExists && (
        <VendorLayout>
          <section
            className="body-font overflow-hidden font-quest
                        md:ml-32"
          >
            <div className="mt-20 px-5 md:my-10 mx-auto">
              <h1
                className="text-3xl text-primary
                       md:ml-20"
              >
                CREATE TEMPLATE
              </h1>

              <div className="flex flex-wrap justify-start md:ml-20">
                <div className="lg:w-1/4 md:w-3/4 p-4 w-full h-96 flex items-center justify-center m-5 rounded duration-200 ease-in-out">
                  <div className="flex flex-col items-center justify-center cursor-pointer">
                    <MockupModal mockups={mockups} />
                    <p className="font-semibold font-base mt-3">
                      Create more templates
                    </p>
                    <p className="font-light text-bg font-sm text-sm">
                      Add them to your merch and start selling
                    </p>
                  </div>
                </div>
                {/*  */}
                {products &&
                  products.map((m) => {
                    return (
                      <div
                        key={uuidv4()}
                        className="lg:w-1/4 md:w-3/4 px-4 pt-10 pb-4 w-full max-h-max cursor-pointer bg-off-white m-5 rounded drop-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.3)] duration-200 ease-in-out relative"
                      >
                        <span className="absolute top-0 right-0 pt-2">
                          <CloseConfirm
                            template={true}
                            delete={(e) => {
                              if (e) deleteTemplate(m.id);
                            }}
                          />
                        </span>
                        <div>
                          <Mockup
                            download={true}
                            id={m.id}
                            key={m.id}
                            image={m.frontDesignImage || m.backDesignImage}
                            name={m.mockup.name}
                            sizes={getAvailableSizes(m.mockup.skuMapping)}
                            colors={getAvailableColors(m.mockup.skuMapping)}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            {pageSize > 5 && (
              <div className="flex justify-center mt-32 mb-10">
                <button
                  className="bg-[#fab337] hover:bg-[#ffa200] text-white font-small py-2 px-5 rounded mr-6"
                  onClick={() => {
                    setPage(pageNo === 0 ? 0 : pageNo - 1);
                  }}
                >
                  Prev
                </button>
                <button
                  className="bg-[#fab337] hover:bg-[#ffa200] text-white font-small py-2 px-5 rounded ml-8"
                  onClick={() => {
                    setPage(pageNo === pageSize - 1 ? pageNo : pageNo + 1);
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </section>
        </VendorLayout>
      )}
    </>
  );
}
