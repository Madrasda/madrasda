import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function MockupModel() {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full h-full cursor-pointer bg-off-white m-5 rounded drop-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.3)] duration-200 ease-in-out">
            <Link href="/vendor/viewprod"> 
            <div className="block relative h-fit rounded overflow-hidden">
                <Image src="/v-tee.png" 
                alt="ecommerce" 
                height={1080}
                width={1920} 
                className="object-contain object-center w-full h-full" />
            </div>
            <div className="mt-4">
                <h3 className="text-base title-font">Vikram Hoodies</h3>
                <div className="flex">
                    <h2 className="title-font text-sm text-gray">Technique:</h2>
                    <p className="pl-1 text-gray text-sm">PRINT</p>
                </div>
                <span className="mt-1 text-gray pr-1 text-sm">Sizes:</span>
                <span className="mt-1 text-gray pr-1 text-sm">S,M,L,XL,XXL,XXXL,4XL,5XL </span>
            </div>
            </Link>
        </div>
  )
}
