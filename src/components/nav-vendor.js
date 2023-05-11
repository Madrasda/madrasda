import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import {useContext} from "react";
import {UserContext} from "../../context/context";
import { Logout } from "@mui/icons-material";
import { Checkroom } from "@mui/icons-material";
import { Grow } from "@mui/material";
import {DashboardCustomize} from '@mui/icons-material';
import {PermIdentity} from '@mui/icons-material';
import {Analytics} from '@mui/icons-material';
import {ViewInAr} from '@mui/icons-material';
import {QuestionAnswer} from '@mui/icons-material';

export default function NavVendor() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const ctx = useContext(UserContext);
  const logout = async () => {
    localStorage.removeItem("token_vendor");
    ctx.setIsLoggedIn(false);
    router.push("/vendor");
  };
  const toggleMenu = () => {
    var menu = document.getElementById("mobile_menu");
    menu.classList.toggle("hidden");
    console.log("menu toggled");
  };
  return (
    <>
      <header className='bg-bg text-white font-quest py-8 overflow-y-auto no-scrollbar fixed z-20 h-screen hidden md:block'>
        <div className='flex flex-col items-center w-full h-full'>
          <Link href='/'>
            <Image src='/logo.png' width={90} height={90} />
          </Link>
          <Link
            href='/vendor/vendorprofile'
            className='flex flex-col items-center py-5 hover:bg-primary text-white w-full'>
            <PermIdentity className='text-5xl' />
            <p className='text-sm'>Go to Profile</p>
          </Link>

            <div className='bg-none cursor-pointer w-52 px-9 py-4 font-bold hover:bg-primary text-white'
                 onClick={logout}>
              <div className='flex justify-start items-center'>
                <Logout className='text-2xl' />
                <h3 className='ml-2'>Logout</h3>
              </div>
            </div>

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
                    <DashboardCustomize className="text-2xl" />
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
                    <Checkroom className='text-2xl' />
                    <h3 className='ml-2'>Create Templates</h3>
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
                    <ViewInAr className='text-2xl' />
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
                    <Analytics className='text-2xl' />
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
                    <QuestionAnswer className='text-2xl' />
                    <h3 className='ml-2'>Queries</h3>
                  </div>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <header className='bg-bg text-white font-quest overflow-y-auto no-scrollbar w-full fixed z-50'>
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
                      <div className='flex justify-start items-center pl-4 py-4 space-x-3'>
                        <Logout className='text-2xl' />
                        <h3 className='ml-4'>Logout</h3>
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
                        <DashboardCustomize className="text-2xl" />
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
                        <Checkroom className='text-2xl' />
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
                        <ViewInAr className='text-2xl' />
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
                        <Analytics className='text-2xl' />
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
                        <QuestionAnswer className='text-2xl' />
                        <h3 className='ml-2'>Queries</h3>
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
