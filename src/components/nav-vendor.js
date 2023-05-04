import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import {useContext} from "react";
import {UserContext} from "../../context/context";

export default function NavVendor() {
    const router = useRouter();
    const currentRoute = router.pathname;
    const ctx = useContext(UserContext);
    const logout =async()=>{
        localStorage.removeItem("token");
        ctx.setIsLoggedIn(false);
        router.push("/vendor");
    }
    const toggleMenu = () => {
        var menu = document.getElementById("mobile_menu");
        menu.classList.toggle("hidden");
        console.log("menu toggled");
      }
  return (
    <>
      <header className='bg-bg text-white font-algeria py-8 overflow-y-auto no-scrollbar fixed z-20 h-screen hidden md:block'>
        <div className='flex flex-col items-center w-full h-full'>
          <Link href='/'>
            <Image src='/logo.png' width={90} height={90} />
          </Link>
          <Link
            href='/vendor/vendorprofile'
            className='flex flex-col items-center py-5 hover:bg-primary text-white w-full'>
            <Image
              src='/user-icon.png'
              width={30}
              height={30}
              className='py-2'
            />
            <p className='text-sm'>Go to Profile</p>
          </Link>

          <Link href='/vendor' onClick={logout}>
            <div className='bg-none w-52 px-10 py-4 font-bold hover:bg-primary text-white'>
              <div className='flex justify-start items-center py-4'>
                <h3 className='ml-2'>Logout</h3>
              </div>
            </div>
          </Link>

          <div className='container flex flex-wrap flex-col h-full'>
            <nav className='text-sm flex flex-col items-start h-full font-bold'>
              <Link href='/vendor/dashboard'>
                <div
                  className={
                    currentRoute === "/vendor/dashboard" ||
                    currentRoute === "/vendor/designgallery"
                      ? "bg-primary w-52 px-8 hover:bg-primary text-white"
                      : "bg-none w-52 px-8 hover:bg-primary text-white"
                  }>
                  <div className='flex justify-start items-center py-4'>
                    <Image src='/dashboard-icon.png' width={30} height={30} />
                    <h3 className='ml-2'>Dashboard</h3>
                  </div>
                </div>
              </Link>

              <Link href='/vendor/templatelist'>
                <div
                  className={
                    currentRoute === "/vendor/templatelist" ||
                    currentRoute === "/vendor/createtemplate" ||
                    currentRoute === "/vendor/viewprod"
                      ? "bg-primary w-52 px-8 hover:bg-primary text-white"
                      : "bg-none w-52 px-8 hover:bg-primary text-white"
                  }>
                  <div className='flex justify-start items-center py-4'>
                    <Image
                      src='/create-template-icon.png'
                      width={30}
                      height={30}
                    />
                    <h3 className='ml-2'>My Templates</h3>
                  </div>
                </div>
              </Link>

              <Link href='/vendor/productlist'>
                <div
                  className={
                    currentRoute === "/vendor/productlist"
                      ? "bg-primary w-52 px-8 hover:bg-primary text-white"
                      : "bg-none w-52 px-8 hover:bg-primary text-white"
                  }>
                  <div className='flex justify-start items-center py-4'>
                    <Image
                      src='/view-products-icon.png'
                      width={30}
                      height={30}
                    />
                    <h3 className='ml-2'>View Products</h3>
                  </div>
                </div>
              </Link>

              <Link href='/vendor/analytics'>
                <div
                  className={
                    currentRoute === "/vendor/analytics"
                      ? "bg-primary w-52 px-8 hover:bg-primary text-white"
                      : "bg-none w-52 px-8 hover:bg-primary text-white"
                  }>
                  <div className='flex justify-start items-center py-4'>
                    <Image src='/analytics-icon.png' width={30} height={30} />
                    <h3 className='ml-2'>Analytics</h3>
                  </div>
                </div>
              </Link>

              <Link href='/vendor/feedback'>
                <div
                  className={
                    currentRoute === "/vendor/feedback" ||
                    currentRoute === "/vendor/unresolvedqueries" ||
                    currentRoute === "/vendor/resolvedqueries"
                      ? "bg-primary w-52 px-8 hover:bg-primary text-white"
                      : "bg-none w-52 px-8 hover:bg-primary text-white"
                  }>
                  <div className='flex justify-start items-center py-4'>
                    <Image src='/feedback-icon.png' width={30} height={30} />
                    <h3 className='ml-2'>Queries</h3>
                  </div>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <header className='bg-bg text-white font-algeria px-8 overflow-y-auto no-scrollbar w-full fixed z-20'>
        <div className='w-full flex md:hidden'>
          <div className='flex flex-col w-full'>
            <div className='flex'>
              <Link href='/'>
                <Image src='/logo.png' width={70} height={70} />
              </Link>
              <div className='flex flex-row-reverse w-full items-center justify-start'>
                <Image
                  src='/burger-icon.png'
                  width={30}
                  height={30}
                  onClick={toggleMenu}
                />
              </div>
            </div>
            <div className='hidden' id='mobile_menu'>
              <nav className='text-sm flex flex-col items-center w-full font-bold'>
                <Link
                  className={"hover:bg-primary"}
                  href='/vendor'
                  onClick={logout}>
                  <div className='bg-none w-52 px-10 py-2 font-bold'>
                    <div className='flex justify-start items-center py-4 space-x-3'>
                      <Image
                        src={"/user-icon.png"}
                        width={25}
                        height={25}
                        alt={""}
                      />
                      <h3 className='ml-2'>Logout</h3>
                    </div>
                  </div>
                </Link>
                <Link href='/vendor/dashboard' className='w-full'>
                  <div
                    className={
                      currentRoute === "/vendor/dashboard" ||
                      currentRoute === "/vendor/designgallery"
                        ? "bg-primary w-full px-8"
                        : "bg-none w-full px-8"
                    }>
                    <div className='flex justify-center items-center py-4'>
                      <Image src='/dashboard-icon.png' width={30} height={30} />
                      <h3 className='ml-2'>Dashboard</h3>
                    </div>
                  </div>
                </Link>

                <Link href='/vendor/templatelist' className='w-full'>
                  <div
                    className={
                      currentRoute === "/vendor/templatelist" ||
                      currentRoute === "/vendor/createtemplate" ||
                      currentRoute === "/vendor/viewprod"
                        ? "bg-primary w-full px-8"
                        : "bg-none w-full px-8"
                    }>
                    <div className='flex justify-center items-center py-4'>
                      <Image
                        src='/create-template-icon.png'
                        width={30}
                        height={30}
                      />
                      <h3 className='ml-2'>My Templates</h3>
                    </div>
                  </div>
                </Link>

                <Link href='/vendor/productlist' className='w-full'>
                  <div
                    className={
                      currentRoute === "/vendor/productlist"
                        ? "bg-primary w-full px-8"
                        : "bg-none w-full px-8"
                    }>
                    <div className='flex justify-center items-center py-4'>
                      <Image
                        src='/view-products-icon.png'
                        width={30}
                        height={30}
                      />
                      <h3 className='ml-2'>View Products</h3>
                    </div>
                  </div>
                </Link>

                <Link href='/vendor/analytics' className='w-full'>
                  <div
                    className={
                      currentRoute === "/vendor/analytics"
                        ? "bg-primary w-full px-8"
                        : "bg-none w-full px-8"
                    }>
                    <div className='flex justify-center items-center py-4'>
                      <Image src='/analytics-icon.png' width={30} height={30} />
                      <h3 className='ml-2'>Analytics</h3>
                    </div>
                  </div>
                </Link>

                <Link href='/vendor/feedback' className='w-full'>
                  <div
                    className={
                      currentRoute === "/vendor/feedback" ||
                      currentRoute === "/vendor/unresolvedqueries" ||
                      currentRoute === "/vendor/resolvedqueries"
                        ? "bg-primary w-full px-8"
                        : "bg-none w-full px-8"
                    }>
                    <div className='flex justify-center items-center py-4'>
                      <Image src='/feedback-icon.png' width={30} height={30} />
                      <h3 className='ml-2'>Feedback</h3>
                    </div>
                  </div>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
