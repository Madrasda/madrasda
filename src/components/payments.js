import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { API_URL } from "@/utils/constants";

const records = 20;

export default function Payments() {
  // const [ordersData, setOrdersData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [displayOrders, setDisplayOrders] = useState([])
  const [pageNo, setPageNo] = useState(0);
  const [pageTotal, setPageTotal] = useState(0);

  const handlePageDecrease = () => {
    // if (pageNo == 0) return;
    console.log(displayOrders, pageNo, records, pageTotal)
    setDisplayOrders(orders.slice((pageNo-2) * records, (pageNo-1) * records))
    setPageNo(pageNo - 1);
  };
  
  const searchOrders = (searchKey) => {
      console.log(searchKey)
      setPageNo(0)
      if (!searchKey || searchKey == '') return setDisplayOrders(orders)
      setDisplayOrders(orders.filter(order => order.orderId.includes(searchKey.toLowerCase().trim())).slice(pageNo * records, (pageNo + 1) * records))
  }
    
  const handlePageIncrease = () => {
    if (pageNo + 1 == pageTotal) return;
    console.log(displayOrders, pageNo, records)
    setDisplayOrders(orders.slice(pageNo * records, (pageNo + 1) * records))
    setPageNo(prev => prev + 1);
  };

  useEffect(() => {
     const manageOrders = async () => {
       const params = new URLSearchParams({
         pageNo: pageNo,
         pageSize: 250,
       });
       const response = await axios.get(
         // "http://localhost:8080/api/transaction/manageOrders" +
         API_URL + "/api/transaction/manageOrders?" +
           params,
         {
           headers: {
             Authorization: "Bearer " + localStorage.getItem("token_admin"),
           },
         }
       );

       console.log(response.data);
       // let dataToSet = response.data.content.sort((a, b) => b.orderDate.localeCompare(a.orderDate))
       // setOrdersData(dataToSet);
       const ordersData = response.data.content.sort((a, b) =>
         b.orderDate.localeCompare(a.orderDate)
       );
       setOrders(ordersData);
       setDisplayOrders(
         ordersData.slice(pageNo * records, (pageNo + 1) * records)
       );
       setPageNo((prev) => prev + 1);
       setPageTotal(Math.floor(response.data.totalElements / records));
       console.log(pageTotal);
     };

    manageOrders();
  }, []);

  return (
    <>
      <div className='hidden justify-between mr-10 md:flex'>
        <h1 className='text-3xl text-primary pt-7 md:pt-0 md:ml-5'>
          Recent Orders
        </h1>
        <input type='search' onInput={(e) => searchOrders(e.target.value)} placeholder="Search for Order No." className="border-2 rounded-md border-primary bg-white focus:outline-none text-base px-2 py-1" />
        <Button
          css={{ fontFamily: "$algeria" }}
          style={{
            background:
              "linear-gradient(45deg, #ffa000 30%, #ffc107 90%)",
          }}
          variant={"contained"}
          onClick={() => {
            const table = document.getElementById("download");
            const wb = XLSX.utils.table_to_book(table);
            XLSX.writeFile(wb, "RecentOrders.xlsx");
          }}>
          <b>Export as Excel</b>
        </Button>
      </div>
      <div className='flex flex-col'>
        {/* <div className=''> */}
        <div className='flex justify-end gap-4 px-4 py-4 w-full'>
          {(pageNo > 1) && (pageNo < pageTotal) ? (
            <button
              className=' text-shadowGrey px-3 py-1 rounded-md outline-shadowGrey outline-1 outline'
              onClick={handlePageDecrease}>
              &lt; Previous
            </button>
          ) : ''}
          {pageNo !== pageTotal - 1 && (
            <button
              className=' text-shadowGrey px-3 py-1 rounded-md outline-shadowGrey outline-1 outline'
              onClick={handlePageIncrease}>
              Next &gt;
            </button>
          )}
        </div>
          <div className='sm:-mx-6 inline-block min-w-full py-2 sm:px-6 '>
            <div className='order-table overflow-x-scroll'>
              <table
                className='min-w-full text-center text-sm font-medium bg-bg bg-opacity-10 rounded-xl'
                id='download'>
                <thead className='border-b border-shadowGrey text-m font-bold '>
                  <tr>
                    <th scope='col' className=' px-6 py-4 '>
                      S.No
                    </th>
                    <th scope='col' className='sticky top-0 left-0 px-6 pl-0'>
                      Order Id
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Order Date
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Customer Details
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Product Details
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Quantity
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Order Total
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Vendor ID
                    </th>
                    <th scope='col' className=' px-6 pl-2'>
                      Payment Id
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Order Status
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Color
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Size
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Mockup Name
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Product Design URL
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Design URL
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Shiprocket URL
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Design Info
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayOrders &&
                    displayOrders.map((order, index) => {
                      const unformattedDate = new Date(order.orderDate);
                      unformattedDate.setMinutes((unformattedDate.getMinutes() + (60 * 0.5)))
                      const properDate = unformattedDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }).split(', ');
                      return order.orderItems.map((item, i) => (
                        <tr key={i} className='border-b border-shadowGrey'>
                          <td className='whitespace-nowrap px-2 py-4 font-medium'>
                            {index + 1}
                          </td>
                          <td className='whitespace-nowrap sticky top-0 left-0 z-10 px-6 pl-0 font-medium'>
                            {order.orderId}
                          </td>
                          <td className='whitespace-nowrap px-2 py-4'>
                            {properDate[0]}
                            <br />
                            {properDate[1]}
                          </td>
                          <td className='whitespace-nowrap px-2 py-4'>
                            {order.shippingAddress.name} <br />
                            {order.shippingAddress.email} <br />
                            {order.shippingAddress.phone}
                          </td>
                          <td className='whitespace-nowrap px-2 py-4'>
                            {item.product.name} <br />
                            {item.sku}
                          </td>
                          <td className='whitespace-nowrap px-2 py-4'>
                            {item.quantity}
                          </td>
                          <td className='whitespace-nowrap px-6 min-w-10 pl-2'>
                            ₹ {order.orderTotal} <br />+ ₹{" "}
                            {order.deliveryCharges} <br />={" "}
                            <strong>
                              ₹ {order.orderTotal + order.deliveryCharges}
                            </strong>
                          </td>
                          <td className='whitespace-nowrap px-2 py-4'>
                            {item.product.vendorId}
                          </td>
                          <td className='whitespace-nowrap px-6 pl-2'>
                            {order.paymentId}
                          </td>
                          <td className='whitespace-nowrap px-2 py-4'>
                            {order.status === null
                              ? "Order Placed"
                              : "Placed Order"}
                          </td>
                          <td className='whitespace-nowrap px-2 py-4'>
                            {item.product.colors[0].color}
                          </td>
                          <td className='whitespace-nowrap px-2 py-4'>
                            {item.product.colors[0].sizes[0].size}
                          </td>
                          <td className='whitespace-nowrap px-2 py-4'>
                            {item.product.productMockup.name}
                          </td>
                          <td className='whitespace-nowrap px-2 py-4'>
                            <a
                              href={item.product.frontDesignUrl}
                              target='_blank'
                              rel='noreferrer'
                              style={{ textDecoration: "underline" }}
                            >
                              View Product Design
                            </a>
                          </td>
                          <td className='whitespace-nowrap px-2 py-4'>
                            <a
                              href={item.product.backDesignUrl}
                              target='_blank'
                              rel='noreferrer'
                              style={{ textDecoration: "underline" }}
                            >
                              View Design
                            </a>
                          </td>
                          <td className='whitespace-nowrap px-2 py-4'>
                            <a
                              href={
                                "https://app.shiprocket.in/seller/orders/details/" +
                                order.orderId
                              }
                              target='_blank'
                              rel='noreferrer'
                              style={{ textDecoration: "underline" }}
                            >
                              View Details
                            </a>
                          </td>
                          <td className='whitespace-nowrap px-2 py-4'>
                            {item.product.frontDesignPlacement}
                          </td>
                        </tr>
                      ));
                    })}
                </tbody>
              </table>
            </div>
          </div>
          <div className='flex justify-center gap-4 px-4 py-4 w-full'>
            {(pageNo > 1) && (pageNo < pageTotal)? (
              <button
                className=' text-shadowGrey px-2 py-1 rounded-md outline-shadowGrey outline-1 outline'
                onClick={handlePageDecrease}>
                &lt; Previous
              </button>
            ): ''}
            {pageNo !== pageTotal - 1 && (
              <button
                className=' text-shadowGrey px-2 py-1 rounded-md outline-shadowGrey outline-1 outline'
                onClick={handlePageIncrease}>
                Next &gt;
              </button>
            )}
          </div>
        {/* </div> */}
      </div>
    </>
  );
}
