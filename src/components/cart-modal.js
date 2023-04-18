import React, {useContext} from "react";
import {css, Button, Modal, Text} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import CartItem from "@/components/CartItem";
import {UserContext} from "../../context/context";


export default function CartModal() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    const ctx = useContext(UserContext);
    console.log(ctx);

    return (


        <div>
            <Button auto ghost onPress={handler}
                    css={{
                        background: "transparent",
                        border: "transparent",
                        width: "auto",
                        height: "auto"
                    }}
            >
                <Image src="/cart.png" width={40} height={40}/>
            </Button>
            <Modal
                width="800px"
                scroll="false"
                closeButton
                shadow
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
                css={{fontFamily: '$algeria'}}
            >
                <Modal.Header css={{fontFamily: '$algeria'}}>
                    <Text id="modal-title" size={24}>
                    </Text>
                </Modal.Header>
                {
                    (ctx.cart.cartItems === undefined || ctx.cart.cartItems.length === 0) &&
                    <Modal.Body css={{fontFamily: '$algeria'}}>
                        <h1 className={"text-center text-3xl pb-10"}> Your cart is empty :( </h1>
                    </Modal.Body>
                }
                {
                    (ctx.cart.cartItems !== undefined && ctx.cart.cartItems.length !== 0) &&
                    <>
                        <Modal.Body css={{fontFamily: '$algeria'}}>
                            <div className=" bg-[#D9D9D9] w-full p-5 rounded-lg">
                                <div className="px-3 w-full">
                                    {
                                        ctx.cart.cartItems.map(item =>
                                            <CartItem
                                                key={Date.now()}
                                                id={item.id}
                                                qty={item.quantity}
                                                product={item.product}
                                            />)
                                    }
                                    <hr className="h-px my-6 border-[#D9D9D9] border-1 "></hr>
                                    <div className="mb-6 pb-6 text-lg border-b border-[#D9D9D9] text-black">
                                        <div className="w-full flex mb-3 items-center">
                                            <div className="flex-grow">
                                                <span className="text-black">Subtotal</span>
                                            </div>
                                            <div className="pl-3">
                                                <span className="font-medium">₹699</span>
                                            </div>
                                        </div>
                                        <div className="w-full flex items-center">
                                            <div className="flex-grow">
                                                <span className="text-black">Shipping</span>
                                            </div>
                                            <div className="pl-3">
                                                <span className="font-medium">Free</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="mb-6 pb-6 border-b border-gray md:border-none text-gray-800 text-xl">
                                        <div className="w-full flex items-center">
                                            <div className="flex-grow">
                                                <span className="text-gray-600">Total</span>
                                                <p className="text-sm text-gray">Including all taxes</p>
                                            </div>
                                            <div className="pl-3">
                                                <span className="font-medium text-gray text-sm">INR</span> <span
                                                className="font-medium text-2xl">₹699</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer css={{fontFamily: '$algeria'}}>
                            <Button auto flat color="error" onPress={closeHandler}>
                                Close
                            </Button>
                            <Link href="/checkout">
                                <Button auto
                                        onPress={closeHandler}
                                        style={{
                                            background: "#A5153F",
                                        }}>
                                    Proceed To Checkout
                                </Button>
                            </Link>
                        </Modal.Footer>
                    </>
                }
            </Modal>
        </div>
    )
        ;
}
