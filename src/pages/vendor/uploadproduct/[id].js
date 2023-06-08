import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import React, { forwardRef, useEffect, useState } from "react";
import Head from "next/head";
import VendorLayout from "@/components/layout-vendor";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { isTokenValid } from "@/utils/JWTVerifier";
import { storage } from "../../.././firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { uuidv4 } from "@firebase/util";
import {
  Backdrop,
  CircularProgress,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import { Check } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function ViewProd() {
	const [tokenExists, setTokenExists] = useState(false);
	const router = useRouter();
	let isReady = router.isReady;
	const {id} = router.query;
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState("");
	const [desc, setDesc] = useState("");
	const [basePrice, setBasePrice] = useState(0);
	const [shipping, setShipping] = useState(0);
	const [discount, setDiscount] = useState(0);
	const [total, setTotal] = useState(0);
	const [profit, setProfit] = useState(0);
	const [SellingPrice, setSellingPrice] = useState(basePrice);
	const [audience, setAudience] = useState("Choose you target audience");
	const [tax, setTax] = useState(0);
	const [currenId, setCurId] = useState(null);
	const [publishStatus, setPublishStatus] = useState(true);
	const [productImages, setProductImages] = useState([]);
	const [sizes, setSizes] = useState([]);
	const [colors, setColors] = useState([]);
	const [selectedColors, setSelectedColors] = useState([]);
	const [template, setTemplate] = useState(null);
	const [spinner, setSpinnerState] = useState(false); //spinner
	const [message, setMessage] = useState("");
	const [severity, setSeverity] = useState(""); // success , error
	const [open, setOpen] = useState(false); // same as spinner
	useEffect(() => {
    const calculatedProfit = Math.ceil(
      ((100 - tax) / 100) * SellingPrice - basePrice
    );
    setProfit(calculatedProfit);

		if(total === 0) {
			setSellingPrice(basePrice);
			return;
		}
		const calculatedSellingPrice = Math.ceil(total * (100 - discount) / 100 * (tax + 100) / 100);
		setSellingPrice(calculatedSellingPrice);
	}, [basePrice, total, discount]);
	const handleClose = (event, reason) => {
		console.log(reason);
		if (reason === "clickaway") {
			return;
		}

    setOpen(false);
  };
  const uploadProduct = async () => {
    if (!template && productImages.length === 0) {
      return;
    }
    if (profit < 0) {
      setOpen(true);
      setMessage("Please enter a valid price");
      setSeverity("error");
      return;
    }
    setSpinnerState(false);
    var colorId = [];
    if (selectedColors) {
      selectedColors.forEach((color) => {
        colorId.push(color.id);
      });
    }

    const data = {
      name: name,
      audience: audience,
      description: desc,
      basePrice: Number(basePrice),
      shipping: Number(shipping),
      discount: Number(discount),
      total: Number(total),
      profit: Number(profit),
      tax: Number(tax),
      publishStatus: publishStatus,
      vendor: {
        id: template.vendorId,
      },
      mockupId: template.mockup.id,
      colors: colorId,
    };

    const uploadPromises = productImages.map(async (image) => {
      const url = await uploadBlob(image.imgUrl);
      return { color: image.color, imageUrl: url };
    });
    const uploadedImages = await Promise.all(uploadPromises);
    data.productImages = uploadedImages;

    if (template.frontDesignPlacement) {
      data.frontDesignPlacement = JSON.stringify(template.frontDesignPlacement);
      data.frontDesignUrl = template.frontDesignImage;
      data.backDesignUrl = template.backDesignPlacement;
    } else {
      data.backDesignPlacement = JSON.stringify(template.backDesignPlacement);
    }

    if (data.productImages[0].imgUrl !== null) {
      const response = await axios.post(
        "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/product/createProduct",
        data,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token_vendor"),
          },
        }
      );
    }
    const tempResponse = await axios.delete(
      "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/templates/deleteTemplate/" +
        id,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_vendor"),
        },
      }
    );
    setSpinnerState(true);
    router.push("/vendor/templatelist");
  };

  const uploadBlob = async (blobUrl) => {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    const imageRef = ref(storage, `products/${new Date().getTime()}`);
    const metadata = {
      contentType: "image/jpeg",
    };
    await uploadBytes(imageRef, blob, metadata);
    const url = await getDownloadURL(imageRef);
    return url;
  };
  useEffect(() => {
    if (isReady) getTemplateDetails();
  }, [isReady]);

  useEffect(() => {
    const jwtToken = localStorage.getItem("token_vendor");
    if (jwtToken === undefined || !isTokenValid(jwtToken))
      router.push("/vendor");
    else {
      setTokenExists(true);
    }
  }, []);

  const getDataUrlFromFile = (file) => {
    return URL.createObjectURL(file);
  };

  useEffect(() => {
    if (productImages.length > 0) {
    }
  }, [productImages]);

  const handleRemove = (image) => {
    if (image)
      setProductImages((productImages) => {
        const images = productImages.filter(
          (item) => item.imgUrl !== image.imgUrl
        );
        return images;
      });
  };

  const getTemplateDetails = async () => {
    const response = await axios.get(
      `https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/templates/getTemplate/${id}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_vendor"),
        },
      }
    );
    setLoading(false);
    setTemplate(response.data);
    setSizes(getAvailableSizes(response.data.mockup.skuMapping));
    setColors(getAvailableColors(response.data.mockup.skuMapping));
    setBasePrice(response.data.mockup.basePrice);
    setTax(response.data.mockup.tax);
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

  if (loading && isReady && template)
    return (
      <div className="z-50 h-screen w-screen overflow-hidden">
        <Image
          src="/loader.gif"
          width={1920}
          height={1080}
          className="object-cover object-center w-full h-full"
        />
      </div>
    );

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
        <title>Madrasda</title>
      </Head>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={spinner}>
        <CircularProgress color='inherit' />
      </Backdrop>

      <Snackbar
        className={"mt-14"}
        open={open}
        autoHideDuration={1400}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
      {tokenExists && (
        <VendorLayout>
          <main
            className='overflow-hidden font-algeria
                    md:ml-36'>
            <div className='mt-20 px-5 md:my-10 mx-auto'>
              <div className='md:ml-20 md:mt-10'>
                <h1 className='body-font text-primary text-3xl'>
                  Edit Product Info
                </h1>
              </div>
              <hr
                className='h-px md:ml-20 my-6 bg-black border-1 dark:bg-primary
                       lg:mr-12'></hr>
              <div className='md:ml-20 lg:ml-32'>
                <h1 className='title-font font-medium text-xl pb-3'>Title</h1>
                <div
                  className='mb-6 ml-2 mt-1
                            lg:mr-96'>
                  <input
                    type='text'
                    className='bg-white border border-[#D9D9D9] text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
                    placeholder='Enter the title of your product'
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <InputLabel
                  id='category-dropdown'
                  className='font-medium text-xl pb-3'>
                  Audience
                </InputLabel>
                <Select
                  value={audience}
                  id='category-dropdown'
                  className='mb-3 ml-2 w-1/2 text-black'
                  onChange={(e) => setAudience(e.target.value)}>
                  <MenuItem disabled value=''>
                    Choose you target audience
                  </MenuItem>
                  <MenuItem value={"Men"}>Men</MenuItem>
                  <MenuItem value={"Women"}>Women</MenuItem>
                  <MenuItem value={"Kids"}>Kids</MenuItem>
                </Select>
                <div className='ml-2'>
                  <h2 className='title-font font-medium text-xl mb-6'>
                    Description
                  </h2>
                  <textarea
                    id='comment'
                    rows='4'
                    className='bg-white border border-[#D9D9D9] text-sm rounded-lg focus:ring-primary focus:border-[#D9D9D9] block w-full p-2.5'
                    placeholder='Enter the description for your product'
                    required
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>
                {template && (
                  <div className='my-6 ml-2'>
                    <h2 className='title-font font-medium text-xl mb-6'>
                      Product Design
                    </h2>
                    <div className='flex flec col ml-12 '>
                      {template && (
                        <img
                          className='w-36 rounded-lg'
                          src={template.frontDesignImage}
                          alt='picture'
                        />
                      )}
                    </div>
                    <h2 className='title-font font-medium text-xl mb-6'>
                      Design
                    </h2>
                    <div className='flex flec col ml-12 '>
                      {template && (
                        <img
                          className='w-36 rounded-lg'
                          src={template.backDesignPlacement}
                          alt='picture'
                        />
                      )}
                    </div>
                    <h2 className='title-font font-medium text-xl mb-6'>
                      {template.frontDesignPlacement
                        ? "Front Design"
                        : "Back Design"}{" "}
                      Placement
                    </h2>
                    <div className='flex text-xl text-primary'>
                      {template.frontDesignPlacement ||
                        template.backDesignPlacement}
                    </div>
                  </div>
                )}
              </div>
              <hr
                className='h-px my-6 bg-black border-1 dark:bg-primary
                       md:ml-20 
                       lg:mr-12'></hr>
              <div className='md:ml-20 lg:ml-32'>
                <h1 className='title-font font-medium text-2xl pb-8'>
                  Product Details
                </h1>
                <div>
                  <h1>Choose Colors</h1>
                  <div className='flex flex-wrap'>
                    {colors &&
                      colors.map((color) => {
                        return (
                          <div
                            className='flex flex-col my-4 items-center px-2'
                            key={color.id}>
                            <button
                              className={`border-2 border-gray rounded-full relative w-10 h-10 focus:outline-none`}
                              onClick={() => {
                                handleColorSelection({
                                  id: color.id,
                                  hexValue: color.hexValue,
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

                <h1>Select Your Color Wise Product Images</h1>
                <div className='items-center mt-3 mb-3'>
                  <div className='flex flex-wrap'>
                    {selectedColors &&
                      selectedColors.map((color) => {
                        return (
                          <div
                            className='my-4 space-x-5 items-center px-2'
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
                            <p className='text-[10px] mx-auto'>{color.color}</p>
                          </div>
                        );
                      })}
                  </div>
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
                            <span className='font-semibold'>
                              Click to upload
                            </span>
                          </p>
                        </div>
                        <input
                          id='dropzone-file'
                          type='file'
                          accept='image/*'
                          className='hidden'
                          onChange={(e) => {
                            if (
                              e.target.files[0] !== null &&
                              e.target.files[0] !== undefined
                            )
                              setProductImages((productImages) => [
                                ...productImages,
                                {
                                  color: currenId,
                                  imgUrl: getDataUrlFromFile(e.target.files[0]),
                                },
                              ]);
                          }}
                        />
                      </label>
                    </div>
                  )}
                </div>

                {/* Image Preview */}
                {productImages && currenId && (
                  <div className='space-x-3 justify-center flex flex-wrap'>
                    {productImages.map((image) => {
                      if (image.color === currenId) {
                        return (
                          <div
                            key={uuidv4()}
                            onClick={() => handleRemove(image)}>
                            <span className='cursor-pointer'> X </span>
                            <img className='h-28 w-h-28' src={image.imgUrl} />
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
                <div className='mt-6'>Available Sizes</div>
                <div className='flex justify-start items-center mt-3 mb-3 space-x-4'>
                  {sizes &&
                    sizes.map((item) => {
                      return (
                        <div key={uuidv4()} className='relative'>
                          <button
                            className='w-20 text-sm justify-center shadow-md  shadow-gray hover:shadow-gray
                                                    transition-colors duration-150 shadow-grey
                                                    p-3 rounded-lg hover:shadow-lg bg-primary text-white'>
                            {item}
                          </button>
                        </div>
                      );
                    })}
                </div>
              </div>
              <hr
                className='h-px my-6 bg-black border-1 dark:bg-primary
                       md:ml-20 
                       lg:mr-12'></hr>
              <div
                className='md:ml-20
                        lg:ml-32'>
                <h1 className='title-font font-medium text-2xl pb-8'>
                  Payment Details
                </h1>
                <div
                  className='grid gap-3 ml-2 mb-2 md:grid-cols-2 '
                  style={{ width: "40rem" }}>
                  <div>
                    <TextField
                      type='numeric'
                      className={"text-2xl w-72"}
                      label={"Maximum retail Price (₹)"}
                      placeholder='₹'
                      required
                      onChange={(e) => setTotal(e.target.value)}
                    />
                  </div>
                  <div>
                    <TextField
                      type='numeric'
                      className='text-2xl w-72 text-bold text-black'
                      placeholder='₹'
                      readOnly
                      value={basePrice}
                      label={"Base Price (₹)"}
                    />
                  </div>
                  <div>
                    <TextField
                      type='numeric'
                      className='text-2xl w-72'
                      label={"Discount / Offer %"}
                      placeholder='%'
                      required
                      onChange={(e) => setDiscount(e.target.value)}
                    />
                  </div>
                  <div>
                    <TextField
                      type='numeric'
                      label={"Taxes (%)"}
                      className='text-2xl w-72'
                      value={tax}
                      readOnly
                    />
                  </div>

                  <div>
                    <TextField
                      type='numeric'
                      label={"Selling Price (₹) Incl. Taxes"}
                      className='text-2xl w-72'
                      value={SellingPrice}
                      readOnly
                      focused
                    />
                  </div>
                  <div>
                    <TextField
                      inputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <ArrowDropUpIcon />
                          </InputAdornment>
                        ),
                      }}
                      type='numeric'
                      label={"Profit Earned (₹)"}
                      className='text-2xl w-72'
                      value={profit}
                      readOnly
                      error={profit < 0}
                      color={profit > 0 ? "success" : ""}
                      focused
                    />
                  </div>
                </div>
                <h1 className='ml-2 text-lg mt-4 font-bold'>
                  NOTE: Kindly email the design in high quality with a
                  resolution of 3000 x 3000 to admin at backend@madrasda.com
                </h1>
                <h1 className='ml-2 text-sm mt-4 font-bold'>
                  NOTE: Vendor profit is not final, shipping charges may be subtracted from it 
                </h1>
                <h1 className='ml-2 text-lg mt-4 items-center'>
                  <InfoIcon /> Click on View Products to enable this product for
                  sale after uploading the product
                </h1>
              </div>

              <div className=' mt-14 flex justify-center '>
                <button
                  type='button'
                  onClick={() => uploadProduct()}
                  className='text-white bg-primary hover:bg-blue-800 focus:outline-none focus:ring-4
         focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                  Upload Product
                </button>
              </div>
            </div>
          </main>
        </VendorLayout>
      )}
    </>
  );
}
