import React, { useEffect, useState } from "react";
import { css, Modal, Button, Text } from "@nextui-org/react";
import { storage } from "@/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

export default function UploadModal({chooseDesign, upload, uploadSuccess}) {
  const [visible, setVisible] = React.useState(false);
  const [designs, setDesigns] = useState([]);
  const [selected, setSelected] = useState({});
  const [image, setImage] = useState(null);
  const [designType, setDesignType] = useState("");
  const [theme, setTheme] = useState("");
  const [info, setInfo] = useState("");
  const handler = () => setVisible(true);
  const router = useRouter();
  
  const closeHandler = () => {
    setVisible(false);
    console.log(selected);
    if(!upload){
      chooseDesign(selected);
    }else{
      console.log("upload closed");
      uploadImage(image);
    }
    console.log("closed"); 
    setImage(null);
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

  const uploadDesign = async (file) => {
    const response = await axios.post(
      "http://localhost:8080/api/vendor/addDesign",
       {
         imgUrl : file,
         designType : designType,
         themee : theme,
         additionalInformation : info
       }
      ,{
        headers : {
          Authorization : "Bearer " + localStorage.getItem('token')
        }
      }
    );
    router.reload();
  }

  const uploadImage = async (file) => {
      if(file){
        const imageRef = ref(storage, `designs/${file.name + v4()}`);
        await uploadBytes(imageRef, file);
        const url = await getDownloadURL(imageRef);
        uploadDesign(url);
      }
  }

  useEffect(() => {
    if(!upload){
      getDesigns();
    }
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
        css={{fontFamily: '$algeria'}}
      >
        <Modal.Header css={{fontFamily: '$algeria'}}>
          <Text id="modal-title" size={18}>
            {upload ? "Upload a new Design" : "Select Design"}
          </Text>
        </Modal.Header>

        <Modal.Body css={{fontFamily: '$algeria'}}>
        <div className="bg-[#D9D9D9] m-3 p-5 rounded-lg">
          {/* Choose Designs */}
          { !upload &&
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
          }
          {/* Upload Design */}
          {
            upload && 
            <div>
              <h1 className="mb-2">Add your new design</h1>
                <label for="design-image" className="flex flex-col items-center justify-center w-full h-fit border-2 border-[#D9D9D9] rounded-lg cursor-pointer bg-white">
                    <div className="flex flex-row items-center justify-center py-6 px-4 ">
                    <Image src="/upload.svg" alt="upload-icon" width={50} height={50} className="mr-4"/>
                        <p className="text-xs text-black flex flex-col justify-center">{!image && "Click to"}<span className="font-semibold flex justify-center">{image ? image.name : "Upload Mockup"}</span></p>
                    </div>
                    <input id="design-image" type="file" className="hidden" accept="images/jpeg" onChange={(e) => setImage(e.target.files[0])} />
                </label>
                <h2 className="ml-2 mt-4 title-font font-medium mb-2">Design Type</h2>
                <div className="mb-2 ml-2 ">
                    <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="eg : Print" onChange={
                      (e) => setDesignType(e.target.value)
                    } />
                </div>
                <h2 className="ml-2 mt-4 title-font font-medium mb-2">Theme</h2>
                <div className="mb-2 ml-2 ">
                    <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="eg : Vikram" onChange={
                      (e) => setTheme(e.target.value)
                    } />
                </div>
                <h2 className="ml-2 mt-4 title-font font-medium mb-2">Additional Info</h2>
                <div className="mb-2 ml-2 ">
                    <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="eg : Any additional information" onChange={
                      (e) => setInfo(e.target.value)
                    } />
                </div>
            </div>
          }
        </div>
        </Modal.Body>
      
        <Modal.Footer css={{fontFamily: '$algeria'}}>
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