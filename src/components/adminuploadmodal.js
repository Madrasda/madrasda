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
          width="500px"
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
                      <p className="text-xs text-black flex flex-col justify-center">Click to<span className="font-semibold flex justify-center">Upload Mockup</span></p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
              </label>
              </div>
              <h2 className="ml-2 mt-8 title-font font-medium mb-2">Mockup Name</h2>
              <div className="mb-2 ml-2 ">
                  <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Enter Mockup Name" />
              </div>
              <div className="mt-6 ml-2">Colors</div>
            <div className="flex items-center ml-2 mt-3 mb-3">
              <div className="flex">
                <div className='flex flex-col justify-center items-center px-2'>
                  <button className="border-2 border-gray bg-black rounded-full w-10 h-10 focus:outline-none"></button>
                  <p className='text-xs'>Black</p>
                </div>
                <div className='flex flex-col justify-center items-center px-2'>
                  <button className="border-2 border-gray ml-1 bg-[#4A2129] rounded-full w-10 h-10 focus:outline-none"></button>
                  <p className='text-xs'>Maroon</p>
                </div>
                <div className='flex flex-col justify-center items-center px-2'>
                  <button className="border-2 border-gray ml-1 bg-gray rounded-full w-10 h-10 focus:outline-none"></button>
                  <p className='text-xs'>Gray</p>
                </div>
                <div className='flex flex-col justify-center items-center px-2'>
                  <button className="border-2 border-gray ml-1 bg-[#281477] rounded-full w-10 h-10 focus:outline-none"></button>
                  <p className='text-xs'>Blue</p>
                </div>
                <div className='flex flex-col justify-center items-center px-2'>
                  <button className="border-2 border-gray ml-1 bg-white rounded-full w-10 h-10 focus:outline-none"></button>
                  <p className='text-xs'>White</p>
                </div>
              </div>
            </div>

            <div className="mt-6 ml-2">Size Guide</div>
            <div className="flex justify-start items-center mt-3 mb-3 ml-2">
                <div className="relative">
                <button className="w-10 text-xs justify-center mr-5 text-gray transition-colors duration-150 border border-gray rounded-lg focus:shadow-outline hover:bg-primary hover:text-white hover:border-primary">XS</button>
                <button className="w-10 text-xs justify-center mr-5 text-gray transition-colors duration-150 border border-gray rounded-lg focus:shadow-outline hover:bg-primary hover:text-white hover:border-primary">S</button>
                <button className="w-10 text-xs justify-center mr-5 text-gray transition-colors duration-150 border border-gray rounded-lg focus:shadow-outline hover:bg-primary hover:text-white hover:border-primary">M</button>
                <button className="w-10 text-xs justify-center mr-5 text-gray transition-colors duration-150 border border-gray rounded-lg focus:shadow-outline hover:bg-primary hover:text-white hover:border-primary">L</button>
                <button className="w-10 text-xs justify-center mr-5 text-gray transition-colors duration-150 border border-gray rounded-lg focus:shadow-outline hover:bg-primary hover:text-white hover:border-primary">XL</button>
                <button className="w-10 text-xs justify-center mr-5 text-gray transition-colors duration-150 border border-gray rounded-lg focus:shadow-outline hover:bg-primary hover:text-white hover:border-primary">XXL</button>
                </div>
              </div>
              {/* <h2 className="ml-2 mt-4 title-font font-medium mb-2">Stock Available</h2>
              <div className="mb-2 ml-2 ">
                  <input type="Number" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Quantity" />
              </div> */}
              <h2 className="ml-2 mt-4 title-font font-medium mb-2">Stock Available</h2>
              <div className="mb-2 ml-2 ">
                  <input type="Number" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Quantity" />
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