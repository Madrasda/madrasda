import { css, Modal, Button} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

export default function CloseConfirm (props) {
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
  
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };

    const deleteTrue = () => {
        closeHandler();
        props.delete(true);
    }

    return (
      <>
        <Button
          auto
          ghost
          onPress={handler}
          css={{
            background: "transparent",
            border: "transparent",
            width: "auto",
            height: "auto",
          }}>
          <Image src='/close.png' width={30} height={30} />
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
            {props.template && (
              <h1 className={"text-center pb-10"}>
                Are you sure you want to delete this template?
              </h1>
            )}
            {props.vendor && (
              <h1 className={"text-center pb-10"}>
                Are you sure you want to delete this vendor?
              </h1>
            )}
            {props.mockup && (
              <h1 className={"text-center pb-10"}>
                Are you sure you want to delete this mockup?
              </h1>
            )}
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