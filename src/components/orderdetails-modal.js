import React, { useEffect, useState } from "react";
import { css, Modal, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import WithdrawForm from "./withdraw-form";
import AddVendorForm from "./addvendor-form";
import RequestReplacementModal from "./requestreplace-modal";

export default function OrderDetailsModal({ order }) {
  const [visible, setVisible] = React.useState(false);
  const [prodTotal, setProdTotal] = useState(0);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <Button
        auto
        onPress={handler}
        color='error'
        style={{
          background: "#A5153F",
        }}>
        Order Details
      </Button>
      <Modal
        width='1080px'
        closeButton
        preventClose
        aria-labelledby='modal-title'
        open={visible}
        onClose={closeHandler}
        css={{ fontFamily: "$algeria" }}>
        <Modal.Header css={{ fontFamily: "$algeria" }}>
          <Text id='modal-title' size={18}>
            Billing Information
          </Text>
        </Modal.Header>

        <Modal.Body css={{ fontFamily: "$algeria" }}>
          <div class='bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-3/4 mx-auto p-4'>
            {/* <!-- Order header --> */}
            <div class='bg-bg text-white py-4 px-6 flex justify-between items-center'>
              <h1 class='text-xl font-semibold'>Order #{order.id}</h1>
              <span class='text-lg'>
                ₹{Number(order.orderTotal).toLocaleString("en-IN")}
              </span>
            </div>
            {/* <!-- Order details --> */}
            <div class='p-6'>
              {order.orderItems.map((item) => (
                <div class='flex justify-between items-center mb-4'>
                  <span class='text-lg font-medium'>{item.product.name}</span>
                  <span class='text-black'>
                    ₹
                    {Number(item.product.total * item.quantity).toLocaleString(
                      "en-IN"
                    )}
                  </span>
                </div>
              ))}
              <hr class='my-6' />
              {/* <!-- Billing information --> */}
              <h2 class='text-lg font-medium mb-4'>Shipping Address</h2>
              <div class='grid grid-cols-2 gap-4'>
                <div>
                  <span class='text-black'>Name</span>
                  <p class='font-medium'>{order.shippingAddress.name}</p>
                </div>
                <div>
                  <span class='text-black'>Email</span>
                  <p class='font-medium'>{order.shippingAddress.email}</p>
                </div>
                <div>
                  <span class='text-black'>Phone</span>
                  <p class='font-medium'>{order.shippingAddress.phone}</p>
                </div>
                <div>
                  <span class='text-black'>Address</span>
                  <p class='font-medium'>
                    {order.shippingAddress.addressLine1}
                  </p>
                  <p class='font-medium'>
                    {order.shippingAddress.addressLine2}
                  </p>
                  <p class='font-medium'>{order.shippingAddress.city}</p>
                  <p class='font-medium'>{order.shippingAddress.state}</p>
                  <p class='font-medium'>{order.shippingAddress.postalCode}</p>
                  <p class='font-medium'>{order.shippingAddress.country}</p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
