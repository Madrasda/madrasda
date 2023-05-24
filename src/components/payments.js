import AdminLayout from '@/components/layout-admin'
import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import {Button} from "@mui/material";
import {uuidv4} from "@firebase/util";
import OrderDetailsModal from "@/components/orderdetails-modal";
import { set_cptable } from "xlsx";
import * as cptable from 'xlsx/dist/cpexcel.full.mjs';
set_cptable(cptable);
import XLSX from "xlsx";
import { JsonToExcel } from "react-json-to-excel";

export default function Payments() {
  const [orders, setOrders] = useState(0);
  const [pageNo, setPageNo] = useState(0);
  const [pageTotal, setPageTotal] = useState(0);

  const manageOrders = async () => {
    const params = new URLSearchParams({
      pageNo: pageNo,
      pageSize: 10,
    });
    const response = await axios.get(
      "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/transaction/manageOrders?pageNo=0&&pageSize=50",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_admin"),
        },
      }
    );
    setOrders(response.data.content.reverse());
  };

  useEffect(() => {
    manageOrders();
  }, []);

  return (
    <>
      <div className='flex flex-col '>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='hidden justify-end mr-10 md:flex'>
            <Button
              className='bg-logo hover:bg-[#d5a806] text-white font-bold py-2 px-4'
              onClick={() => {
                const table = document.getElementById("download");
                const wb = XLSX.utils.table_to_book(table);
                XLSX.writeFile(wb, "Recentorders.xlsx");
              }}>
              <b>Export as Excel</b>
            </Button>
          </div>
          <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table
                className='min-w-full text-center text-sm font-medium'
                id='download'>
                <thead className='border-b text-m font-bold dark:border-neutral-500'>
                  <tr>
                    <th scope='col' className=' px-6 pl-0'>
                      Order Id
                    </th>
                    <th scope='col' className=' px-6 pl-2'>
                      Payment Id
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Order Date
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Order Status
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Customer Name
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Customer Email
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Product Name
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Quantity
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Color
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Size
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      SKU
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Mockup Name
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Mockup Model
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Product Type
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Design URL
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Design Info
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders &&
                    orders.map((order) => {
                      const orderDate = new Date(order.orderDate);
                      return order.orderItems.map((item) => (
                        <tr key={uuidv4()} className='dark:border-neutral-500'>
                          <td className='whitespace-nowrap px-6 pl-0 font-medium'>
                            {order.orderId}
                          </td>
                          <td className='whitespace-nowrap px-6 pl-2'>
                            {order.paymentId}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {`${orderDate
                              .getUTCDate()
                              .toString()
                              .padStart(2, "0")}-${(orderDate.getUTCMonth() + 1)
                              .toString()
                              .padStart(2, "0")}-${orderDate
                              .getUTCFullYear()
                              .toString()}`}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {order.status === null
                              ? "Order Placed"
                              : "Placed Order"}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {order.shippingAddress.name}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {order.shippingAddress.email}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {item.product.name}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {item.quantity}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {item.product.colors[0].color}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {item.product.colors[0].sizes[0].size}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {item.sku}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {item.product.productMockup.name}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {item.product.productMockup.model}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {item.product.productMockup.productType}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            <a href={item.product.frontDesignUrl} target='_blank'>
                              Link to Design
                            </a>
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {item.product.frontDesignPlacement}
                          </td>
                        </tr>
                      ));
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
