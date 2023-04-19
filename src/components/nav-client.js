import Image from "next/image"
import Link from "next/link"
import CartModal from "./cart-modal"
import { css, Dropdown } from "@nextui-org/react";


export default function NavClient() {
  const toggleMenu = () => {
    var menu = document.getElementById("mobile_menu");
    menu.classList.toggle("hidden");
    console.log("menu toggled");
  }
  return (
    <>
    <header className="font-algeria bg-bg text-white px-8 fixed z-20 w-full">
        <div className="justify-center items-center w-full hidden md:flex">
        <Link href="/">
          <Image src="/logo.png" width={90} height={90}/>
        </Link>
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
            <nav className="md:mr-auto lg:ml-10 md:py-1 text-sm flex flex-wrap items-center justify-center font-bold">
              
              <Dropdown>
                  <Dropdown.Button flat css={{
                    background: '#1A1A1C',
                    fontFamily: '$algeria',
                    fontWeight: '$bold',
                    color: 'White',
                  }}
                  >SHOP</Dropdown.Button>
                  <Dropdown.Menu aria-label="Static Actions" css={{
                    fontFamily:'$sans',
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

              <Link href="/productlist" className="font-bold">BESTSELLERS</Link>

              <Dropdown>
                <Dropdown.Button flat css={{
                  background: '#1A1A1C',
                  fontFamily: '$sans',
                  fontWeight: '$bold',
                  color: 'White',
                }}
                >CATEGORIES</Dropdown.Button>
                <Dropdown.Menu aria-label="Static Actions" css={{
                  fontFamily:'$sans',
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
          <nav className="flex flex-col items-center justify-center">
                <Dropdown>
                  <Dropdown.Button flat css={{
                    background: '#1A1A1C',
                    fontFamily: '$algeria',
                    fontWeight: '700',
                    color: 'White',
                  }}
                  >SHOP</Dropdown.Button>
                  <Dropdown.Menu aria-label="Static Actions" css={{
                    fontFamily:'$sans',
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

              <Link href="/productlist" className="font-semibold">BESTSELLERS</Link>

              <Dropdown>
                <Dropdown.Button flat css={{
                  background: '#1A1A1C',
                  fontFamily: '$sans',
                  fontWeight: '700',
                  color: 'White',
                }}
                >CATEGORIES</Dropdown.Button>
                <Dropdown.Menu aria-label="Static Actions" css={{
                  fontFamily:'$sans',
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

              <div className="flex my-4 justify-around items-center w-full">
                <Link href="/login">
                  <Image src="/user-icon.png" width={20} height={20} className="cursor-pointer"/>
                </Link>
                <CartModal/>
              </div>
          </nav>
        </div>
        </div>
        </div>
      </header>
      
    </>
  )
}