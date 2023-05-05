import React, {useState} from "react";
import {Modal, Text} from "@nextui-org/react";
import {uuidv4} from "@firebase/util";
import {Button} from "@mui/material";

export default function OrderDetailsModal({order}) {
    const [visible, setVisible] = React.useState(false);
    const [prodTotal, setProdTotal] = useState(0);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    return (
      <>
        <Button
          onClick={handler}
          variant='outlined'
          className={
            "text-primary border-primary hover:border-logo hover:text-logo"
          }>
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
            className='md:w-[70%] md:mx-auto'
            css={{ fontFamily: "$algeria" }}>
            <Modal.Header css={{ fontFamily: "$algeria" }}>
              <Text id='modal-title' size={18}>
                Billing Information
              </Text>
            </Modal.Header>

            <Modal.Body css={{ fontFamily: "$algeria" }}>
              <div className='bg-white shadow-lg rounded-lg overflow-hidden w-full mx-auto p-4'>
                {/* <!-- Order header --> */}
                <div className='bg-bg text-white py-4 px-6 flex justify-between items-center'>
                  <h1 className='text-xl font-semibold'>Order #{order.id}</h1>
                  <span className='text-lg'>
                    ₹{Number(order.orderTotal).toLocaleString("en-IN")}
                  </span>
                </div>
                {/* <!-- Order details --> */}
                <div className='p-6'>
                  {order.orderItems.map((item) => (
                    <div
                      key={uuidv4()}
                      className='flex justify-between items-center mb-4'>
                      <span className='flex space-x-2 items-center text-lg text-black font-medium'>
                        <h1>{item.product.name}</h1>
                        <h1 className="text-sm text-shadowGrey">- Quantity {item.quantity}</h1>
                      </span>
                      <span className='text-black'>
                        ₹
                        {Number(
                          ((item.product.total *
                            (100 - item.product.discount)) /
                            100) *
                            item.quantity
                        ).toLocaleString("en-IN")}
                      </span>
                    </div>
                  ))}
                  <hr className='my-6' />
                  {/* <!-- Billing information --> */}
                  <div className='flex justify-between'>
                    <h1 className='text-lg font-medium mb-4'>Order Date</h1>
                    <h1 className='text-shadowGrey'>
                      {order.orderDate.substr(0, 10)}
                    </h1>
                  </div>
                  <div className='flex justify-between'>
                    <h1 className='text-lg font-medium mb-4'>Payment ID</h1>
                    <h1 className='text-shadowGrey'>{order.paymentId}</h1>
                  </div>
                  <h2 className='text-lg font-medium mb-4'>Shipping Address</h2>
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <span className='text-black'>Name</span>
                      <p className='font-medium'>
                        {order.shippingAddress.name}
                      </p>
                    </div>
                    <div>
                      <span className='text-black'>Email</span>
                      <p className='font-medium'>
                        {order.shippingAddress.email}
                      </p>
                    </div>
                    <div>
                      <span className='text-black'>Address</span>
                      <p className='font-medium'>
                        {order.shippingAddress.addressLine1}
                      </p>
                      <p className='font-medium'>
                        {order.shippingAddress.addressLine2}
                      </p>
                      <p className='font-medium'>
                        {order.shippingAddress.city}
                      </p>
                      <p className='font-medium'>
                        {order.shippingAddress.state}
                      </p>
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
            </Modal.Body>
          </Modal>
        </div>
      </>
    );
}
