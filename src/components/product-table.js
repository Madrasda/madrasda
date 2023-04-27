import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { headers } from "next.config";
import { Snackbar, Alert } from "@mui/material";

export default function ProductTable({ products, toggle }) {
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    console.log(reason);
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const getAvailableColors = (colors) => {
    var Available = [];
    colors.forEach((item) => {
      if (Available.indexOf(item.hexValue) === -1)
        Available.push(item.hexValue);
    });
    return Available;
  };

  const toggetPublishStatus = async (id, inSale) => {
    const response = await fetch(
      "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/product/togglePublishState/" +
        id,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    toggle(true);
    setOpen(true);
    setMessage(inSale ? "Removed from sale" : "Added to sale");
    setSeverity(!inSale ? "success" : "error");
  };

  return (
    <>
      <Snackbar
        className={"mt-7"}
        open={open}
        autoHideDuration={1400}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert variant='filled' onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
            <div className='text-black'>
              <table className='min-w-full text-center text-sm font-medium'>
                <thead className='border-b text-m font-bold dark:border-neutral-500'>
                  <tr>
                    <th scope='col' className=' px-6 py-4'>
                      S.No
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Product
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Profit
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Discount
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Total Price
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      Available Colours
                    </th>
                    <th scope='col' className=' px-6 py-4'>
                      In Sale
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => {
                    return (
                      <tr className='border-b dark:border-neutral-500'>
                        <td className='whitespace-nowrap px-6 py-6 font-medium'>
                          {index + 1}
                        </td>
                        <td className='whitespace-nowrap px-6 py-6'>
                          {item.name}
                        </td>
                        <td className='whitespace-nowrap px-6 py-6'>
                          {item.profit}
                        </td>
                        <td className='whitespace-nowrap px-6 py-6'>
                          {item.discount}
                        </td>
                        <td className='whitespace-nowrap px-6 py-6'>
                          {item.total}
                        </td>
                        <td>
                          <div className='flex flex-wrap justify-center space-x-2'>
                            {getAvailableColors(item.colors).map((i) => (
                              <div
                                style={{ backgroundColor: i }}
                                className='border-gray border-[2px] rounded-full h-4 w-4'></div>
                            ))}
                          </div>
                        </td>
                        <td className='whitespace-nowrap px-6 py-6 flex justify-center'>
                          <button
                            onClick={() =>
                              toggetPublishStatus(item.id, item.publishStatus)
                            }>
                            <Image
                              src={
                                item.publishStatus
                                  ? "/green-tick.png"
                                  : "/red-cross.png"
                              }
                              alt='publish-status'
                              width={20}
                              height={20}
                            />
                          </button>
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
    </>
  );
}
