import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
export default function RightsideDisc ({name, id, imgUrl}) {
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
                          lg:my-4 lg:pl-10 lg:px-0'>
          <span
            className='bg-none flex flex-col justify-center items-center w-full
                            lg:bg-bg lg:flex-row md:rounded-l-full md:rounded-r-none'>
            <div className='w-[200px] h-[200px] rounded-full overflow-hidden'>
              <Image
                className='animate-spin object-cover w-full h-full'
                alt={name}
                src={imgUrl}
                width={500}
                height={500}
              />
            </div>

            <div className='flex flex-col w-full'>
              <Link href={`/products/${id}`}>
                <h1
                  className='text-black flex justify-center px-10 pt-4 text-xl font-bold text-center transition-all duration-300 ease-in-out
                          lg:text-white lg:justify-end lg:pt-6 hover:text-2xl'>
                  {name}
                </h1>
              </Link>

              {/* -------- VISIBLE ONLY ON LARGE SCREENS --------  */}
              <div
                className='w-full h-full items-center justify-start px-4 py-2 hidden
                            lg:flex'>
                {products &&
                  products.map((prod) => {
                    return (
                      <div className='lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white m-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out'>
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

                <div className='-ml-5 z-10 relative'>
                  <Link href={`/products/${id}`}>
                    <Image
                      src='/prod-comp-showmore-right.png'
                      width={50}
                      height={50}
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* -------- LARGE SCREEN CONTENT END -------- */}
            {/* -------- VISIBLE ON SMALL SCREENS ONLY -------- */}
            <Link href={`/products/${id}`}>
              <button
                className='bg-primary text-white flex justify-center items-center rounded-lg text-sm px-4 py-2 my-4 hover:bg-[#e62c61] transition-all duration-150 ease-in-out
                              lg:hidden'>
                View More
              </button>
            </Link>
            {/* -------- SMALL SCREEN CONTENT END -------- */}
          </span>
        </div>
      </>
    );
}
