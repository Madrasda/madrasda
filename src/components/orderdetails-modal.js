import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import WithdrawForm from "./withdraw-form";
import AddVendorForm from "./addvendor-form";
import RequestReplacementModal from "./requestreplace-modal";

export default function OrderDetailsModal() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button auto onPress={handler} color="error"
      style={{
        background: "#A5153F",
      }}>
        Order Details 
      </Button>
      <Modal
        width="1080px"
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Add Vendor
          </Text>
        </Modal.Header>

        <Modal.Body>
        <div class="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-3/4 mx-auto">
  {/* <!-- Order header --> */}
  <div class="bg-bg text-white py-4 px-6 flex justify-between items-center">
    <h1 class="text-xl font-semibold">Order #12345</h1>
    <span class="text-lg">$29.99</span>
  </div>
  {/* <!-- Order details --> */}
  <div class="p-6">
    <div class="flex justify-between items-center mb-4">
      <span class="text-lg font-medium">Product 1</span>
      <span class="text-black">$9.99</span>
    </div>
    <div class="flex justify-between items-center mb-4">
      <span class="text-lg font-medium">Product 2</span>
      <span class="text-black">$12.99</span>
    </div>
    <div class="flex justify-between items-center mb-4">
      <span class="text-lg font-medium">Product 3</span>
      <span class="text-black">$6.99</span>
    </div>
    <hr class="my-6" />
    {/* <!-- Billing information --> */}
    <h2 class="text-lg font-medium mb-4">Billing Information</h2>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <span class="text-black">Name</span>
        <p class="font-medium">John Doe</p>
      </div>
      <div>
        <span class="text-black">Email</span>
        <p class="font-medium">johndoe@gmail.com</p>
      </div>
      <div>
        <span class="text-black">Address</span>
        <p class="font-medium">123 Main St.</p>
        <p class="font-medium">Apt. 4B</p>
        <p class="font-medium">New York, NY 10001</p>
      </div>
      <div>
        <span class="text-black">Payment Method</span>
        <p class="font-medium">Visa **** **** **** 1234</p>
      </div>
    </div>
    {/* <!-- Shipping information --> */}
    <h2 class="text-lg font-medium my-4">Shipping Information</h2>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <span class="text-black">Name</span>
        <p class="font-medium">John Doe</p>
      </div>
      <div>
        <span class="text-black">Email</span>
        <p class="font-medium">johndoe@gmail.com</p>
      </div>
      <div>
        <span class="text-black">Address</span>
        <p class="font-medium">123 Main St.</p>
        <p class="font-medium">Apt. 4B</p>
        <p class="font-medium">New York, NY 10001</p>
      </div>
    </div>
  </div>
</div>

        </Modal.Body>
      
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto
          onPress={closeHandler}
          style={{
            background: "#A5153F",
          }}>
            <RequestReplacementModal/>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}