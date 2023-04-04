import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import Cart from "./cart";
import Incdec from "./incdec";
import Link from "next/link";

export default function CartModal() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };
    return (
      <div>
        <Button auto ghost onPress={handler}
        style={{
          background: "transparent",
          border: "transparent",
        }}
        >
        <Image src="/cart.png" width={40} height={40}/>
        </Button>
        <Modal
            width="600px"
           scroll="false"
          closeButton
          preventClose
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Cart
            </Text>
          </Modal.Header>
  
          <Modal.Body>
          <div className=" bg-[#D9D9D9] w-fit m-3 p-5 rounded-lg">
          <div className="px-3 w-full">         
            <div className="w-full flex items-center hover:bg-off-white rounded-lg">
                <div className="overflow-hidden rounded-lg w-2/12 h-2/12 bg-[#D9D9D9] border border-gray">
                <Image src="/vikram-tee.png" alt="ecommerce" width={1080} height={1920} className="object-contain object-center w-full h-full block" />
                </div>
                <div className="flex-grow pl-3 ml-4">
                    <h6 className="font-medium text-2xl text-black">Round Neck Solid Mens T-Shirt</h6>
                    <p className="text-gray">Vikram Collection</p>
                    <p className="text-gray">Size-L</p>
                    <div className="flex flex-row objects-center">
                      <p className="text-gray">Qty</p>
                      <div className="flex items-center mt-4 h-4 ml-2 w-16">
                          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                          <button data-action="decrement" className="bg-white flex text-center border border-gray text-primary hover:text-primary hover:bg-gray h-4 w-16 rounded-l cursor-pointer">
                            <span className="m-auto text-xs font-bold">-</span>
                            </button>
                            <input className="border border-gray focus:outline-none text-center h-4  w-full bg-white font-semibold text-xs hover:text-primary focus:text-primary md:text-basecursor-default flex items-center text-primary outline-none" value="0" onChange></input>
                            <button data-action="increment" className="bg-white flex text-center border border-gray text-primary hover:text-primary hover:bg-gray h-4 w-16 rounded-r cursor-pointer">
                            <span className="m-auto text-xs font-bold">+</span>
                            </button>
                        </div>
                      </div>
                    </div>
                </div>
                <div>
                    <span class="font-medium text-black text-xl">₹699</span>
                </div>
                <div>
                    <button class="font-medium text-gray text-xl ml-4 mr-4">x</button>
                </div>
            </div>
            <hr className="h-px my-6 border-[#D9D9D9] border-1 "></hr>
            <div class="mb-6 pb-6 text-lg border-b border-[#D9D9D9] text-black">
                <div class="w-full flex mb-3 items-center">
                    <div class="flex-grow">
                        <span class="text-black">Subtotal</span>
                    </div>
                    <div class="pl-3">
                        <span class="font-medium">₹699</span>
                    </div>
                </div>
                <div class="w-full flex items-center">
                    <div class="flex-grow">
                        <span class="text-black">Shipping</span>
                    </div>
                    <div class="pl-3">
                        <span class="font-medium">Free</span>
                    </div>
                </div>
            </div>
            <div class="mb-6 pb-6 border-b border-gray md:border-none text-gray-800 text-xl">
                <div class="w-full flex items-center">
                    <div class="flex-grow">
                        <span class="text-gray-600">Total</span>
                        <p className="text-sm text-gray">Including all taxes</p>
                    </div>
                    <div class="pl-3">
                        <span class="font-medium text-gray text-sm">INR</span> <span class="font-medium text-2xl">₹699</span>
                    </div>
                </div>
            </div>
          </div>
          </div>
          </Modal.Body>
        
          <Modal.Footer>
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
        </Modal>
      </div>
    );
  }