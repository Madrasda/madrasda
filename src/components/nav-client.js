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
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grow,
  Menu,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  ArrowDownward,
  ArrowDropDown,
  Close,
  ExpandCircleDown,
  ExpandMore,
  HighlightOff,
  LoginOutlined,
  MenuOpen,
  UsbRounded,
  VerifiedUserOutlined,
} from "@mui/icons-material";

export default function NavisCustomer() {
  const router = useRouter();
  const ctx = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [vendorList, setVendorList] = useState([{}]);
  const [hamMenu, setHamMenu] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openProfile, setOpenProfile] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openCategoryMobile, setOpenCategoryMobile] = useState(false);
  const [openVendors, setOpenVendors] = useState(false);

  useEffect(() => {
    if (
      isTokenValid(localStorage.token) &&
      getRole(localStorage.token) === "ROLE_CUSTOMER"
    )
      setIsCustomer(true);
    ctx.setIsLoggedIn(true);
  }, [ctx.token]);

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
    console.log(id);
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
        query: { gender: filter },
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
    axios
      .get(
        "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/admin/getVendors"
      )
      .then((response) => setVendorList(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <header className='font-quest bg-bg text-off-white px-8 z-20 w-full fixed '>
      <div className='justify-center items-center w-full hidden md:flex'>
        <Link href='/'>
          <Image src='/logo.png' width={90} height={90} />
        </Link>
        <div className='container flex flex-wrap p-3 flex-col md:flex-row items-center w-3/4 mr-auto'>
          <nav className='md:mr-auto lg:ml-10 md:py-1 text-sm text-white flex flex-wrap space-x-8 items-center font-bold'>
            <span
              id={"category-button"}
              variant={"text"}
              sx={{ background: "inherit", color: "#FFF" }}
              aria-controls={openCategory ? "category-dropdown" : undefined}
              aria-expanded={openCategory ? "true" : undefined}
              onClick={(event) => {
                setOpenCategory(true);
                setAnchorEl(event.currentTarget);
              }}
              className='text-[1.2rem] cursor-pointer'>
              Shop
              <IconButton>
                <ArrowDropDown className='text-white' />
              </IconButton>
            </span>
            <Menu
              id={"category-dropdown"}
              anchorEl={anchorEl}
              open={openCategory}
              style={{ borderRadius: "0" }}
              MenuListProps={{
                "aria-labelledby": "category-button",
              }}
              onClose={() => {
                setOpenCategory(false);
                setAnchorEl(null);
              }}>
              <div className='p-4 flex space-x-8 font-quest'>
                <div className='flex flex-col space-y-4'>
                  <div>
                    <h1 className='font-semibold pb-2 text-lg'>
                      Shop By Categories
                    </h1>
                    <MenuItem className='px-1 text-sm py-2'>
                      <Link
                        href={{
                          pathname: "/product-gender",
                          query: { gender: "Men" },
                        }}>
                        Men
                      </Link>
                    </MenuItem>
                    <MenuItem className='px-1 text-sm py-2'>
                      <Link
                        href={{
                          pathname: "/product-gender",
                          query: { gender: "Women" },
                        }}>
                        Women
                      </Link>
                    </MenuItem>
                    <MenuItem className='px-1 text-sm py-2'>
                      <Link
                        href={{
                          pathname: "/product-gender",
                          query: { gender: "Kids" },
                        }}>
                        Kids
                      </Link>
                    </MenuItem>
                  </div>
                  <div>
                    <h1 className='font-semibold pb-2 text-lg'>
                      Shop By Men's Products
                    </h1>
                    <MenuItem className='px-1 text-sm py-2'>
                      <Link
                        href={{
                          pathname: "/product-category",
                          query: { id: 1, title: "Men's Oversized T-Shirts" },
                        }}>
                        Men's Oversized T-Shirts
                      </Link>
                    </MenuItem>
                    <MenuItem className='px-1 text-sm py-2'>
                      <Link
                        href={{
                          pathname: "/product-category",
                          query: { id: 2, title: "Men's Round Neck T-Shirts" },
                        }}>
                        Men's Round Neck T-Shirts
                      </Link>
                    </MenuItem>
                    <MenuItem className='px-1 text-sm py-2'>
                      <Link
                        href={{
                          pathname: "/product-category",
                          query: { id: 4, title: "Men's Vests" },
                        }}>
                        Men's Vests
                      </Link>
                    </MenuItem>
                    <MenuItem className='px-1 text-sm py-2'>
                      <Link
                        href={{
                          pathname: "/product-category",
                          query: { id: 5, title: "Men's Full Sleeve Shirts" },
                        }}>
                        Men's Full Sleeve Shirts
                      </Link>
                    </MenuItem>
                  </div>
                </div>
                <div className='flex flex-col space-y-4'>
                  <div>
                    <h1 className='font-semibold pb-2 text-lg'>
                      Shop By Women's Products
                    </h1>
                    <MenuItem className='px-1 text-sm py-2'>
                      <Link
                        href={{
                          pathname: "/product-category",
                          query: { id: 3, title: "Women's Boyfriend T-Shirts" },
                        }}>
                        Women's Boyfriend T-Shirts
                      </Link>
                    </MenuItem>
                    <MenuItem className='px-1 text-sm py-2'>
                      <Link
                        href={{
                          pathname: "/product-category",
                          query: {
                            id: 10,
                            title: "Women's Round Neck T-Shirts",
                          },
                        }}>
                        Women's Round Neck T-Shirts
                      </Link>
                    </MenuItem>
                    <MenuItem className='px-1 text-sm py-2'>
                      <Link
                        href={{
                          pathname: "/product-category",
                          query: { id: 7, title: "Women's Crop Tops" },
                        }}>
                        Women's Crop Tops
                      </Link>
                    </MenuItem>
                    <MenuItem className='px-1 text-sm py-2'>
                      <Link
                        href={{
                          pathname: "/product-category",
                          query: { id: 8, title: "Women's Crop Top Hoodies" },
                        }}>
                        Women's Crop Top Hoodies
                      </Link>
                    </MenuItem>
                  </div>
                  <div>
                    <h1 className='font-semibold pb-2 text-lg'>
                      Shop By Unisex's Products
                    </h1>
                    <MenuItem className='px-1 text-sm py-2'>
                      <Link
                        href={{
                          pathname: "/product-category",
                          query: { id: 6, title: "Hoodies" },
                        }}>
                        Hoodies
                      </Link>
                    </MenuItem>
                  </div>
                </div>
                <div className='flex flex-col space-y-4'>
                  <div>
                    <h1 className='font-semibold pb-2 text-lg'>
                      Our Bestselling Products
                    </h1>
                    {products &&
                      products.map((item) => (
                        <MenuItem className='px-1 text-sm py-2'>
                          <Link href={`/productDetails/${item.id}`}>
                            {item.name}
                          </Link>
                        </MenuItem>
                      ))}
                  </div>
                </div>
              </div>
            </Menu>

            <span
              id={"vendors-button"}
              variant={"text"}
              sx={{ background: "inherit", color: "#FFF" }}
              aria-controls={openVendors ? "vendors-dropdown" : undefined}
              aria-expanded={openVendors ? "true" : undefined}
              onClick={(event) => {
                setOpenVendors(true);
                setAnchorEl(event.currentTarget);
              }}
              className='text-[1.2rem] cursor-pointer'>
              Creators
              <IconButton>
                <ArrowDropDown className='text-white' />
              </IconButton>
            </span>
            <Menu
              id={"vendors-dropdown"}
              anchorEl={anchorEl}
              open={openVendors}
              style={{ borderRadius: "0" }}
              onClose={() => {
                setOpenVendors(false);
                setAnchorEl(null);
              }}
              MenuListProps={{
                "aria-labelledby": "vendors-button",
              }}>
              <div className='flex flex-col space-y-3 font-quest'>
                <h1 className='font-semibold pb-2 text-lg p-3'>
                  Shop By Creators
                </h1>
                <div>
                  {vendorList.map((vendor) => (
                    <MenuItem key={uuidv4()} className='p-0'>
                      <div
                        key={uuidv4()}
                        onClick={() => handleVendorProductsClick(vendor.id)}
                        className={"px-3 py-3"}>
                        {vendor.name}
                      </div>
                    </MenuItem>
                  ))}
                </div>
              </div>
            </Menu>

            <Link href='/#hotsellers' scroll={true}>
              <button className='text-white font-bold text-[1.2rem] cursor-pointer bg-bg'>
                Hotsellers
              </button>
            </Link>
          </nav>
        </div>
        <div className='flex space-x-7 items-center mr-3 w-1/4 justify-end pr-3'>
          {isCustomer && <CartModal />}
          {!isCustomer && (
            <Link className={"text-lg"} href='/login'>
              <h2> Login </h2>
            </Link>
          )}
          {isCustomer && (
            <>
              <IconButton
                id={"user-config"}
                variant={"text"}
                sx={{ background: "inherit", color: "#FFF" }}
                aria-controls={openProfile ? "user-config-menu" : undefined}
                aria-expanded={openProfile ? "true" : undefined}
                onClick={(event) => {
                  setOpenProfile(true);
                  setAnchorEl(event.currentTarget);
                }}>
                <AccountCircleIcon sx={{ height: "38px", width: "38px" }} />
              </IconButton>
              <Menu
                id={"user-config-menu"}
                anchorEl={anchorEl}
                open={openProfile}
                style={{ borderRadius: "0" }}
                onClose={() => {
                  setOpenProfile(false);
                  setAnchorEl(null);
                }}
                MenuListProps={{
                  "aria-labelledby": "user-config",
                }}
                sx={{ width: "25rem" }}>
                <MenuItem css={{ borderRadius: "0" }}>
                  <Link href='/clientprofile'>
                    <h1 className='font-quest my-auto'>
                      Profile <span className='font-raj'>&</span> Orders
                    </h1>
                  </Link>
                </MenuItem>
                <MenuItem css={{ borderRadius: "0" }} color='error'>
                  <h1 onClick={() => logout()} className='font-quest my-auto'>
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
          <div className='flex justify-between items-center py-2 px-4'>
            <Link href='/'>
              <Image src='/logo.png' width={50} height={50} />
            </Link>
            <div className='flex space-x-8 items-center'>
              {isCustomer && <CartModal />}
              {!hamMenu && (
                <IconButton color='primary'>
                  <MenuIcon
                    className='text-white text-4xl'
                    onClick={() => setHamMenu(!hamMenu)}
                  />
                </IconButton>
              )}
              {hamMenu && (
                <IconButton>
                  <Close
                    className='text-white text-4xl'
                    onClick={() => setHamMenu(!hamMenu)}
                  />
                </IconButton>
              )}
            </div>
          </div>

          {hamMenu && (
            <Grow in timeout={800} exit>
              <nav className='flex flex-col py-5 font-quest w-full text-white bg-bg'>
                <Accordion
                  TransitionProps={{ unmountOnExit: true }}
                  className='bg-bg text-white'>
                  <AccordionSummary
                    expandIcon={<ExpandMore className='text-white' />}
                    aria-controls='shop-controls'
                    id='shop-content'>
                    <Typography>Shop</Typography>
                  </AccordionSummary>
                  <AccordionDetails className='flex flex-col space-y-4'>
                    <Link
                      href={{
                        pathname: "/product-gender",
                        query: { gender: "Men" },
                      }}>
                      Men
                    </Link>
                    <Link
                      href={{
                        pathname: "/product-gender",
                        query: { gender: "Women" },
                      }}>
                      Women
                    </Link>
                    <Link
                      href={{
                        pathname: "/product-gender",
                        query: { gender: "Kids" },
                      }}>
                      Kids
                    </Link>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  TransitionProps={{ unmountOnExit: true }}
                  className='bg-bg text-white'>
                  <AccordionSummary
                    expandIcon={<ExpandMore className='text-white' />}
                    aria-controls='vendor-controls'
                    id='vendor-content'>
                    <Typography>Creators</Typography>
                  </AccordionSummary>
                  <AccordionDetails className='flex flex-col space-y-4'>
                    {vendorList.map((vendor) => (
                      <div
                        key={uuidv4()}
                        onClick={() => handleVendorProductsClick(vendor.id)}>
                        {vendor.name}
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>

                {!isCustomer && (
                  <Link
                    className={
                      "text-lg ml-4 my-2 font-quest flex items-center space-x-4"
                    }
                    href='/login'>
                    <Typography className='font-quest text-lg'>
                      {" "}
                      Login{" "}
                    </Typography>
                    <LoginOutlined className='text-white' />
                  </Link>
                )}
                {isCustomer && (
                  <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    className='bg-bg text-white'>
                    <AccordionSummary
                      expandIcon={<ExpandMore className='text-white' />}
                      aria-controls='vendor-controls'
                      id='vendor-content'>
                      <Typography>My Profile</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='flex flex-col space-y-4'>
                      <Link href='/clientprofile'>
                        <h1 className='font-quest my-auto'>
                          View Order History
                        </h1>
                      </Link>
                      <h1
                        onClick={() => logout()}
                        className='font-quest my-auto'>
                        Logout
                      </h1>
                    </AccordionDetails>
                  </Accordion>
                )}
              </nav>
            </Grow>
          )}
        </div>
      </div>
    </header>
  );
}
