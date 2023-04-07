import Image from "next/image"
import Link from "next/link"
import CartModal from "./cart-modal"
import { css, Dropdown } from "@nextui-org/react";


export default function NavClient() {
  return (
    <>
    <header className="font-algeria bg-bg text-white px-8 fixed z-20 w-full hidden lg:block">
        <div className="flex justify-center items-center w-full">
        <Link href="/">
          <Image src="/logo.png" width={90} height={90}/>
        </Link>
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
            <nav className="md:mr-auto md:ml-10 md:py-1 text-sm flex flex-wrap items-center justify-center font-bold">
              
              <Dropdown>
                  <Dropdown.Button flat css={{
                    background: '#1A1A1C',
                    fontFamily: 'Algeria Sans',
                    fontWeight: '$bold',
                    color: 'White',
                  }}
                  >SHOP</Dropdown.Button>
                  <Dropdown.Menu aria-label="Static Actions" css={{
                    fontFamily:'Algeria Sans',
                  }}>
                    <Dropdown.Item key="men">
                        <Link href="/productlist">Men</Link>
                    </Dropdown.Item>
                    <Dropdown.Item key="women">
                        <Link href="/productlist">Women</Link>
                    </Dropdown.Item>
                    <Dropdown.Item key="kids">
                        <Link href="/productlist">Kids</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              <Link href="/productlist">BESTSELLERS</Link>

              <Dropdown>
                <Dropdown.Button flat css={{
                  background: '#1A1A1C',
                  fontFamily: 'Algeria Sans',
                  fontWeight: '$bold',
                  color: 'White',
                }}
                >CATEGORIES</Dropdown.Button>
                <Dropdown.Menu aria-label="Static Actions" css={{
                  fontFamily:'Algeria Sans',
                }}>
                  <Dropdown.Item key="khkk">
                      <Link href="/productlist">House of Kaadhar</Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="lcu">
                      <Link href="/productlist">LCU</Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="red giant">
                      <Link href="/productlist">Red Giant Productions</Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="Vjs">
                      <Link href="/productlist">Vijay Sethupathi</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </nav>
        </div>
        <div className="flex flex-row-reverse items-center mr-6">
            <Link href="/login">
              <Image src="/user-icon.png" width={20} height={20} className="ml-10 cursor-pointer"/>
            </Link>
            <CartModal/>
        </div>
        </div>
    </header>
    </>
  )
}