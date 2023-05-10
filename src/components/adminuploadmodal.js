import React, { useEffect, useState } from "react";
import { css, Modal, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import { Check } from "@mui/icons-material";
import { uuidv4 } from "@firebase/util";

export default function AdminUploadModal(props) {
  const [visible, setVisible] = React.useState(false);
  const [submit, setSubmit] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedSizeNames, setSizeNames] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedColorNames, setColorNames] = useState([]);
  const [currenId, setCurId] = useState(null);
  const [mockupImages, setMockupImages] = useState([]);
  const [name, setName] = useState(null);
  const [skuName, setSkuName] = useState(null);
  const [skuModel, setSkuModel] = useState(null);
  const [model, setModel] = useState(null);
  const [category, setCategory] = useState(null);
  const [prodType, setProdType] = useState(null);
  const [info, setInfo] = useState(null);
  const [base, setBase] = useState(null);
  const [length, setLength] = useState(null);
  const [height, setHeight] = useState(null);
  const [breadth, setBreadth] = useState(null);
  const [weight, setWeight] = useState(null);
  const [tax, setTax] = useState(null);
  const [hsn, setHsn] = useState(null);

  const getColorCode = (colorName) => {
    const words = colorName.split(" ");
    if (words.length === 1) return words[0].substring(0, 2);
    else return words[0][0] + words[1][0];
  };

  const getDataUrlFromFile = (file) => {
    return URL.createObjectURL(file);
  };

  const handleSizeSelection = (selectedSize, sizeName) => {
    if (
      selectedSizes.includes(selectedSize) &&
      selectedSizeNames.includes(sizeName)
    ) {
      setSelectedSizes(selectedSizes.filter((size) => size !== selectedSize));
      setSizeNames(selectedSizeNames.filter((name) => name !== sizeName));
    } else {
      setSelectedSizes([...selectedSizes, selectedSize]);
      setSizeNames([...selectedSizeNames, sizeName]);
    }
  };

  const handleColorSelection = (selectedColor) => {
    const index = selectedColors.findIndex(
      (color) => color.id === selectedColor.id
    );
    if (index !== -1) {
      setSelectedColors(
        selectedColors.filter((color) => color.id !== selectedColor.id)
      );
    } else {
      setSelectedColors([...selectedColors, selectedColor]);
    }
  };
  const handleRemove = (image) => {
    if (image)
      setMockupImages((mockupImages) => {
        const images = mockupImages.filter(
          (item) => item.image !== image.image
        );
        return images;
      });
  };

  const generateSkuMapping = (
    skuName,
    skuModel,
    colors,
    colorNames,
    sizes,
    sizeNames
  ) => {
    var skuMapping = [];
    for (var i = 0; i < colors.length; i++) {
      for (var j = 0; j < sizes.length; j++) {
        var sku =
          skuName +
          getColorCode(colors[i].color) +
          sizeNames[j] +
          "-" +
          colors[i].id.toString().padStart(3, "0") +
          skuModel;
        var color = {
          id: colors[i].id,
        };
        var size = {
          id: sizes[j],
        };
        skuMapping.push({
          sku: sku,
          size: size,
          color: color,
        });
      }
    }
    return skuMapping;
  };

  const handler = () => setVisible(true);
  const closeHandler = () => {
   if (
     hsn &&
     name &&
     prodType &&
     category &&
     model &&
     base &&
     selectedColors.length !== 0 &&
     selectedSizes.length !== 0 &&
     mockupImages.length !== 0 &&
     height &&
     breadth &&
     weight &&
     length &&
     hsn &&
     tax
   ) {
     props.onSubmit({
       name: name,
       productType: prodType,
       category: category,
       model: model,
       addtionalInformation: info,
       basePrice: base,
       skuMapping: generateSkuMapping(
         skuName,
         skuModel,
         selectedColors,
         selectedColorNames,
         selectedSizes,
         selectedSizeNames
       ),
       images: mockupImages,
       height: height,
       breadth: breadth,
       length: length,
       weight: weight,
       tax: tax,
       hsn: hsn,
     });
   }
    setVisible(false);
    setColorNames([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setMockupImages([]);
  };

  return (
    <div>
      <Button
        auto
        ghost
        onPress={handler}
        style={{
          background: "white",
          border: "white",
        }}>
        <Image src='/plus-icon.png' width={40} height={40} />
      </Button>
      <Modal
        width='500px'
        closeButton
        preventClose
        aria-labelledby='modal-title'
        open={visible}
        onClose={closeHandler}
        css={{ fontFamily: "$algeria" }}>
        <Modal.Header css={{ fontFamily: "$algeria" }}>
          <Text id='modal-title' size={18}>
            Upload Mockup
          </Text>
        </Modal.Header>

        <Modal.Body css={{ fontFamily: "$algeria" }}>
          <div className='bg-[#D9D9D9] m-3 p-5 rounded-lg'>
            <h2 className='ml-2 mt-2 title-font font-medium mb-2'>
              Mockup Name
            </h2>
            <div className='mb-2 ml-2 '>
              <input
                type='text'
                className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
                placeholder='Enter Mockup Name'
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='mt-6 ml-2'>Available Colors</div>
            {/* Colors */}
            <div className='flex items-center ml-2 mt-3 mb-3'>
              <div className='grid grid-cols-3'>
                {props.colors &&
                  props.colors.map((color) => {
                    return (
                      <div
                        className='flex flex-col my-4 items-center px-2'
                        key={color.id}>
                        <button
                          className={`border-2 border-bg rounded-full relative w-7 h-7 focus:outline-none`}
                          onClick={() => {
                            handleColorSelection({
                              id: color.id,
                              hexValue: color.hexValue,
                              color: color.color,
                            });
                          }}
                          style={{
                            backgroundColor: color.hexValue,
                          }}>
                          {selectedColors.findIndex(
                            (item) => item.id === color.id
                          ) !== -1 && (
                            <Check className='absolute text-[#00FF00] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                          )}
                        </button>
                        <p className='text-[10px] mx-auto'>{color.color}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
            {/* Color Wise Image Upload */}
            <h1>Select Your Color Wise Product Images</h1>
            <div className='items-center mt-3 mb-3'>
              <div className='grid grid-cols-3'>
                {selectedColors &&
                  selectedColors.map((color) => {
                    return (
                      <div
                        className='my-4 col-span-1 flex flex-col justify-center items-center'
                        key={color.id}>
                        <button
                          className={`border-2 border-gray rounded-full w-10 h-10 focus:outline-none ${
                            currenId === color.id
                              ? "border-primary border-[3px]"
                              : ""
                          }`}
                          onClick={() => {
                            setCurId(color.id);
                          }}
                          style={{
                            backgroundColor: color.hexValue,
                          }}></button>
                        <p className='text-[10px] w-full text-center'>{color.color}</p>
                      </div>
                    );
                  })}
              </div>
              <div>
                {currenId && (
                  <div className='ml-2'>
                    <label
                      htmlFor='dropzone-file'
                      className='flex flex-col items-center justify-center w-full px-3 h-auto border-2 border-[#D9D9D9] border-dashed rounded-lg cursor-pointer bg-white'>
                      <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                        <svg
                          aria-hidden='true'
                          className='w-10 h-10 mb-3 text-black-400'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'></path>
                        </svg>
                        <p className='mb-2 text-sm text-black'>
                          <span className='font-semibold'>Click to upload</span>
                        </p>
                      </div>
                      <input
                        id='dropzone-file'
                        type='file'
                        accept='image/jpeg/png'
                        className='hidden'
                        onChange={(e) => {
                          if (
                            e.target.files[0] !== null &&
                            e.target.files[0] !== undefined
                          )
                            setMockupImages((mockupImages) => [
                              ...mockupImages,
                              {
                                colorId: currenId,
                                image: getDataUrlFromFile(e.target.files[0]),
                              },
                            ]);
                        }}
                      />
                    </label>
                    {/* Image Preview */}
                    <h1 className='my-2'>Image Preview</h1>
                    {mockupImages && currenId && (
                      <div className='space-x-3 justify-center flex flex-wrap'>
                        {mockupImages.map((image) => {
                          if (image.colorId === currenId) {
                            return (
                              <div
                                key={uuidv4()}
                                onClick={() => handleRemove(image)}>
                                <span className='cursor-pointer'> X </span>
                                <img
                                  className='h-28 w-h-28'
                                  src={image.image}
                                />
                              </div>
                            );
                          }
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Sizes */}
            <div className='mt-6 ml-2'>Available Sizes</div>
            <div className='flex flex-wrap justify-start items-center mt-3 mb-3 ml-2'>
              <div className='relative'>
                {props.sizes &&
                  props.sizes.map((size) => {
                    const selected = selectedSizes.includes(size.id);
                    return (
                      <button
                        key={size.id}
                        className={`w-10 text-xs justify-center mr-5 text-bg transition-colors duration-150 border border-bg rounded-lg focus:shadow-outline 
                                      ${
                                        selected
                                          ? "bg-primary text-white border-primary"
                                          : "border-gray hover:bg-primary hover:text-white hover:border-primary"
                                      }`}
                        onClick={() => handleSizeSelection(size.id, size.size)}>
                        {size.size}
                      </button>
                    );
                  })}
              </div>
            </div>
            <h2 className='ml-2 mt-4 title-font font-medium mb-2'>SKU Name</h2>
            <div className='mb-2 ml-2 '>
              <input
                type='text'
                className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
                placeholder='eg : PWRN'
                onChange={(e) => setSkuName(e.target.value)}
              />
            </div>
            <h2 className='ml-2 mt-4 title-font font-medium mb-2'>SKU Model</h2>
            <div className='mb-2 ml-2 '>
              <input
                type='text'
                className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
                placeholder='eg : MOVERSIZE, W, M'
                onChange={(e) => setSkuModel(e.target.value)}
              />
            </div>
            <h2 className='ml-2 mt-4 title-font font-medium mb-2'>Model</h2>
            <div className='mb-2 ml-2 '>
              <input
                type='text'
                className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
                placeholder='eg : Men'
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
            <h2 className='ml-2 mt-4 title-font font-medium mb-2'>Category</h2>
            <div className='mb-2 ml-2 '>
              <input
                type='text'
                className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
                placeholder='eg : Clothing'
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <h2 className='ml-2 mt-4 title-font font-medium mb-2'>
              Product Type
            </h2>
            <div className='mb-2 ml-2 '>
              <input
                type='text'
                className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
                placeholder='eg : T-Shirts'
                onChange={(e) => setProdType(e.target.value)}
              />
            </div>
            <h2 className='ml-2 mt-4 title-font font-medium mb-2'>
              Additional Information
            </h2>
            <div className='mb-2 ml-2 '>
              <textarea
                type='text'
                className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5 h-24'
                placeholder='eg : This is a limited edition'
                onChange={(e) => setInfo(e.target.value)}
              />
            </div>
            <h2 className='ml-2 mt-4 title-font font-medium mb-2'>
              Base Price
            </h2>
            <div className='mb-2 ml-2 '>
              <input
                type='number'
                className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
                placeholder='eg : 500'
                onChange={(e) => setBase(e.target.value)}
              />
            </div>
            <h2 className='ml-2 mt-4 title-font font-medium mb-2'>Height</h2>
            <div className='mb-2 ml-2 '>
              <input
                type='number'
                className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
                placeholder='Height in inches'
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <h2 className='ml-2 mt-4 title-font font-medium mb-2'>Breadth</h2>
            <div className='mb-2 ml-2 '>
              <input
                type='number'
                className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
                placeholder='Breadth in inches'
                onChange={(e) => setBreadth(e.target.value)}
              />
            </div>
            <h2 className='ml-2 mt-4 title-font font-medium mb-2'>Length</h2>
            <div className='mb-2 ml-2 '>
              <input
                type='number'
                className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
                placeholder='Length in inches'
                onChange={(e) => setLength(e.target.value)}
              />
            </div>
            <h2 className='ml-2 mt-4 title-font font-medium mb-2'>Weight</h2>
            <div className='mb-2 ml-2 '>
              <input
                type='number'
                className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
                placeholder='Weight in inches'
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <h2 className='ml-2 mt-4 title-font font-medium mb-2'>Tax</h2>
            <div className='mb-2 ml-2 '>
              <input
                type='number'
                className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
                placeholder='Tax'
                onChange={(e) => setTax(e.target.value)}
              />
            </div>
            <h2 className='ml-2 mt-4 title-font font-medium mb-2'>HSN</h2>
            <div className='mb-2 ml-2 '>
              <input
                type='number'
                className='bg-white border border-[#D9D9D9] text-black text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
                placeholder='HSN'
                onChange={(e) => setHsn(e.target.value)}
              />
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer css={{ fontFamily: "$algeria" }}>
          <Button auto flat color='error' onPress={closeHandler}>
            Cancel
          </Button>
          <Button auto onPress={closeHandler} color='warning'>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}