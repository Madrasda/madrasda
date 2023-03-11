import Head from 'next/head';
import Image from 'next/image';
import ClientLayout from '@/components/layout-client';

export default function ProductDetails (props) {
  return (
    <>
    <Head>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.png" />
      <title>Madrasda | View Product</title>
    </Head>

    <ClientLayout>
    <section className="text-black body-font font-algeria overflow-hidden">
      <div className="px-5 py-24 mx-auto flex justify-center">
      <div className='flex flex-col justify-center items-center'>
        <img
            alt="ecommerce"
            className="w-24 aspect-16/9 m-2"
            src="/v-tee.png"
        />
        <img
            alt="ecommerce"
            className="w-24 aspect-16/9 m-2"
            src="/v-tee.png"
        />
        <img
            alt="ecommerce"
            className="w-24 aspect-16/9 m-2"
            src="/v-tee.png"
        />
      </div>
        <div className="lg:w-4/5 flex justify-start flex-row flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-[620px] h-64 object-contain object-center rounded"
            src="/v-tee.png"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Vikram Collection
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              Round Neck Solid Mens T-Shirt
            </h1>
            <div className="flex mb-4 items-center">
              <p className='text-sm mr-1'>4.0</p>
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`w-4 h-4 text-[#ffd700]`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`w-4 h-4 text-[#ffd700]`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`w-4 h-4 text-[#ffd700]`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`w-4 h-4 text-[#ffd700]`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`w-4 h-4 text-[#ffd700]`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-gray-600 ml-2 italic text-sm">540 Reviews</span>
              </span>
            </div>
            <div className='flex flex-row items-baseline'>
              <span className="title-font font-medium text-2xl text-gray-900 mr-2 flex justify-center">
                ₹699
              </span>
              <span className="title-font line-through font-small text-lg text-gray-600 mr-2 flex justify-center">
                ₹899
              </span>
              <span className='bg-primary rounded-lg mr-2 px-2 py-1 scale-75 text-base text-white flex justify-center'>
                23% off
              </span>
              </div>
             
            <div className="mt-6">Colors</div>
            <div className="flex items-center mt-3 mb-3">
              <div className="flex">
                <div className='flex flex-col justify-center items-center px-2'>
                  <button className="border-2 border-gray bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                  <p className='text-sm'>Black</p>
                </div>
                <div className='flex flex-col justify-center items-center px-2'>
                  <button className="border-2 border-gray ml-1 bg-[#4A2129] rounded-full w-6 h-6 focus:outline-none"></button>
                  <p className='text-sm'>Maroon</p>
                </div>
                <div className='flex flex-col justify-center items-center px-2'>
                  <button className="border-2 border-gray ml-1 bg-gray rounded-full w-6 h-6 focus:outline-none"></button>
                  <p className='text-sm'>Gray</p>
                </div>
                <div className='flex flex-col justify-center items-center px-2'>
                  <button className="border-2 border-gray ml-1 bg-[#281477] rounded-full w-6 h-6 focus:outline-none"></button>
                  <p className='text-sm'>Blue</p>
                </div>
                <div className='flex flex-col justify-center items-center px-2'>
                  <button className="border-2 border-gray ml-1 rounded-full w-6 h-6 focus:outline-none"></button>
                  <p className='text-sm'>White</p>
                </div>
              </div>
            </div>

            <span className= "title-font font-medium underline text-black text-xs ml-64">Size Guide</span>
            <div className="flex items-center">
                <div className="relative">
                <button className="w-10 justify center text-justify-center mr-5 text-gray transition-colors duration-150 border border-gray rounded-lg focus:shadow-outline hover:bg-white hover:text-gray">XS</button>
                <button className="w-10 justify center text-justify-center mr-5  text-primary transition-colors duration-150 border border-gray rounded-lg focus:shadow-outline hover:bg-primary hover:text-white">S</button>
                <button className="w-10 justify center text-justify-center mr-5 text-primary transition-colors duration-150 border border-gray rounded-lg focus:shadow-outline hover:bg-primary hover:text-white">M</button>
                <button className="w-10 justify center text-justify-center mr-5 text-primary transition-colors duration-150 border border-gray rounded-lg focus:shadow-outline hover:bg-primary hover:text-white">L</button>
                <button className="w-10 justify center text-justify-center mr-5 text-primary transition-colors duration-150 border border-gray rounded-lg focus:shadow-outline hover:bg-primary hover:text-white">XL</button>
                <button className="w-10 justify center text-justify-center mr-5 text-primary transition-colors duration-150 border border-gray rounded-lg focus:shadow-outline hover:bg-primary hover:text-white">XXL</button>
                </div>
              </div>
              <br></br>
              <div className="flex items-center h-10 w-32">
                <h2 className="w-full text-black mr-5 text-sm font-semibold">Qty</h2>
                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                    <button data-action="decrement" className=" bg-white text-center border border-gray text-primary hover:text-primary hover:bg-gray h-full w-20 rounded-l cursor-pointer outline-none">
                    <span className="m-auto text-2xl font-thin">-</span>
                    </button>
                    <input className="border border-gray focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-primary focus:text-primary md:text-basecursor-default flex items-center text-primary outline-none" value="0" onChange></input>
                        <button data-action="increment" className="bg-white text-center border border-gray text-primary hover:text-primary hover:bg-gray h-full w-20 rounded-r cursor-pointer">
                    <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                </div>
            </div>
            <br></br>
            <div className="flex">
            <button className= "flex ml-6 text-justify-center mr-10 text-white bg-[#a5153F] border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded">
                Buy Now
              </button>
              <button className= "flex ml-10 mr-10 text-justify-center text-white bg-[#a5153F] border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded">
                Wishlist
              </button>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </section>
    <div className='p-10 font-algeria'>
    <div className='border-black border-2 rounded-xl scale-[90%]'>
    <div className='mb-4'>
      <div className='relative'>
        <h2 className='font-algeria font-semibold text-xl flex justify-center items-center w-full
                      m-0 absolute top-[50%] left-0 right-0 bottom-0 -z-1'>
          <span className='bg-white px-8 py-4 rounded-full text-black'>
            SUGGESTED DEALS
          </span>
        </h2>
      </div>
    </div>

    <section className="text-gray-600 body-font">
      <div className="px-5 py-10 mx-26">
        <div className="flex">

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-10 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
            <a className="block relative h-48 rounded overflow-hidden">
              <Image src="/vikram-tee.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
            </a>
            <div className="mt-4">
              <div className='flex flex-row items-center w-full'>
                  <div className='flex justify-start'>
                    <h3 className="text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  </div>
                  <div className='flex justify-end w-full'>
                    <Image src="/wishlist.png" width={25} height={25} className=''/>
                  </div>
              </div>
              <h2 className="title-font text-lg font-medium">Product Name</h2>
              <span className="mt-1 text-black text-lg pr-1">₹699</span>
              <span className="mt-1 line-through text-gray pr-1">₹899</span>
              <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-10 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
            <a className="block relative h-48 rounded overflow-hidden">
              <Image src="/vikram-hoodie.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
            </a>
            <div className="mt-4">
              <div className='flex flex-row items-center w-full'>
                  <div className='flex justify-start'>
                    <h3 className="text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  </div>
                  <div className='flex justify-end w-full'>
                    <Image src="/wishlist.png" width={25} height={25} className=''/>
                  </div>
              </div>
              <h2 className="title-font text-lg font-medium">Product Name</h2>
              <span className="mt-1 text-black pr-1">₹699</span>
              <span className="mt-1 line-through text-gray pr-1">₹899</span>
              <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-10 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
            <a className="block relative h-48 rounded overflow-hidden">
              <Image src="/wakeup-hoodie.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
            </a>
            <div className="mt-4">
              <div className='flex flex-row items-center w-full'>
                  <div className='flex justify-start'>
                    <h3 className="text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  </div>
                  <div className='flex justify-end w-full'>
                    <Image src="/wishlist.png" width={25} height={25} className=''/>
                  </div>
              </div>
              <h2 className="title-font text-lg font-medium">Product Name</h2>
              <span className="mt-1 text-black pr-1">₹699</span>
              <span className="mt-1 line-through text-gray pr-1">₹899</span>
              <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-10 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
            <a className="block relative h-48 rounded overflow-hidden">
              <Image src="/madrasda-bag.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
            </a>
            <div className="mt-4">
              <div className='flex flex-row items-center w-full'>
                  <div className='flex justify-start'>
                    <h3 className="text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  </div>
                  <div className='flex justify-end w-full'>
                    <Image src="/wishlist.png" width={25} height={25} className=''/>
                  </div>
              </div>
              <h2 className="title-font text-lg font-medium">Product name</h2>
              <span className="mt-1 text-black pr-1">₹699</span>
              <span className="mt-1 line-through text-gray pr-1">₹899</span>
              <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
    </div>

    </ClientLayout>
    </>
  );
}
