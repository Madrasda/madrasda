import { css, Modal, Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

export default function PayoutConfirm(props) {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const deleteTrue = () => {
    closeHandler();
    props.payout(true);
  };

  return (
    <>
      <Button
        className='bg-primary hover:bg-logo text-white font-small py-2 px-4 rounded-lg z-0'
        onPress={handler}>
        Complete Payout
      </Button>
      <Modal
        width='400px'
        preventClose
        open={visible}
        aria-labelledby='modal-title'
        css={{ fontFamily: "$algeria" }}>
        <Modal.Header
          css={{
            fontFamily: "$algeria",
            fontSize: "$lg",
          }}>
          Confirm
        </Modal.Header>
        <Modal.Body css={{ fontFamily: "$algeria" }}>
          <h1 className={"text-center pb-10"}>
            Successfully complete payout for this vendor?
          </h1>
        </Modal.Body>
        <Modal.Footer css={{ fontFamily: "$algeria" }}>
          <Button auto flat color='success' onPress={deleteTrue}>
            Yes
          </Button>
          <Button auto flat color='error' onPress={closeHandler}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
