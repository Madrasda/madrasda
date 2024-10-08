import Image from "next/image";
import Head from "next/head";
import ClientLayout from "@/components/layout-client";
import { useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context/context";
import { uuidv4 } from "@firebase/util";
import ProductTile from "@/pages/ProductTile";
import { isTokenValid, getRole } from "@/utils/JWTVerifier";

export default function ProductList({
  productsPage,
  setPageNo,
  pageNo,
  title,
}) {
  const [loading, setLoading] = useState(false);
  const [pageButtons, setPageButtons] = useState([]);

  const router = useRouter();
  const ctx = useContext(UserContext);
  let isReady = router.isReady;

  const handlePageChange = useCallback(
    (event) => {
      const page = parseInt(event.target.value) - 1;
      setPageNo(page);
    },
    [setPageNo]
  );

  useEffect(() => {
    setLoading(true);
    if (productsPage.content !== undefined) {
      setLoading(false);
      setPageButtons((oldList) => {
        let buttons = [];
        for (let i = 1; i <= productsPage.totalPages; i++) {
          buttons.push(
            <li key={uuidv4()}>
              <button
                key={uuidv4()}
                value={i}
                className={`px-3 py-2 leading-tight border border-primary
                                            ${
                                              pageNo === i - 1
                                                ? "bg-primary text-white"
                                                : "text-primary bg-white hover:bg-primary hover:text-white"
                                            }`}
                onClick={handlePageChange}>
                {i}
              </button>
            </li>
          );
        }
        return buttons;
      });
    }
  }, [ctx.vendorList, handlePageChange, pageNo, productsPage]);

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

  function viewProduct(id) {
    router.push("/productDetails/" + id);
  }

  return (
    <>
      <Head>
      <meta name="description" content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
        <title>Madrasda | Product List</title>
      </Head>
      {productsPage?.content && (
        <ClientLayout>
          <section className='body-font font-quest'>
            <div className='py-24 px-5 mx-auto font-bold'>
              <h1 className='font-quest text-3xl text-primary w-fit md:text-5xl my-9 tracking-wider mx-auto'>
                {title}
              </h1>
              {productsPage.content.length === 0 && (
                <h1 className='text-center text-xl font-light'>
                  Products are cooking!
                </h1>
              )}
              <div className='w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center'>
                {productsPage.content.map((product) => {
                  if (product.colors.length === 0) return;
                  return (
                    <ProductTile
                      key={uuidv4()}
                      id={product.id}
                      name={product.name}
                      category={product.category}
                      total={product.total}
                      discount={product.discount}
                      imageUrl={product.colors[0].images[0]}
                    />
                  );
                })}
              </div>
              <br />
              <div className='flex justify-center mt-8'>
                <nav aria-label='Page navigation example'>
                  <ul className='inline-flex -space-x-px'>{pageButtons}</ul>
                </nav>
              </div>
            </div>
          </section>
        </ClientLayout>
      )}
    </>
  );
}
