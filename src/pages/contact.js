import ClientLayout from "@/components/layout-client";
import Head from "next/head";
import Link from "next/link";
export default function ContactUs() {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
        <title>Madrasda</title>
      </Head>
      <ClientLayout>
        <main className='p-8 md:pt-20 w-full md:w-1/2 mx-auto'>
          <div className='font-quest text-base text-black flex flex-wrap justify-start items-center text-justify px-3 py-8 w-full'>
            <p className='text-3xl font-bold text-left w-full mb-6'>
              Contact Us
            </p>
            <br />
            <br />
            <br />
            <br />
            <div className='flex flex-col'>
              <div className='flex'>
                <div className='text-xl font-bold mb-10'>E-mail:</div>
                <Link
                  href='mailto:Contactus@madrasda.com'
                  className=' hover:text-logo font-bold ml-5 w-60'>
                  Contactus@madrasda.com
                </Link>
              </div>
              <div className='flex'>
                <div className='text-xl font-bold'>Phone Number:</div>
                <div className='font-bold ml-5 mb-60'>9345354341</div>
              </div>
              <div className='ml-60 flex items-center justify-center'>
                Thank you
                <br />
                Team Madras Da
              </div>
            </div>
          </div>
        </main>
      </ClientLayout>
    </>
  );
}
