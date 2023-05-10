import React, { useEffect, useState } from "react";
import { css, Modal, Button, Text } from "@nextui-org/react";
import { storage } from "@/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { uuidv4 } from "@firebase/util";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";

export default function UploadModal({ chooseDesign, upload, setMessage, setOpen, setSeverity, setDesigns, refreshDesigns, gallery}) {
  const [visible, setVisible] = React.useState(false);
  const [selected, setSelected] = useState({});
  const [image, setImage] = useState(null);
  const [designType, setDesignType] = useState("");
  const [theme, setTheme] = useState("");
  const [info, setInfo] = useState("");
  const [designs, setDesign] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const handler = () => setVisible(true);
  const router = useRouter();

  const closeHandler = () => {
    console.log(selected);
    if (!upload) {
      chooseDesign(selected);
    } else {
      uploadImage(image);
    }
    setImage(null);
    setVisible(false);
  };
  const getDesigns = () => {
    axios
      .get(
        "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/vendor/designs",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token_vendor"),
          },
        }
      )
      .then((response) => setDesign(response.data));
  };

  const uploadDesign = (file) => {
    setSpinner(true);
    axios
      .post(
        "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/vendor/addDesign",
        {
          imgUrl: file,
          designType: designType,
          theme: theme,
          additionalInformation: info,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token_vendor"),
          },
        }
      )
      .then((response) => {
        setVisible(false);
        if (response.status === 200) {
          setOpen(true);
          setMessage("Design Uploaded Successfully!");
          setSeverity("success");
          setSpinner(false);
          getDesigns();
          if(gallery){
            refreshDesigns();
            return
          }
          setDesigns({
            imgUrl: file,
            designType: designType,
            theme: theme,
            additionalInformation: info,
          });
        }
        return response.status;
      })
      .catch((err) => {
        setSpinner(false);
        setVisible(false);
        setOpen(true);
        setMessage("Error Uploading Design!");
        setSeverity("error");
      });
  };

  const uploadImage = async (file) => {
    if (file) {
      const imageRef = ref(storage, `designs/${file.name + v4()}`);
      await uploadBytes(imageRef, file);
      const url = await getDownloadURL(imageRef);
      uploadDesign(url);
    }
  };

  useEffect(() => {
    if (!upload) {
      getDesigns();
    }
  }, []);

  return (
    <>
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={spinner}>
          <CircularProgress color='inherit' />
        </Backdrop>
        <Button
          auto
          ghost
          color='black'
          className='font-quest'
          onPress={handler}>
          <Image
            src='/upload.svg'
            width={25}
            height={25}
            className='mr-4 font-quest'
          />{" "}
          {upload ? "Upload your design" : "Choose design from gallery"}
        </Button>
        <Modal
          closeButton
          preventClose
          aria-labelledby='modal-title'
          open={visible}
          onClose={closeHandler}
          className='font-quest'>
          <Modal.Header className='font-quest'>
            <Text id='modal-title' size={18}>
              {upload ? "Upload a new Design" : "Select Design"}
            </Text>
          </Modal.Header>

          <Modal.Body css={{ fontFamily: "$algeria" }}>
            <div className='bg-[#D9D9D9] m-3 p-5 rounded-lg'>
              {/* Choose Designs */}
              {!upload && (
                <div className='flex justify-around items-center flex-wrap'>
                  {designs &&
                    designs.map((d) => {
                      return (
                        <Image
                          key={uuidv4()}
                          src={d.imgUrl}
                          width={100}
                          height={40}
                          className='p-2'
                          alt={"Imgaes"}
                          onClick={() => {
                            setSelected(d);
                            closeHandler();
                          }}
                        />
                      );
                    })}
                </div>
              )}
              {/* Upload Design */}
              {upload && (
                <div className='mx-auto'>
                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={spinner}>
                    <CircularProgress color='inherit' />
                  </Backdrop>
                  <h1 className='mb-2'>Add your new design</h1>
                  <label
                    for='design-image'
                    className='flex flex-col items-center justify-center w-full h-fit border-2 border-[#D9D9D9] rounded-lg cursor-pointer bg-white'>
                    <div className='flex flex-row items-center justify-center py-6 px-4 '>
                      <Image
                        src='/upload.svg'
                        alt='upload-icon'
                        width={50}
                        height={50}
                        className='mr-4'
                      />
                      <p className='text-xs text-black flex flex-col justify-center'>
                        {!image && "Click to"}
                        <span className='font-semibold flex justify-center'>
                          {image ? image.name : "Upload Mockup"}
                        </span>
                      </p>
                    </div>
                    <input
                      id='design-image'
                      type='file'
                      className='hidden'
                      accept='images/jpeg'
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </label>
                  <h2 className='ml-2 mt-4 title-font font-medium mb-2'>
                    Design Type
                  </h2>
                  <div className='mb-2 ml-2 '>
                    <input
                      type='text'
                      className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
                      placeholder='eg : Print'
                      onChange={(e) => setDesignType(e.target.value)}
                    />
                  </div>
                  <h2 className='ml-2 mt-4 title-font font-medium mb-2'>
                    Theme
                  </h2>
                  <div className='mb-2 ml-2 '>
                    <input
                      type='text'
                      className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
                      placeholder='eg : Vikram'
                      onChange={(e) => setTheme(e.target.value)}
                    />
                  </div>
                  <h2 className='ml-2 mt-4 title-font font-medium mb-2'>
                    Additional Info
                  </h2>
                  <div className='mb-2 ml-2 '>
                    <input
                      type='text'
                      className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
                      placeholder='eg : Any additional information'
                      onChange={(e) => setInfo(e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>
          </Modal.Body>

          <Modal.Footer css={{ fontFamily: "$algeria" }}>
            <Button auto flat color='error' onPress={closeHandler}>
              Close
            </Button>
            {upload && (
              <Button
                auto
                onPress={closeHandler}
                style={{
                  background: "#FFA000",
                }}>
                Upload
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
