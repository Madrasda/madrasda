import { UserContext } from "../../context/context";
import { useEffect, useState } from "react";
import { getRole, isTokenValid } from "@/utils/JWTVerifier";
import axios from "axios";
import { useRouter } from "next/router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "theme";
import SEO from "next-seo.config";
// import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import Script from 'next/script'
import * as fbq from "@/utils/fbq";
import { NEXT_PUBLIC_CLARITY_ID, NEXT_PUBLIC_PIXEL_ID } from "@/firebaseConfig";
import { API_URL } from "@/utils/constants";

function Loading() {
  const router = useRouter();
}

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [token, setToken] = useState("");
  const [vendorList, setVendorList] = useState([]);
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("token_client") !== null);
  }, []);

  useEffect(() => {
    const jwtToken = localStorage.getItem("token_client");
    if (
      jwtToken !== undefined &&
      isTokenValid(jwtToken) &&
      getRole(jwtToken) === "ROLE_CUSTOMER"
    ) {
      setToken(jwtToken);

      axios
        .get(API_URL + "/api/cart/", {
          headers: {
            Authorization: "Bearer " + jwtToken,
          },
        })
        .then((response) => {
          setCart(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    axios
      .get(
        API_URL + "/api/client/getAllVendors"
      )
      .then((response) => setVendorList(response.data))
      .catch((err) => console.log(err));
  }, [isLoggedIn]);

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const decrementQty = (id, qty) => {
    setCart((oldCart) => {
      let newCart = [];
      for (let item of oldCart.cartItems) {
        if (item.id === id)
          if (qty < 1) continue;
          else item.quantity = qty;
        newCart.push(item);
      }
      return { ...oldCart, cartItems: newCart };
    });

    axios
      .put(
        API_URL + "/api/cart/changeQuantity/" +
        id +
        "&&" +
        qty,
        null,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .catch((err) => console.log(err));
  };
  const incrementQty = (id) => {
    let qty;
    setCart((oldCart) => {
      return {
        ...oldCart,
        cartItems: oldCart.cartItems.map((item) => {
          if (item.id === id) {
            qty = ++item.quantity;
          }
          return item;
        }),
      };
    });
    axios
      .put(
        API_URL + "/api/cart/changeQuantity/" +
        id +
        "&&" +
        qty,
        null,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .catch((err) => console.log(err));
  };
  const customQuantity = (id, qty) => {
    setCart((oldCart) => {
      const newCart = oldCart.cartItems.map((item) => {
        if (item.id === id) {
          if (item.quantity <= 1 && item.quantity > 65535) return;
          item.quantity = qty;
        }
        return item;
      });
      return { ...oldCart, cartItems: [...newCart] };
    });
    axios
      .put(
        API_URL + "/api/cart/changeQuantity/" +
        id +
        "&&" +
        qty,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .catch((err) => console.log(err));
  };
  const removeItem = (id) => {
    setCart((oldCart) => {
      return {
        ...oldCart,
        cartItems: oldCart.cartItems.filter((item) => item.id !== id),
      };
    });
    axios
      .put(
        API_URL + "/api/cart/changeQuantity/" +
        id +
        "&&0",
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .catch((err) => console.log(err));
  };
  const addToCart = async (product) => {
    if (isTokenValid(token) && getRole(token) === "ROLE_CUSTOMER") {
      const cartItem = {
        id: product.id,
        colors: product.colors,
        quantity: product.quantity,
      };
      return await axios
        .post(
          API_URL + "/api/cart/addToCart",
          cartItem,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((response) => {
          return axios.get(
            API_URL + "/api/cart/",
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );
        })
        .then((response) => {
          setCart(response.data);
          return response.status;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${NEXT_PUBLIC_PIXEL_ID});
          `,
        }}
      />
      <Script id="ms_clarity" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${NEXT_PUBLIC_CLARITY_ID}");`
        }} />

      <ThemeProvider theme={theme}>
        <Loading />

        <UserContext.Provider
          value={{
            decrementQty: decrementQty,
            incrementQty: incrementQty,
            customQuantity: customQuantity,
            removeItem: removeItem,
            addToCart: addToCart,
            cart: cart,
            vendorList: vendorList,
            setIsLoggedIn: setIsLoggedIn,
            isLoggedIn: isLoggedIn,
            setRefresh: setRefresh,
          }}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </ThemeProvider>
        </UserContext.Provider>
      </ThemeProvider>
    </>
  );
}
