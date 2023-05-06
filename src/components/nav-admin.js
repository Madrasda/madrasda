import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import {UserContext} from "../../context/context";
import {useContext} from "react";
import customer from "../../public/customerdetails-icon.png";
import { CurrencyExchange, Dvr, FormatColorFill, Groups3, Logout, MiscellaneousServices, Payments, PersonAdd, QuestionAnswer, Whatshot } from "@mui/icons-material";

export default function NavAdmin() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const ctx = useContext(UserContext);
  const logOut = async () => {
    localStorage.removeItem("token");
    ctx.setIsLoggedIn(false);
    router.push("/admin");
  };
  const toggleMenu = () => {
    var menu = document.getElementById("mobile_menu");
    menu.classList.toggle("hidden");
    console.log("menu toggled");
  };
  return (
    <>
      <header className='bg-bg text-white font-quest py-8 fixed z-20 h-screen overflow-y-auto no-scrollbar hidden md:block'>
        <div className='flex flex-col items-center w-full h-full'>
          <div>
            <Image src='/logo.png' width={90} height={90} priority alt='logo' />
          </div>

          <div className='container flex flex-wrap flex-col h-full pt-4'>
            <nav className='text-sm flex flex-col items-start h-full font-bold'>
              <Link
                className={"hover:bg-primary"}
                href='/admin'
                onClick={logOut}>
                <div className='bg-none w-52 px-10 py-2 font-bold'>
                  <div className='flex justify-start items-center py-4 space-x-3'>
                    <Logout className='text-2xl' />
                    <h3 className='ml-2'>Logout</h3>
                  </div>
                </div>
              </Link>
              <Link className={"hover:bg-primary"} href='/admin/vendorlist'>
                <div
                  className={
                    currentRoute === "/admin/vendorlist" ||
                    currentRoute === "/admin/vendordetails" ||
                    currentRoute === "/admin/vendorlist/*"
                      ? "bg-primary w-52 px-8"
                      : "bg-none w-52 px-8"
                  }>
                  <div className='flex justify-start items-center py-4'>
                    <Groups3 className='text-2xl' />
                    <h3 className='ml-2'>Manage Creators</h3>
                  </div>
                </div>
              </Link>

              <Link className={"hover:bg-primary"} href='/admin/servicedetails'>
                <div
                  className={
                    currentRoute === "/admin/servicedetails"
                      ? "bg-primary w-52 px-8"
                      : "bg-none w-52 px-8"
                  }>
                  <div className='flex justify-start items-center py-4'>
                    <MiscellaneousServices className='text-2xl' />
                    <h3 className='ml-2'>Service Details</h3>
                  </div>
                </div>
              </Link>
              <Link className={"hover:bg-primary"} href='/admin/cancel'>
                <div
                  className={
                    currentRoute === "/admin/cancel"
                      ? "bg-primary w-52 px-8"
                      : "bg-none w-52 px-8"
                  }>
                  <div className='flex justify-start items-center py-4'>
                    <CurrencyExchange className='text-2xl' />
                    <h3 className='ml-2'>Cancel Requests</h3>
                  </div>
                </div>
              </Link>

              <Link className={"hover:bg-primary"} href='/admin/queries'>
                <div
                  className={
                    currentRoute === "/admin/queries" ||
                    currentRoute === "/admin/resolvedqueries"
                      ? "bg-primary w-52 px-8"
                      : "bg-none w-52 px-8"
                  }>
                  <div className='flex justify-start items-center py-4'>
                    <QuestionAnswer className='text-2xl' />
                    <h3 className='ml-2'>Queries</h3>
                  </div>
                </div>
              </Link>
              <Link className={"hover:bg-primary"} href='/admin/requests'>
                <div
                  className={
                    currentRoute === "/admin/requests"
                      ? "bg-primary w-52 px-8"
                      : "bg-none w-52 px-8"
                  }>
                  <div className='flex justify-start items-center py-4'>
                    <PersonAdd className='text-2xl' />
                    <h3 className='ml-2'>Signup Requests</h3>
                  </div>
                </div>
              </Link>

              <Link className={"hover:bg-primary"} href='/admin/myproducts'>
                <div
                  className={
                    currentRoute === "/admin/myproducts"
                      ? "bg-primary w-52 px-8"
                      : "bg-none w-52 px-8"
                  }>
                  <div className='flex justify-start items-center py-4'>
                    <FormatColorFill className='text-2xl' />
                    <h3 className='ml-2'>Mockups</h3>
                  </div>
                </div>
              </Link>

              <Link className={"hover:bg-primary"} href='/admin/payments'>
                <div
                  className={
                    currentRoute === "/admin/payments"
                      ? "bg-primary w-52 px-8"
                      : "bg-none w-52 px-8"
                  }>
                  <div className='flex justify-start items-center py-4'>
                    <Payments className='text-2xl' />
                    <h3 className='ml-2'>Payments</h3>
                  </div>
                </div>
              </Link>

              <Link className={"hover:bg-primary"} href='/admin/hotsellers'>
                <div
                  className={
                    currentRoute === "/admin/hotsellers"
                      ? "bg-primary w-52 px-8"
                      : "bg-none w-52 px-8"
                  }>
                  <div className='flex justify-start items-center py-4'>
                    <Whatshot className='text-2xl' />
                    <h3 className='ml-2'>Hot Sellers</h3>
                  </div>
                </div>
              </Link>

              <Link className={"hover:bg-primary"} href='/admin/manageorders'>
                <div
                  className={
                    currentRoute === "/admin/manageorders"
                      ? "bg-primary w-52 px-8"
                      : "bg-none w-52 px-8"
                  }>
                  <div className='flex justify-start items-center py-4'>
                    <Dvr className='text-2xl' />
                    <h3 className='ml-2'>Recent Orders</h3>
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
                  href='/admin'
                  onClick={logOut}>
                  <div className='bg-none px-10 py-2 font-bold'>
                    <div className='flex justify-start items-center py-4 space-x-3'>
                      <Logout className='text-2xl' />
                      <h3 className='ml-2'>Logout</h3>
                    </div>
                  </div>
                </Link>
                <Link className={"hover:bg-primary"} href='/admin/vendorlist'>
                  <div
                    className={
                      currentRoute === "/admin/vendorlist" ||
                      currentRoute === "/admin/vendordetails" ||
                      currentRoute === "/admin/vendorlist/*"
                        ? "bg-primary w-full md:w-52 px-8"
                        : "bg-none w-full md:w-52 px-8"
                    }>
                    <div className='flex md:justify-start items-center py-4 w-full'>
                      <Groups3 className='text-3xl' />
                      <h3 className='ml-2'>Manage Creators</h3>
                    </div>
                  </div>
                </Link>

                <Link className={""} href='/admin/servicedetails'>
                  <div
                    className={
                      "hover:bg-primary transition-colors duration-500 w-full " +
                        currentRoute ===
                      "/admin/servicedetails"
                        ? "bg-primary w-full md:w-52 px-8"
                        : "bg-none w-full md:w-52 px-8"
                    }>
                    <div className='flex justify-center md:justify-start items-center py-4'>
                      <MiscellaneousServices className='text-2xl' />
                      <h3 className='ml-2'>Service Details</h3>
                    </div>
                  </div>
                </Link>
                <Link className={""} href='/admin/cancel'>
                  <div
                    className={
                      "hover:bg-primary transition-colors duration-500 w-full " +
                        currentRoute ===
                      "/admin/cancel"
                        ? "bg-primary w-full md:w-52 px-8"
                        : "bg-none w-full md:w-52 px-8"
                    }>
                    <div className='flex justify-center md:justify-start items-center py-4'>
                      <CurrencyExchange className='text-2xl' />
                      <h3 className='ml-2'>Cancel Requests</h3>
                    </div>
                  </div>
                </Link>

                <Link className={"hover:bg-primary"} href='/admin/queries'>
                  <div
                    className={
                      currentRoute === "/admin/queries" ||
                      currentRoute === "/admin/resolvedqueries"
                        ? "bg-primary w-full md:w-52 px-8"
                        : "bg-none w-full md:w-52 px-8"
                    }>
                    <div className='flex justify-center md:justify-start items-center py-4'>
                      <QuestionAnswer className='text-2xl' />
                      <h3 className='ml-2'>Queries</h3>
                    </div>
                  </div>
                </Link>

                <Link
                  className={"hover:bg-primary w-full"}
                  href='/admin/myproducts'>
                  <div
                    className={
                      currentRoute === "/admin/myproducts"
                        ? "bg-primary w-full md:w-52 px-8"
                        : "bg-none w-full md:w-52 px-8"
                    }>
                    <div className='flex justify-center md:justify-start items-center py-4'>
                      <FormatColorFill className='text-2xl' />
                      <h3 className='ml-2'>Mockups</h3>
                    </div>
                  </div>
                </Link>

                <Link className={"hover:bg-primary"} href='/admin/payments'>
                  <div
                    className={
                      currentRoute === "/admin/payments"
                        ? "bg-primary w-full md:w-52 px-8"
                        : "bg-none w-full md:w-52 px-8"
                    }>
                    <div className='flex justify-center md:justify-start items-center py-4'>
                      <Payments className='text-2xl' />
                      <h3 className='ml-2'>Payments</h3>
                    </div>
                  </div>
                </Link>

                <Link className={"hover:bg-primary"} href='/admin/manageorders'>
                  <div
                    className={
                      currentRoute === "/admin/manageorders"
                        ? "bg-primary w-52 px-8"
                        : "bg-none w-52 px-8"
                    }>
                    <div className='flex justify-start items-center py-4'>
                      <Dvr className='text-2xl' />
                      <h3 className='ml-2'>Recent Orders</h3>
                    </div>
                  </div>
                </Link>
                <Link className={"hover:bg-primary"} href='/admin/hotsellers'>
                  <div
                    className={
                      currentRoute === "/admin/hotsellers"
                        ? "bg-primary w-full md:w-52 px-8"
                        : "bg-none w-full md:w-52 px-8"
                    }>
                    <div className='flex justify-center md:justify-start items-center py-4'>
                      <Whatshot className='text-2xl' />
                      <h3 className='ml-2'>Hot Sellers</h3>
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
