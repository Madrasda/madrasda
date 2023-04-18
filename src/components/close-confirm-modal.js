import { css, Modal, Button} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

export default function CloseConfirm () {
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
  
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };
    return(
        <>
        <Button auto ghost onPress={handler}
        css={{
            background: "transparent",
            border: "transparent",
            width: "max-content",
            height: "auto"
        }}>
            <Image src="/close.png" width={30} height={30}/>
        </Button>
        <Modal
          width="400px"
          preventClose
          open={visible}
          aria-labelledby="modal-title"
          css={{fontFamily: '$algeria'}}
        >
                <Modal.Header 
                css={{
                    fontFamily: '$algeria', 
                    fontSize: "$lg"
                }}>
                    Confirm
                </Modal.Header>
                <Modal.Body css={{fontFamily: '$algeria'}}>
                    <h1 className={"text-center pb-10"}>Confirmation message</h1>
                </Modal.Body>
                <Modal.Footer css={{fontFamily: '$algeria'}}>
                    <Button auto flat color="success" onPress={closeHandler}>
                        Yes
                    </Button>
                    <Button auto flat color="error" onPress={closeHandler}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}