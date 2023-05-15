import Head from 'next/head';
import VendorLayout from '@/components/layout-vendor';
import UploadModal from '@/components/upload-modal';
import axios from "axios";
import {fabric} from 'fabric';
import DomToImage from "dom-to-image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { isTokenValid } from "@/utils/JWTVerifier";
import { storage } from "../../.././firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { async } from '@firebase/util';
import { Check, CheckBox, Download, SelectAll } from "@mui/icons-material";
import { saveAs } from "file-saver";
import Backdrop, { Button, CircularProgress } from "@mui/material";

export default function CreateTemplate(props) {
  const [spinner, setSpinnerState] = useState(false);
  const [design, setDesign] = useState(null);
  const [tokenExists, setTokenExists] = useState(false);
  const [template, setTemplateImage] = useState(null);
  const [curId, setCurId] = useState(1);
  const [canvas, setCanvas] = useState(null);
  const [position, setPosition] = useState("Custom");
  const [mode, setMode] = useState(true);
  const [front, setFront] = useState(true);
  const [curImg, setCurImg] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const isReady = router.isReady;
  const [details, setDetails] = useState(null);
  const canvasWidth = 380;
  const canvasHeight = 434;
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [open, setOpen] = useState(false);
  const [designHeight, setDesignHeight] = useState(0);
  const [designWidth, setDesignWidth] = useState(0);
  const designHeightRef = useRef(0);
  const designWidthRef = useRef(0);

  useEffect(() => {
    if (isReady) getMockupDetails();
  }, [isReady]);

  useEffect(() => {
    if (!document.querySelector("canvas")) {
      const canvasElement = document.createElement("canvas");
      canvasElement.width = canvasWidth;
      canvasElement.height = canvasHeight;
      const container = document.querySelector(".canvas-container");
      if (!container) return;
      const firstChild = container.firstChild;
      container.insertBefore(canvasElement, firstChild);
      const canvas = new fabric.Canvas(canvasElement);
      setCanvas(canvas);
    }
  }),
    [];

  useEffect(() => {
    const jwtToken = localStorage.getItem("token_vendor");
    if (jwtToken === undefined || !isTokenValid(jwtToken))
      router.push("/vendor");
    else {
      setTokenExists(true);
    }
  }, []);

  useEffect(() => {
    if (!canvas) {
      return;
    }
    canvas.clear();
    if (design !== null) {
      fetch(design.imgUrl)
        .then((result) => result.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          fabric.Image.fromURL(url, (designImg) => {
            designImg.scaleToHeight(250);
            designImg.scaleToWidth(200);

            designHeightRef.current =
              Math.round(designImg.getScaledHeight() * 0.24 * 0.39 * 100) / 100;
            designWidthRef.current =
              Math.round(designImg.getScaledWidth() * 0.24 * 0.39 * 100) / 100;
            setDesignHeight(designHeightRef.current);
            setDesignWidth(designWidthRef.current);
            if (position === "Custom") {
              designImg.set({
                left: (canvasWidth - designImg.getScaledWidth()) / 2,
                top: (canvasHeight - designImg.getScaledHeight()) / 2,
              });
            } else {
              designImg.set({
                lockScalingX: true,
                lockScalingY: true,
                lockMovementX: true,
                lockMovementY: true,
              });
              if (position === "Center") {
                designImg.set({
                  left: (canvasWidth - designImg.getScaledWidth()) / 2,
                  top: (canvasHeight - designImg.getScaledHeight()) / 2,
                });
              } else if (position === "Top Left Corner") {
                designImg.set({
                  left: 0,
                  top: 0,
                });
              } else if (position === "Bottom Left Corner") {
                designImg.set({
                  left: 0,
                  top: canvasHeight - designImg.getScaledHeight(),
                });
              } else if (position === "Top Right Corner") {
                designImg.set({
                  left: canvasWidth - designImg.getScaledWidth(),
                  top: 0,
                });
              } else {
                designImg.set({
                  left: canvasWidth - designImg.getScaledWidth(),
                  top: canvasHeight - designImg.getScaledHeight(),
                });
              }
            }
            designImg.on("scaling", (event) => {
              const originalWidth = event.transform.target.width;
              const originalHeight = event.transform.target.height;
              const scaledWidth = originalWidth * event.transform.target.scaleX;
              const scaledHeight =
                originalHeight * event.transform.target.scaleY;
              designHeightRef.current =
                Math.round(scaledHeight * 0.24 * 0.39 * 100) / 100;
              designWidthRef.current =
                Math.round(scaledWidth * 0.24 * 0.39 * 100) / 100;
              setDesignHeight(designHeightRef.current);
              setDesignWidth(designWidthRef.current);
            });
            canvas.add(designImg);
          });
        });
    }
    canvas.on("object:moving", function (event) {
      var designImg = event.target;

      var canvasWidth = canvas.width;
      var canvasHeight = canvas.height;

      var imgLeft = designImg.left;
      var imgTop = designImg.top;
      var imgWidth = designImg.getScaledWidth();
      var imgHeight = designImg.getScaledHeight();

      if (imgLeft < 0) {
        designImg.set({ left: 0 });
      } else if (imgLeft + imgWidth > canvasWidth) {
        designImg.set({ left: canvasWidth - imgWidth });
      }

      if (imgTop < 0) {
        designImg.set({ top: 0 });
      } else if (imgTop + imgHeight > canvasHeight) {
        designImg.set({ top: canvasHeight - imgHeight });
      }
    });

    document.addEventListener(
      "keydown",
      function (e) {
        var keyCode = e.keyCode;
        if (keyCode === 46) {
          canvas.remove(canvas.getActiveObject());
        }
      },
      false
    );
    canvas.renderAll();
  }, [canvas, details, front, design, position]);

  useEffect(() => {
    if (details !== null) {
      details.images.forEach((image) => {
        if (image.colorId === curId) {
          setCurImg(image.image);
          return;
        }
      });
    }
  }, [curId]);

  const getMockupDetails = async () => {
    const response = await axios.get(
      "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/mockup/getMockup/" +
        id
    );
    setDetails(response.data);
    setCurId(response.data.images[0].colorId);
    setCurImg(response.data.images[0].image);
  };

  const getAvailableSizes = (skuMapping) => {
    var availableSizes = [];
    skuMapping.forEach((sku) => {
      if (!availableSizes.includes(sku.size.size))
        availableSizes.push(sku.size.size);
    });
    return availableSizes;
  };

  const getAvailableColors = (skuMapping) => {
    var availableColors = [];
    skuMapping.forEach((sku) => {
      if (
        availableColors.findIndex((item) => item.id === sku.color.id) === -1
      ) {
        availableColors.push({
          id: sku.color.id,
          hexValue: sku.color.hexValue,
          color: sku.color.color,
        });
      }
    });
    return availableColors;
  };

  const saveImage = async () => {
    setMode(false);
    const data = await DomToImage.toJpeg(
      document.getElementById("mockup-image"),
      {
        quality: 0.95,
      }
    );
    const byteCharacters = atob(data.split(",")[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/jpeg" });
    uploadBlob(blob);
  };

  const uploadBlob = async (blob) => {
    const imageRef = ref(storage, `templates/${new Date().getTime()}`);
    await uploadBytes(imageRef, blob);
    const url = await getDownloadURL(imageRef);
    setTemplateImage(url);
    saveTemplate(url);
  };

  const saveTemplate = async (image) => {
    const data = {
      mockup: {
        id: id,
      },
    };
    if (front) {
      data.frontDesign = {
        id: design.id,
      };
      data.frontDesignImage = image;
      data.frontDesignPlacement = JSON.stringify({
        position: position,
        height: designHeight * 0.3937,
        width: designWidth * 0.3937,
      });
    } else {
      data.backDesign = {
        id: design.id,
      };
      data.backDesignImage = image;
      data.backDesignPlacement = JSON.stringify({
        position: position,
        height: designHeight,
        width: designWidth,
      });
    }
    const response = axios
      .post(
        "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/templates/saveTemplate",
        data,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token_vendor"),
          },
        }
      )
      .then(() => {
        setMessage("Template saved successfully!");
        setOpen(true);
        setSeverity("success");
        router.push("/vendor/templatelist");
      })
      .catch((err) => {
        setMessage("Error saving template!");
        setOpen(true);
        setSeverity("error");
        console.log(err);
      });
  };

  const downloadImage = async () => {
    setSpinnerState(true);
    setMode(false);
    const data = await DomToImage.toBlob(
      document.getElementById("mockup-image"),
      {
        quality: 0.95,
      }
    );
    window.saveAs(data, `my-template-${id + new Date().getTime()}.png`);
    setSpinnerState(false);
    setMode(true);
  };

  return (
    <>
      <Head>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
        <title>Madrasda | Create Template</title>
      </Head>

      {tokenExists && (
        <VendorLayout
          message={message}
          severity={severity}
          state={open}
          setState={setOpen}>
          <section
            className='body-font font-quest overflow-hidden
                        md:ml-56
                        lg:ml-36'>
            <div className='mt-20 px-5 md:my-10 mx-auto'>
              <h1 className='text-3xl text-primary lg:ml-20 md:mt-10'>
                CREATE TEMPLATE
              </h1>
              <div className='px-5 py-10 mx-auto flex justify-center'>
                <div className='h-fit flex justify-center flex-col xl:w-5/6 xl:flex-row'>
                  <div className='flex flex-col justify-center items-center bg-[#F0F0F0] p-4 w-fit'>
                    {/* POSITION */}
                    <div className='flex mb-8'>
                      <button
                        className={`text-xs rounded-full border-2 px-3 py-2 mx-1 border-gray ${
                          position === "Center"
                            ? "bg-primary text-white"
                            : "bg-off-white"
                        }`}
                        value='Center'
                        onClick={(e) => setPosition(e.target.value)}>
                        Center
                      </button>
                      <button
                        className={`text-xs rounded-full border-2 px-3 py-2 mx-1 border-gray ${
                          position === "Top Left Corner"
                            ? "bg-primary text-white"
                            : "bg-off-white"
                        }`}
                        value='Top Left Corner'
                        onClick={(e) => setPosition(e.target.value)}>
                        Top Left Corner
                      </button>
                      <button
                        className={`text-xs rounded-full border-2 px-3 py-2 mx-1 border-gray ${
                          position === "Bottom Left Corner"
                            ? "bg-primary text-white"
                            : "bg-off-white"
                        }`}
                        value='Bottom Left Corner'
                        onClick={(e) => setPosition(e.target.value)}>
                        Bottom Left Corner
                      </button>
                      <button
                        className={`text-xs rounded-full border-2 px-3 py-2 mx-1 border-gray ${
                          position === "Top Right Corner"
                            ? "bg-primary text-white"
                            : "bg-off-white"
                        }`}
                        value='Top Right Corner'
                        onClick={(e) => setPosition(e.target.value)}>
                        Top Right Corner
                      </button>
                      <button
                        className={`text-xs rounded-full border-2 px-3 py-2 mx-1 border-gray ${
                          position === "Bottom Right Corner"
                            ? "bg-primary text-white"
                            : "bg-off-white"
                        }`}
                        value='Bottom Right Corner'
                        onClick={(e) => setPosition(e.target.value)}>
                        Bottom Right Corner
                      </button>
                      <button
                        className={`text-xs rounded-full border-2 px-3 py-2 mx-1 border-gray ${
                          position === "Custom"
                            ? "bg-primary text-white"
                            : "bg-off-white"
                        }`}
                        value='Custom'
                        onClick={(e) => setPosition(e.target.value)}>
                        Custom
                      </button>
                    </div>
                    {/* FABRIC JS CANVAS*/}
                    {details && (
                      <div
                        className='mockup-image relative h-full bg-tertiary'
                        id='mockup-image'>
                        <img
                          src={curImg || "/logo.png"}
                          alt='mockup-image'
                          className='w-full h-full'
                        />
                        <div
                          className={`canvas-container ${
                            mode && `border border-red`
                          } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-${canvasWidth} h-${canvasHeight}`}></div>
                      </div>
                    )}
                  </div>
                  <div className='w-full xl:w-1/3 xl:ml-6 mt-6 lg:py-6 lg:mt-0 flex flex-col text-center xl:text-left justify-center xl:justify-start items-center'>
                    <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                      {details && details.name}
                    </h1>
                    <div className='flex flex-col mt-8 space-y-6'>
                      <div className='flex justify-center'>
                        <UploadModal chooseDesign={(e) => setDesign(e)} />
                      </div>
                      <h1 className='text-lg my-5 text-center'>OR</h1>
                      <div className='flex justify-center'>
                        <UploadModal
                          upload={true}
                          setMessage={setMessage}
                          setOpen={setOpen}
                          setSeverity={setSeverity}
                          setDesigns={(d) => setDesign(d)}
                        />
                      </div>
                    </div>

                    <h1>{design && design.name}</h1>

                    <div className='mt-6'>Available Colors</div>
                    <div className='flex justify-start items-center my-3'>
                      <div className='relative'>
                        <div className='flex flex-col'>
                          {details &&
                            getAvailableColors(details.skuMapping).map(
                              (color) => {
                                return (
                                  <div
                                    className='flex justify-between items-center px-2 space-x-3'
                                    key={color.id}>
                                    <button
                                      className={`border-2 border-gray rounded-full w-8 h-8 relative focus:outline-non`}
                                      style={{
                                        backgroundColor: color.hexValue,
                                      }}
                                      onClick={() => setCurId(color.id)}>
                                      {curId === color.id && (
                                        <Check className='absolute text-[#00FF00] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                                      )}
                                    </button>
                                    <p className='text-[10px]'>{color.color}</p>
                                  </div>
                                );
                              }
                            )}
                        </div>
                        {!spinner && (
                          <div className='w-full mt-3'>
                            <Button
                              variant='outlined'
                              className={
                                "text-primary w-full bottom-0 p-2 absolute border-primary hover:border-logo hover:text-logo text-xs mx-auto"
                              }
                              onClick={downloadImage}>
                              <Download /> Image
                            </Button>
                          </div>
                        )}
                        {spinner && (
                          <CircularProgress size='30px' color='warning' />
                        )}
                      </div>
                    </div>
                    <div className='mt-6'>Available Sizes</div>
                    <div className='flex flex-wrap justify-center items-center mt-3 mb-3 ml-2'>
                      <div className='relative'>
                        {details &&
                          getAvailableSizes(details.skuMapping).map((size) => {
                            return (
                              <button
                                key={size}
                                className={`w-14 text-sm justify-center mr-5 transition-colors duration-150 border rounded-lg focus:shadow-outline text-white border-gray bg-primary hover:text-white hover:border-primary'}`}>
                                {size}
                              </button>
                            );
                          })}
                      </div>
                    </div>
                    {design && design != {} && (
                      <div>
                        <div className='flex flex-row text-xl'>
                          <h1 className='mr-2'>Height:</h1>
                          <h1>{(designHeight * 0.3937).toFixed(2)} Inches</h1>
                        </div>
                        <div className='flex flex-row  text-xl'>
                          <h1 className='mr-2'>Width:</h1>
                          <h1>{(designWidth * 0.3937).toFixed(2)} Inches</h1>
                        </div>
                      </div>
                    )}
                    <br></br>
                    {design && (
                      <div className='flex'>
                        <button
                          className='flex text-white bg-primary border-0 py-3 px-10 focus:outline-none hover:bg-logo rounded-full'
                          onClick={() => saveImage()}>
                          Save Template
                        </button>
                      </div>
                    )}
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </VendorLayout>
      )}
    </>
  );
}
