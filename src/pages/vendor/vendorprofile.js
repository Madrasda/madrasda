import VendorLayout from '@/components/layout-vendor'
import React, {forwardRef, useEffect, useState} from 'react'
import Head from 'next/head'
import axios from "axios";
import {useRouter} from "next/router";
import {getRole, isTokenValid} from "@/utils/JWTVerifier";
import {Backdrop, Button, CircularProgress, InputAdornment, Snackbar, TextField} from "@mui/material";
import {EditOutlined} from '@mui/icons-material';
import Link from 'next/link'
import MuiAlert from "@mui/material/Alert";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "@/firebaseConfig";
import {v4} from "uuid";
import ChangePasswordModal from "@/components/ChangePassword-Modal";

const Alert = forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function VendorProfile(props) {

	const [tokenExists, setTokenExists] = useState(false)
	const router = useRouter();
	let isReady = router.isReady;
	const {id} = router.query;
	const [details, setDetails] = useState({
		vendor: {
			companyUrl: "",
			companyName: "",
			email: "",
			phone: "",
			imgUrl: ""
		}
	});
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [severity, setSeverity] = useState("");
	const [state, setState] = useState(false);
	const [imageURL, setImageURL] = useState('');

	const handleUploadImage = async (event) => {
		setLoading(true);
		const file = event.target.files[0];
		const imageRef = ref(storage, `vendors/${file.name + v4()}`);
		await uploadBytes(imageRef, file);
		const url = await getDownloadURL(imageRef);
		setLoading(false);
		setImageURL(url);
		setDetails((oldDetails) => ({
			...oldDetails,
			vendor: {
				...oldDetails.vendor,
				imgUrl: url
			}
		}))
	}
	const handleClose = (event, reason) => {
		console.log(reason);
		if (reason === 'clickaway') {
			return;
		}

		setState(false);
	};


	const getVendorDetails = async () => {
		const response = await axios.get(
			"https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/vendor/", {
				headers: {
					Authorization: "Bearer " + localStorage.getItem('token')
				}
			}
		);
		setDetails(old => {
			setImageURL(response.data.vendor.imgUrl);
			return response.data
		});
	}

	useEffect(() => {
		if (isReady)
			getVendorDetails();
	}, [isReady]);

	useEffect(() => {
		const jwtToken = localStorage.getItem("token")
		if (jwtToken === undefined || !isTokenValid(jwtToken) || getRole(jwtToken) !== 'ROLE_VENDOR')
			router.push("/vendor");
		else
			setTokenExists(true);
	}, []);


	async function submitHandler(e) {
		e.preventDefault();
		const response = await axios.put('https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/vendor/updateVendorDetails', details.vendor, {
			headers: {
				"Authorization": 'Bearer ' + localStorage.getItem('token')
			}
		})
		setMessage(response.status === 200 ? 'Profile Update successfully' : 'Error updating profile')
		setSeverity(response.status === 200 ? 'success' : 'error')
		setState(true);

	}

	return (
		<>
			<Head>
				<meta name='description' content='Generated by create next app'/>
				<meta name='viewport' content='width=device-width, initial-scale=1'/>
				<link rel='icon' href='/logo.png'/>
				<title>Madrasda | Vendor Profile</title>
			</Head>
			{!tokenExists && <h1> LOADING... </h1>}
			{tokenExists && details && (
				<VendorLayout>
					<Snackbar open={state} autoHideDuration={3000} onClose={handleClose}>
						<Alert onClose={handleClose} severity={severity}>
							{message}
						</Alert>
					</Snackbar>
					<section className='body-font font-algeria overflow-hidden md:ml-56 lg:ml-36'>
						<div className='mt-20 px-5 md:my-10 mx-auto lg:ml-20 md:mt-10'>
							<h1 className='text-3xl text-primary'>PROFILE</h1>
							<div className='grid gap-6 mt-10 ml-2 mb-2 md:grid-row lg:mr-96'>
								<form onSubmit={submitHandler}>

									<div className="relative w-48 h-48 md:w-72 md:h-72 overflow-hidden rounded-full mx-auto">

										<div className="flex items-center justify-center h-full">
											<Backdrop open={loading}>
												<CircularProgress/>
											</Backdrop>
											<img
												src={details.vendor.imgUrl || "/CREATOR.png"}
												alt="Vendor"
												className="object-cover object-center w-full h-full"
											/>

										</div>
											<label htmlFor="upload" className="cursor-pointer">
												<div
													className="absolute bg-bg bg-opacity-50 top-0 left-0 w-full h-full flex items-center
												justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out">

													<div className="bg-gray bg-opacity-50 text-white rounded-full p-4">

														<span className="text-lg">Edit Profile Picture</span>
														<span className="sr-only">Upload Image</span>
														<input type="file" id="upload" className="hidden"
														       onChange={handleUploadImage}/>
													</div>
												</div>
											</label>
									</div>

									<div>
										<TextField
											id='companyName'
											label='Company Name'
											value={details.vendor.companyName}
											variant='outlined'
											fullWidth
											margin='normal'
											onChange={(e) => setDetails((oldDetails) => ({
												...oldDetails,
												vendor: {
													...oldDetails.vendor,
													companyName: e.target.value
												}
											}))}
										/>
									</div>
									<div>
										<TextField
											id='companyUrl'
											label='Company URL'
											value={details.vendor.companyUrl}
											variant='outlined'
											fullWidth
											margin='normal'
											InputLabelProps={{shrink: true}}
											onChange={(e) => setDetails((oldDetails) => ({
												...oldDetails,
												vendor: {
													...oldDetails.vendor,
													companyUrl: e.target.value
												}
											}))}

										/>
									</div>
									<div>
										<TextField
											id='email'
											label='Email'
											value={details.vendor.email}
											variant='outlined'
											fullWidth
											margin='normal'
											InputLabelProps={{shrink: true}}
											onChange={(e) => setDetails((oldDetails) => ({
												...oldDetails,
												vendor: {
													...oldDetails.vendor,
													email: e.target.value
												}
											}))}
										/>
									</div>
									<div>
										<TextField
											id="phone"
											label="Phone Number"
											value={details.vendor.phone || ""}
											variant="outlined"
											fullWidth
											margin="normal"
											inputMode={'numeric'}
											InputProps={{
												startAdornment: <InputAdornment position="start">+91 </InputAdornment>,
											}}
											InputLabelProps={{shrink: true}}
											onChange={(e) => setDetails((oldDetails) => ({
												...oldDetails,
												vendor: {
													...oldDetails.vendor,
													phone: e.target.value
												}
											}))}
										/>
									</div>
									<Button
										variant={"contained"}
										endIcon={<EditOutlined/>}
										type={'submit'}
										color={'success'}
									>
										Update Profile

									</Button>
									<Link href="/vendor/changepassword">
									<Button type="submit" className={"text-white bg-primary font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2"}>Change Password</Button>
									</Link>
								</form>
							</div>
						</div>
					</section>
				</VendorLayout>
			)}
		</>
	);
}
