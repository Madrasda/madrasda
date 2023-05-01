import React, {useContext, useEffect} from "react";
import {Modal, Text} from "@nextui-org/react";
import CartItem from "@/components/CartItem";
import {UserContext} from "../../context/context";
import {useRouter} from "next/router";
import {isTokenValid} from "@/utils/JWTVerifier";
import {uuidv4} from "@firebase/util";
import Badge from '@mui/material/Badge';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Button} from "@mui/material";

const StyledBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
        padding: '0 4px',
        backgroundColor: '#FFA000',
        color: '#FFF'
    },
}));
export default function CartModal() {
    const [visible, setVisible] = React.useState(false);
    const [subTotal, setSubtotal] = React.useState(0);
    const handler = () => setVisible(true);
    const router = useRouter();
    const closeHandler = () => {
        setVisible(false);
    };
    const checkoutHandler = () => {
        router.push("/checkout")
            .then(() => setVisible(false))
    };
    const ctx = useContext(UserContext);
    useEffect(() => {
        if (visible && !isTokenValid(localStorage.getItem("token"))) {
            router.push("/login")
        } else {
            if (ctx.cart.cartItems !== undefined) {
                const sum = ctx.cart.cartItems.reduce((prev, curr) => prev += curr.quantity * (curr.product.total * (100 - curr.product.discount) / 100), 0);
                setSubtotal(sum);
            }
        }
    }, [ctx.cart])

    return (
        <div>
            <IconButton aria-label="cart" onClick={handler}>
                <StyledBadge badgeContent={(ctx.cart.cartItems !== undefined ? ctx.cart.cartItems.length : 0)}>
                    <ShoppingCartIcon sx={{color: "#FFF", height: '33px', width: '33px'}}/>
                </StyledBadge>
            </IconButton>
            <Modal
                width='1000px'
                scroll='false'
                closeButton
                className={"shadow-lg"}
                aria-labelledby='modal-title'
                open={visible}
                onClose={closeHandler}
                css={{fontFamily: "$algeria"}}>
                <Modal.Header css={{fontFamily: "$algeria"}}>
                    <Text id='modal-title' size={24}></Text>
                </Modal.Header>
                {(ctx.cart.cartItems === undefined ||
                    ctx.cart.cartItems.length === 0) && (
                    <Modal.Body css={{fontFamily: "$algeria"}}>
                        <h1 className={"text-center text-3xl pb-10"}>
                            {" "}
                            Your cart is empty :({" "}
                        </h1>
                    </Modal.Body>
                )}
                {ctx.cart.cartItems !== undefined &&
                    ctx.cart.cartItems.length !== 0 && (
                        <>
                            <Modal.Body css={{fontFamily: "$algeria"}}>
                                <div className=' bg-[#D9D9D9] w-full p-5 rounded-lg'>
                                    <div className='px-3 w-full'>
                                        {ctx.cart.cartItems.map((item) => (
                                            <CartItem
                                                key={uuidv4()}
                                                id={item.id}
                                                qty={item.quantity}
                                                product={item.product}
                                            />
                                        ))}
                                        <hr className='h-px my-6 border-[#D9D9D9] border-1 '></hr>
                                        <div className='mb-6 pb-6 text-lg border-b border-[#D9D9D9] text-black'>
                                            <div className='w-full flex mb-3 items-center'>
                                                <div className='flex-grow'>
                                                    <span className='text-black'>Subtotal</span>
                                                </div>
                                                <div className='pl-3'>
                                                    <span className='font-medium'>₹{subTotal}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className='mb-6 pb-6 border-b border-gray md:border-none text-gray-800 text-xl'>
                                            <div className='w-full flex items-center'>
                                                <div className='flex-grow'>
                                                    <span className='text-gray-600'>Total</span>
                                                    <p className='text-sm text-gray'>
                                                        Including all taxes
                                                    </p>
                                                </div>
                                                <div className='pl-3'>
                            <span className='font-medium text-gray text-sm'>
                              INR
                            </span>{" "}
                                                    <span className='font-medium text-2xl'>
                              ₹{subTotal}
                            </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer css={{fontFamily: "$algeria"}}>
                                <Button onClick={closeHandler} color={'error'}>
                                    Close
                                </Button>
                                <Button onClick={checkoutHandler} variant={'contained'}
                                        className="bg-primary text-white hover:bg-accent">
                                    Proceed to checkout
                                </Button>
                            </Modal.Footer>
                        </>
                    )}
            </Modal>
        </div>
    );
}
