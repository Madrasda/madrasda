import React from "react";
import { css, Modal, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import WithdrawForm from "./withdraw-form";

export default function WithdrawModal({ request, profit, withdraw }) {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const withdrawHandler = () => {
    withdraw(true);
    closeHandler();
  };
  return (
    <div>
      <Button
        auto
        onPress={handler}
        color='error'
        css={{ fontFamily: "$algeria" }}
        style={{
              background:"linear-gradient(45deg, #ffa000 30%, #ffc107 90%)",
              color:"white",
            }}>
        Withdraw
      </Button>
      <Modal
        closeButton
        preventClose
        aria-labelledby='modal-title'
        open={visible}
        onClose={closeHandler}
        css={{ fontFamily: "$algeria" }}>
        <Modal.Header css={{ fontFamily: "$algeria" }}>
          <Text id='modal-title' size={18} className='font-bold'>
            Withdraw Request
          </Text>
        </Modal.Header>

        <Modal.Body css={{ fontFamily: "$algeria" }}>
          <WithdrawForm profit={profit} />
        </Modal.Body>

        <Modal.Footer css={{ fontFamily: "$algeria" }}>
          <Button auto flat color='error' onPress={closeHandler}>
            Close
          </Button>
          {Number(profit) !== 0 && (
            <Button
              auto
              onPress={withdrawHandler}
              style={{
                background:"linear-gradient(45deg, #ffa000 30%, #ffc107 90%)",
                color:"white",
              }}>
              Request
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}