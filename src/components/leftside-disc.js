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
        <div
          className='overflow-hidden mx-auto px-10
                          lg:my-4 lg:pr-10 lg:px-0'>
          <span
            className='bg-none flex flex-col justify-center items-center w-full
                             lg:flex-row lg:bg-bg md:rounded-l-non md:rounded-r-full'>
            <div className='flex flex-col w-full'>
              <Link href={`/products/${id}`}>
                <h1
                  className='font-bb text-black justify-center px-10 pt-4 text-2xl font-bold text-center hidden transition-all duration-300 ease-in-out
                          lg:text-white lg:flex lg:justify-start lg:pt-6 hover:text-3xl'>
                  {name}
                </h1>
              </Link>
              {/* -------- VISIBLE ONLY ON LARGE SCREENS --------  */}
              <div
                className='w-full h-full items-center justify-start px-4 py-2 hidden
                            lg:flex'>
                <div className='w-full h-full flex items-center justify-end'>
                  <div className='-mr-5 z-10'>
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
                        <div key={uuidv4()} className='lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white m-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out'>
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
                              <h2 className='title-font font-medium'>
                                {prod.name}
                              </h2>
                              <span className='mt-1 text-black'>
                                ₹
                                {Math.round(
                                  prod.total - prod.total * prod.discount * 0.01
                                )}
                              </span>
                              <span className='mt-1 line-through text-gray'>
                                ₹{prod.total}
                              </span>
                              <span className='title-font font-medium text-[#088240]'>
                                {prod.discount}% OFF
                              </span>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="relative">
            <Image key={uuidv4()} className="animate-spin" src="/disc.png" width={400} height={400}/>
            <div className='w-[190px] h-[190px] rounded-full overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cover objects-center rounded-full'>
              <Image
                className='animate-spin object-fill w-full h-full'
                alt={name}
                src={imgUrl}
                width={500}
                height={500}
              />
            </div>
            </div>
            <h1
              className='text-black flex justify-center px-10 pt-4 text-xl font-bold text-center
                          lg:text-white lg:hidden lg:justify-start lg:pt-6'>
              {name}
            </h1>
            <Link href={`/products/${id}`}>
              <button
                className='bg-primary text-white flex justify-center items-center rounded-lg text-sm px-4 py-2 my-4 hover:bg-[#e62c61] transition-all duration-150 ease-in-out
                              lg:hidden'>
                View More
              </button>
            </Link>
          </span>
        </div>
      </>
    );
}
