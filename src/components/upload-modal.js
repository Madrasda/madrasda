import React, { useEffect, useState } from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";

export default function UploadModal({chooseDesign}) {
  const [visible, setVisible] = React.useState(false);
  const [designs, setDesigns] = useState([]);
  const [selected, setSelected] = useState({});
  const handler = () => setVisible(true);
  
  const closeHandler = () => {
    setVisible(false);
    console.log(selected);
    chooseDesign(selected);
    console.log("closed"); 
  };
  const getDesigns = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/vendor/designs" , { 
        headers : {
          Authorization : "Bearer " + localStorage.getItem('token')
        }
      }  
    );
    setDesigns(response.data);
  }

  useEffect(() => {
    getDesigns();
  }, []);

  return (
    <div>
      <Button auto ghost color="black" onPress={handler}>
        <Image src="/upload.svg" width={25} height={25} className="mr-4"/> Upload 
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
            Select Design
          </Text>
        </Modal.Header>

        <Modal.Body>
        <div className="bg-[#D9D9D9] m-3 p-5 rounded-lg">
          <div className="flex justify-around items-center flex-wrap">
            {
              designs && 
              designs.map((d) => {
                return (
                  <Image src={d.imgUrl} width={100} height={40} className="p-2" onClick={() => {
                      setSelected(d);
                      closeHandler();
                  }}/>
                )
              })  
            }
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