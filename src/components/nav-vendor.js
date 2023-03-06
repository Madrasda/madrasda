import Image from "next/image"
import Link from "next/link"

export default function NavVendor() {
  return (
    <>
    <header className="bg-bg text-white font-algeria py-8 px-8 fixed z-20 h-screen">
        <div className="flex flex-col items-center w-full h-full">
            <Link href="/">
                <Image src="/logo.png" width={90} height={90}/>
            </Link>
            <Link href="/" className="flex flex-col items-center py-5">
                <Image src="/user-icon.png" width={30} height={30} className="py-2"/>
                <p className="text-sm">Go to profile</p>
            </Link>
            <div className="container flex flex-wrap flex-col h-full">
                <nav className="text-sm flex flex-col flex-wrap items-start h-full font-bold">
                    <div className="flex flex-wrap justify-center items-center py-4">
                        <Image src="/dashboard-icon.png" width={30} height={30}/>
                        <Link href="/" className="ml-2">Dashboard</Link>
                    </div>
                    <div className="flex flex-wrap justify-center items-center py-4">
                        <Image src="/create-template-icon.png" width={30} height={30}/>
                        <Link href="/" className="ml-2">Create Template</Link>
                    </div>
                    <div className="flex flex-wrap justify-center items-center py-4">
                        <Image src="/upload-products-icon.png" width={30} height={30}/>
                        <Link href="/" className="ml-2">Upload Products</Link>
                    </div>
                    <div className="flex flex-wrap justify-center items-center py-4">
                        <Image src="/view-products-icon.png" width={30} height={30}/>
                        <Link href="/" className="ml-2">View Products</Link>
                    </div>
                    <div className="flex flex-wrap justify-center items-center py-4">
                        <Image src="/analytics-icon.png" width={30} height={30}/>
                        <Link href="/" className="ml-2">Analytics</Link>
                    </div>
                    <div className="flex flex-wrap justify-center items-center py-4">
                        <Image src="/feedback-icon.png" width={30} height={30}/>
                        <Link href="/" className="ml-2">Feedback</Link>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    </>
  )
}