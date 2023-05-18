import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import {Button} from "@mui/material";
import { set_cptable } from "xlsx";
import * as cptable from 'xlsx/dist/cpexcel.full.mjs';
set_cptable(cptable);
import XLSX from "xlsx";
import { JsonToExcel } from "react-json-to-excel";

export default function Table({ products }) {
  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='flex justify-end mr-8'>
          <JsonToExcel
            title='Download as excel'
            data={products}
            fileName={`my-products-${new Date().toLocaleTimeString()}-${new Date()
              .getUTCDay()
              .toString()}`}
          />
        </div>
        <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table
              className='min-w-full text-center text-sm font-medium'
              id='tabledfunda'>
              <thead className='border-b text-m font-bold dark:border-neutral-500'>
                <tr>
                  <th scope='col' className=' px-6 py-4'>
                    Rank
                  </th>
                  <th scope='col' className=' px-6 py-4'>
                    Product
                  </th>
                  <th scope='col' className=' px-6 py-4'>
                    Profit Amount
                  </th>
                  <th scope='col' className=' px-6 py-4'>
                    Returns Contribution
                  </th>
                  <th scope='col' className=' px-6 py-4'>
                    Stocks Sold
                  </th>
                  <th scope='col' className=' px-6 py-4'>
                    Product Profit
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => {
                  return (
                    <tr
                      className='border-b dark:border-neutral-500'
                      key={item.id}>
                      <td className='whitespace-nowrap px-6 py-6 font-medium'>
                        {index + 1}
                      </td>
                      <td className='whitespace-nowrap px-6 py-6'>
                        {item.name}
                      </td>
                      <td className='whitespace-nowrap px-6 py-6'>
                        {item.profitAmount}
                      </td>
                      <td className='whitespace-nowrap px-6 py-6'>
                        {item.returnsContribution}
                      </td>
                      <td className='whitespace-nowrap px-6 py-6'>
                        {item.stocksSold}
                      </td>
                      <td className='whitespace-nowrap px-6 py-6'>
                        {item.profit}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
