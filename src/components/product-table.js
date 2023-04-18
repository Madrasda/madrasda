import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

export default function ProductTable({products}) {

  const getAvailableColors = (colors) => {
    var Available = [];
    colors.forEach((item) => {
        if(Available.indexOf(item.hexValue) === -1)
            Available.push(item.hexValue);
    })
    return Available;
  }
    
  const [sale, setSale] = useState(false);
  return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-center text-sm font-medium">
                    <thead className="border-b text-m font-bold dark:border-neutral-500">
                        <tr>
                        <th scope="col" className=" px-6 py-4">S.No</th>
                        <th scope="col" className=" px-6 py-4">Product</th>
                        <th scope="col" className=" px-6 py-4">Profit</th>
                        <th scope="col" className=" px-6 py-4">Discount</th>
                        <th scope="col" className=" px-6 py-4">Total Price</th>
                        <th scope="col" className=" px-6 py-4">Available Colours</th>
                        <th scope="col" className=" px-6 py-4">In Sale</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((item, index) => {
                                return (
                                    <tr className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-6 font-medium">{index + 1}</td>
                                        <td className="whitespace-nowrap px-6 py-6">{item.name}</td>
                                        <td className="whitespace-nowrap px-6 py-6">{item.profit}</td>
                                        <td className="whitespace-nowrap px-6 py-6">{item.discount}</td>
                                        <td className="whitespace-nowrap px-6 py-6">{item.total}</td>
                                        <td>
                                            <div className="flex flex-wrap justify-center space-x-2">
                                                {getAvailableColors(item.colors).map((i) => <div style={{backgroundColor : i}} className='border-gray border-[2px] rounded-full h-4 w-4'></div>)}
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-6 flex justify-center">
                                        <button onClick={() => setSale(!sale)}>
                                        <Image src={item.publishStatus ? "/green-tick.png" : "/red-cross.png"} alt="publish-status" width={20} height={20} />
                                        </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
  )
}
