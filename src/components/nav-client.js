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

export default function NavisCustomer() {
    const router = useRouter();
    const ctx = useContext(UserContext);
    const [products, setProducts] = useState([]);
    const [vendorList, setVendorList] = useState([{}]);
    const [isCustomer, setIsCustomer] = useState(false)
    useEffect(() => {
        if(isTokenValid(localStorage.token) && getRole(localStorage.token) === 'ROLE_CUSTOMER')
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
        var menu = document.getElementById("mobile_menu");
        menu.classList.toggle("hidden");
    };
    const handleVendorProductsClick = (id) => {
        const filter = id;
        router.push("/products/[vendorId]", "/products/" + filter);
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
        <>
            <header className='font-algeria bg-bg text-white px-8 fixed z-20 w-full'>
                <div className='justify-center items-center w-full hidden md:flex'>
                    <Link href='/'>
                        <Image src='/logo.png' width={90} height={90}/>
                    </Link>
                    <div className='container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center'>
                        <nav
                            className='md:mr-auto lg:ml-10 md:py-1 text-sm flex flex-wrap items-center justify-center font-bold'>
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

                            <Link href="/#hotsellers" scroll={true}>
                                <button className="text-white font-bold cursor-pointer bg-bg">Bestsellers</button>
                            </Link>
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
                                                onClick={() => handleVendorProductsClick(vendor.id)}>
                                                {vendor.name}
                                            </div>
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </nav>
                    </div>
                    <div className='flex flex-row-reverse items-center mr-3 '>
                        {!isCustomer && (
                            <Link className={"text-lg"} href='/login'>
                                <h2 > Login </h2>
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
                                        <h1 onClick={() => logout()} className='text-xs my-auto'>
                                            Logout
                                        </h1>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        )}
                        {isCustomer && <CartModal/>}
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
        </>
    );
}
