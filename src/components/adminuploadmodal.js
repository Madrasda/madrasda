import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import Image from "next/image";

export default function AdminUploadModal() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
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
            <Text id="modal-title" size={18}>
              Upload Mockup
            </Text>
          </Modal.Header>
  
          <Modal.Body>
          <div className="bg-[#D9D9D9] m-3 p-5 rounded-lg">
            <div className="flex justify-around items-center">
              <label for="dropzone-file" className="flex flex-col mx-2 items-center justify-center w-full h-fit border-2 border-[#D9D9D9] rounded-lg cursor-pointer bg-white">
                  <div className="flex flex-row items-center justify-center py-6 px-4 ">
                  <Image src="/upload.svg" width={50} height={50} className="mr-4"/>
                      <p className="text-sm text-black flex flex-col justify-center">Click to<span className="font-semibold flex justify-center">Upload Mockup</span></p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
              </label>
              </div>
          </div>
          </Modal.Body>
        
          <Modal.Footer>
            <Button auto flat color="error" onPress={closeHandler}>
              Close
            </Button>
            <Button auto
            onPress={closeHandler}
            style={{
              background: "#A5153F",
            }}>
              Upload
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }