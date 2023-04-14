import React, {useState} from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import WithdrawForm from "./withdraw-form";
import AddVendorForm from "./addvendor-form";

export default function AddVendorModal({getFormData}) {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState(null);

  const handleSubmit = (data) => {
    setForm(data);
    getFormData(data);
    closeHandler();
  }

  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    setForm(null);
  };
  return (
    <div>
      <Button auto ghost onPress={handler}
        style={{
          background: "white",
          border: "white",
        }}
        >
        <Image src="/plus-icon.png" width={40} height={40}/>
        </Button>
      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18} style={{
          color: "#A5153F",
        }}>
            Add Vendor
          </Text>
        </Modal.Header>

        <Modal.Body>
        <label for="dropzone-file" className="flex items-center justify-center w-full h-fit bg-white">
            <div className="flex flex-col items-center justify-center px-4 relative group transition-all duration-300 ease-in-out">
              {/* <h4 className="text-base">Upload</h4> */}
              <div className="">
              <Image src="/profile-logo.png" 
                  alt="ecommerce" 
                  height={60}
                  width={60} 
                  className="object-contain rounded-full cursor-pointer" />
              </div>
              <div className="absolute z-20 hidden group-hover:block">
              <Image src="/hover profile logo.png" 
                  alt="ecommerce" 
                  height={60}
                  width={60} 
                  className="object-contain rounded-full cursor-pointer" />
              </div>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
        </label>
            <AddVendorForm onSubmit={handleSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}