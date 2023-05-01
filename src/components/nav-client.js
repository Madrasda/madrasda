import Image from "next/image"
import Link from "next/link"
import CartModal from "./cart-modal"
import axios from "axios";
import {Dropdown} from "@nextui-org/react";
import {useRouter} from "next/router";
import {UserContext} from "../../context/context";
import {useContext, useEffect, useState} from "react";
import {uuidv4} from "@firebase/util";
import {getRole, isTokenValid} from "@/utils/JWTVerifier";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from "@mui/material/IconButton";
import {Menu, MenuItem} from "@mui/material";

export default function NavisCustomer() {
	const router = useRouter();
	const ctx = useContext(UserContext);
	const [products, setProducts] = useState([]);
	const [vendorList, setVendorList] = useState([{}]);
	const [isCustomer, setIsCustomer] = useState(false)
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);
	const handleClick = (event) => {
		setOpen(true);
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setOpen(false);
		setAnchorEl(null);
	};
	useEffect(() => {
		if (isTokenValid(localStorage.token) && getRole(localStorage.token) === 'ROLE_CUSTOMER')
			setIsCustomer(true)
		ctx.setIsLoggedIn(true);
	}, [ctx.token])

	const getBestSellers = async () => {
		const response = await axios.get(
			"https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/product/hotsellers"
		);
		setProducts(response.data);
	};

	const toggleMenu = () => {
		const menu = document.getElementById("mobile_menu");
		menu.classList.toggle("hidden");
	};
	const handleVendorProductsClick = (id) => {
		console.log(id)
		router.push("/products/[vendorId]", "/products/" + id);
	};

	const handleCategoryProductsClick = (event) => {
		const filter = event.target.id;
		router.push("/product-category", "/products/" + filter);
	};

	const handleGenderProductsClick = (filter) => {
		router.push(
			{
				pathname: "/product-gender",
				query: {gender: filter},
			},
			"/products?gender=" + filter
		);
	};
	const logout = () => {
		localStorage.removeItem("token");
		ctx.setIsLoggedIn(false);
		router.push("/login");
	};

	useEffect(() => {
		getBestSellers();
		axios.get("https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/admin/getVendors")
			.then(response => setVendorList(response.data))
			.catch(err => console.log(err));
	}, []);

	return (

		<header className='font-algeria bg-bg text-white px-8 z-20 w-full fixed ' >
			<div className='justify-center items-center w-full hidden md:flex'>
				<Link href='/'>
					<Image src='/logo.png' width={90} height={90}/>
				</Link>
				<div className='container flex flex-wrap p-3 flex-col md:flex-row items-center w-3/4 mr-auto'>
					<nav
						className='md:mr-auto lg:ml-10 md:py-1 text-sm flex flex-wrap items-center justify-center font-bold'>

						<Dropdown className={'shadow-lg shadow-bg'}>
							<Dropdown.Button
								flat
								css={{
									background: "#1A1A1C",
									fontFamily: "$algeria",
									fontWeight: "700",
									color: "White",
									backgroundColor: "inherit",
									outline: "none",
								}}>
								Shop
							</Dropdown.Button>
							<Dropdown.Menu
								className={'shadow-lg shadow-bg'}
								aria-label='Static Actions'
								containerCss={{
									borderRadius: "0",
									border: "0",
									position: "fixed",
									top: "$3xl",
									left: "$3xl",
									boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;'

								}}
								css={{
									fontFamily: "$algeria",
								}}>
								<Dropdown.Item
									key='men'
									css={{borderRadius: "0", padding: '0', margin: '0'}}
									>
									<div onClick={() => {handleGenderProductsClick("Men");}} className={'px-3 my-3'}>
										Men
									</div>
								</Dropdown.Item>
								<Dropdown.Item
									key='women'
									css={{borderRadius: "0", padding: '0', margin: '0'}}>
									<div onClick={() => {handleGenderProductsClick("Women");}} className={'px-3 my-3'}>
										Women
									</div>
								</Dropdown.Item>
								<Dropdown.Item
									key='kids'
									css={{borderRadius: "0", padding: '0', margin: '0'}}>
									<div onClick={() => {handleGenderProductsClick("Kids");}} className={'px-3 my-3 '}>
										Kids
									</div>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>

						<Link href='/#hotsellers' scroll={true}>
							<button className='text-white font-bold cursor-pointer bg-bg'>
								Bestsellers
							</button>
						</Link>
						<Dropdown >
							<Dropdown.Button
								flat
								css={{
									background: "inherit",
									fontFamily: "$algeria",
									fontWeight: "700",
									color: "White",
								}}>
								Vendors
							</Dropdown.Button>
							<Dropdown.Menu
								aria-label='Static Actions'
								containerCss={{
									borderRadius: "0",
									border: "0",
									position: "fixed",
									top: "$3xl",
									left: "$6xl",
									boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;',
									padding: '0'
								}}
								css={{
									fontFamily: "$algeria",
								}}>
								{vendorList.map((vendor) => (
									<Dropdown.Item key={uuidv4()} css={{borderRadius: "0", padding: '0', margin: '0'}}>
										<div key={uuidv4()} onClick={() => handleVendorProductsClick(vendor.id)} className={'px-3 py-3'}>
											{vendor.name}
										</div>
									</Dropdown.Item>
								))}
							</Dropdown.Menu>
						</Dropdown>
					</nav>
				</div>
				<div className='flex space-x-7 items-center mr-3 w-1/4 justify-end pr-3'>
					{isCustomer && <CartModal/>}
					{!isCustomer && (
						<Link className={"text-lg"} href='/login'>
							<h2> Login </h2>
						</Link>
					)}
					{isCustomer && (
						<>

							<IconButton id={'user-config'} variant={'text'} sx={{background: 'inherit', color: '#FFF'}}
							            aria-controls={open ? 'user-config-menu' : undefined}
							            aria-expanded={open ? 'true' : undefined}
							            onClick={handleClick}
							>
								<AccountCircleIcon sx={{height: '38px', width: '38px'}}/>
							</IconButton>
							<Menu
								id={'user-config-menu'}
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								MenuListProps={{
									'aria-labelledby': 'user-config',
								}}
								sx={{width: '25rem'}}
							>
								<MenuItem
									css={{borderRadius: "0"}}>
									<Link href='/clientprofile'>
										<h1 className='font-algeria my-auto'>
											Profile
										</h1>
									</Link>
								</MenuItem>
								<MenuItem css={{borderRadius: "0"}} color='error'>
									<h1
										onClick={() => logout()}
										className='font-algeria my-auto'>
										Logout
									</h1>
								</MenuItem>
							</Menu>
						</>
					)}
				</div>
			</div>

			<div className='w-full flex md:hidden'>
				<div className='flex flex-col w-full'>
					<div className='flex'>
						<Link href='/'>
							<Image src='/logo.png' width={70} height={70}/>
						</Link>
						<div className='flex flex-row-reverse w-full items-center justify-start'>
							<Image
								src='/burger-icon.png'
								width={30}
								height={30}
								onClick={toggleMenu}
							/>
						</div>
					</div>

					<div className='hidden' id='mobile_menu'>
						<nav className='flex flex-col items-center justify-center'>
							<Dropdown>
								<Dropdown.Button
									flat
									css={{
										background: "#1A1A1C",
										fontFamily: "$algeria",
										fontWeight: "700",
										color: "White",
									}}>
									Shop
								</Dropdown.Button>
								<Dropdown.Menu
									aria-label='Static Actions'
									css={{
										fontFamily: "$algeria",
									}}>
									<Dropdown.Item key='men'>
										<div
											onClick={() => {
												handleGenderProductsClick("Men");
											}}>
											Men
										</div>
									</Dropdown.Item>
									<Dropdown.Item key='women'>
										<div
											onClick={() => {
												handleGenderProductsClick("Women");
											}}>
											Women
										</div>
									</Dropdown.Item>
									<Dropdown.Item key='kids'>
										<div
											onClick={() => {
												handleGenderProductsClick("Kids");
											}}>
											Kids
										</div>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>

							<Dropdown>
								<Dropdown.Button
									flat
									css={{
										background: "#1A1A1C",
										fontFamily: "$algeria",
										fontWeight: "700",
										color: "White",
									}}>
									<span className='font-bold'>Bestsellers</span>
								</Dropdown.Button>
								<Dropdown.Menu>
									{products &&
										products.map((item) => (
											<Dropdown.Item key={item.id}>
												<Link href={`/productDetails/${item.id}`}>
													{item.name}
												</Link>
											</Dropdown.Item>
										))}
								</Dropdown.Menu>
							</Dropdown>

							<Dropdown>
								<Dropdown.Button
									flat
									css={{
										background: "#1A1A1C",
										fontFamily: "$algeria",
										fontWeight: "700",
										color: "White",
									}}>
									Vendors
								</Dropdown.Button>
								<Dropdown.Menu
									aria-label='Static Actions'
									css={{
										fontFamily: "$algeria",
									}}>
									{vendorList.map((vendor) => (
										<Dropdown.Item key={uuidv4()}>
											<div
												key={uuidv4()}
												onClick={() =>
													handleVendorProductsClick(vendor.id)
												}>
												{vendor.name}
											</div>
										</Dropdown.Item>
									))}
								</Dropdown.Menu>
							</Dropdown>

							<div className='flex my-4 justify-around items-center w-full'>
								{!isCustomer && (
									<Link href='/login'>
										<Image
											src='/user-icon.png'
											width={30}
											height={30}
											className='ml-10 cursor-pointer'
										/>
									</Link>
								)}
								{isCustomer && (
									<Dropdown>
										<Dropdown.Button
											flat
											css={{
												background: "#1A1A1C",
												fontFamily: "$algeria",
												fontWeight: "700",
												color: "White",
											}}>
											<Image src='/user-icon.png' width={30} height={30}/>
										</Dropdown.Button>
										<Dropdown.Menu>
											<Dropdown.Item>
												<Link href='/clientprofile'>
													<h1 className='text-xs my-auto'>Profile</h1>
												</Link>
											</Dropdown.Item>
											<Dropdown.Item>
												<h1
													onClick={() => logout()}
													className='text-xs my-auto'>
													Logout
												</h1>
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								)}
								<CartModal/>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
		;
}
