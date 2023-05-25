import React, {useEffect, useState} from "react";
import {Modal, Text} from "@nextui-org/react";
import {uuidv4} from "@firebase/util";
import {Button} from "@mui/material";
import DomToImage from "dom-to-image";
import { saveAs } from "file-saver";
import { useRouter } from "next/router";
import jsPDF from "jspdf";
import { Download } from "@mui/icons-material";
import { isTokenValid, getRole, getPhone } from "@/utils/JWTVerifier";
import axios from "axios";
export default function OrderDetailsModal({ order }) {
  const [visible, setVisible] = React.useState(false);
  const [prodTotal, setProdTotal] = useState(0);
  const [phone, setPhone] = useState(0);
  const [details, setDetails] = useState([]);
  const handler = () => setVisible(true);
  const router = useRouter();

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const downloadInvoice = () => {
    var invoice = document.getElementById(order.id);
    DomToImage.toPng(invoice)
      .then((dataUrl) => {
        var pdf = new jsPDF({
          orientation: "landscape",
        });
        pdf.addImage(
          dataUrl,
          "PNG",
          0,
          0,
          pdf.internal.pageSize.width,
          pdf.internal.pageSize.height
        );
        pdf.save(`my-invoice-${order.id}.pdf`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Button
        css={{ fontFamily: "$algeria" }}
        style={{
          background: "linear-gradient(45deg, #ffa000 30%, #ffc107 90%)",
        }}
        onClick={handler}
        variant={'contained'}
        >
        View Billing Info
      </Button>
      <div>
        <Modal
          width='1080px'
          closeButton
          preventClose
          aria-labelledby='modal-title'
          open={visible}
          onClose={closeHandler}
          className='w-[90%] md:w-[70%] mx-auto'
          css={{ fontFamily: "$algeria" }}>
          <Modal.Body className='font-quest'>
            <div
              className='bg-white shadow-lg overflow-hidden w-full mx-auto'
              id={`${order.id}`}>
              {/* <!-- Order header --> */}
              <div className='bg-bg text-white py-4 px-3 flex justify-between items-center w-full'>
                <h1 className='md:text-lg w-fit font-semibold'>#{order.id}</h1>
                <span className='md:text-lg w-fit'>
                  ₹{Number(order.orderTotal).toLocaleString("en-IN")}
                </span>
              </div>
              <div className='p-2 md:p-4'>
                {order.orderItems.map((item) => (
                  <div
                    key={uuidv4()}
                    className='flex justify-between items-center mb-4'>
                    <span className='flex w-full space-x-2 items-center md:text-lg text-black font-medium'>
                      <h1>{item.product.name}</h1>
                      <h1 className='text-sm text-shadowGrey'>
                        - Quantity {item.quantity}
                      </h1>
                    </span>
                    <span className='text-black'>
                      ₹
                      {Number(
                        ((item.product.total * (100 - item.product.discount)) /
                          100) *
                          item.quantity
                      ).toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
                <hr className='my-6' />
                {/* <!-- Billing information --> */}
                <div className='flex justify-between w-full'>
                  <h1 className='md:text-lg font-medium mb-4'>Order Date</h1>
                  <h1 className='text-shadowGrey'>
                    {order.orderDate.substr(0, 10)}
                  </h1>
                </div>
                <div className='flex justify-between w-full'>
                  <h1 className='md:text-lg font-medium mb-4'>Payment ID</h1>
                  <h1 className='text-shadowGrey'>{order.paymentId}</h1>
                </div>
                <h2 className='md:text-lg font-bold mb-4'>Shipping Address</h2>
                <div className='grid grid-cols-2 gap-4 w-full'>
                  <div>
                    <span className='text-black'>Name</span>
                    <p className='font-medium'>{order.shippingAddress.name}</p>
                  </div>
                  <div>
                    <span className='text-black'>Phone</span>
                    <p className='font-medium'>{order.shippingAddress.phone}</p>
                  </div>
                  <div>
                    <span className='text-black'>Email</span>
                    <p className='font-medium'>{order.shippingAddress.email}</p>
                  </div>
                  <div>
                    <span className='text-black'>Address</span>
                    <p className='font-medium'>
                      {order.shippingAddress.addressLine1}
                    </p>
                    <p className='font-medium'>
                      {order.shippingAddress.addressLine2}
                    </p>
                    <p className='font-medium'>{order.shippingAddress.city}</p>
                    <p className='font-medium'>{order.shippingAddress.state}</p>
                    <p className='font-medium'>
                      {order.shippingAddress.postalCode}
                    </p>
                    <p className='font-medium'>
                      {order.shippingAddress.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Button
              css={{ fontFamily: "$algeria" }}
              style={{
                background: "linear-gradient(45deg, #ffa000 30%, #ffc107 90%)",
                color:"white",
              }}
              variant={'outlined'}
              onClick={downloadInvoice}>
              <Download /> Billing Invoice
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
