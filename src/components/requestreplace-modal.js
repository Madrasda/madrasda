import React from "react";
import { css, Modal, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import WithdrawForm from "./withdraw-form";
import AddVendorForm from "./addvendor-form";

export default function RequestReplacementModal() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <div>
      <Button
        auto
        onPress={handler}
        color="error"
        css={{ fontFamily: "$algeria" }}
        style={{
          background: "#A5153F",
        }}
      >
        Request Replacement
      </Button>
      <Modal
        width="1000px"
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        css={{ fontFamily: "$algeria" }}
      >
        <Modal.Header css={{ fontFamily: "$algeria" }}>
          <Text id="modal-title" size={18}>
            Replacement Form
          </Text>
        </Modal.Header>

        <Modal.Body css={{ fontFamily: "$algeria" }}>
          <div className="container mt-8 bg-[#D9D9D9] rounded-lg w-full">
            <div className=" ml-8 mb-2 mr-20 mt-4 ">
              <h1 className="text-2xl font-medium text-black mb-6">
                # Order Number
              </h1>
              <div className="flex mb-2">
                <h2 className="text-lg mb-2 font-medium w-2/6 md:w-96 text-black flex items-center">
                  Customer Name
                </h2>
                <input
                  type="text"
                  className="bg-[#D9D9D9] border-b border-black text-black text-sm w-4/6 md:w-96 p-2.5 "
                  placeholder="Name"
                />
              </div>
              <div className="flex mb-2">
                <h2 className="text-lg mb-2 font-medium w-2/6 md:w-96 text-black flex items-center">
                  Order ID
                </h2>
                <input
                  type="text"
                  className="bg-[#D9D9D9] border-b border-black text-black text-sm w-4/6 md:w-96 p-2.5 cursor-default"
                  placeholder="ID"
                />
              </div>
              <div className="flex mb-2">
                <h2 className="text-lg mb-2 font-medium w-2/6 md:w-96 text-black flex items-center">
                  Product Details
                </h2>
                <input
                  type="text"
                  className="bg-[#D9D9D9] border-b border-black text-black text-sm w-4/6 md:w-96 p-2.5 cursor-default"
                  placeholder="T-Shirt"
                />
              </div>
              <div className="flex mb-2">
                <h2 className="text-lg mb-2 font-medium w-2/6 md:w-96 text-black flex items-center">
                  Item Price
                </h2>
                <input
                  type="text"
                  className="bg-[#D9D9D9] border-b border-black text-black text-sm w-4/6 md:w-96 p-2.5 cursor-default"
                  placeholder="₹"
                />
              </div>
              <div className="flex mb-2">
                <h2
                  for="last_name"
                  className="mb-2 w-2/6 md:w-96 text-lg font-medium text-black flex items-center"
                >
                  Shipping Charges
                </h2>
                <input
                  type="text"
                  className="bg-[#D9D9D9] border-b  border-black  text-black text-sm w-4/6 md:w-96 p-2.5 cursor-default"
                  placeholder="₹"
                />
              </div>
              <div className="flex mb-2">
                <h2
                  for="company"
                  className="mb-2 text-lg w-2/6 md:w-96 font-medium text-black flex items-center"
                >
                  Reason for Replacement
                </h2>
                <input
                  type="text"
                  className="bg-[#D9D9D9] border-b  border-black text-black text-sm w-4/6 md:w-96 p-2.5 cursor-default "
                  placeholder="text"
                />
              </div>
              <h2
                for="company"
                className="mb-2 text-lg w-2/6 md:w-96 font-medium text-black"
              >
                Comments
              </h2>
              <input
                type="text"
                id="large-input"
                className="block border-2 border-gray rounded-lg w-full p-14 text-black bg-[#D9D9D9] cursor-default"
                placeholder="Explanation....."
              />
              <div className="mb-6 mt-6 ml-2">
                <input
                  className="block w-full mb-5 text-xs text-black   cursor-pointer bg-off-white"
                  id="small_size"
                  type="file"
                />
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer css={{ fontFamily: "$algeria" }}>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button
            auto
            onPress={closeHandler}
            style={{
              background: "#A5153F",
            }}
          >
            Submit Request
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
