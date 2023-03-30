import Image from "next/image"
import Link from "next/link"
import Search from "./search"
import { useEffect } from "react"
import CartModal from "./cart-modal"

export default function NavClient() {
  return (
    <>
    <header className="bg-bg text-white font-algeria px-8 fixed z-20 w-full hidden lg:block">
        <div className="flex justify-center items-center w-full">
        <Link href="/">
          <Image src="/logo.png" width={90} height={90}/>
        </Link>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav className="md:mr-auto md:ml-24 md:py-1 text-sm flex flex-wrap items-center justify-center font-bold">
              <Link href="/productlist" className="mr-8">MEN</Link>
              <Link href="/productlist" className="mr-8">WOMEN</Link>
              <Link href="/productlist" className="mr-8">KIDS</Link>
              <Link href="/productlist" className="mr-8">ACCESSORIES</Link>
            </nav>
        </div>
        <div className="flex flex-row-reverse items-center mr-6">
            <Link href="/login">
              <Image src="/user-icon.png" width={20} height={20} className="ml-10 cursor-pointer"/>
            </Link>
            <CartModal/>
            <Search />
        </div>
        </div>
    </header>
    </>
  )
}