import Head from "next/head";
import LineGraph from "@/components/linegraph";
import Image from "next/image";
import Link from "next/link";
import AdminLayout from "@/components/layout-admin";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {getRole, isTokenValid} from "@/utils/JWTVerifier";
import axios from "axios";
import {Button} from "@mui/material";
import { API_URL } from "@/utils/constants";

export default function VendorDetails() {
	const [tokenExists, setTokenExists] = useState(false);
	const router = useRouter();
	let isReady = router.isReady;
	const {id} = router.query;
	const [details, setDetails] = useState(null);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	const getVendorDetails = async () => {
		axios
			.get(API_URL + "/api/vendor/vendorDetails/" + id)
			.then((response) => {
				setDetails(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		if (isReady) getVendorDetails();
	}, [isReady]);

	useEffect(() => {
		const jwtToken = localStorage.getItem("token_admin")

		if (jwtToken === undefined || !isTokenValid(jwtToken) || getRole(jwtToken) !== 'ROLE_ADMIN') router.push("/admin"); else setTokenExists(true);
	}, []);

	if (loading && isReady) return (<div className='z-50 h-screen w-screen overflow-hidden'>
		<Image src="/loader.gif" width={1920} height={1080} className="object-cover object-center w-full h-full"/>
	</div>);

	return (<>
		<Head>
			<meta name="description" content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."/>
			<meta name='viewport' content='width=device-width, initial-scale=1'/>
			<link rel='icon' href='/logo.png'/>
			<title>Madrasda | Vendor Details</title>
		</Head>

		{tokenExists && (<AdminLayout>
			{details && (<main
				className='body-font overflow-hidden font-quest
                                md:ml-32'>
				<div className='px-5 py-24 md:py-0 md:my-10 mx-auto'>
					<div className={'flex justify-between items-center'}>
					<div className="flex flex-row items-center">
						<h1
							className='text-3xl text-primary
                               md:ml-20 md:mt-30 md:mr-2'>
							<span className="font-bold">{details.vendor.name}</span>
						</h1>
						
						</div>
						<div className={'flex flex-wrap flex-col space-y-4'}>
							<Button   variant={'contained'} color={details.vendor.status ? 'error' : 'success'} className={'bg-error'}
							          onClick={() => {
								          axios.put(API_URL + "/api/admin/toggleVendor/" + id, {}, {
									          headers: {Authorization: localStorage.getItem("token_admin")}
								          }).then((response) => {
									          setDetails(old => {
										          return {...old, vendor: {...old.vendor, status: !old.vendor.status}}
									          })
								          });
							          }}>{(details.vendor.status ? 'Disable' : 'Enable')} Account</Button>
							<Button variant={'contained'} color={'error'} disabled={!details.vendor.imgUrl}
							        onClick={() => {
								        axios.put(API_URL + "/api/admin/deleteVendorPicture/" + id, {}, {
									        headers: {Authorization: localStorage.getItem("token_admin")}
								        }).then((response) => {
									        setDetails(old => {
										        return {...old, vendor: {...old.vendor, imgUrl: null}}
									        })
								        });
							        }}>Delete Profile Picture</Button>
						</div>
					</div>

					<div
						className='mt-10 w-full flex flex-col md:flex-row justify-between md:justify-around items-center space-y-2 md:space-y-0'>
						<div className='flex space-x-4 items-center'>
							<Image
								className='rounded-3xl'
								src={details.vendor.imgUrl || "/CREATOR.png"}
								width={100}
								height={100}
							/>
						</div>
						<div className='flex justify-between md:flex-col w-full md:w-fit'>
							<h2 className='font-algeria text-xl'>
								{details.vendor.name}
							</h2>
							<h2 className='text-lg'>{details.vendor.email}</h2>
						</div>
						<div className='flex justify-between md:flex-col w-full md:w-fit'>
							<h1 className='text-right text-lg'>Company URL</h1>
							<h1 className='text-right font-bold text-xl'>
								{details.vendor.companyUrl}
							</h1>
						</div>
						<div className='flex justify-between md:flex-col w-full md:w-fit'>
							<h1 className='text-right text-lg'>Company Name</h1>
							<h1 className='text-right font-bold text-xl'>
								{details.vendor.companyName}
							</h1>
						</div>
					</div>

					<section className='text-gray-600 body-font'>
						<div className='container px-5 py-14 mx-auto'>
							<div className='flex flex-wrap -m-4 text-center'>
								<div className='p-4 w-1/2 md:w-1/3'>
									<h1 className='title-font font-bold text-xl'>
										Total Products
									</h1>
									<Link href={`/admin/vendorproducts/${id}`}>
									<h2 className='title-font font-bold text-3xl text-primary cursor-pointer'>
										{details.salesAnalysis ? details.salesAnalysis.totalProducts : 0}
									</h2>
									</Link>
								</div>
								<div className='p-4 w-1/2 md:w-1/3'>
									<h1 className='title-font font-bold text-xl'>
										Total Orders
									</h1>
									<h2 className='title-font font-bold text-3xl text-primary'>
										{details.salesAnalysis ? details.salesAnalysis.totalOrders : 0}
									</h2>
								</div>
								<div className='p-4 w-full md:w-1/3'>
									<h1 className='title-font font-bold text-xl'>
										Total Profit Earned
									</h1>
									<h2 className='title-font font-bold  text-3xl text-primary'>
										{details.salesAnalysis ? details.salesAnalysis.totalProfit : 0}
									</h2>
								</div>
							</div>
						</div>
					</section>

					<div className='md:ml-20 flex justify-center items-center'>
						<LineGraph
							monthlySales={details.salesAnalysis ? details.salesAnalysis.monthlySales : []}
						/>
					</div>

					<div
						className='flex flex-col justify-center items-center mt-12
                                md:ml-20'>
						<h1 className='text-primary text-4xl font-semibold'>
							WOAH!
						</h1>
						<div className='flex text-sm md:text-lg justify-center items-center  w-full'>
							<h2 className='p-1'>We have sold</h2>
							<h3 className='text-primary p-1 font-semibold text-2xl'>
								{details.salesAnalysis ? details.salesAnalysis.productsSoldToday : 0}
							</h3>
							<h2 className='p-1'>products in the last 24 hours!</h2>
						</div>
					</div>

					{details.productLadder && (<div
						className="bg-[url('/templates-area.png')] bg-no-repeat bg-cover mt-20
                                md:ml-20">
						<h1
							className='pl-5 pt-10 te    xt-xl text-white font-semibold
                                   md:pl-10 md:text-3xl'>
							TOP SELLERS THIS WEEK
						</h1>
						<div className='flex py-10 justify-around flex-wrap'>
							{details.productLadder[1] && (
								<div className='flex flex-col items-center pt-16 w-1/3 p-2'>
									<Image
										src={details.productLadder[1].imgUrl}
										width={200}
										height={233.33}
										className='object-contain'
									/>
									<div
										className='py-4 px-5 z-1 -mt-4 w-fit border-4 border-primary rounded-full bg-white
                             text-xl text-primary font-semibold italic'>
										#2
									</div>
								</div>)}
							{details.productLadder[0] && (
								<div className='flex flex-col items-center pb-26 w-1/3 p-2'>
									<Image
										src={details.productLadder[0].imgUrl}
										width={200}
										height={233.33}
										className='object-contain'
									/>
									<div
										className='py-4 px-5 z-1 -mt-4 w-fit border-4 border-primary rounded-full bg-white
                            text-xl text-primary font-semibold italic'>
										#1
									</div>
								</div>)}
							{details.productLadder[2] && (
								<div className='flex flex-col items-center pt-32 w-1/3 p-2'>
									<Image
										src={details.productLadder[2].imgUrl}
										width={200}
										height={233.33}
										className='object-contain'
									/>
									<div
										className='py-4 px-5 z-1 -mt-4 w-fit border-4 border-primary rounded-full bg-white
                            text-xl text-primary font-semibold italic'>
										#3
									</div>
								</div>)}
						</div>
					</div>)}
				</div>
			</main>)}
		</AdminLayout>)}
	</>);
}
