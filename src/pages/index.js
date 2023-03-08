import Head from 'next/head'
import Carousel from '@/components/carousel'
import Image from 'next/image'
import Link from 'next/link'
import ClientLayout from '@/components/layout-client'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <title>Madrasda</title>
      </Head>
      
      <ClientLayout>

        <Carousel />

{/* -------- OFFICIAL MERCHANDISE START -------- */}
          <h1 className='font-algeria font-bold text-3xl my-10 px-10'>OFFICIAL MERCHANDISE</h1>
          
          <div className='my-4 pl-10'>
            <span className='bg-bg flex flex-row items-center rounded-l-full w-full'>
            <Image className="animate-spin" src="/disc-vikram.svg" width={400} height={400}/>
            
            <div className='w-full h-full flex items-center justify-start'>
              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="/productdetails" >
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image src="/vikram-tee.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
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
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>
              
              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="/productdetails" >
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image src="/wakeup-hoodie.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
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
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>

              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="/productdetails" >
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image src="/vikram-hoodie.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
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
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>
            
              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="/productdetails" >
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image src="/madrasda-bag.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
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
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>
            
            </div>
            </span>
          </div>



          <div className='my-4 pr-10'>
            <span className='flex flex-row items-center rounded-r-full bg-bg w-full'>
            <div className='w-full h-full flex items-center justify-end'>
              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="/productdetails">
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image src="/vikram-tee.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
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
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>
              
              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="productdetails">
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image src="/wakeup-hoodie.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
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
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>

              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="/productdetails">
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image src="/vikram-hoodie.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
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
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>
            
              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="/productdetails">
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image src="/madrasda-bag.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
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
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>
            
            </div>
            <Image className="animate-spin" src="/disc-loki.svg" width={400} height={400}/>
            </span>
          </div>


          <div className='my-4 pl-10'>
          <span className='bg-bg flex flex-row items-center rounded-l-full w-full'>
            <Image className="animate-spin" src="/disc-redgiant.svg" width={400} height={400}/>
            
            <div className='w-full h-full flex items-center justify-start'>
              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="/productdetails" >
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image src="/vikram-tee.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
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
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>
              
              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="/productdetails" >
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image src="/wakeup-hoodie.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
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
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>

              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="/productdetails" >
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image src="/vikram-hoodie.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
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
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>
            
              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="/productdetails" >
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image src="/madrasda-bag.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
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
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>
            
            </div>
            </span>
          </div>
          


          <div className='my-4 pr-10'>
            <span className='flex flex-row items-center rounded-r-full bg-bg w-full'>
            <div className='w-full h-full flex items-center justify-end'>
              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="/productdetails">
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image src="/vikram-tee.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
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
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>
              
              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="productdetails">
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image src="/wakeup-hoodie.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
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
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>

              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="/productdetails">
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image src="/vikram-hoodie.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
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
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>
            
              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="/productdetails">
                <div className="block relative h-48 rounded overflow-hidden">
                  <Image src="/madrasda-bag.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
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
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>
            
            </div>
            <Image className="animate-spin" src="/disc-vjs.svg" width={400} height={400}/>
            </span>
          </div>
{/* -------- OFFICIAL MERCHANDISE END -------- */}

{/* -------- BIGGEST DEALS START -------- */}
          <div className='mb-20'>
            <div className='relative'>
              <h2 className='font-algeria font-semibold text-xl flex justify-center items-center w-full
                            m-0 absolute top-[50%] left-0 right-0 bottom-0 -z-1 border-t-[2px] border-black'>
                <span className='bg-primary px-8 py-4 rounded-full text-white'>
                  BIGGEST DEALS
                </span>
              </h2>
            </div>
          </div>

          <section className="text-gray-600 body-font">
            <div className="px-5 py-10 mx-32">
              <div className="flex">

                <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
                  <Link href="/productdetails">
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
                  </Link>
                </div>

                <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
                  <Link href="/productdetails">
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
                  </Link>
                </div>

                <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
                  <Link href="/productdetails">
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
                  </Link>
                </div>

                <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
                  <Link href="/productdetails">
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
                  </Link>
                </div>

              </div>
            </div>
          </section>
{/* -------- BIGGEST DEALS END -------- */}
      </ClientLayout>
    </>
  )
}