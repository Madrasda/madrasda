import React from "react";
import { css, Modal, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import WithdrawForm from "./withdraw-form";

export default function WithdrawModal() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button auto onPress={handler} color="error" css={{fontFamily: '$algeria'}}
      style={{
        background: "#A5153F",
      }}>
        Withdraw 
      </Button>
      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        css={{fontFamily: '$algeria'}}
      >
        <Modal.Header css={{fontFamily: '$algeria'}}>
          <Text id="modal-title" size={18}>
            Withdraw Request
          </Text>
        </Modal.Header>

        <Modal.Body css={{fontFamily: '$algeria'}}>
            <WithdrawForm/>
        </Modal.Body>
      
        <Modal.Footer css={{fontFamily: '$algeria'}}>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto
          onPress={closeHandler}
          style={{
            background: "#A5153F",
          }}>
            Request
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}