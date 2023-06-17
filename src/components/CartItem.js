import Image from "next/image";
import { useContext, useState } from "react";
import { UserContext } from "../../context/context";
import { IconButton } from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";

const CartItem = ({ id, product, qty, callback }) => {
  const ctx = useContext(UserContext);

  const decrementHandler = () => {
    ctx.decrementQty(id, qty - 1);
    callback();
  };
  const incrementHandler = () => {
    ctx.incrementQty(id);
    callback();
  };
  const onChangeHandler = (event) => (event) =>
    ctx.customQuantity(id, event.target.value);
  const removeItem = () => ctx.removeItem(id);
  return (
    <div className='w-full md:w-auto flex flex-col md:flex-row items-center p-7 relative rounded bg-white font-quest'>
      <div className='overflow-hidden rounded-lg w-56 h-auto border border-gray'>
        <Image
          src={product.frontImage.imageUrl}
          alt='ecommerce'
          width={1080}
          height={1920}
          className='object-contain md:object-cover h-auto'
        />
      </div>
      <div className='md:pl-3 md:ml-4 mb-4 text-sm md:text-base relative w-full'>
        <div className='flex flex-col pt-2'>
          <h6 className='font-medium text-lg md:text-2xl text-black'>
            {product.name}
          </h6>
          <p className='text-black'>{product.colorDTO.color}</p>
          <p className='text-black'>Size-{product.sizeDTO.size}</p>
          <div className='flex w-full objects-center'>
            <div className='flex justify-between items-center mt-2 md:mt-4 h-4 w-16'>
              <div className='flex h-10 w-fit bg-transparent mt-1'>
                <IconButton onClick={decrementHandler}>
                  <span className='m-auto text-xs font-black text-primary'>
                    <Remove />
                  </span>
                </IconButton>
                <IconButton onClick={incrementHandler}>
                  <span className='m-auto text-xs font-black text-primary'>
                    <Add />
                  </span>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-sm md:text-right md:text-base w-full'>
        <span className='font-medium text-black text-xl'>
          ₹{Math.ceil((Math.ceil(100 - product.discount) / 100) * product.total) * qty}
        </span>
        <div className='flex items-center space-x-4'>
          <h1>Quantity</h1>
          <h1>{qty}</h1>
        </div>
      </div>
      <div className='absolute bottom-0 right-0'>
        <IconButton
          onClick={removeItem}
          className='font-medium text-shadowGrey text-xl mx-4'>
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};
export default CartItem;
