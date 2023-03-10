import Image from "next/image"
import Link from "next/link"

export default function NavAdmin() {
  return (
    <>
    <header className="bg-bg text-white font-algeria py-8 px-8 fixed z-20 h-screen">
        <div className="flex flex-col items-center w-full h-full">
        <Link href="/">
            <Image src="/logo.png" width={90} height={90}/>
        </Link>
            <div className="container flex flex-wrap flex-col h-full">
                <nav className="text-sm flex flex-col flex-wrap items-start h-full font-bold">
                    <div className="flex flex-wrap justify-center items-center py-4">
                        <Image src="/vendors-icon.png" width={30} height={30}/>
                        <Link href="/admin/vendorlist" className="ml-2">My Vendors</Link>
                    </div>
                    <div className="flex flex-wrap justify-center items-center py-4">
                        <Image src="/service-details.png" width={30} height={30}/>
                        <Link href="/admin/servicedetails" className="ml-2">Service Details</Link>
                    </div>
                    <div className="flex flex-wrap justify-center items-center py-4">
                        <Image src="/comment-dots.png" width={30} height={30}/>
                        <Link href="/admin/queries" className="ml-2">Queries and Feedback</Link>
                    </div>
                    <div className="flex flex-wrap justify-center items-center py-4">
                        <Image src="/product-icon.png" width={30} height={30}/>
                        <Link href="/admin/myproducts" className="ml-2">My Products</Link>
                    </div>
                    <div className="flex flex-wrap justify-center items-center py-4">
                        <Image src="/payments-icon.png" width={30} height={30}/>
                        <Link href="/admin/payments" className="ml-2">Payments</Link>
                    </div>
                    <div className="flex flex-wrap justify-center items-center py-4">
                        <Image src="/customerdetails-icon.png" width={30} height={30}/>
                        <Link href="/admin/customerdetails" className="ml-2">Customer Details</Link>
                    </div>
                    <div className="flex flex-wrap justify-center items-center py-4">
                        <Image src="/hot-seller.png" width={30} height={30}/>
                        <Link href="/admin/hotsellers" className="ml-2">Hot Sellers</Link>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    </>
  )
}