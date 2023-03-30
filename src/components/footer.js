import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-gray body-font font-algeria text-sm font-bold mt-4 z-30">
      <div className='flex justify-center items-center bg-bg mx-auto py-10'>  
      <Image src="/logo.png" width={120} height={120} alt="footer logo"/>
      </div>
      <div className="flex justify-center pb-16 mx-auto bg-bg">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-primary cursor-default tracking-widest text-sm mb-3">CUSTOMER SERVICE</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="" className="text-white hover:text-gray">Contact Us</Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray">Track Order</Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray">Return Order</Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray">Cancel Order</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-primary cursor-default tracking-widest text-sm mb-3">COMPANY</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="#" className="text-white hover:text-gray">About Us</Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray">Blog</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-primary cursor-default tracking-widest text-sm mb-3">CONNECT WITH US</h2>
            <nav className="list-none mb-10 flex flex-col items-center justify-center
                            md:items-start">
              <li>
                <div className='flex items-center justify-start'>
                  <Image src="/facebook-logo.png" width={24} height={24} alt="facebook logo" />
                  <Link href="#" className="text-white hover:text-gray">Facebook</Link>
                </div>
              </li>
              <li>
                <div className='flex items-center'>
                  <Image src="/instagram-logo.png" width={25} height={25} alt="facebook logo" />
                  <Link href="#" className="text-white hover:text-gray">Instagram</Link>
                </div>
              </li>
              <li>
                <div className='flex items-center'>
                  <Image src="/mail-logo.png" width={25} height={25} alt="mail logo" className='p-1' />
                  <Link href="mailto:support@madrasda.com" className="text-white hover:text-gray">Mail to support</Link>
                </div>
              </li>
              {/* <li>
                <a className="text-white hover:text-gray">Fourth Link</a>
              </li> */}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-primary cursor-default tracking-widest text-sm mb-3">KEEP UP TO DATE</h2>
            <div className="flex justify-center">
              <div className="w-fit px-2">
                {/* <label for="footer-field" className="leading-7 text-sm text-gray">Email</label> */}
                <input type="text" id="footer-field" name="footer-field" placeholder="Email" className="w-300 bg-black bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-primary focus:border-primary outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <button className="flex-shrink-0 flex items-center text text-white bg-primary border-0 py-2 px-2 focus:outline-none hover:bg-[#560b21] rounded">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container flex items-center justify-center px-5 py-6 mx-auto">
          <p className="text-xs text-center text-white mt-4 tracking-[0.15rem]">Copyright © 2023 Madrasda Pvt Ltd, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
