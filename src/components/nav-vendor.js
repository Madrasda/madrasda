import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export default function NavVendor() {
    const router = useRouter();
    const currentRoute = router.pathname;
  return (
    <>
    <header className="bg-bg text-white font-algeria py-8 overflow-y-auto no-scrollbar fixed z-20 h-screen hidden md:block">
        <div className="flex flex-col items-center w-full h-full">
            <Link href="/">
                <Image src="/logo.png" width={90} height={90}/>
            </Link>
            <Link href="/vendor/vendorprofile" className="flex flex-col items-center py-5">
                <Image src="/user-icon.png" width={30} height={30} className="py-2"/>
                <p className="text-sm">Go to Profile</p>
            </Link>

            <Link href="/vendor">
                <div className="bg-none w-52 px-10 py-4 font-bold">
                    <div className="flex justify-start items-center py-4">
                        <Image src="/user-icon.png" width={20} height={20}/>
                        <h3 className="ml-2">Logout</h3>
                    </div>
                </div>
            </Link>

            <div className="container flex flex-wrap flex-col h-full">
                <nav className="text-sm flex flex-col items-start h-full font-bold">

                    <Link href="/vendor/dashboard">
                        <div className={currentRoute === '/vendor/dashboard' || currentRoute === '/vendor/designgallery' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                            <div className="flex justify-start items-center py-4">
                                <Image src="/dashboard-icon.png" width={30} height={30}/>
                                <h3 className="ml-2">Dashboard</h3>
                            </div>
                        </div>
                    </Link>
                
                    <Link href="/vendor/templatelist">
                        <div className={currentRoute === '/vendor/templatelist' || currentRoute === '/vendor/createtemplate' || currentRoute === '/vendor/viewprod' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                            <div className="flex justify-start items-center py-4">
                                <Image src="/create-template-icon.png" width={30} height={30}/>
                                <h3 className="ml-2">Create Template</h3>
                            </div>
                        </div>
                    </Link>
                    
                    <Link href="/vendor/productupload">
                        <div className={currentRoute === '/vendor/productupload' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                            <div className="flex justify-start items-center py-4">
                                <Image src="/upload-products-icon.png" width={30} height={30}/>
                                <h3 className="ml-2">Add Product Information</h3>
                            </div>  
                        </div>
                    </Link>

                    <Link href="/vendor/productlist">
                        <div className={currentRoute === '/vendor/productlist' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                            <div className="flex justify-start items-center py-4">
                                <Image src="/view-products-icon.png" width={30} height={30}/>
                                <h3 className="ml-2">View Products</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/vendor/analytics">
                        <div className={currentRoute === '/vendor/analytics' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                            <div className="flex justify-start items-center py-4">
                                <Image src="/analytics-icon.png" width={30} height={30}/>
                                <h3 className="ml-2">Analytics</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/vendor/feedback">       
                        <div className={currentRoute === '/vendor/feedback' || currentRoute === '/vendor/unresolvedqueries' || currentRoute === '/vendor/resolvedqueries' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                            <div className="flex justify-start items-center py-4">
                                <Image src="/feedback-icon.png" width={30} height={30}/>
                                <h3 className="ml-2">Feedback</h3>
                            </div>
                        </div>
                    </Link>
                </nav>
            </div>
        </div>
    </header>
    </>
  )
}