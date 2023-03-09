import AdminLayout from '@/components/layout-admin'
import React from 'react'
import Head from 'next/head'

export default function Payments() {
  return (
    <>
        <div className="flex flex-col ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <table className="min-w-full text-center text-sm font-medium">
                <thead className="border-b text-m font-bold dark:border-neutral-500">
                    <tr>
                    <th scope="col" className=" px-6 py-4">Order Id</th>
                    <th scope="col" className=" px-6 py-4">Customer Name</th>
                    <th scope="col" className=" px-6 py-4">Contact No</th>
                    <th scope="col" className=" px-6 py-4">Product</th>
                    <th scope="col" className=" px-6 py-4">Address/Shipping</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-6 font-medium">AKG1198</td>
                    <td className="whitespace-nowrap px-6 py-6">Tanjiro Kamado</td>
                    <td className="whitespace-nowrap px-6 py-6">1234567890</td>
                    <td className="whitespace-nowrap px-6 py-6">T-shirt</td>
                    <td className="whitespace-nowrap px-6 py-6">No. 5, Sairam Nagar, Sairam, Chennai -5</td>
                    </tr>
                    <tr className="dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-6   font-medium">NIT1198</td>
                    <td className="whitespace-nowrap px-6 py-6  ">Nezuko Kamado</td>
                    <td className="whitespace-nowrap px-6 py-6  ">1234567890</td>
                    <td className="whitespace-nowrap px-6 py-6  ">T-shirt</td>
                    <td className="whitespace-nowrap px-6 py-6  ">No. 5, Sairam Nagar, Sairam, Chennai -5</td>
                    </tr>
                    <tr className="dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-6   font-medium">NER1122</td>
                    <td className="whitespace-nowrap px-6 py-6  ">Zenitsu Afatsuma</td>
                    <td className="whitespace-nowrap px-6 py-6  ">1234567890</td>
                    <td className="whitespace-nowrap px-6 py-6  ">T-shirt</td>
                    <td className="whitespace-nowrap px-6 py-6  ">No. 5, Sairam Nagar, Sairam, Chennai -5</td>
                    </tr>
                    <tr className="dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-6   font-medium">SRG5678</td>
                    <td className="whitespace-nowrap px-6 py-6  ">Hashibira Inosuke</td>
                    <td className="whitespace-nowrap px-6 py-6  ">1234567890</td>
                    <td className="whitespace-nowrap px-6 py-6  ">T-shirt</td>
                    <td className="whitespace-nowrap px-6 py-6  ">No. 5, Sairam Nagar, Sairam, Chennai -5</td>
                    </tr>
                    <tr className="dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-6   font-medium">GOK0597</td>
                    <td className="whitespace-nowrap px-6 py-6  ">Muzan Kibutsuji</td>
                    <td className="whitespace-nowrap px-6 py-6  ">1234567890</td>
                    <td className="whitespace-nowrap px-6 py-6  ">T-shirt</td>
                    <td className="whitespace-nowrap px-6 py-6  ">No. 5, Sairam Nagar, Sairam, Chennai -5</td>
                    </tr>
                    <tr className="dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-6   font-medium">NIT1198</td>
                    <td className="whitespace-nowrap px-6 py-6  ">Giyu Tomioka</td>
                    <td className="whitespace-nowrap px-6 py-6  ">1234567890</td>
                    <td className="whitespace-nowrap px-6 py-6  ">T-shirt</td>
                    <td className="whitespace-nowrap px-6 py-6  ">No. 5, Sairam Nagar, Sairam, Chennai -5</td>
                    </tr>
                    <tr className="dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-6   font-medium">NER1122</td>
                    <td className="whitespace-nowrap px-6 py-6  ">Kanao Tsuyuri</td>
                    <td className="whitespace-nowrap px-6 py-6  ">1234567890</td>
                    <td className="whitespace-nowrap px-6 py-6  ">T-shirt</td>
                    <td className="whitespace-nowrap px-6 py-6  ">No. 5, Sairam Nagar, Sairam, Chennai -5</td>
                    </tr>
                    <tr className="dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-6   font-medium">SRG5678</td>
                    <td className="whitespace-nowrap px-6 py-6  ">Mitsuri Kanroji</td>
                    <td className="whitespace-nowrap px-6 py-6  ">1234567890</td>
                    <td className="whitespace-nowrap px-6 py-6  ">T-shirt</td>
                    <td className="whitespace-nowrap px-6 py-6  ">No. 5, Sairam Nagar, Sairam, Chennai -5</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    </>
    )
}
