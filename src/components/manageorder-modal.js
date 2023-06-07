import React from "react";
import { css, Modal, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import WithdrawForm from "./withdraw-form";
import AddVendorForm from "./addvendor-form";

export default function MangeOrderModal() {
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
          background: "linear-gradient(45deg, #ffa000 30%, #ffc107 90%)",
          color: "white",
        }}
        css={{ fontFamily: "$algeria" }}
      >
        View Details
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
            Order Details
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
                  SKU
                </h2>
                <input
                  type="text"
                  className="bg-[#D9D9D9] border-b border-black text-black text-sm w-4/6 md:w-96 p-2.5 cursor-default"
                  placeholder="REDTEEWITHTOMANDJERRYDESIGNFORVENDOR"
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
                  Category
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
                  Gender
                </h2>
                <input
                  type="text"
                  className="bg-[#D9D9D9] border-b  border-black  text-black text-sm w-4/6 md:w-96 p-2.5 cursor-default"
                  placeholder="MEN"
                  readOnly
                />
              </div>
              <div className="flex mb-2">
                <h2
                  for="last_name"
                  className="mb-2 w-2/6 md:w-96 text-lg font-medium text-black flex items-center"
                >
                  #Ref
                </h2>
                <input
                  type="text"
                  className="bg-[#D9D9D9] border-b  border-black  text-black text-sm w-4/6 md:w-96 p-2.5 cursor-default"
                  placeholder="COLOR"
                  readOnly
                />
              </div>
              <div className="flex mb-2">
                <h2
                  for="last_name"
                  className="mb-2 w-2/6 md:w-96 text-lg font-medium text-black flex items-center"
                >
                  Sizes
                </h2>
                <input
                  type="text"
                  className="bg-[#D9D9D9] border-b  border-black  text-black text-sm w-4/6 md:w-96 p-2.5 cursor-default"
                  placeholder="L,XL,2XL..."
                  readOnly
                />
              </div>
              <div className="flex mb-2">
                <h2
                  for="company"
                  className="mb-2 text-lg w-2/6 md:w-96 font-medium text-black flex items-center"
                >
                  Ship Name
                </h2>
                <input
                  type="text"
                  className="bg-[#D9D9D9] border-b  border-black text-black text-sm w-4/6 md:w-96 p-2.5 cursor-default "
                  placeholder="Ship Address Name"
                  readOnly
                />
              </div>

              <div className="mb-6 mt-6 ml-2">
                <h2 className="title-font font-medium text-xl mb-4">Design</h2>
                <img
                  className="w-36 ml-16 rounded-lg"
                  src="/wake-up.png"
                  alt="picture"
                ></img>
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
