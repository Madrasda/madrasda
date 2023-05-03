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
import { AddShoppingCart, Close } from "@mui/icons-material";
import Link from "next/link";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    padding: "0 4px",
    backgroundColor: "#FFA000",
    color: "#FFF",
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
    router.push("/checkout").then(() => setVisible(false));
  };
  const ctx = useContext(UserContext);
  useEffect(() => {
    if (visible && !isTokenValid(localStorage.getItem("token"))) {
      router.push("/login");
    } else {
      if (ctx.cart.cartItems !== undefined) {
        const sum = ctx.cart.cartItems.reduce(
          (prev, curr) =>
            (prev +=
              curr.quantity *
              ((curr.product.total * (100 - curr.product.discount)) / 100)),
          0
        );
        setSubtotal(sum);
      }
    }
  }, [ctx.cart]);

  return (
    <div>
      <IconButton aria-label='cart' onClick={handler}>
        <StyledBadge
          badgeContent={
            ctx.cart.cartItems !== undefined ? ctx.cart.cartItems.length : 0
          }>
          <ShoppingCartIcon
            sx={{ color: "#FFF", height: "33px", width: "33px" }}
          />
        </StyledBadge>
      </IconButton>
      <Modal
        scroll='false'
        closeButton={false}
        className={"shadow-lg text-black bg-gray"}
        aria-labelledby='modal-title'
        open={visible}
        onClose={closeHandler}>
        <Modal.Header>
          <IconButton
            className='absolute top-0 right-0 p-2 text-black'
            onClick={closeHandler}>
            <Close />
          </IconButton>
        </Modal.Header>
        {(ctx.cart.cartItems === undefined ||
          ctx.cart.cartItems.length === 0) && (
          <Modal.Body>
            <div className='flex flex-col justify-center text-center relative z-10'>
              <h1 className={"text-center font-quest text-3xl pb-10"}>
                Your <span className='text-primary'>cart</span> is empty
              </h1>
              <div className='flex flex-col space-y-3'>
                <AddShoppingCart className='text-8xl text-primary mx-auto' />
                <Link
                  href='/#merchandise'
                  className='font-quest text-lg'
                  onClick={closeHandler}>
                  Shop For More Products
                </Link>
              </div>
            </div>
          </Modal.Body>
        )}
        {ctx.cart.cartItems !== undefined &&
          ctx.cart.cartItems.length !== 0 && (
            <>
              <Modal.Body>
                <div className='w-full p-5 rounded-lg font-quest'>
                  <div className='px-3 w-full flex flex-col space-y-4 md:space-y-0 md:space-x-4'>
                    <div className='w-full bg-white rounded'>
                      {ctx.cart.cartItems.map((item) => (
                        <CartItem
                          key={uuidv4()}
                          id={item.id}
                          qty={item.quantity}
                          product={item.product}
                        />
                      ))}
                    </div>
                    <div className='flex flex-col justify-between h-fit w-full p-4 bg-white rounded'>
                      <div className='flex justify-between items-center'>
                        <div>
                          <span className='text-gray-600'>Subtotal</span>
                        </div>
                        <div>
                          <span className='font-medium text-2xl'>
                            ₹{subTotal}
                          </span>
                        </div>
                      </div>
                      <hr className='h-px my-6 border-[#D9D9D9] border-1 '></hr>
                      <div className='flex justify-between items-center'>
                        <div className='w-1/2'>
                          <span className='text-gray-600'>Total</span>
                          <p className='text-xs text-black'>
                            Excluding taxes and charges
                          </p>
                        </div>
                        <div className='w-1/2 text-right'>
                          <span className='font-medium text-black text-sm'>
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
              <Modal.Footer>
                <Button
                  onClick={closeHandler}
                  color={"error"}
                  className='font-prompt text-lg'>
                  Close
                </Button>
                <Button
                  onClick={checkoutHandler}
                  variant={"contained"}
                  className='bg-primary text-white hover:bg-accent font-prompt text-lg'>
                  Proceed to checkout
                </Button>
              </Modal.Footer>
            </>
          )}
      </Modal>
    </div>
  );
}
