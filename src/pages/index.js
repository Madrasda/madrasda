import Head from "next/head";
import Script from "next/script";
import CarouselComponent from "@/components/carousel";
import Image from "next/image";
import ClientLayout from "@/components/layout-client";
import RightsideDisc from "@/components/rightside-disc";
import LeftsideDisc from "@/components/leftside-disc";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/context";
import { uuidv4 } from "@firebase/util";
import HotSellers from "@/components/hotsellers-client";
import Footer from "@/components/footer";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const ctx = useContext(UserContext);
  let isReady = router.isReady;
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState(false);

  useEffect(() => {
    if (ctx.vendorList !== undefined && ctx.vendorList.length !== 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [ctx.vendorList]);
  const [vendorData, setVendorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const vendorData = await Promise.all(
        ctx.vendorList.map(async (vendor) => {
          const params = new URLSearchParams({
            pageNo: 0,
            pageSize: 4,
          });
          const response = await axios.get(
            `https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/client/getProductsByVendor/${vendor.id}?` +
              params
          );
          return {
            ...vendor,
            products: response.data.content,
          };
        })
      );
      setVendorData(vendorData.filter((vendor) => vendor.products.length > 0));
    };

    fetchData();
  }, [ctx.vendorList]);

  if (loading && isReady)
    return (
      <div className="z-50 h-screen w-screen overflow-hidden">
        <Image
          src="/loader.gif"
          width={1920}
          height={1080}
          className="object-cover object-center w-full h-full"
          alt={"Image"}
        />
      </div>
    );

  return (
    <>
      <Head>
        <meta name="description" content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
        <title>Madrasda | Official merchandise | Indian content creators</title>
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-P9LL7RBT1S"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-P9LL7RBT1S');
        `}
      </Script>

      <ClientLayout>
        <CarouselComponent />
        <h1
          className='font-raj text-center md:text-left px-3 w-full py-0 md:py-8 font-black tracking-widest text-bg text-3xl md:text-5xl md:mb-10 md:px-10'
          id='merchandise'>
          OFFICIAL MERCHANDISE
        </h1>

        <div className='flex flex-col'>
          {vendorData.map((vendor, index) => {
            if (index % 2 === 0) {
              return (
                <RightsideDisc
                  key={uuidv4()}
                  id={vendor.id}
                  name={vendor.companyName}
                  imgUrl={vendor.imgUrl}
                  products={vendor.products}
                />
              );
            } else {
              return (
                <LeftsideDisc
                  key={uuidv4()}
                  id={vendor.id}
                  name={vendor.companyName}
                  imgUrl={vendor.imgUrl}
                  products={vendor.products}
                />
              );
            }
          })}
        </div>

        <span id='hotsellers'></span>
        <HotSellers />
        <div className='mt-36 md:mt-48'>
          <Footer />
        </div>
      </ClientLayout>
    </>
  );
}
