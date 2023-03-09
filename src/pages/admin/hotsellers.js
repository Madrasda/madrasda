import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SearchVendor from "@/components/search-vendor";
import AdminLayout from "@/components/layout-admin";

export default function Hotsellers () {
    return (
        <>
            <Head>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo.png" />
            <title>Madrasda | Hotsellers</title>
            </Head>

            <AdminLayout>
                <main className="body-font ml-44 overflow-hidden">
                <div className="px-5 my-10 mx-auto">
                <h1 className="text-3xl text-primary ml-24 mt-10">HOTSELLERS</h1>
               
                <div className="flex flex-row justify-start items-center mt-10 ml-20 mr-20 text-sm p-2">
                    <SearchVendor />
                </div>

                <div className='mt-4 ml-20'>
                <section className="text-gray-600 body-font bg-[url('/templates-bg.png')] bg-no-repeat bg-cover">
                    <div className="px-5 py-10 mx-32">
                    <div className="flex">

                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-4 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
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
                                <h2 className="title-font text-base font-medium">Product Name</h2>
                                <span className="mt-1 text-black text-lg pr-1">₹699</span>
                                <span className="mt-1 line-through text-gray pr-1">₹899</span>
                                <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                            </div>
                        </Link>
                        </div>

                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-4 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
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
                                <h2 className="title-font text-base font-medium">Product Name</h2>
                                <span className="mt-1 text-black pr-1">₹699</span>
                                <span className="mt-1 line-through text-gray pr-1">₹899</span>
                                <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                            </div>
                        </Link>
                        </div>

                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-4 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
                        <Link href="/productdetails">
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
                                <h2 className="title-font text-base font-medium">Product Name</h2>
                                <span className="mt-1 text-black pr-1">₹699</span>
                                <span className="mt-1 line-through text-gray pr-1">₹899</span>
                                <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                            </div>
                        </Link>
                        </div>

                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-4 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
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
                                <h2 className="title-font text-base font-medium">Product name</h2>
                                <span className="mt-1 text-black pr-1">₹699</span>
                                <span className="mt-1 line-through text-gray pr-1">₹899</span>
                                <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-10">
                        <button className="text-white bg-primary p-2 rounded-lg text-sm">See More</button>
                    </div>
                    </div>
                </section>

                </div>
                </div>
                </main>
            </AdminLayout>
        </>
    )
}