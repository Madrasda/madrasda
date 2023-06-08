import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="md:mt-20 relative text-gray body-font font-quest text-sm font-bold">
      <div className="">
        <div className="flex justify-center flex-wrap items-center w-full  absolute -top-8 md:-top-12 lg:-top-32">
          <Image
            className="w-[55px] md:w-[100px] lg:w-[170px] xl:w-[200px]"
            src="/actorkamal.png"
            width={200}
            height={200}
          />
          <Image
            className="w-[55px] md:w-[100px] lg:w-[170px] xl:w-[200px]"
            src="/actordanush.png"
            width={200}
            height={200}
          />
          <Image
            className="w-[55px] md:w-[100px] lg:w-[170px] xl:w-[200px]"
            src="/actorvijay.png"
            width={200}
            height={200}
          />
          <Image
            className="w-[55px] md:w-[100px] lg:w-[170px] xl:w-[200px]"
            src="/actorajith.png "
            width={200}
            height={200}
          />
          <Image
            className="w-[55px] md:w-[100px] lg:w-[170px] xl:w-[200px]"
            src="/actorvadivel.png"
            width={200}
            height={200}
          />
          <Image
            className="w-[55px] md:w-[100px] lg:w-[170px] xl:w-[200px]"
            src="/actorrajini.png"
            width={200}
            height={200}
          />
        </div>

        <div className="flex justify-center items-center bg-[#1A191C] mx-auto py-12 md:py-24">
          <Image src="/logo.png" width={120} height={120} alt="footer logo" />
        </div>
      </div>
      <div className="flex justify-center pb-16 mx-auto bg-[#1A191C]">
        <div className="flex flex-col md:flex-row justify-around md:text-left text-center order-first">
          <div className="w-fit px-4 mx-auto">
            <h2 className="title-font font-medium text-logo cursor-default tracking-widest justify-center text-lg mb-3">
              COMPANY
            </h2>
            <nav className="list-none mb-10 space-y-2">
              <li>
                <Link href="/about" className="text-white hover:text-gray">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms&conditions"
                  className="text-white hover:text-gray"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-gray">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/paymentstructure"
                  className="text-white hover:text-gray"
                >
                  Payment Structure
                </Link>
              </li>
              <li>
                <Link
                  href="return&refund"
                  className="text-white hover:text-gray"
                >
                  Return and Refund
                </Link>
              </li>
              <li>
                <Link
                  href="privacypolicy"
                  className="text-white hover:text-gray"
                >
                  Privacy policy
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-fit px-4 mx-auto">
            <h2 className="title-font font-medium text-logo cursor-default tracking-widest text-lg mb-3">
              CONNECT WITH US
            </h2>
            <nav
              className="list-none mb-10 flex flex-col items-center justify-center
                            md:items-start space-y-2"
            >
              <li>
                <div className="flex items-center justify-start">
                  <Image
                    src="/facebook-logo.png"
                    width={24}
                    height={24}
                    alt="facebook logo"
                  />
                  <Link
                    href="https://www.facebook.com/profile.php?id=100093296386138&mibextid=LQQJ4d"
                    className="text-white hover:text-gray"
                  >
                    Facebook
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <Image
                    src="/instagram-logo.png"
                    width={25}
                    height={25}
                    alt="facebook logo"
                  />
                  <Link
                    href="https://instagram.com/madrasda_offical?igshid=OGQ5ZDc2ODk2ZA=="
                    className="text-white hover:text-gray"
                  >
                    Instagram
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <Image
                    src="/mail-logo.png"
                    width={25}
                    height={25}
                    alt="mail logo"
                    className="p-1"
                  />
                </div>
              </li>
              {/* <li>
                <a className="text-white hover:text-gray">Fourth Link</a>
              </li> */}
            </nav>
          </div>
          {/* <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium text-logo cursor-default tracking-widest text-sm mb-3'>
              KEEP UP TO DATE
            </h2>
            <div className='flex justify-center'>
              <div className='w-fit px-2'>
                <label for="footer-field" className="leading-7 text-sm text-gray">Email</label>
                <input
                  type='text'
                  id='footer-field'
                  name='footer-field'
                  placeholder='Email'
                  className='w-300 bg-black bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-primary focus:border-primary outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                />
              </div>
              <button
                className='flex-shrink-0 flex items-center text text-white bg-primary border-0 py-2 px-2
               focus:outline-none hover:bg-[#56510b] rounded'>
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="bg-black">
        <div className="container flex items-center justify-center px-5 py-6 mx-auto">
          <p className="text-xs text-center text-white mt-4 tracking-[0.15rem]">
            Copyright © 2023 Madrasda Pvt Ltd, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
