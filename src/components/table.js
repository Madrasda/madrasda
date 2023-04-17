import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

export default function Table() {

  const [sale, setSale] = useState("false");
  const toggleSale = () => {
    if(sale == "false") { 
        setSale("true");
    }
    else {
        setSale("false");
    }
  }
  return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-center text-sm font-medium">
                    <thead className="border-b text-m font-bold dark:border-neutral-500">
                        <tr>
                        <th scope="col" className=" px-6 py-4">Rank</th>
                        <th scope="col" className=" px-6 py-4">Product</th>
                        <th scope="col" className=" px-6 py-4">Profit/Loss</th>
                        <th scope="col" className=" px-6 py-4">Returns Contribution</th>
                        <th scope="col" className=" px-6 py-4">Stocks Sold</th>
                        <th scope="col" className=" px-6 py-4">Profit Amount</th>
                        <th scope="col" className=" px-6 py-4">In Sale</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-6 font-medium">1</td>
                        <td className="whitespace-nowrap px-6 py-6">Vikram Kamal T-shirt</td>
                        <td className="whitespace-nowrap px-6 py-6">15%</td>
                        <td className="whitespace-nowrap px-6 py-6">30%</td>
                        <td className="whitespace-nowrap px-6 py-6">35</td>
                        <td className="whitespace-nowrap px-6 py-6">13</td>
                        <td className="whitespace-nowrap px-6 py-6 flex justify-center">
                            <button onClick={toggleSale}>
                            {/* <Image src="/green-tick.png" width={20} height={20} /> */}
                            <div id="saleStatus">{sale}</div>
                            </button>
                        </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-6   font-medium">2</td>
                        <td className="whitespace-nowrap px-6 py-6  ">Vikram Rolex Hoodies</td>
                        <td className="whitespace-nowrap px-6 py-6  ">15%</td>
                        <td className="whitespace-nowrap px-6 py-6  ">30%</td>
                        <td className="whitespace-nowrap px-6 py-6  ">35</td>
                        <td className="whitespace-nowrap px-6 py-6  ">13</td>
                        <td className="whitespace-nowrap px-6 py-6 flex justify-center">
                            <Image src="/green-tick.png" width={20} height={20} />
                        </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-6   font-medium">3</td>
                        <td className="whitespace-nowrap px-6 py-6  ">Uthama villain hoodies</td>
                        <td className="whitespace-nowrap px-6 py-6  ">15%</td>
                        <td className="whitespace-nowrap px-6 py-6  ">30%</td>
                        <td className="whitespace-nowrap px-6 py-6  ">35</td>
                        <td className="whitespace-nowrap px-6 py-6  ">13</td>
                        <td className="whitespace-nowrap px-6 py-6 flex justify-center">
                            <Image src="/red-cross.png" width={20} height={20} />
                        </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-6   font-medium">4</td>
                        <td className="whitespace-nowrap px-6 py-6  ">Vikram Kamal Shirts</td>
                        <td className="whitespace-nowrap px-6 py-6  ">15%</td>
                        <td className="whitespace-nowrap px-6 py-6  ">30%</td>
                        <td className="whitespace-nowrap px-6 py-6  ">35</td>
                        <td className="whitespace-nowrap px-6 py-6  ">13</td>
                        <td className="whitespace-nowrap px-6 py-6 flex justify-center">
                            <Image src="/green-tick.png" width={20} height={20} />
                        </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-6   font-medium">5</td>
                        <td className="whitespace-nowrap px-6 py-6  ">LCU TRIO Shorts</td>
                        <td className="whitespace-nowrap px-6 py-6  ">15%</td>
                        <td className="whitespace-nowrap px-6 py-6  ">30%</td>
                        <td className="whitespace-nowrap px-6 py-6  ">35</td>
                        <td className="whitespace-nowrap px-6 py-6  ">13</td>
                        <td className="whitespace-nowrap px-6 py-6 flex justify-center">
                            <Image src="/red-cross.png" width={20} height={20} />
                        </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-6   font-medium">6</td>
                        <td className="whitespace-nowrap px-6 py-6  ">LCU TRIO Shirts</td>
                        <td className="whitespace-nowrap px-6 py-6  ">15%</td>
                        <td className="whitespace-nowrap px-6 py-6  ">30%</td>
                        <td className="whitespace-nowrap px-6 py-6  ">35</td>
                        <td className="whitespace-nowrap px-6 py-6  ">13</td>
                        <td className="whitespace-nowrap px-6 py-6 flex justify-center">
                            <Image src="/red-cross.png" width={20} height={20} />
                        </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-6   font-medium">7</td>
                        <td className="whitespace-nowrap px-6 py-6  ">LCU V-neck T-shirt</td>
                        <td className="whitespace-nowrap px-6 py-6  ">15%</td>
                        <td className="whitespace-nowrap px-6 py-6  ">30%</td>
                        <td className="whitespace-nowrap px-6 py-6  ">35</td>
                        <td className="whitespace-nowrap px-6 py-6  ">13</td>
                        <td className="whitespace-nowrap px-6 py-6 flex justify-center">
                            <Image src="/green-tick.png" width={20} height={20} />
                        </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-6   font-medium">8</td>
                        <td className="whitespace-nowrap px-6 py-6  ">Vikram Title Shirt</td>
                        <td className="whitespace-nowrap px-6 py-6  ">15%</td>
                        <td className="whitespace-nowrap px-6 py-6  ">30%</td>
                        <td className="whitespace-nowrap px-6 py-6  ">35</td>
                        <td className="whitespace-nowrap px-6 py-6  ">13</td>
                        <td className="whitespace-nowrap px-6 py-6 flex justify-center">
                            <Image src="/green-tick.png" width={20} height={20} />
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
  )
}
