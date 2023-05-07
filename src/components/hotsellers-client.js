import axios from "axios";
import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react"
import {uuidv4} from "@firebase/util";

export default function HotSellers() {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
      const response = await axios.get(
        "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/product/hotsellers"
      );
      setProducts(response.data);
    };

    useEffect(() => {
      getAllProducts();
    }, []);

    return (
      <section className='text-black body-font'>
        {products && (
          <div className='p-0 md:p-10 font-quest'>
            <div className='xl:border-shadowGrey md:border-[3px] rounded-xl scale-[90%]'>
              <div className='relative'>
                <h2
                  className='font-raj font-semibold text-xl flex justify-center items-center w-full
                      m-0 absolute top-[50%] left-0 right-0 bottom-0 -z-1'>
                  <span className='bg-bg tracking-widest font-raj text-xl md:text-4xl font-bold px-8 py-2 xl:py-4 rounded-full text-logo'>
                    HOTSELLERS
                  </span>
                </h2>
              </div>
              <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center mx-auto py-6'>
                {products &&
                  products.map((product) => {
                    return (
                      <Link
                        key={uuidv4()}
                        href={`/productDetails/${product.id}`}
                        className='col-span-1 w-40 md:w-56 xl:w-60 p-2 xl:p-4 h-fit cursor-pointer bg-off-white mx-auto my-3 md:my-4 xl:my-5 rounded
                        drop-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.3)]
                        duration-200 ease-in-out'>
                        <div className='block relative h-fit rounded overflow-hidden'>
                          <Image
                            src={product.colors[0].images[0]}
                            alt='ecommerce'
                            width={1080}
                            height={1920}
                            className='object-contain object-center w-full h-[130px] xl:h-[296px] block'
                          />
                        </div>
                        <div className='flex flex-col mt-4 font-quest'>
                          <h2 className='title-font text-base md:text-xl font-medium'>
                            {product.name}
                          </h2>
                          <span className='text-black text-lg'>
                            ₹{(product.total * (100 - product.discount)) / 100}
                          </span>
                          <span className='line-through text-bg'>
                            ₹{product.total}
                          </span>
                          <span className='title-font text-xs font-medium text-[#088240]'>
                            {product.discount}% OFF
                          </span>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </section>
    );
}
