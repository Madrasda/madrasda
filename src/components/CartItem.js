import Image from "next/image";
import {useContext, useState} from "react";
import {UserContext} from "../../context/context";

const CartItem = ({id, product, qty}) =>{
    const ctx = useContext(UserContext);

    const decrementHandler = () => ctx.decrementQty(id, qty - 1)
    const incrementHandler = () => ctx.incrementQty(id);
    const onChangeHandler = (event) => event=> ctx.customQuantity(id, event.target.value)
    const removeItem = () => ctx.removeItem(id);
    return (
        <div className="w-full flex items-center hover:bg-off-white rounded-lg p-7">
            <div className="overflow-hidden rounded-lg w-2/12 h-2/12 bg-[#D9D9D9] border border-gray">
                <Image src={product.frontImage.imageUrl} alt="ecommerce" width={1080} height={1920}
                       className="object-contain object-center w-full h-full block"/>
            </div>
            <div className="flex-grow pl-3 ml-4">
                <h6 className="font-medium text-2xl text-black">{product.name}</h6>
                <p className="text-gray">{product.colorDTO.color}</p>
                <p className="text-gray">Size-{product.sizeDTO.size}</p>
                <div className="flex flex-row objects-center">
                    <div className="flex items-center mt-4 h-4 w-16">
                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                            <button onClick={decrementHandler}
                                    className="bg-white flex text-center border border-gray text-primary
                                     hover:text-primary hover:bg-gray h-7 w-16 rounded-l cursor-pointer">
                                <span className="m-auto text-xs font-bold"> - </span>
                            </button>
                            <input
                                className="border border-gray focus:outline-none text-center h-7  w-full bg-white
                                 font-semibold text-xs hover:text-primary focus:text-primary md:text-basecursor-default
                                  flex items-center text-primary outline-none"
                                value={qty} onChange={onChangeHandler}></input>
                            <button onClick={incrementHandler}
                                    className="bg-white flex text-center border border-gray text-primary
                                     hover:text-primary hover:bg-gray h-7 w-16 rounded-r cursor-pointer">
                                <span className="m-auto text-xs font-bold"> + </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span className="font-medium text-black text-xl">₹{((100 - product.discount)/ 100) * (product.total) * qty}</span>
            </div>
            <div>
                <button onClick={removeItem} className="font-medium text-gray text-xl ml-4 mr-4"> X </button>
            </div>
        </div>
    )
}
export default CartItem;
