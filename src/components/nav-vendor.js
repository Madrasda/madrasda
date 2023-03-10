import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export default function NavVendor() {
    const router = useRouter();
    const currentRoute = router.pathname;
  return (
    <>
    <header className="bg-bg text-white font-algeria py-8 fixed z-20 h-screen">
        <div className="flex flex-col items-center w-full h-full">
            <Link href="/">
                <Image src="/logo.png" width={90} height={90}/>
            </Link>
            <Link href="#" className="flex flex-col items-center py-5">
                <Image src="/user-icon.png" width={30} height={30} className="py-2"/>
                <p className="text-sm">Go to profile</p>
            </Link>
            <div className="container flex flex-wrap flex-col h-full">
                <nav className="text-sm flex flex-col items-start h-full font-bold">

                    <Link href="/vendor/dashboard">
                        <div className={currentRoute === '/vendor/dashboard' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                            <div className="flex justify-start items-center py-4">
                                <Image src="/dashboard-icon.png" width={30} height={30}/>
                                <h3 className="ml-2">Dashboard</h3>
                            </div>
                        </div>
                    </Link>
                
                    <Link href="/vendor/templatelist">
                        <div className={currentRoute === '/vendor/templatelist' || currentRoute === '/vendor/createtemplate' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                            <div className="flex justify-start items-center py-4">
                                <Image src="/create-template-icon.png" width={30} height={30}/>
                                <h3 className="ml-2">Create Template</h3>
                            </div>
                        </div>
                    </Link>
                    
                    <div className={currentRoute === '/vendor/productupload' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                    <div className="flex justify-start items-center py-4">
                        <Image src="/upload-products-icon.png" width={30} height={30}/>
                        <Link href="/vendor/productupload" className="ml-2">Upload Products</Link>
                    </div>
                    </div>

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

                    <Link href="#">       
                        <div className={currentRoute === '/vendor/feedback' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
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