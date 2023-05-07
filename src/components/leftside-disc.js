import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import {uuidv4} from "@firebase/util";

export default function LeftsideDisc ({name, id, imgUrl}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getVendorProducts();
    }, []);

    const getVendorProducts = async () => {
      const params = new URLSearchParams({
        pageNo : 0,
        pageSize: 4
      })
      const response = await axios.get(
        `https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/client/getProductsByVendor/${id}?` + params
      );
      setProducts(response.data.content);
    }
    return (
      <>
        {products.length !== 0 && (
          <div
            className='hidden xl:block overflow-hidden pr-2
                          my-4 lg:pr-10 relative'>
            <span
              className='bg-secondary bg-opacity-95 flex flex-row justify-center items-center w-full
                        rounded-l-none rounded-r-full'>
              <div className='flex flex-col w-full'>
                <Link href={`/products/${id}`}>
                  <h1 className='font-prompt italic font-black text-2xl tracking-widest text-logo flex justify-start pl-10 text-center my-3 hover:text-4xl transition-all ease-in-out duration-500 absolute top-0 left-0'>
                    {name}
                  </h1>
                </Link>
                {/* -------- VISIBLE ONLY ON LARGE SCREENS --------  */}
                <div
                  className='w-full h-full items-center justify-start px-4 py-2 hidden
                            xl:flex'>
                  <div className='w-full h-full flex items-center justify-end'>
                    <div className='ml-5 z-10'>
                      <Link href={`/products/${id}`}>
                        <Image
                          src='/prod-comp-showmore-left.png'
                          width={50}
                          height={50}
                        />
                      </Link>
                    </div>

                    {products &&
                      products.map((prod) => {
                        return (
                          <div
                            key={uuidv4()}
                            className='lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer font-quest bg-tertiary m-2 rounded-sm'>
                            <Link href={`/productDetails/${prod.id}`}>
                              <div className='block relative h-36 rounded overflow-hidden'>
                                <Image
                                  src={prod.colors[0].images[0]}
                                  alt='ecommerce'
                                  width={1080}
                                  height={1920}
                                  className='object-contain object-center w-full h-full block'
                                />
                              </div>
                              <div className='mt-4 flex flex-col'>
                                <h2 className='text-black title-font text-lg font-medium'>
                                  {prod.name}
                                </h2>
                                <span className='mt-1 text-black text-xl'>
                                  ₹
                                  {Math.round(
                                    prod.total -
                                      prod.total * prod.discount * 0.01
                                  )}
                                </span>
                                <div className='flex justify-between'>
                                  <span className='mt-1 line-through text-sm text-black'>
                                    ₹{prod.total}
                                  </span>
                                  <span className='title-font font-semibold text-sm text-[#088240]'>
                                    {prod.discount}% off
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <Link href={`/products/${id}`}>
                <button
                  className='bg-primary text-white flex justify-center items-center rounded-lg text-sm px-4 py-2 my-4 hover:bg-[#e62c61] transition-all duration-150 ease-in-out
                xl:hidden'>
                  View More
                </button>
              </Link>
              <div className='relative'>
                <Image
                  key={uuidv4()}
                  className='animate-spin'
                  src='/disc.png'
                  width={500}
                  height={500}
                />
                <div className='w-[220px] h-[220px] overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cover objects-center rounded-full'>
                  <Image
                    className='object-cover w-full h-full animate-spin hover:animate-none'
                    alt={name}
                    src={imgUrl || "/logo.png"}
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </span>
          </div>
        )}
        {products.length !== 0 && (
          <>
          <div className="xl:hidden">
          <div className="flex justify-between items-center">
          <Link href={`products/${id}`} className='relative'>
          <Image
            className='mx-auto md:mx-2 animate-spin'
            src='/disc.png'
            width={190}
            height={190}
          />
          <div className='w-[160px] h-[160px] overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cover objects-center rounded-full'>
            <Image
              className='object-cover w-full h-full'
              alt={name}
              src={imgUrl || "/logo.png"}
              width={200}
              height={200}
            />
          </div>
        </Link>
        <h1 className='md:text-xl text-bg text-3xl font-raj text-center pr-8'>
              {name}'s Products
            </h1>
            </div>
          <span className='flex flex-col xl:hidden bg-bg w-full mx-auto'>
            {/* <Link href={`products/${id}`} className='relative'>
              <Image
                className='mx-auto animate-spin'
                src='/disc.png'
                width={200}
                height={200}
              />
              <div className='w-[170px] h-[170px] overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cover objects-center rounded-full'>
                <Image
                  className='object-cover w-full h-full'
                  alt={name}
                  src={imgUrl || "/logo.png"}
                  width={200}
                  height={200}
                />
              </div>
            </Link> 
            <h1 className='text-xl text-logo font-quest text-center'>
              {name}'s Products
            </h1>*/}
            <div className='grid grid-cols-3 md:grid-cols-4 px-2'>
              {products &&
                products.map((prod) => {
                  return (
                    <div
                      key={uuidv4()}
                      className='row-span-1 font-quest p-4 cursor-pointer border border-gray bg-tertiary m-2 rounded-sm'>
                      <Link href={`/productDetails/${prod.id}`}>
                        <div className='block relative h-36 rounded overflow-hidden'>
                          <Image
                            src={prod.colors[0].images[0]}
                            alt='ecommerce'
                            width={1080}
                            height={1920}
                            className='object-contain object-center w-full h-full block'
                          />
                        </div>
                        <div className='mt-4 flex flex-col'>
                          <h2 className='text-black title-font text-[15px] md:text-[20px] xl:text-lg font-medium'>
                            {prod.name}
                          </h2>
                          <span className='mt-1 text-black text-[14px] md:text-xl'>
                            ₹
                            {Math.round(
                              prod.total - prod.total * prod.discount * 0.01
                            )}
                          </span>
                          <div className='flex justify-between'>
                            <span className='mt-1 line-through text-sm text-black'>
                              ₹{prod.total}
                            </span>
                            <span className='title-font font-semibold text-sm text-[#088240]'>
                              {prod.discount}% off
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </span>
          </div>
          </>
        )}
      </>
    );
}
