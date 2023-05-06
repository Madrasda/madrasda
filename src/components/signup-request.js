import React from "react";
import { css, Modal, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import WithdrawForm from "./withdraw-form";
import AddVendorForm from "./addvendor-form";

export default function SignupModal(props) {
  const [visible, setVisible] = React.useState(false);
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
        className='bg-primary hover:bg-logo text-white'>
        View Details
      </Button>
      <Modal
        className='font-quest'
        width='1000px'
        closeButton
        preventClose
        aria-labelledby='modal-title'
        open={visible}
        onClose={closeHandler}>
        <Modal.Header>
          <Text id='modal-title' size={18}>
            Creator Details
          </Text>
        </Modal.Header>

        <Modal.Body css={{ fontFamily: "$algeria" }}>
          <div className='container mt-8 rounded-lg w-full'>
            <h1>This is a test</h1>
          </div>
        </Modal.Body>

        <Modal.Footer css={{ fontFamily: "$algeria" }}>
          <Button auto flat color='error' onPress={closeHandler}>
            Delete
          </Button>
          <Button auto onPress={closeHandler} color='success'>
            Accept
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
