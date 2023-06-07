import React from "react";
import { css, Modal, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import WithdrawForm from "./withdraw-form";
import AddVendorForm from "./addvendor-form";

export default function ReplacementModal() {
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
        style={{
          background: "#A5153F",
        }}
      >
        View Details
      </Button>
      <Modal
        css={{ fontFamily: "$algeria" }}
        width="1000px"
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Replacement Details
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
                  className="bg-[#D9D9D9] border-b border-black text-black text-sm w-4/6 md:w-96 p-2.5   "
                  placeholder="Name"
                  readOnly
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
                  readOnly
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
                  readOnly
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
                  readOnly
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
                  readOnly
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
                  readOnly
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
                readOnly
              />
              <div className="mb-6 mt-6 ml-2">
                <h2 className="title-font font-medium text-xl mb-4">Proof</h2>
                <div className="flex flec col ml-12 ">
                  <img
                    className="w-36 rounded-lg"
                    src="https://cdn.discordapp.com/attachments/981618787491127306/1078972451930771486/Group_85.png"
                    alt="picture"
                  ></img>
                  <img
                    className="ml-6 w-36 rounded-lg"
                    src="https://cdn.discordapp.com/attachments/981618787491127306/1078972451930771486/Group_85.png"
                    alt="picture"
                  ></img>
                </div>
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
            Accept
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
