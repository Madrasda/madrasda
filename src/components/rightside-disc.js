import Link from "next/link";
import Image from "next/image";
import { uuidv4 } from "@firebase/util";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
export default function RightsideDisc({ name, id, imgUrl, products }) {
  const smallScreen = useMediaQuery({ maxWidth: 599 });
  const mediumScreen = useMediaQuery({ minWidth: 600, maxWidth: 1280 });
  const largeScreen = useMediaQuery({ minWidth: 1280, maxWidth: 1600 });
  const extraLargeScreen = useMediaQuery({ minWidth: 1600 });
  const [items, setItems] = useState("");
  const [imageLoading, setLoading] = useState(true);

  useEffect(() => {
    if (extraLargeScreen) {
      setItems(7);
    } else if (largeScreen) {
      setItems(5);
    } else if (mediumScreen) {
      setItems(8);
    } else if (smallScreen) {
      setItems(10);
    }
  }, []);

  const getRandomIndex = (index) => {
    return Math.floor(Math.random() * index);
  };

  return (
    <>
      {products.length !== 0 && (
        <div
          className='hidden xl:block overflow-hidden pl-2
                     lg:pl-10 mb-2 h-fit relative'>
          <span
            className='bg-secondary bg-opacity-95 flex flex-row justify-center items-center w-full
                        rounded-l-full rounded-r-none'>
            <div className='relative'>
              <Image
                className='animate-spin'
                src='/disc.png'
                width={500}
                height={500}
              />
              <Link
                href={{
                  pathname: "/creators",
                  query: { name: name, id: id },
                }}
                // as={"creators/" + name}
                className='w-[250px] h-[250px] overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cover objects-center rounded-full'>
                <Image
                  className='object-cover w-full h-full animate-spin hover:animate-none'
                  alt={name}
                  src={imgUrl || "/logo.png"}
                  width={500}
                  height={500}
                />
              </Link>
            </div>

            <div className='flex flex-col w-full'>
              <Link
                href={{
                  pathname: "/creators",
                  query: { name: name, id: id },
                }}
                // as={"creators/" + name}
                // href={`/products/${id}`}
              >
                <h1 className='font-prompt italic font-black text-2xl tracking-widest text-logo flex justify-end pr-10 text-center my-3 hover:my-2 hover:text-4xl transition-all ease-in-out duration-500 top-0 right-0'>
                  {name}
                </h1>
              </Link>

              {/* -------- VISIBLE ONLY ON LARGE SCREENS --------  */}
              <div
                className='w-full h-full items-center justify-start px-4 py-2 hidden
                            xl:flex'>
                {products &&
                  products.map((prod, index) => {
                    if (index < items) {
                      return (
                        <div
                          key={uuidv4()}
                          className='w-56 h-[320px] font-quest p-4 cursor-pointer border border-gray bg-tertiary m-2 rounded-sm'>
                          <Link href={`/productDetails/${prod.id}`}>
                            <div className='block relative h-48 rounded overflow-hidden'>
                              <Image
                                src={
                                  prod.colors[
                                    getRandomIndex(prod.colors.length)
                                  ].images[0]
                                }
                                alt='ecommerce'
                                width={1080}
                                height={1920}
                                className={`object-contain object-center w-full h-full ${
                                  imageLoading ? "hidden" : "block"
                                }`}
                                priority={true}
                                onLoadCapture={() => setLoading(false)}
                              />
                              {imageLoading && (
                                <Image
                                  src='/product-loading.gif'
                                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                                  width={50}
                                  height={50}
                                />
                              )}
                            </div>
                            <div className='mt-4 flex flex-col'>
                              <h2 className='text-black title-font text-xs font-black'>
                                {prod.name}
                              </h2>
                              <span className='mt-1 text-black text-xl'>
                                ₹
                                {Math.ceil(
                                  prod.total - prod.total * prod.discount * 0.01
                                )}
                              </span>
                              {prod.discount > 0 && (
                                <div className='flex items-end justify-between'>
                                  <span className='mt-1 line-through text-sm text-black'>
                                    ₹{prod.total}
                                  </span>
                                  <span className='title-font font-semibold text-sm text-[#088240]'>
                                    {prod.discount}% off
                                  </span>
                                </div>
                              )}
                            </div>
                          </Link>
                        </div>
                      );
                    }
                  })}

                {products.length >= 5 && (
                  <div className='mr-5 z-10 relative '>
                    <Link
                      href={{
                        pathname: "/creators",
                        query: { name: name, id: id },
                      }}
                      // as={"creators/" + name}
                      // href={`/products/${id}`}
                    >
                      <Image
                        src='/prod-comp-showmore-right.png'
                        width={50}
                        height={50}
                      />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </span>
        </div>
      )}

      {products.length !== 0 && (
        <>
          <div className='xl:hidden'>
            <div className='flex justify-between items-center mt-10'>
              <div className='absolute mt-10'>
                <Link
                  href={{
                    pathname: "/creators",
                    query: { name: name, id: id },
                  }}
                  // as={"creators/" + name}
                  // href={`/products/${id}`}
                  className='relative'>
                  <Image
                    className='mx-auto md:mx-2 md:animate-spin hidden xl:block'
                    src='/disc.png'
                    width={170}
                    height={170}
                  />
                  <div className='w-[140px] h-[140px] overflow-hidden absolute -top-[70px] left-[5px] xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 bg-cover objects-center rounded-full'>
                    <Image
                      className='object-cover w-full h-full border-8 border-black xl:border-none rounded-full'
                      alt={name}
                      src={imgUrl || "/logo.png"}
                      width={200}
                      height={200}
                    />
                  </div>
                </Link>
              </div>
              <div className='flex flex-col w-full'>
                <h1 className='md:text-2xl text-lg font-raj text-right w-full text-primary pr-4'>
                  {name}
                </h1>
              </div>
            </div>
          </div>
          <span className='flex flex-col xl:hidden bg-bg w-full mx-auto pt-20'>
            <div className='grid grid-cols-2 md:grid-cols-4 md:px-2'>
              {/* flex flex-row overflow-hidden  */}
              {products &&
                products.map((prod, index) => {
                  if (index < items) {
                    return (
                      <div
                        key={uuidv4()}
                        className='row-span-1 font-quest p-4 cursor-pointer border border-gray bg-tertiary m-2 rounded-sm'>
                        <Link href={`/productDetails/${prod.id}`}>
                          <div className='block relative h-36 rounded overflow-hidden'>
                            <Image
                              src={
                                prod.colors[getRandomIndex(prod.colors.length)]
                                  .images[0]
                              }
                              alt='ecommerce'
                              width={1080}
                              height={1920}
                              className={`object-contain object-center w-full h-full ${
                                imageLoading ? "hidden" : "block"
                              }`}
                              priority={true}
                              onLoadCapture={() => setLoading(false)}
                            />
                            {imageLoading && (
                              <Image
                                src='/product-loading.gif'
                                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                                width={50}
                                height={50}
                              />
                            )}
                          </div>
                          <div className='mt-4 flex flex-col'>
                            <h2 className='text-black title-font text-[15px] md:text-base xl:text-lg font-medium'>
                              {prod.name}
                            </h2>
                            <span className='mt-1 text-black text-[14px] md:text-xl'>
                              ₹
                              {Math.round(
                                prod.total - prod.total * prod.discount * 0.01
                              )}
                            </span>
                            {prod.discount > 0 && (
                              <div className='flex justify-between'>
                                <span className='mt-1 line-through text-sm text-black'>
                                  ₹{prod.total}
                                </span>
                                <span className='title-font font-semibold text-sm text-[#088240]'>
                                  {prod.discount}% off
                                </span>
                              </div>
                            )}
                          </div>
                        </Link>
                      </div>
                    );
                  }
                })}
            </div>
          </span>
        </>
      )}
    </>
  );
}
