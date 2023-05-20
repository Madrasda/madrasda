import { Button, TextField, TextareaAutosize } from "@mui/material";
import { css, Modal, Text } from "@nextui-org/react";
import Image from "next/image";
import {useRef, useState} from "react";
import axios from "axios";

export default function CancelOrderModal({ transactionId, orderDate, setMessage, setSeverity, setOpenSnackbar, cancelRequested, cancelled }) {
  const [visible, setVisible] = useState(false);
  const [requested, setRequested] = useState(cancelRequested);
   const [orderCancelled, setOrderCancelled] = useState(cancelled);
  const reasonRef = useRef();
  const handler = () => setVisible(true);

   console.log(new Date());
   console.log(transactionId + " " + "bg-error " +
      ((requested || (new Date().getTime() - new Date(orderDate).getTime()  <= 300000 && !cancelled))
         ? ""
         : "hidden"))

  const requestCancelOrder = () => {
    axios.put("https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/transaction/cancelOrder", {
      "transaction": {
         "id": transactionId
      },
      "reason": reasonRef.current.value
    }, {
      headers: {Authorization: "Bearer " + localStorage.getItem("token_client")}
    })
       .then((response) => {
         if(response.status === 200) {
           setVisible(false);
           setMessage("Cancel order requested successfully")
           setSeverity("success");
           setOpenSnackbar(true);
            setRequested(true);
         }
       })
       .catch(err => {
         setVisible(false);
         setMessage(err.data);
         setSeverity("error");
         setOpenSnackbar(true);
       })
  }
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        color='error'
        variant={"contained"}
        css={{ fontFamily: "$algeria" }}

        onClick={() => setVisible(true)}
        className={
           'bg-error ' +
           ((requested || (new Date().getTime() -new Date(orderDate).getTime()  <= 300000 && !cancelled))
              ? ""
              : "hidden")
        }
        disabled={requested}>
        {!requested ? "Cancel Order" : "Cancel Order Requested"}
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
          <TextField inputRef={reasonRef} className='rounded p-3' />
        </Modal.Body>
        <Modal.Footer css={{ fontFamily: "$algeria" }}>
          <Button
            style={{
              background: "#388e3c",
            }}
            variant={"contained"}
            onClick={requestCancelOrder}>
            Proceed
          </Button>
          <Button
            style={{
              background: "#d32f2f",
            }}
            variant={"contained"}
            onClick={closeHandler}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
