import Image from "next/image"
import Link from "next/link"
import CartModal from "./cart-modal"
import axios from "axios";
// import {Dropdown} from "@nextui-org/react";
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
  // MenuList,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  // ArrowDownward,
  ArrowDropDown,
  Close,
  // ExpandCircleDown,
  ExpandMore,
  // HighlightOff,
  LoginOutlined,
  // MenuOpen,
  // UsbRounded,
  // VerifiedUserOutlined,
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
  const [mockups, setMockups] = useState([]);
  const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  useEffect(() => {
    if (
      isTokenValid(localStorage.token_client) &&
      getRole(localStorage.token_client) === "ROLE_CUSTOMER"
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
  const getAllMockups = async () => {
    axios
      .get(
        "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/mockup/getAllMockups"
      )
      .then((res) => {
        setMockups(res.data.content);
      });
  };

  const toggleMenu = () => {
    const menu = document.getElementById("mobile_menu");
    menu.classList.toggle("hidden");
  };
  const handleVendorProductsClick = (id, name) => {
    // router.push("/products/[vendorId]", "/products/" + id);
    router.push(
      {
        pathname: `/creators/${slugify(name)}`,
      //  query: { name: name, id: id },
      }
      // "/creators/" + name
    );
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
    localStorage.removeItem("token_client");
    ctx.setIsLoggedIn(false);
    router.push("/login");
  };
  function handleClick(event) {
    setOpenCategory(true);
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setOpenCategory(false);
    setAnchorEl(null);
  }
  function handleClick1(event) {
    setOpenVendors(true);
    setAnchorEl(event.currentTarget);
  }

  function handleClose1() {
    setOpenVendors(false);
    setAnchorEl(null);
  }

  useEffect(() => {
    getBestSellers();
    getAllMockups();
    axios
      .get(
        "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/client/getAllVendors"
      )
      .then((response) => setVendorList(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <header className='font-quest bg-bg text-off-white md:px-8 z-20 w-full fixed '>
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
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              onMouseOver={handleClick}
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
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              getContentAnchorEl={null}>
              <div className='p-4 flex space-x-8 font-quest'>
                <div className='flex flex-col space-y-4'>
                  <div>
                    <h1 className='font-semibold pb-2 text-lg'>
                      Shop By Categories
                    </h1>

                    <Link
                      href={{
                        pathname: "/product-gender",
                        query: { gender: "Men" },
                      }}>
                      <MenuItem className='px-1 text-sm py-2'>Men</MenuItem>
                    </Link>

                    <Link
                      href={{
                        pathname: "/product-gender",
                        query: { gender: "Women" },
                      }}>
                      <MenuItem className='px-1 text-sm py-2'>Women</MenuItem>
                    </Link>
                    <Link
                      href={{
                        pathname: "/product-gender",
                        query: { gender: "Kids" },
                      }}>
                      <MenuItem className='px-1 text-sm py-2'>Kids</MenuItem>
                    </Link>
                  </div>
                  <div>
                    <h1 className='font-semibold pb-2 text-lg'>
                      Shop By Men's Products
                    </h1>
                    {mockups &&
                      mockups.map((item) => {
                        if (item.model === "Men") {
                          return (
                            <Link
                               key={uuidv4()}
                              href={{
                                pathname: "/product-category",
                                query: {
                                  id: item.id,
                                  title: item.name,
                                },
                              }}>
                              <MenuItem className='px-1 text-sm py-2'>
                                {item.name}
                              </MenuItem>
                            </Link>
                          );
                        }
                      })}
                  </div>
                </div>
                <div className='flex flex-col space-y-4'>
                  <div>
                    <h1 className='font-semibold pb-2 text-lg'>
                      Shop By Women&apos;s Products
                    </h1>
                    {mockups &&
                      mockups.map((item) => {
                        if (item.model === "Women") {
                          return (
                            <Link
                               key={uuidv4()}
                              href={{
                                pathname: "/product-category",
                                query: {
                                  id: item.id,
                                  title: item.name,
                                },
                              }}>
                              <MenuItem className='px-1 text-sm py-2'>
                                {item.name}
                              </MenuItem>
                            </Link>
                          );
                        }
                      })}
                  </div>
                  <div>
                    <h1 className='font-semibold pb-2 text-lg'>
                      Shop By Kid's Products
                    </h1>
                    {mockups &&
                      mockups.map((item) => {
                        if (item.model === "Kids") {
                          return (
                            <Link
                              href={{
                                pathname: "/product-category",
                                query: {
                                  id: item.id,
                                  title: item.name,
                                },
                              }}>
                              <MenuItem className='px-1 text-sm py-2'>
                                {item.name}
                              </MenuItem>
                            </Link>
                          );
                        }
                      })}
                  </div>
                </div>
                <div className='flex flex-col space-y-4'>
                  <div>
                    <h1 className='font-semibold pb-2 text-lg'>
                      Our Bestselling Products
                    </h1>
                    {products &&
                      products.map((item) => (
                        <Link href={`/productDetails/${item.id}`}>
                          <MenuItem className='px-1 text-sm py-2'>
                            {item.name}
                          </MenuItem>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </Menu>

            <span
              id={"vendors-button"}
              variant={"text"}
              sx={{ background: "inherit", color: "#FFF" }}
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              onClick={handleClick1}
              onMouseOver={handleClick1}
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
              onClose={handleClose1}
              MenuListProps={{ onMouseLeave: handleClose1 }}
              getContentAnchorEl={null}>
              <div className='flex flex-col space-y-3 font-quest'>
                <h1 className='font-semibold pb-2 text-lg p-3'>
                  Shop By Creators
                </h1>
                <div>
                  {vendorList.map((vendor) => (
                    <MenuItem
                      key={uuidv4()}
                      className='p-0'
                      onClick={() => handleVendorProductsClick(vendor.id, vendor.companyName)}>
                      <div key={uuidv4()} className={"px-3 py-3"}>
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
          {!isCustomer && (
            <Link className={"text-lg text-logo "} href='/vendor'>
              <h2> Become a Creator</h2>
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
          <div className='flex justify-between items-center py-2 px-0'>
            <Link href='/'>
              <Image src='/logo.png' width={50} height={50} />
            </Link>
            <div className='flex space-x-4 items-center'>
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
                        onClick={() => handleVendorProductsClick(vendor.id, vendor.name)}>
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
                {!isCustomer && (
                  <Link
                    className={
                      "text-lg ml-4 my-2 font-quest flex items-center space-x-4"
                    }
                    href='/vendor'>
                    <Typography className='font-quest text-logo text-lg'>
                      {" "}
                      Become a Creator{" "}
                    </Typography>
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
