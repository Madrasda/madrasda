import AdminLayout from "@/components/layout-admin";
import Head from "next/head";
import Image from "next/image";
import { getRole, isTokenValid } from "@/utils/JWTVerifier";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { UserContext } from "../../../context/context";
import { Alert, Button, Paper } from "@mui/material";
import SignupModal from "@/components/signup-request";
import { uuidv4 } from "@firebase/util";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { API_URL } from "@/utils/constants";

export default function Requests() {
  const [requests, setRequests] = useState([]);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [open, setOpen] = useState(false);

  const getRequests = async () => {
    axios
      .get(
        API_URL + "/api/admin/getAllSignups",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token_admin"),
          },
        }
      )
      .then((response) => setRequests(response.data.content));
  };

  const createVendor = async (id) => {
    axios
      .post(
        API_URL + "/api/admin/approveSignup/" +
          id,
        {
          password: "password",
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token_admin"),
          },
        }
      )
      .then(() => {
        setMessage("Added New Vendor");
        setOpen(true);
        setSeverity("success");
        getRequests();
      })
      .catch(() => {
        setMessage("Account already exists");
        setOpen(true);
        setSeverity("error");
      });
  };

  const deleteRequest = async (id) => {
    const response = await axios.delete(
      API_URL + "/api/admin/removeSignUp/" +
        id,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_admin"),
        },
      }
    );
    setMessage("Deleted Request");
    setOpen(true);
    setSeverity("success");
    getRequests();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem("token_admin");
    if (
      jwtToken === undefined ||
      !isTokenValid(jwtToken) ||
      getRole(jwtToken) !== "ROLE_ADMIN"
    )
      router.push("/admin");
    else getRequests();
  }, []);

  return (
    <>
      <Head>
      <meta name="description" content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <title>Madrasda | Signup Requests</title>
      </Head>
      <AdminLayout>
        <Snackbar
          className={"mt-14"}
          open={open}
          autoHideDuration={1400}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert onClose={handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
        <div className="md:ml-56 pt-24 px-3 md:py-4 text-black">
          <h1 className="text-xl md:text-4xl text-primary">
            Vendor Signup Requests
          </h1>
          <div className="p-7 space-y-4">
            {requests.length === 0 && (
              <h1 className="text-lg text-shadowGrey">No new requests</h1>
            )}
            {requests &&
              requests.map((vendor) => (
                <Paper className="px-2 py-5" elevation={3} key={uuidv4()}>
                  <div className="flex flex-col w-1/2 p-3 text-lg">
                    <span className="flex flex-col space-x-4 justify-between">
                      <h1 className="font-bold">
                        Name:
                      </h1>
                      <h1>{vendor.name}</h1>
                    </span>
                    <span className="flex flex-col space-x-4 justify-between">
                      <h1 className="font-bold">
                        Phone:
                      </h1>
                      <h1>{vendor.phone}</h1>
                    </span>
                    <span className="flex flex-col space-x-4 justify-between">
                      <h1 className="font-bold">
                        E-mail:
                      </h1>
                      <h1>{vendor.email}</h1>
                    </span>
                    <span className="flex flex-col space-x-4 justify-between">
                      <h1 className="font-bold">
                        Category:
                      </h1>
                      <h1>{vendor.influencerCategory}</h1>
                    </span>
                    <span className="flex flex-col space-x-4 justify-between">
                      <h1 className="font-bold">
                        Company Name:
                      </h1>
                      <h1>{vendor.companyName}</h1>
                    </span>
                    <span className="flex flex-col space-x-4 justify-between">
                      <h1 className="font-bold">
                        URL:
                      </h1>
                      <h1>{vendor.companyUrl}</h1>
                    </span>
                    {vendor.gstin && (
                      <span className="flex flex-col space-x-4 justify-between">
                        <h1 className="font-bold">
                          GSTIN:
                        </h1>
                        <h1>{vendor.gstin}</h1>
                      </span>
                    )}
                  </div>
                  <div className="flex justify-end space-x-4">
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => deleteRequest(vendor.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="outlined"
                      color="success"
                      onClick={() => createVendor(vendor.id)}
                    >
                      Accept
                    </Button>
                  </div>
                </Paper>
              ))}
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
