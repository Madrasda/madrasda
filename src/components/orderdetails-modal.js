import React, {useState} from "react";
import {Button, Modal, Text} from "@nextui-org/react";
import {uuidv4} from "@firebase/util";

export default function OrderDetailsModal({order}) {
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
                css={{fontFamily: "$algeria"}}>
                <Modal.Header css={{fontFamily: "$algeria"}}>
                    <Text id='modal-title' size={18}>
                        Billing Information
                    </Text>
                </Modal.Header>

                <Modal.Body css={{fontFamily: "$algeria"}}>
                    <div className='bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-3/4 mx-auto p-4'>
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
                                <div key={uuidv4()} className='flex justify-between items-center mb-4'>
                                    <span className='text-lg font-medium'>{item.product.name}</span>
                                    <span className='text-black'>
                    ₹
                                        {Number(item.product.total * item.quantity).toLocaleString(
                                            "en-IN"
                                        )}
                  </span>
                                </div>
                            ))}
                            <hr className='my-6'/>
                            {/* <!-- Billing information --> */}
                            <h2 className='text-lg font-medium mb-4'>Shipping Address</h2>
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <span className='text-black'>Name</span>
                                    <p className='font-medium'>{order.shippingAddress.name}</p>
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
                                    <p className='font-medium'>{order.shippingAddress.postalCode}</p>
                                    <p className='font-medium'>{order.shippingAddress.country}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}
