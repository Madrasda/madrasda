import Link from "next/link";
import Image from "next/image";

export default function LeftsideDisc () {
    return (
        <>
        <div className='overflow-hidden mx-auto px-10
                          lg:my-4 lg:pr-10 lg:px-0'>
            <span className='bg-none flex flex-col justify-center items-center w-full
                             lg:flex-row lg:bg-bg md:rounded-l-non md:rounded-r-full'>

            <div className='flex flex-col w-full'>
            <Link href="/productlist">
            <h1 className='text-black justify-center px-10 pt-4 text-xl font-bold text-center hidden transition-all duration-300 ease-in-out
                          lg:text-white lg:flex lg:justify-start lg:pt-6 hover:text-2xl'>LOKI CINEMATIC UNIVERSE</h1>
            </Link>
            {/* -------- VISIBLE ONLY ON LARGE SCREENS --------  */}
            <div className='w-full h-full items-center justify-start px-4 py-2 hidden
                            lg:flex'>            
            <div className='w-full h-full flex items-center justify-end'>

              <div className='-mr-5 z-10'>
              <Link href="/productlist">
                  <Image src="/prod-comp-showmore-left.png" width={50} height={50} />
              </Link>
              </div>

              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="/productDetails/[id]">
                <div className="block relative h-36 rounded overflow-hidden">
                  <Image src="/vikram-tee.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
                <div className="mt-4">
                  <div className='flex flex-row items-center w-full'>
                      <div className='flex justify-start'>
                        <h3 className="text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                      </div>
                      <div className='flex justify-end w-full'>
                        <Image src="/wishlist.png" width={25} height={25} className=''/>
                      </div>
                  </div>
                  <h2 className="title-font text-lg font-medium">Product Name</h2>
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>
              
              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="productdetails">
                <div className="block relative h-36 rounded overflow-hidden">
                  <Image src="/wakeup-hoodie.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
                <div className="mt-4">
                  <div className='flex flex-row items-center w-full'>
                      <div className='flex justify-start'>
                        <h3 className="text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                      </div>
                      <div className='flex justify-end w-full'>
                        <Image src="/wishlist.png" width={25} height={25} className=''/>
                      </div>
                  </div>
                  <h2 className="title-font text-lg font-medium">Product Name</h2>
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>

              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="/productDetails/[id]">
                <div className="block relative h-36 rounded overflow-hidden">
                  <Image src="/vikram-hoodie.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
                <div className="mt-4">
                  <div className='flex flex-row items-center w-full'>
                      <div className='flex justify-start'>
                        <h3 className="text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                      </div>
                      <div className='flex justify-end w-full'>
                        <Image src="/wishlist.png" width={25} height={25} className=''/>
                      </div>
                  </div>
                  <h2 className="title-font text-lg font-medium">Product Name</h2>
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>
            
              <div className="lg:w-[20%] md:w-1/2 p-4 w-full cursor-pointer bg-off-white mx-2 rounded drop-shadow-[8px_8px_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.4)] duration-300 ease-in-out">
              <Link href="/productDetails/[id]">
                <div className="block relative h-36 rounded overflow-hidden">
                  <Image src="/madrasda-bag.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
                <div className="mt-4">
                  <div className='flex flex-row items-center w-full'>
                      <div className='flex justify-start'>
                        <h3 className="text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                      </div>
                      <div className='flex justify-end w-full'>
                        <Image src="/wishlist.png" width={25} height={25} className=''/>
                      </div>
                  </div>
                  <h2 className="title-font text-lg font-medium">Product Name</h2>
                  <span className="mt-1 text-black text-lg">₹699</span>
                  <span>     </span>
                  <span className="mt-1 line-through text-gray">₹899</span>
                  <span>     </span>
                  <span className="title-font text-xs font-medium text-[#088240]">22% OFF</span>
                </div>
              </Link>
              </div>
            
            </div>
            </div>
            </div>

            <Image className="animate-spin" src="/disc-loki.svg" width={400} height={400}/>
            <h1 className='text-black flex justify-center px-10 pt-4 text-xl font-bold text-center
                          lg:text-white lg:hidden lg:justify-start lg:pt-6'>LOKI CINEMATIC UNIVERSE</h1>
            <Link href="/productlist">
            <button className='bg-primary text-white flex justify-center items-center rounded-lg text-sm px-4 py-2 my-4 hover:bg-[#e62c61] transition-all duration-150 ease-in-out
                              lg:hidden'>View More</button>
            </Link>
            </span>
          </div>
        </>
    )
}
