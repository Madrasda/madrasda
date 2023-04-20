import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export default function NavAdmin() {
    const router = useRouter();
    const currentRoute = router.pathname;

    const logOut = async () => {
        localStorage.removeItem("token");
        router.push("/admin");
    }
    const toggleMenu = () => {
        var menu = document.getElementById("mobile_menu");
        menu.classList.toggle("hidden");
        console.log("menu toggled");
      }
  return (
    <>
    <header className="bg-bg text-white font-algeria py-8 fixed z-20 h-screen overflow-y-auto no-scrollbar hidden md:block">
        <div className="flex flex-col items-center w-full h-full">
        <Link href="/">
            <Image src="/logo.png" width={90} height={90} priority alt="logo"/>
        </Link>

        <Link href="/admin" onClick={logOut}>
            <div className="bg-none w-52 px-10 py-2 font-bold">
                <div className="flex justify-start items-center py-4">
                    <Image src="/user-icon.png" className="w-auto h-auto" width={20} height={20} alt="logo"/>
                    <h3 className="ml-2">Logout</h3>
                </div>
            </div>
        </Link>

        <div className="container flex flex-wrap flex-col h-full pt-4">
            <nav className="text-sm flex flex-col items-start h-full font-bold">

                <Link href="/admin/vendorlist">
                    <div className={currentRoute === '/admin/vendorlist' || currentRoute === '/admin/vendordetails' || currentRoute === '/admin/vendorlist/*' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                        <div className="flex justify-start items-center py-4">
                            <Image src="/vendors-icon.png" className="w-auto h-auto" width={30} height={30} alt="logo"/>
                            <h3 className="ml-2">My Vendors</h3>
                        </div>
                    </div>
                </Link>
                
                <Link href="/admin/servicedetails">
                    <div className={currentRoute === '/admin/servicedetails' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                        <div className="flex justify-start items-center py-4">
                            <Image src="/service-details.png" className="w-auto h-auto" width={30} height={30} alt="logo"/>
                            <h3 className="ml-2">Service Details</h3>
                        </div>
                    </div>
                </Link>

                <Link href="/admin/queries">
                    <div className={currentRoute === '/admin/queries' || currentRoute === '/admin/resolvedqueries' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                        <div className="flex justify-start items-center py-4">
                            <Image src="/comment-dots.png" className="w-auto h-auto" width={30} height={30} alt="logo"/>
                            <h3 className="ml-2">Queries and Feedback</h3>
                        </div>
                    </div>
                </Link>

                <Link href="/admin/myproducts">
                    <div className={currentRoute === '/admin/myproducts' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                        <div className="flex justify-start items-center py-4">
                            <Image src="/product-icon.png" className="w-auto h-auto" width={30} height={30} alt="logo"/>
                            <h3 className="ml-2">Mockups</h3>
                        </div>
                    </div>
                </Link>

                <Link href="/admin/payments">
                    <div className={currentRoute === '/admin/payments' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                        <div className="flex justify-start items-center py-4">
                            <Image src="/payments-icon.png" className="w-auto h-auto" width={30} height={30}/>
                            <h3 className="ml-2">Payments</h3>
                        </div>
                    </div>
                </Link>

                <Link href="/admin/customerdetails">
                    <div className={currentRoute === '/admin/customerdetails' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                        <div className="flex justify-start items-center py-4">
                            <Image src="/customerdetails-icon.png" className="w-auto h-auto" width={30} height={30}/>
                            <h3 className="ml-2">Customer Details</h3>
                        </div>
                    </div>
                </Link>

                <Link href="/admin/hotsellers">
                    <div className={currentRoute === '/admin/hotsellers' ? "bg-primary w-52 px-8" : "bg-none w-52 px-8" }>
                        <div className="flex justify-start items-center py-4">
                            <Image src="/hot-seller.png" className="w-auto h-auto" width={30} height={30}/>
                            <h3 className="ml-2">Hot Sellers</h3>
                        </div>
                    </div>
                </Link>

            </nav>
        </div>
        </div>
    </header>
    <header className="bg-bg text-white font-algeria px-8 overflow-y-auto no-scrollbar w-full fixed z-20">
    <div className="w-full flex md:hidden">
            <div className="flex flex-col w-full">
                <div className="flex">
                    <Link href="/">
                        <Image src="/logo.png" width={70} height={70}/>
                    </Link>
                    <div className="flex flex-row-reverse w-full items-center justify-start">
                        <Image src="/burger-icon.png" width={30} height={30} onClick={toggleMenu}/>
                    </div>
                </div>
            <div className="hidden" id="mobile_menu">

                <nav className="text-sm flex flex-col items-center w-full font-bold">
                <Link href="/admin/vendorlist" className="w-full">
                    <div className={currentRoute === '/admin/vendorlist' || currentRoute === '/admin/vendordetails' || currentRoute === '/admin/vendorlist/*' ? "bg-primary w-full md:w-52 px-8" : "bg-none w-full md:w-52 px-8" }>
                        <div className="flex justify-center md:justify-start items-center py-4 w-full">
                            <Image src="/vendors-icon.png" className="w-auto h-auto" width={30} height={30} alt="logo"/>
                            <h3 className="ml-2">My Vendors</h3>
                        </div>
                    </div>
                </Link>
                
                <Link href="/admin/servicedetails" className="w-full">
                    <div className={currentRoute === '/admin/servicedetails' ? "bg-primary w-full md:w-52 px-8" : "bg-none w-full md:w-52 px-8" }>
                        <div className="flex justify-center md:justify-start items-center py-4">
                            <Image src="/service-details.png" className="w-auto h-auto" width={30} height={30} alt="logo"/>
                            <h3 className="ml-2">Service Details</h3>
                        </div>
                    </div>
                </Link>

                <Link href="/admin/queries" className="w-full">
                    <div className={currentRoute === '/admin/queries' || currentRoute === '/admin/resolvedqueries' ? "bg-primary w-full md:w-52 px-8" : "bg-none w-full md:w-52 px-8" }>
                        <div className="flex justify-center md:justify-start items-center py-4">
                            <Image src="/comment-dots.png" className="w-auto h-auto" width={30} height={30} alt="logo"/>
                            <h3 className="ml-2">Queries and Feedback</h3>
                        </div>
                    </div>
                </Link>

                <Link href="/admin/myproducts" className="w-full">
                    <div className={currentRoute === '/admin/myproducts' ? "bg-primary w-full md:w-52 px-8" : "bg-none w-full md:w-52 px-8" }>
                        <div className="flex justify-center md:justify-start items-center py-4">
                            <Image src="/product-icon.png" className="w-auto h-auto" width={30} height={30} alt="logo"/>
                            <h3 className="ml-2">Mockups</h3>
                        </div>
                    </div>
                </Link>

                <Link href="/admin/payments" className="w-full"> 
                    <div className={currentRoute === '/admin/payments' ? "bg-primary w-full md:w-52 px-8" : "bg-none w-full md:w-52 px-8" }>
                        <div className="flex justify-center md:justify-start items-center py-4">
                            <Image src="/payments-icon.png" className="w-auto h-auto" width={30} height={30}/>
                            <h3 className="ml-2">Payments</h3>
                        </div>
                    </div>
                </Link>

                <Link href="/admin/customerdetails" className="w-full">
                    <div className={currentRoute === '/admin/customerdetails' ? "bg-primary w-full md:w-52 px-8" : "bg-none w-full md:w-52 px-8" }>
                        <div className="flex justify-center md:justify-start items-center py-4">
                            <Image src="/customerdetails-icon.png" className="w-auto h-auto" width={30} height={30}/>
                            <h3 className="ml-2">Customer Details</h3>
                        </div>
                    </div>
                </Link>

                <Link href="/admin/hotsellers" className="w-full">
                    <div className={currentRoute === '/admin/hotsellers' ? "bg-primary w-full md:w-52 px-8" : "bg-none w-full md:w-52 px-8" }>
                        <div className="flex justify-center md:justify-start items-center py-4">
                            <Image src="/hot-seller.png" className="w-auto h-auto" width={30} height={30}/>
                            <h3 className="ml-2">Hot Sellers</h3>
                        </div>
                    </div>
                </Link>
                </nav>
            </div>
            </div> 
    </div>
    </header>
    </>
  )
}