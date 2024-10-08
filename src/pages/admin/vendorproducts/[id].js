import Head from "next/head";
import AdminLayout from "@/components/layout-admin";
import Image from "next/image";
import ProductTable from "@/components/product-table";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getRole, isTokenValid } from "@/utils/JWTVerifier";
import { API_URL } from "@/utils/constants";

export default function ProductList() {
  const [tokenExists, setTokenExists] = useState(false);
  const router = useRouter();
  let isReady = router.isReady;
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const getProductDetails = async () => {
    if (router.isReady) {
      const prod = await axios.get(
        API_URL + "/api/vendor/getProductsByVendor/" + id );
      setProducts(prod.data.content);
      console.log(prod.data.content);
    }
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem("token_admin");
    console.log(router);
    if (
      jwtToken === undefined ||
      !isTokenValid(jwtToken) ||
      getRole(jwtToken) !== "ROLE_ADMIN"
    )
      router.push("/admin");
    else {
      setTokenExists(true);
      getProductDetails();
    }
  }, [router.isReady]);

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
        <title>Madrasda | Product List</title>
      </Head>

      {tokenExists && (
        <AdminLayout>
          <main
            className="body-font font-raj overflow-hidden
                                 md:ml-36"
          >
            <div className="mt-20 px-5 md:my-10 mx-auto">
              <h1
                className="text-3xl text-primary 
                               md:ml-20 md:mt-10"
              >
                VENDOR PRODUCTS
              </h1>
              <div className="mt-4 md:ml-20">
                {products && (
                  <ProductTable products={products} setProducts={setProducts} path={router.asPath} />
                )}
              </div>
            </div>
          </main>
        </AdminLayout>
      )}
    </>
  );
}
