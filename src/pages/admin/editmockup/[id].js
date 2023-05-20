import Head from "next/head";
import Image from "next/image";
import AdminLayout from "@/components/layout-admin";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import {Alert, Backdrop, Button, CircularProgress, Input, MenuItem, Select, Snackbar,} from "@mui/material";
import {uuidv4} from "@firebase/util";
import {Check, Edit, Upload} from "@mui/icons-material";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "@/firebaseConfig";

export default function EditMockup() {
	const router = useRouter();
	const {id} = router.query;
	const isReady = router.isReady;
	const [details, setDetails] = useState(null);
	const [mockupImages, setMockupImages] = useState([]);
	const [edit, setEdit] = useState(false);
	const [name, setName] = useState(null);
	const [availableColors, setAvailableColors] = useState([]);
	const [productType, setProdType] = useState(null);
	const [category, setCategory] = useState(null);
	const [model, setModel] = useState(null);
	const [info, setInfo] = useState(null);
	const [height, setHeight] = useState(null);
	const [breadth, setBreadth] = useState(null);
	const [length, setLength] = useState(null);
	const [weight, setWeight] = useState(null);
	const [tax, setTax] = useState(null);
	const [hsn, setHsn] = useState(null);
	const [base, setBase] = useState(null);
	const [spinner, setSpinnerState] = useState(false); //spinner
	const [message, setMessage] = useState("");
	const [severity, setSeverity] = useState("");
	const [open, setOpen] = useState(false);
	// Colors and Sizes
	const [colors, setColors] = useState([]);
	const [sizes, setSizes] = useState([]);
	// SKU States
	const [selectedSizes, setSelectedSizes] = useState([]);
	const [selectedSizeNames, setSizeNames] = useState([]);
	const [selectedColors, setSelectedColors] = useState([]);
	const [selectedColorNames, setColorNames] = useState([]);
	const [currenId, setCurId] = useState(null);
	const [skuName, setSkuName] = useState(null);
	const [skuModel, setSkuModel] = useState(null);
	const [skuMapping, setSkuMapping] = useState([]);

	const handleClose = (event, reason) => {
		console.log(reason);
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	useEffect(() => {
		if (isReady) {
			getMockupDetails();
			getAllColorsAndSizes();
		}
	}, [isReady]);
	const toggleAvailability = (colorId) => {
		axios.put(`https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/mockup/toggleColorSku/${colorId}&${id}`)
			.then(response =>
				setAvailableColors(old => old.map(color => {
					if (color.id === colorId) color.status = !color.status;
					return color;
				})))
			.catch(err => console.log(err));
	}
	const getMockupDetails = async () => {
		const response = await axios.get(
			"http://localhost:8080/api/mockup/getMockup/" +
			id
		);
		setDetails(response.data);
	};

	useEffect(() => {
		if (details) {
			setName(details.name);
			setProdType(details.productType);
			setCategory(details.category);
			setModel(details.model);
			setInfo(details.additionalInformation);
			setHeight(details.height);
			setBreadth(details.breadth);
			setLength(details.length);
			setWeight(details.weight);
			setTax(details.tax);
			setHsn(details.hsn);
			setBase(details.basePrice);
			setSkuMapping(details.skuMapping);
			setAvailableColors(getAvailableColors(details.skuMapping));
		}
	}, [details]);

	const getAllColorsAndSizes = async () => {
		axios
			.get(
				"https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/colorsAndSizes/getColorsAndSizes"
			)
			.then((response) => {
				setColors(response.data.colors);
				setSizes(response.data.sizes);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getAvailableSizes = (skuMapping) => {
		var availableSizes = [];
		skuMapping.forEach((sku) => {
			if (!availableSizes.includes(sku.size.size))
				availableSizes.push(sku.size.size);
		});
		return availableSizes;
	};

	const getAvailableSizeNames = (skuMapping) => {
		var availableSizeNames = [];
		skuMapping.forEach((sku) => {
			if (!availableSizeNames.includes(sku.size))
				availableSizeNames.push(sku.size);
		});
		return availableSizeNames;
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
					status: sku.status
				});
			}
		});
		return availableColors;
	};

	const generateSkuMapping = async (skuName, skuModel, colors, sizes) => {
		var skuMapping = [];
		for (var i = 0; i < colors.length; i++) {
			for (var j = 0; j < sizes.length; j++) {
				var sku =
					skuName +
					getColorCode(colors[i].color) +
					sizes[j].size +
					"-" +
					colors[i].id.toString().padStart(3, "0") +
					skuModel;
				var color = {
					id: colors[i].id,
				};
				var size = {
					id: sizes[j].id,
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

	const updateMockup = async () => {
		uploadImages(mockupImages);
	};

	const uploadMockup = async (data) => {


		const response = await axios
			.put(
				"https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/admin/updateMockup",
				data
			)
			.then(() => {
				setEdit(false);
				console.log("updating mockup");
				setSpinnerState(false);
				getMockupDetails();
				setOpen(true);
				setMessage("Updated Mockup Successfully");
				setSeverity("success");
			})
			.catch((err) => {
				console.log(err);
				setOpen(true);
				setMessage("An error occurred");
				setSeverity("error");
				setSpinnerState(false);
			});
	}

	const uploadBlob = async (blobUrl) => {
		const response = await fetch(blobUrl);
		const blob = await response.blob();
		const imageRef = ref(storage, `admin-mockups/${new Date().getTime()}`);
		const metadata = {
			contentType: "image/jpeg",
		};
		await uploadBytes(imageRef, blob, metadata);
		const url = await getDownloadURL(imageRef);
		return url;
	};

	const uploadImages = async (images) => {
		const mockup = {
			id: id,
			name: name,
			productType: productType,
			category: category,
			model: model,
			additionalInformation: info,
			height: height,
			breadth: breadth,
			length: length,
			weight: weight,
			tax: tax,
			hsn: hsn,
			basePrice: base,
			images: details.images,
			skuMapping: details.skuMapping,
			disabled: details.disabled
		};
		setSpinnerState(true);
		if (skuModel || skuName || mockupImages.length !== 0) {
			const uploadPromises = images.map(async (image) => {
				const url = await uploadBlob(image.image);
				return {colorId: image.colorId, image: url};
			});
			const oldMockupImages = details.images;
			setMockupImages(await Promise.all(uploadPromises));
			mockup.images = [...oldMockupImages, ...await Promise.all(uploadPromises)];
			mockup.skuMapping = [...skuMapping, ...await generateSkuMapping(
				skuName,
				skuModel,
				selectedColors,
				getAvailableSizeNames(skuMapping)
			)];
		}
		uploadMockup(mockup);
	};

	const getColorCode = (colorName) => {
		const words = colorName.split(" ");
		if (words.length === 1) return words[0].substring(0, 2);
		else return words[0][0] + words[1][0];
	};

	const handleRemove = (image) => {
		if (image)
			setMockupImages((mockupImages) => {
				const images = mockupImages.filter(
					(item) => item.image !== image.image
				);
				return images;
			});
		console.log(mockupImages);
	};

	const getDataUrlFromFile = (file) => {
		return URL.createObjectURL(file);
	};


	return (
		<>
			<Head>
				<meta name='description' content='Generated by create next app'/>
				<meta name='viewport' content='width=device-width, initial-scale=1'/>
				<link rel='icon' href='/logo.png'/>
				{details && <title>Madrasda | Edit Mockup | {details.name}</title>}
			</Head>
			<Backdrop
				sx={{color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1}}
				open={spinner}>
				<CircularProgress color='inherit'/>
			</Backdrop>
			<Snackbar
				className={"mt-14"}
				open={open}
				autoHideDuration={1400}
				onClose={handleClose}
				anchorOrigin={{vertical: "bottom", horizontal: "right"}}>
				<Alert onClose={handleClose} severity={severity}>
					{message}
				</Alert>
			</Snackbar>
			<AdminLayout>
				{details && (
					<section className='md:mx-40 py-12 px-16'>
						<h1 className='text-4xl'>{details.name}</h1>
						<span className='flex flex-wrap mt-1 pr-1 text-sm'>
              Available Sizes:
            </span>
						<div className='flex flex-wrap space-x-5'>
							{getAvailableSizes(skuMapping).map((size) => {
								return (
									<span
										key={uuidv4()}
										className='mt-1 bg-primary text-white w-12 text-center rounded-lg p-3 text-sm border border-border'>
                    {size}
                  </span>
								);
							})}
						</div>
						<h1 className='pt-6 text-xl'>Available Colors</h1>
						<div className='flex flex-wrap space-x-4 py-4'>
							{availableColors &&
								availableColors.map((color) => {
									return (
										<span key={uuidv4()} className={'flex flex-col items-center transition'}>

                    <button
	                    key={uuidv4()}
	                    className={`border-black my-1 border-[1px] h-7 w-7 rounded-[100%] p-2 transition`}
	                    style={{backgroundColor: color.status ? color.hexValue : 'gray'}}
	                    onClick={() => toggleAvailability(color.id)}
                    />
											<p className={'w-20 text-center'}>{color.color}</p>
                     </span>
									);
								})}
						</div>
						<h1 className='text-xl pt-5'>Available Images</h1>
						<div className='flex flex-wrap py-3'>
							{details.images.map((color) => (
								<Image
									key={uuidv4()}
									className=''
									height={100}
									width={100}
									src={color.image}
									style={{width:'auto'}}
								/>
							))}
						</div>
						{!edit && (
							<div>
								<div className='flex space-x-2 items-center'>
									<h1 className='font-semibold text-lg'>Name</h1>
									<h1>{details.name}</h1>
								</div>
								<div className='flex space-x-2 items-center'>
									<h1 className='font-semibold text-lg'>Product Type</h1>
									<h1>{details.productType}</h1>
								</div>
								<div className='flex space-x-2 items-center'>
									<h1 className='font-semibold text-lg'>Category</h1>
									<h1>{details.category}</h1>
								</div>
								<div className='flex space-x-2 items-center'>
									<h1 className='font-semibold text-lg'>Model</h1>
									<h1>{details.model}</h1>
								</div>
								<div className='flex flex-col'>
									<h1 className='font-semibold text-lg'>
										Additional Information
									</h1>
									<h1 className='border border-border rounded-sm p-4 w-fit'>
										{details.additionalInformation}
									</h1>
								</div>
								<div className='flex space-x-2 items-center'>
									<h1 className='font-semibold text-lg'>Height</h1>
									<h1>{details.height}</h1>
								</div>
								<div className='flex space-x-2 items-center'>
									<h1 className='font-semibold text-lg'>Breadth</h1>
									<h1>{details.breadth}</h1>
								</div>
								<div className='flex space-x-2 items-center'>
									<h1 className='font-semibold text-lg'>Length</h1>
									<h1>{details.length}</h1>
								</div>
								<div className='flex space-x-2 items-center'>
									<h1 className='font-semibold text-lg'>Weight</h1>
									<h1>{details.weight}</h1>
								</div>
								<div className='flex space-x-2 items-center'>
									<h1 className='font-semibold text-lg'>Tax</h1>
									<h1>{details.tax}</h1>
								</div>
								<div className='flex space-x-2 items-center'>
									<h1 className='font-semibold text-lg'>HSN</h1>
									<h1>{details.hsn}</h1>
								</div>
								<div className='flex space-x-2 items-center'>
									<h1 className='font-semibold text-lg'>Base Price</h1>
									<h1>{details.basePrice}</h1>
								</div>
							</div>
						)}
						{edit && (
							<div>
								<h2 className='ml-2 mt-4 title-font font-medium mb-2'>
									SKU Name
								</h2>
								<div className='mb-2 ml-2 '>
									<Input
										type='text'
										required
										className='w-full p-2.5'
										placeholder='eg : PWRN'
										onChange={(e) => setSkuName(e.target.value)}
									/>
								</div>
								<h2 className='ml-2 mt-4 title-font font-medium mb-2'>
									SKU Model
								</h2>
								<div className='mb-2 ml-2 '>
									<Input
										type='text'
										required
										className='w-full p-2.5'
										placeholder='eg : MOVERSIZE, W, M'
										onChange={(e) => setSkuModel(e.target.value)}
									/>
								</div>
								<h1 className='text-xl font-semibold'>Add new colours</h1>
								<div className='flex items-center ml-2 mt-3 mb-3'>
									<div className='flex flex-wrap gap-2'>
										{colors &&
											colors.map((color) => {
												if (
													availableColors.findIndex(
														(item) => item.id === color.id
													) === -1
												) {
													return (
														<div
															className='flex flex-col my-4 items-center space-x-2'
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
																	<Check
																		className='absolute text-[#00FF00] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
																)}
															</button>
															<p className='text-[10px] mx-auto'>
																{color.color}
															</p>
														</div>
													);
												}
											})}
									</div>
								</div>
								<div className='flex flex-col'>
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
														<p className='text-[10px] w-full text-center'>
															{color.color}
														</p>
													</div>
												);
											})}
									</div>
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
								<form>
									<div className='flex flex-col'>
										<div className='flex space-x-2 items-center'>
											<h1 className='font-semibold text-lg'>Name</h1>
											<Input
												type='text'
												placeholder={details.name}
												value={name}
												onChange={(e) => setName(e.target.value)}
											/>
										</div>
										<div className='flex space-x-2 items-center'>
											<h1 className='font-semibold text-lg'>Product Type</h1>
											<Input
												type='text'
												placeholder={details.productType}
												value={productType}
												className='p-3 m-3'
												onChange={(e) => setProdType(e.target.value)}
											/>
										</div>
										<div className='flex space-x-2 items-center'>
											<h1 className='font-semibold text-lg'>Audience</h1>
											<Select
												value={model}
												placeholder={model}
												id='category-dropdown'
												className='w-4/5 md:w-1/3'
												onChange={(e) => setModel(e.target.value)}>
												<MenuItem disabled value={model}>
													Choose Model
												</MenuItem>
												<MenuItem value={"Men"}>Men</MenuItem>
												<MenuItem value={"Women"}>Women</MenuItem>
												<MenuItem value={"Kids"}>Kids</MenuItem>
											</Select>
										</div>
										<div className='flex flex-col space-x-2'>
											<h1 className='font-semibold text-lg'>
												Additional Information
											</h1>
											<textarea
												type='text'
												value={info}
												placeholder={details.additionalInformation}
												className='p-3 m-3 w-full border border-border'
												onChange={(e) => setInfo(e.target.value)}
											/>
										</div>
										<div className='flex space-x-2 items-center'>
											<h1 className='font-semibold text-lg'>Height</h1>
											<Input
												type='number'
												value={height}
												placeholder={details.height}
												className='p-3 m-3'
												onChange={(e) => setHeight(e.target.value)}
											/>
										</div>
										<div className='flex space-x-2 items-center'>
											<h1 className='font-semibold text-lg'>Breadth</h1>
											<Input
												type='number'
												value={breadth}
												placeholder={details.breadth}
												className='p-3 m-3'
												onChange={(e) => setBreadth(e.target.value)}
											/>
										</div>
										<div className='flex space-x-2 items-center'>
											<h1 className='font-semibold text-lg'>Length</h1>
											<Input
												type='number'
												value={length}
												placeholder={details.length}
												className='p-3 m-3'
												onChange={(e) => setLength(e.target.value)}
											/>
										</div>
										<div className='flex space-x-2 items-center'>
											<h1 className='font-semibold text-lg'>Weight</h1>
											<Input
												type='number'
												value={weight}
												placeholder={details.weight}
												className='p-3 m-3'
												onChange={(e) => setWeight(e.target.value)}
											/>
										</div>
										<div className='flex space-x-2 items-center'>
											<h1 className='font-semibold text-lg'>Tax</h1>
											<Input
												type='number'
												value={tax}
												placeholder={details.tax}
												className='p-3 m-3'
												onChange={(e) => setTax(e.target.value)}
											/>
										</div>
										<div className='flex space-x-2 items-center'>
											<h1 className='font-semibold text-lg'>HSN</h1>
											<Input
												type='number'
												value={hsn}
												placeholder={details.hsn}
												className='p-3 m-3'
												onChange={(e) => setHsn(e.target.value)}
											/>
										</div>
										<div className='flex space-x-2 items-center'>
											<h1 className='font-semibold text-lg'>Base Price</h1>
											<Input
												type='number'
												value={base}
												placeholder={details.basePrice}
												className='p-3 m-3'
												onChange={(e) => setBase(e.target.value)}
											/>
										</div>
									</div>
								</form>
							</div>
						)}
						{!edit && (
							<Button
								variant='contained'
								className='bg-primary'
								onClick={() => setEdit(true)}>
								<Edit/> Edit Mockup
							</Button>
						)}
						{edit && (
							<div className='space-x-4'>
								<Button
									variant='contained'
									className='bg-primary'
									onClick={updateMockup}>
									<Upload/> Save Mockup
								</Button>
								<Button
									variant='contained'
									className='bg-red hover:bg-error'
									onClick={() => setEdit(false)}>
									Cancel
								</Button>
							</div>
						)}
					</section>
				)}
			</AdminLayout>
		</>
	);
}
