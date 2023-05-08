import React, { useEffect, useState } from "react";
import { css, Modal, Button, Text } from "@nextui-org/react";
import Image from "next/image";

export default function AdminUploadModal(props) {
    const [visible, setVisible] = React.useState(false);
    const [submit, setSubmit] = useState(false);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedSizeNames, setSizeNames] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedColorNames, setColorNames] = useState([]);
    const [name,setName] = useState(null);
    const [skuName, setSkuName] = useState(null);
    const [skuModel, setSkuModel] = useState(null);
    const [model, setModel] = useState(null);
    const [category, setCategory] = useState(null);
    const [prodType, setProdType] = useState(null);
    const [info, setInfo] = useState(null);
    const [base, setBase] = useState(null);
    const [frontImg, setFrontImg] = useState(null);
    const [backImg, setBackImg] = useState(null);

    const getColorCode = (colorName) =>{
      const words = colorName.split(' ');
      if(words.length === 1)
        return words[0].substring(0,2);
      else
        return words[0][0] + words[1][0];
    }

    const handleSizeSelection = (selectedSize, sizeName) => {
        if (selectedSizes.includes(selectedSize) && selectedSizeNames.includes(sizeName)) {
        setSelectedSizes(selectedSizes.filter(size => size !== selectedSize));
        setSizeNames(selectedSizeNames.filter(name => name !== sizeName));
        } else {
        setSelectedSizes([...selectedSizes, selectedSize]);
        setSizeNames([...selectedSizeNames, sizeName]);
      }
    };

    const handleColorSelection = (selectedColor, colorName) => {
      if (selectedColors.includes(selectedColor) && selectedColorNames.includes(getColorCode(colorName))) {
        setSelectedColors(selectedColors.filter(color => color !== selectedColor));
        setColorNames(selectedColorNames.filter(name => name !== getColorCode(colorName)));
      } else {
        setSelectedColors([...selectedColors, selectedColor]);
        setColorNames([...selectedColorNames, getColorCode(colorName)]);
      }
    }

    const generateSkuMapping = (skuName, skuModel, colors, colorNames, sizes, sizeNames) => {
        var skuMapping = [];
        for(var i=0; i<colors.length; i++){
          for(var j=0; j<sizes.length; j++){
            var sku = skuName + colorNames[i] + sizeNames[j] + "-" + colors[i].toString().padStart(3, '0') + skuModel;
            var color = {
              id: colors[i]
            };
            var size = {
              id : sizes[j]
            };
            skuMapping.push(
              {
                sku : sku,
                size : size,
                color : color
              }
            )
            }
        }
        return skuMapping;
    }
    const handler = () => setVisible(true);
    const closeHandler = () => {
      setVisible(false);
      if(!submit && name && skuName && skuModel && model && category && prodType && info){
        props.onSubmit(
          {
            name: name,
            frontImage: frontImg,
            backImage: backImg,
            productType: prodType,
            category: category,
            model: model,
            addtionalInformation: info,
            basePrice: base, 
            skuMapping: generateSkuMapping(skuName, skuModel, selectedColors, selectedColorNames, selectedSizes, selectedSizeNames)
          }
        );
        setSubmit(true);
      }
      setColorNames([]);
      setSelectedColors([]);
      setSelectedSizes([]);
      setFrontImg(null);
      setBackImg(null);
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
          css={{fontFamily: '$algeria'}}
        >
          <Modal.Header css={{fontFamily: '$algeria'}}>
            <Text id="modal-title" size={18}>
              Upload Mockup
            </Text>
          </Modal.Header>
  
          <Modal.Body css={{fontFamily: '$algeria'}}>
          <div className="bg-[#D9D9D9] m-3 p-5 rounded-lg">
              <h2 className="mx-2">Front Side Image</h2>
              <div className="flex justify-around items-center">
                <label for="front-image" className="flex flex-col mx-2 items-center justify-center w-full h-fit border-2 border-[#D9D9D9] rounded-lg cursor-pointer bg-white">
                    <div className="flex flex-row items-center justify-center py-6 px-4 ">
                    <Image src="/upload.svg" alt="upload-icon" width={50} height={50} className="mr-4"/>
                        <p className="text-xs text-black flex flex-col justify-center">{!frontImg && "Click to"}<span className="font-semibold flex justify-center">{frontImg ? frontImg.name : "Upload Mockup"}</span></p>
                    </div>
                    <input id="front-image" type="file" className="hidden" accept="images/jpeg" onChange={(e) => setFrontImg(e.target.files[0])} />
                </label>
              </div>
              <h2 className="mx-2">Back Side Image</h2>
              <div className="flex justify-around items-center">
                <label for="back-image" className="flex flex-col mx-2 items-center justify-center w-full h-fit border-2 border-[#D9D9D9] rounded-lg cursor-pointer bg-white">
                    <div className="flex flex-row items-center justify-center py-6 px-4 ">
                    <Image src="/upload.svg" alt="upload-icon" width={50} height={50} className="mr-4"/>
                        <p className="text-xs text-black flex flex-col justify-center">{!backImg && "Click to"}<span className="font-semibold flex justify-center">{backImg ? backImg.name : "Upload Mockup"}</span></p>
                    </div>
                    <input id="back-image" type="file" className="hidden" accept="images/jpeg" onChange={(e) => setBackImg(e.target.files[0])} />
                </label>
              </div>              
              <h2 className="ml-2 mt-2 title-font font-medium mb-2">Mockup Name</h2>
              <div className="mb-2 ml-2 ">
                  <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="Enter Mockup Name" onChange={
                    (e) => setName(e.target.value)
                  } />
              </div>
              <div className="mt-6 ml-2">Available Colors</div>
              {/* Colors */}
            <div className="flex items-center ml-2 mt-3 mb-3">
              <div className="grid grid-cols-3">
                {props.colors &&
                  props.colors.map((color) => {
                    return (
                      <div className='flex flex-col justify-center items-center px-2' key={color.id}>
                        <button
                          className={`border-2 border-gray rounded-full w-7 h-7 focus:outline-none ${
                            selectedColors.findIndex((selectedColor) => selectedColor === color.id) !== -1
                              ? 'border-primary border-[3px]'
                              : ''
                          }`}
                          style={{backgroundColor : color.hexValue}}
                          onClick={() => handleColorSelection(color.id, color.color)}
                        ></button>
                        <p className='text-[10px] mx-auto'>{color.color}</p>
                      </div>
                    )
                  })}
              </div>
            </div>
            {/* Sizes */}
            <div className="mt-6 ml-2">Available Sizes</div>
            <div className="flex flex-wrap justify-start items-center mt-3 mb-3 ml-2">
                <div className="relative">
                  {props.sizes &&
                    props.sizes.map((size) => {
                      const selected = selectedSizes.includes(size.id);
                      return (
                        <button
                          key={size.id}
                          className={`w-10 text-xs justify-center mr-5 text-gray transition-colors duration-150 border rounded-lg focus:shadow-outline 
                                      ${selected ? 'bg-primary text-white border-primary' : 'border-gray hover:bg-primary hover:text-white hover:border-primary'}`}
                          onClick={() => handleSizeSelection(size.id, size.size)}
                        >
                          {size.size}
                        </button>
                      );
                    })}
                </div>
              </div>
              <h2 className="ml-2 mt-4 title-font font-medium mb-2">SKU Name</h2>
              <div className="mb-2 ml-2 ">
                  <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="eg : PWRN" onChange={
                    (e) => setSkuName(e.target.value)
                  } />
              </div>
              <h2 className="ml-2 mt-4 title-font font-medium mb-2">SKU Model</h2>
              <div className="mb-2 ml-2 ">
                  <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="eg : MOVERSIZE, W, M" onChange={
                    (e) => setSkuModel(e.target.value)
                  } />
              </div>
              <h2 className="ml-2 mt-4 title-font font-medium mb-2">Model</h2>
              <div className="mb-2 ml-2 ">
                  <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="eg : Men" onChange={
                    (e) => setModel(e.target.value)
                  } />
              </div>
              <h2 className="ml-2 mt-4 title-font font-medium mb-2">Category</h2>
              <div className="mb-2 ml-2 ">
                  <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="eg : Clothing" onChange={
                    (e) => setCategory(e.target.value)
                  } />
              </div>
              <h2 className="ml-2 mt-4 title-font font-medium mb-2">Product Type</h2>
              <div className="mb-2 ml-2 ">
                  <input type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="eg : T-Shirts" onChange={
                    (e) => setProdType(e.target.value)
                  } />
              </div>
              <h2 className="ml-2 mt-4 title-font font-medium mb-2">Additional Information</h2>
              <div className="mb-2 ml-2 ">
                  <textarea type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5 h-24" placeholder="eg : This is a limited edition" onChange={
                    (e) => setInfo(e.target.value)
                  } />
              </div>
              <h2 className="ml-2 mt-4 title-font font-medium mb-2">Base Price</h2>
              <div className="mb-2 ml-2 ">
                  <textarea type="text" className="bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5" placeholder="eg : 500" onChange={
                    (e) => setBase(e.target.value)
                  } />
              </div>
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