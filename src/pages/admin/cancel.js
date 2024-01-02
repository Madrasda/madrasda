import Head from "next/head";
import AdminLayout from "@/components/layout-admin";
import axios from "axios";
import { forwardRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getRole, isTokenValid } from "@/utils/JWTVerifier";
import { Button, Grow, Paper, Snackbar } from "@mui/material";
import { uuidv4 } from "@firebase/util";
import MuiAlert from "@mui/material/Alert";
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function AdminCancelOrdersPage() {
  const [tokenExists, setTokenExists] = useState(false);
  const router = useRouter();
  let isReady = router.isReady;
  const [pageNo, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [cancelOrders, setCancelOrders] = useState([]);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [state, setState] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setState(false);
  };
  useEffect(() => {
    const params = new URLSearchParams({
      pageNo: pageNo,
      pageSize: 10,
    });
    axios
      .get(
        "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/transaction/getAllCancelRequests?" +
          params,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token_admin"),
          },
        }
      )

      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setPageSize(data.totalPages);
        setCancelOrders(data.content);
      });
  }, [pageNo]);
  useEffect(() => {
    const jwtToken = localStorage.getItem("token_admin");
    if (
      jwtToken === undefined ||
      !isTokenValid(jwtToken) ||
      getRole(jwtToken) !== "ROLE_ADMIN"
    )
      router.push("/admin");
    else setTokenExists(true);
  }, []);
  function processCancelRequest(id) {
    axios
      .delete(
        "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/admin/cancelOrder/" +
          id,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token_admin"),
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setMessage("Order Cancelled Successfully");
          setSeverity("success");
          setState(true);
          setCancelOrders((oldCancelOrders) => [
            ...oldCancelOrders.filter(
              (request) => request.transaction.id !== id
            ),
          ]);
        }
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        setSeverity("error");
        setState(true);
      });
  }

  return (
    <>
      <Head>
        <meta
          name='description'
          content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
        <title>Madrasda | Cancel Orders</title>
      </Head>

      {tokenExists && (
        <AdminLayout>
          <Snackbar open={state} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
              {message}
            </Alert>
          </Snackbar>
          <main
            className='body-font overflow-hidden font-quest
                                md:ml-32'>
            <div className='mt-20 px-5 md:my-10 mx-auto'>
              <h1
                className='text-3xl text-primary
                               md:ml-20 md:mt-10'>
                CANCEL REQUESTS
              </h1>
            </div>
            <div className='flex flex-col justify-center mb-5 w-full px-4 md:ml-28'>
              {cancelOrders &&
                cancelOrders.length !== 0 &&
                cancelOrders.map((request, index) => {
                  const delay = index * 80 + "ms";
                  const now = new Date().getTime();
                  const requestDate = new Date(
                    request.transaction.orderDate
                  ).getTime();
                  const tenDays = 8.64 * Math.pow(10, 8);
                  if (now - requestDate <= tenDays) {
                    return (
                      <Grow
                        key={uuidv4()}
                        in
                        timeout={600}
                        style={{ transitionDelay: delay }}>
                        <Paper
                          className='container mt-8 w-full md:w-5/6 rounded-md'
                          elevation={5}>
                          <div className=' ml-8 mr-20 mt-4'>
                            <h1 className='text-2xl text-primary mb-6 pt-2'>
                              Customer Number:{" "}
                              {request.transaction.shippingAddress.phone}
                            </h1>
                            <div className='flex w-full justify-between mb-2'>
                              <h2 className='mb-2 text-lg font-medium text-black flex items-center'>
                                Order Date :{" "}
                                {new Date(
                                  request.transaction.orderDate
                                ).toLocaleDateString("en-GB")}
                              </h2>
                              <h2 className='mb-2 text-lg font-medium text-black flex items-center'>
                                Order Items :{" "}
                                {request.transaction.orderItems.length} N
                              </h2>
                            </div>
                            <div className='flex w-full flex-col lg:flex-row lg:justify-between mb-2'>
                              <h2 className='mb-2 text-lg font-medium text-black flex flex-wrap items-center'>
                                Reason : {request.reason}
                              </h2>
                              <h2 className='mb-2 text-lg font-medium text-black flex items-center'>
                                Order Total : ₹{request.transaction.orderTotal}
                              </h2>
                            </div>
                            <button
                              className='bg-[#ffa200] text-white font-small py-2 mb-3 px-5 rounded mr-6'
                              // css={{ fontFamily: "$algeria" }}
                              // style={{
                              //   background: "#FFA000",
                              // }}
                              onClick={() =>
                                processCancelRequest(request.transaction.id)
                              }>
                              Cancel Order
                            </button>
                          </div>
                        </Paper>
                      </Grow>
                    );
                  }
                })}
            </div>
            {
              // queries && queries.length !== 0 &&
              pageSize > 10 && (
                <div className='flex justify-center mt-32 mb-8'>
                  <button
                    className='bg-[#fab337] hover:bg-[#ffa200] text-white font-small py-2 px-5 rounded mr-6'
                    onClick={() => {
                      setPage(pageNo === 0 ? 0 : pageNo - 1);
                    }}>
                    Prev
                  </button>
                  <button
                    className='bg-[#fab337] hover:bg-[#ffa200] text-white font-small py-2 px-5 rounded ml-6'
                    onClick={() => {
                      setPage(pageNo === pageSize - 1 ? pageNo : pageNo + 1);
                    }}>
                    Next
                  </button>
                </div>
              )
            }
          </main>
        </AdminLayout>
      )}
    </>
  );
}
