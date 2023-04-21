import Image from "next/image";
import Link from "next/link";

export default function Error404Page () {
    return (  
        <>
           <div className="flex flex-col justify-center items-center w-full min-h-screen">
                <div className="flex flex-col justify-center items-center">
                    <Image src="/madrasdaoopsimg.png" height={200} width={200} className="ml-2"/>
                    <h3 className="text-3xl text-primary text-center p-2">Error 404</h3>
                    <h5 className="text-xl text-bg text-center p-2">Page not found</h5>
                    <p className="text-lg text-primary text-center p-2">The page you are looking for is not available currently or temporarily removed</p>
                    <Link href="/">
                    <button className="rounded-lg bg-primary text-white font-semibold px-4 py-3">Go to home</button>
                    </Link>
                </div>
           </div>
        </>
    );
}