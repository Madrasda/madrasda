import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import Image from "next/image";

export default function UploadModal() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button auto ghost color="error" onPress={handler}>
        Open modal
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
            Upload Design
          </Text>
        </Modal.Header>

        <Modal.Body>
        <div className="bg-[#D9D9D9] m-3 p-5 rounded-lg">
          <div className="flex justify-around items-center">
            <label for="dropzone-file" className="flex flex-col mx-2 items-center justify-center w-full h-fit border-2 border-[#D9D9D9] rounded-lg cursor-pointer bg-white">
                <div className="flex flex-col items-center justify-center py-6 px-4">
                    <p className="text-sm text-black flex flex-col justify-center">Click to<span className="font-semibold flex justify-center">Upload Design</span></p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
            <Image src="/wake-up.png" width={100} height={40} />
            </div>
            <div className="my-4">
              <ul class="w-48 text-sm font-medium text-black">
                  <li class="w-full">
                      <div class="flex items-center pl-3">
                          <input id="list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label for="list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Print</label>
                      </div>
                  </li>
                  <li class="w-full">
                      <div class="flex items-center pl-3">
                          <input id="list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label for="list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Embroidray</label>
                      </div>
                  </li>
              </ul>
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