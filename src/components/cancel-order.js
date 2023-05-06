import { Button, TextField, TextareaAutosize } from "@mui/material";
import { css, Modal } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

export default function CancelOrderModal({ orderDate }) {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        color='error'
        variant='outlined'
        onClick={() => setVisible(true)}
        className={
          new Date().getTime() - new Date(orderDate).getTime() >
          4 * 60 * 60 * 1000
            ? "hidden"
            : ""
        }>
        Cancel Order
      </Button>
      <Modal
        width='400px'
        preventClose
        open={visible}
        aria-labelledby='modal-title'
        className='font-quest'>
        <Modal.Header className='text-2xl text-primary font-bold'>
          Cancel Order
        </Modal.Header>
        <Modal.Body>
          <h1 className='text-center'>Reason for cancellation?</h1>
          <TextField className='rounded p-3' />
        </Modal.Body>
        <Modal.Footer css={{ fontFamily: "$algeria" }}>
          <Button auto flat color='success'>
            Proceed
          </Button>
          <Button auto flat color='error' onClick={closeHandler}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
