import AdminLayout from '@/components/layout-admin'
import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

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
      "https://spring-madrasda-2f6mra4vwa-em.a.run.app/manageOrders?",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    setOrders(response.data.content);
  };

  useEffect(() => {
    manageOrders();
  }, []);

  return (
    <>
      <div className='flex flex-col '>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full text-center text-sm font-medium'>
                <thead className='border-b text-m font-bold dark:border-neutral-500'>
                  <tr>
                    <th scope='col' className=' px-6 py-4'>
                      Order Id
                    </th>
                    <th scope='col' className=' px-6 py-4'>
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
                      Product
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Shipping Address
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders &&
                    orders.map((order) => {
                      order.orderItems.map((item) => (
                        <tr className='dark:border-neutral-500'>
                          <td className='whitespace-nowrap px-6 py-6 font-medium'>
                            {order.id}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {order.paymentId}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {order.orderDate}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {order.status}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {order.shippingAddress.email}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {order.shippingAddress.email}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {item.product.name}
                          </td>
                          <td className='whitespace-nowrap px-6 py-6'>
                            {order.shippingAddress.addressLine1}
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
