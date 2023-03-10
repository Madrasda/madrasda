import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export default function NavAdmin() {
    const router = useRouter();
    const currentRoute = router.pathname;
  return (
    <>
    <header className="bg-bg text-white font-algeria py-8 fixed z-20 h-screen">
        <div className="flex flex-col items-center w-full h-full">
        <Link href="/">
            <Image src="/logo.png" width={90} height={90}/>
        </Link>
            <div className="container flex flex-wrap flex-col h-full">
                <nav className="text-sm flex flex-col flex-wrap items-start h-full font-bold">

                    <Link href="/admin/vendorlist">
                        <div className={currentRoute === '/admin/vendorlist' || currentRoute === '/admin/vendordetails' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                            <div className="flex justify-start items-center py-4">
                                <Image src="/vendors-icon.png" width={30} height={30}/>
                                <h3 className="ml-2">My Vendors</h3>
                            </div>
                        </div>
                    </Link>
                    
                    <Link href="/admin/servicedetails">
                        <div className={currentRoute === '/admin/servicedetails' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                            <div className="flex justify-start items-center py-4">
                                <Image src="/service-details.png" width={30} height={30}/>
                                <h3 className="ml-2">Service Details</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/admin/queries">
                        <div className={currentRoute === '/admin/queries' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                            <div className="flex justify-start items-center py-4">
                                <Image src="/comment-dots.png" width={30} height={30}/>
                                <h3 className="ml-2">Queries and Feedback</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/admin/myproducts">
                        <div className={currentRoute === '/admin/myproducts' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                            <div className="flex justify-start items-center py-4">
                                <Image src="/product-icon.png" width={30} height={30}/>
                                <h3 className="ml-2">My Products</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/admin/payments">
                        <div className={currentRoute === '/admin/payments' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                            <div className="flex justify-start items-center py-4">
                                <Image src="/payments-icon.png" width={30} height={30}/>
                                <h3 className="ml-2">Payments</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/admin/customerdetails">
                        <div className={currentRoute === '/admin/customerdetails' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                            <div className="flex justify-start items-center py-4">
                                <Image src="/customerdetails-icon.png" width={30} height={30}/>
                                <h3 className="ml-2">Customer Details</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/admin/hotsellers">
                        <div className={currentRoute === '/admin/hotsellers' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                            <div className="flex justify-start items-center py-4">
                                <Image src="/hot-seller.png" width={30} height={30}/>
                                <h3 className="ml-2">Hotellers</h3>
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