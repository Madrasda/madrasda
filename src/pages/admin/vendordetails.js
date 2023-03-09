import Head from "next/head";
import LineGraph from "@/components/linegraph";
import Image from "next/image";
import AdminLayout from "@/components/layout-admin";

export default function VendorDetails () {
    return (
        <>
            <Head>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo.png" />
            <title>Madrasda | Vendor Details</title>
            </Head>

            <AdminLayout>
                <main className="body-font ml-44 overflow-hidden">
                <div className="px-5 my-10 mx-auto">
                <h1 className="text-3xl text-primary ml-24 mt-30">MY VENDORS</h1>
                
                <div className="ml-24 mt-10 flex items-center">
                    <Image className="rounded-3xl" src="/myvendor-vikram.png" width={100} height={100} />
                    <h2 className="p-3 font-bold text-xl">KAMAL HASSAN HOUSE OF KHADDAR</h2>
                </div>
                
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-14 mx-auto">
                        <div className="flex flex-wrap -m-4 text-center">
                            <div className="p-4 w-1/3">
                                <h1 className="title-font font-bold text-xl">Total Products</h1>
                                <h2 className="title-font font-bold text-3xl text-primary">52</h2>
                                <p className="leading-relaxed text-xs">40% more than previous 28 days</p>
                            </div>
                            <div className="p-4 w-1/3">
                                <h1 className="title-font font-bold text-xl">Total Orders</h1>
                                <h2 className="title-font font-bold text-3xl text-primary">1002</h2>
                                <p className="leading-relaxed text-xs">460% more than previous 28 days</p>
                            </div>
                            <div className="p-4 w-1/3">
                                <h1 className="title-font font-bold text-xl">Total Profit Earned</h1>
                                <h2 className="title-font font-bold  text-3xl text-primary">₹150254</h2>
                                <p className="leading-relaxed text-xs">460% more than previous 28 days</p>
                                <p className="leading-relaxed text-xs text-primary font-bold underline">Withdraw</p>
                            </div>
                        </div>
                    </div>  
                </section>

                <div className='ml-20 flex justify-center items-center'>
                    <LineGraph />
                </div>

                <div className="flex flex-col justify-center items-center -mt-80 ml-20">
                    <h1 className="text-primary text-4xl font-semibold">WOAH!</h1>
                    <div className="flex text-lg justify-center items-center w-1/3">
                        <h2 className="p-1">We have sold</h2>
                        <h3 className="text-primary p-1 font-semibold text-2xl">10</h3>
                        <h2 className="p-1">products today!</h2>
                    </div>
                </div>

                <div className="bg-[url('/templates-bg.png')] ml-20 bg-no-repeat bg-cover mt-20">
                    <h1 className="pl-10 pt-10 text-3xl text-white font-semibold">YOUR TEMPLATES</h1>
                    <div className="flex justify-around items-center py-10 flex-wrap">
                        <Image src="/your-templates.png" width={200} height={233.33} />
                        <Image src="/your-templates.png" width={200} height={233.33} />
                        <Image src="/your-templates.png" width={200} height={233.33} />
                    </div>
                    <div className="flex justify-around items-center py-10 flex-wrap">
                        <Image src="/your-templates.png" width={200} height={233.33} />
                        <Image src="/your-templates.png" width={200} height={233.33} />
                        <Image src="/your-templates.png" width={200} height={233.33} />
                    </div>
                </div>

                <div className="bg-[url('/templates-bg.png')] ml-20 bg-no-repeat bg-cover mt-20">
                    <h1 className="pl-10 pt-10 text-3xl text-white font-semibold">TOP SELLERS THIS WEEK</h1>
                    <div className="flex py-10 justify-around flex-wrap">
                        <div className="flex flex-col items-center pt-16">
                            <Image src="/your-templates.png" width={200} height={233.33} className="object-contain"/>
                            <div className="py-4 px-5 z-1 -mt-4 w-fit border-4 border-primary rounded-full bg-white text-xl text-primary font-semibold italic">#2</div>
                        </div>
                        <div className="flex flex-col items-center pb-26">
                            <Image src="/your-templates.png" width={200} height={233.33} className="object-contain"/>
                            <div className="py-4 px-5 z-1 -mt-4 w-fit border-4 border-primary rounded-full bg-white text-xl text-primary font-semibold italic">#1</div>
                        </div>
                        <div className="flex flex-col items-center pt-32">
                            <Image src="/your-templates.png" width={200} height={233.33} className="object-contain"/>
                            <div className="py-4 px-5 z-1 -mt-4 w-fit border-4 border-primary rounded-full bg-white text-xl text-primary font-semibold italic">#3</div>
                        </div>
                    </div>
                </div>

                </div>
                </main>
            </AdminLayout>
        </>
    )
}