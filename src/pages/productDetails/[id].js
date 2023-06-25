import Head from "next/head";
import Image from "next/image";
import ClientLayout from "@/components/layout-client";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../context/context";
import axios from "axios";
import ColorOption from "../../components/ColorOption";
import { uuidv4 } from "@firebase/util";
import { getRole, isTokenValid } from "@/utils/JWTVerifier";
import HotSellers from "@/components/hotsellers-client";
import { Button } from "@mui/material";
import SizeChartModal from "@/components/sizechart-modal";

export default function ProductId() {
  const router = useRouter();
  const ctx = useContext(UserContext);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false); //using for fallback
  const [activeImage, setActiveImage] = useState();
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [open, setOpen] = useState(false);
  const qtyRef = useRef();
  let isReady = router.isReady;
  const [currentColor, setCurrentColor] = useState({
    id: 0,
    color: "",
    hexValue: "",
    images: [""],
    sizes: [
      {
        id: 0,
        size: "",
        sku: "",
      },
    ],
  });
  const [currentSize, setCurrentSize] = useState({
    id: 0,
    size: "",
    sku: "",
  });
  const [product, setProduct] = useState({
    colors: [currentColor],
    description: "",
    discount: 0,
    id: 0,
    name: "",
    profit: 0,
    publishStatus: false,
    theme: "",
    total: 0,
    vendorId: 0,
    vendorImg: "",
  });
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = async () => {
    if (
      localStorage.getItem("token_client") === null ||
      !isTokenValid(localStorage.getItem("token_client"))
    ) {
      router.push("/login");
    } else {
      const color = { ...currentColor, sizes: [currentSize] };

      const addToCartItem = {
        id: product.id,
        colors: [color],
        quantity: qtyRef.current.value,
      };
      const status = await ctx.addToCart(addToCartItem);

      setOpen(true);
      if (status === 200) {
        setMessage("Added To Cart!");
        setSeverity("success");
      } else {
        setMessage("Error Adding To Cart!");
        setSeverity("error");
      }
    }
  };
  useEffect(() => {
    setLoading(true);
    if (isReady) {
      const { id } = router.query;
      axios
        .get(
          "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/product/getProductDetails/" +
            id
        )
        .then((response) => {
          setProduct(response.data);
          return response.data;
        })
        .then((product) => {
          setCurrentColor(product.colors[0]);
          return product.colors[0];
        })
        .then((color) => {
          setActiveImage(color.images[0]);
          return color.sizes;
        })
        .then((sizes) => setCurrentSize(sizes[0]))
        .then(() => setLoading(false))
        .catch((err) => console.log(err));
    }
  }, [isReady, router]);

  if (loading && isReady)
    return (
      <div className='z-50 h-screen w-screen overflow-hidden'>
        <Image
          src='/loader.gif'
          width={1920}
          height={1080}
          alt={"img"}
          className='object-cover object-center w-full h-full'
        />
      </div>
    );

  const handleSetColor = (color) => {
    setImageLoaded(false);
    setCurrentColor(color);
    setCurrentSize(color.sizes[0]);
    setActiveImage(color.images[0]);
  };
  return (
    <>
      <Head>
        <meta
          name='description'
          content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
        <title>Madrasda | View Product</title>
      </Head>

      {isReady && (
        <ClientLayout
          state={open}
          severity={severity}
          message={message}
          setState={setOpen}>
          <section className='text-black body-font font-quest overflow-hidden'>
            <div className='px-20 pt-12 mx-auto flex justify-center'>
              <div className='flex justify-start flex-row flex-wrap md:flex-nowrap'>
                <div
                  className='flex flex-col items-center justify-center
                          lg:flex-row-reverse w-fit py-11 px-4'>
                  {
                    <Image
                      onLoadCapture={() => {
                        setImageLoaded(true);
                      }}
                      loading='eager'
                      alt='ecommerce'
                      className={`object-contain object-center rounded px-2 h-[500px] md:h-[900px] ${
                        imageLoaded ? "" : "hidden"
                      }`}
                      src={activeImage}
                      width={600}
                      height={900}
                    />
                  }
                  {!imageLoaded && (
                    <div className='rounded px-2 w-[320px] md:w-[500px] h-[500px] md:h-[700px] relative'>
                      <Image
                        src='/product-loading.gif'
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        width={100}
                        height={100}
                      />
                    </div>
                  )}
                  <div
                    className={`mt-4 relative md:mt-0 flex flex-row justify-center items-center overflow-x-scroll md:overflow-x-hidden
                            lg:flex-col md:h-96 md:overflow-y-scroll border border-border rounded p-2`}>
                    {currentColor.images.map((image) => (
                      <Image
                        loading='eager'
                        alt='ecommerce'
                        priority={true}
                        key={uuidv4()}
                        width={500}
                        height={600}
                        className={`w-24 aspect-16/9 m-2 ${
                          imageLoaded ? "opacity-100" : "opacity-0"
                        }`}
                        src={image}
                        onClick={() => {
                          setImageLoaded(false);
                          setActiveImage(image);
                        }}
                      />
                    ))}
                    {!imageLoaded && (
                      <Image
                        src='/product-loading.gif'
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        width={50}
                        height={50}
                      />
                    )}
                  </div>
                </div>
                <div className='mx-auto md:mx-0 lg:w-1/2 w-full md:py-24 mt-6 lg:mt-0'>
                  <h1 className='text-gray-900 text-xl md:text-3xl title-font font-medium mb-1'>
                    {product.name}
                  </h1>
                  <span>
                    <h1>{product.description}</h1>
                  </span>
                  <div className='flex mb-4 items-center'></div>
                  <div className='flex flex-row items-baseline'>
                    <span className='title-font font-medium text-2xl text-gray-900 mr-2 flex justify-center'>
                      ₹
                      {Math.round(
                        (product.total * (100 - product.discount)) / 100
                      )}
                    </span>
                    {product && product.discount > 0 && (
                      <>
                        <span
                          className='title-font line-through font-small text-lg
                                text-gray-600 mr-2 flex justify-center'>
                          ₹{product.total}
                        </span>
                        <span className='bg-primary rounded-lg mr-2 px-2 py-1 scale-75 text-base text-white flex justify-center'>
                          {product.discount}% off
                        </span>
                      </>
                    )}
                  </div>

                  <div className='mt-6 hidden md:block'>Colors</div>
                  <div className='flex items-center mt-3 mb-3'>
                    <div className='flex items-start'>
                      {product.colors.map((color) => (
                        <ColorOption
                          key={color.id}
                          hex={color.hexValue}
                          id={color.id}
                          color={color.color}
                          currentColor={color}
                          setColor={handleSetColor}
                          setImage={setActiveImage}
                          selected={currentColor.id === color.id}
                        />
                      ))}
                    </div>
                  </div>
                  <div className='underline w-full flex justify-end cursor-pointer'>
                    <SizeChartModal />
                  </div>
                  <div className='flex items-center'>
                    <div className='relative grid grid-cols-4  md:grid-cols-6'>
                      {currentColor.sizes.map((size) => (
                        <button
                          key={size.id}
                          onClick={() => {
                            setCurrentSize(size);
                          }}
                          className={`px-4 py-2 m-3 text-black font-semibold rounded-lg text-xs w-12 shadow-lg col-span-1 transition-shadow
                                            ${
                                              size === currentSize
                                                ? "bg-primary text-white"
                                                : "bg-white hover:bg-off-white hover:shadow-gray"
                                            } `}>
                          <input
                            type='radio'
                            id={size.id}
                            name='size'
                            value={size.size}
                            checked={size.id === currentSize.id}
                            onChange={() => setCurrentSize(size)}
                            className='sr-only cursor-pointer'
                          />
                          <label htmlFor={size.id}>{size.size}</label>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className='flex space-x-4 mt-12'>
                    <div className='flex items-center space-x-2 h-10 my-auto'>
                      <div className='flex flex-row h-10 rounded-lg w-36 relative bg-transparent'>
                        <button
                          className=' bg-white text-center border border-gray text-primary hover:text-primary
                  hover:bg-gray h-full w-20 rounded-l cursor-pointer outline-none'
                          onClick={handleDecrement}>
                          <span className='m-auto text-2xl font-thin'> - </span>
                        </button>
                        <input
                          className='border border-gray focus:outline-none text-center w-full bg-white font-semibold text-md
                      hover:text-primary focus:text-primary md:text-basecursor-default flex items-center text-primary outline-none'
                          value={quantity}
                          ref={qtyRef}
                          readOnly={true}></input>
                        <button
                          className='bg-white text-center border border-gray text-primary hover:text-primary
                          hover:bg-gray h-full w-20 rounded-r cursor-pointer'
                          onClick={handleIncrement}>
                          <span className='m-auto text-2xl font-thin'> + </span>
                        </button>
                      </div>
                    </div>
                    <Button
                      className='w-48 h-10 text-center text-white px-4 py-3 '
                      css={{ fontFamily: "$algeria" }}
                      style={{
                        background:
                          "linear-gradient(45deg, #ffa000 30%, #ffc107 90%)",
                        color: "white",
                      }}
                      variant={"contained"}
                      onClick={handleAddToCart}>
                      Add to Cart
                    </Button>
                  </div>
                  <br></br>
                  <span className='text-justify'>
                    <h1>{product.mockupDescription}</h1>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <HotSellers />
        </ClientLayout>
      )}
    </>
  );
}
