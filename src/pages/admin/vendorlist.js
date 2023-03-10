import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import SearchVendor from "@/components/search-vendor";
import AdminLayout from "@/components/layout-admin";

export default function VendorList () {
  return (
    <>
    <Head>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.png" />
      <title>Madrasda | Vendor List</title>
    </Head>
    
    <AdminLayout>
    <section className="body-font ml-32 overflow-hidden font-algeria">
      <div className="px-5 my-10 mx-auto">
        <h1 className="text-3xl text-primary ml-20">MY VENDORS</h1>
        <div className="flex items-center justify-center m-5">
          <SearchVendor />
        </div>
        <div className="flex flex-wrap justify-center">
          
        <div className="lg:w-1/6 md:w-1/2 p-4 min-h-full w-full h-80 cursor-pointer bg-off-white m-5 rounded drop-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.3)] duration-200 ease-in-out">
          <Link href="/admin/vendordetails">
            <div className="block relative h-fit rounded overflow-hidden">
                <Image src="/myvendor-vikram.png" 
                alt="ecommerce" 
                height={300}
                width={300} 
                className="object-contain object-center w-full h-full" />
            </div>
            <h3 className="text-base font-bold title-font mt-4 text-center flex justify-center items-center">KAMAL HASSAN HOUSE OF KHADDAR</h3>
          </Link>
        </div>

        <div className="lg:w-1/6 md:w-1/2 p-4 min-h-full w-full h-80 cursor-pointer bg-off-white m-5 rounded drop-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.3)] duration-200 ease-in-out">
          <Link href="/admin/vendordetails">
            <div className="block relative h-fit rounded overflow-hidden">
                <Image src="/myvendor-loki.png" 
                alt="ecommerce" 
                height={300}
                width={300} 
                className="object-contain object-center w-full h-full" />
            </div>
            <h3 className="text-base font-bold title-font mt-4 text-center flex justify-center items-center">LOKESH KANAGARAJ</h3>
          </Link>
        </div>

        <div className="lg:w-1/6 md:w-1/2 p-4 min-h-full w-full h-80 cursor-pointer bg-off-white m-5 rounded drop-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.3)] duration-200 ease-in-out">
          <Link href="/admin/vendordetails">
            <div className="block relative h-fit rounded overflow-hidden">
                <Image src="/myvendor-redgiant.png" 
                alt="ecommerce" 
                height={1080}
                width={1920} 
                className="object-contain object-center w-full h-full" />
            </div>
            <h3 className="text-base font-bold title-font mt-4 text-center flex justify-center items-center">RED GIANT PRODUCTIONS</h3>
          </Link>
        </div>

        <div className="lg:w-1/6 md:w-1/2 p-4 w-full h-96 flex items-center justify-center m-5 rounded duration-200 ease-in-out">  
          <Link href="#" >
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <Image src="/plus-icon.png" width={50} height={50}/>
            <p className="font-semibold text-base text-center">Add new vendor</p>
            <p className="font-light text-gray text-sm text-center">Add new vendors to your list</p>
          </div>
          </Link>
        </div>

        </div>
      </div>
    </section>
    </AdminLayout>
    </>
  );
}