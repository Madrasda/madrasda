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
          <div className='p-10 font-algeria'>
            <div className='border-black border-2 rounded-xl scale-[90%]'>
              <div className='relative'>
                <h2
                  className='font-algeria font-semibold text-xl flex justify-center items-center w-full
                      m-0 absolute top-[50%] left-0 right-0 bottom-0 -z-1'>
                  <span className='bg-white px-8 py-4 rounded-full text-black'>
                    HOTSELLERS
                  </span>
                </h2>
              </div>
              <div className='flex flex-wrap justify-center'>
                {products &&
                  products.map((product) => {
                    return (
                      <Link
                        key={uuidv4()}
                        href={`/productDetails/${product.id}`}
                        className='lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-4 my-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out'>
                        <div className='block relative h-48 rounded overflow-hidden'>
                          <Image
                            src={product.colors[0].images[0]}
                            alt='ecommerce'
                            width={1080}
                            height={1920}
                            className='object-contain object-center w-full h-full block'
                          />
                        </div>
                        <div className='mt-4'>
                          <h2 className='title-font text-base font-medium'>
                            {product.name}
                          </h2>
                          <span className='mt-1 text-black text-lg pr-1'>
                            ₹{(product.total * (100 - product.discount) /100)}
                          </span>
                          <span className='mt-1 line-through text-gray pr-1'>
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
