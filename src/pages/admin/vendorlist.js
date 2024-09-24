import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import AdminLayout from "@/components/layout-admin";
import AddVendorModal from "@/components/addvendor-modal";
import VendorListItem from "@/components/vendorlist-item";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { storage } from "../../firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { getRole } from "@/utils/JWTVerifier";
import { uuidv4 } from "@firebase/util";
import { Alert, Grow, Snackbar } from "@mui/material";
import { API_URL } from "@/utils/constants";

export default function VendorList(props) {
  const router = useRouter();
  const [tokenExists, setTokenExists] = useState(false);
  const [vendors, setVendors] = useState(null);
  const [imageUrl, setImage] = useState("");
  const [vendorData, setVendor] = useState({});
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [open, setOpen] = useState(false);
  let isReady = router.isReady;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const getVendors = async () => {
    axios
      .get(
        API_URL + "/api/admin/getVendors"
      )
      .then((response) => {
        setVendors(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (formData) => {
    registerVendor(formData);
  };

  const uploadImageOnline = async (file) => {
    const imageRef = ref(storage, `vendors/${file.name + v4()}`);
    await uploadBytes(imageRef, file);
    const url = await getDownloadURL(imageRef);
    return url;
  };

  const registerVendor = async (data) => {
    if (data.imgUrl === null) {
      setOpen(true);
      setMessage("Please add an image");
      setSeverity("error");
      return;
    }
    const url = await uploadImageOnline(data.imgUrl);
    axios
      .post(
        API_URL + "/api/admin/addVendor",
        {
          ...data,
          imgUrl: url,
        }
      )
      .then((response) => {
        getVendors();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteVendor = async (vendorId) => {
    const response = await axios.delete(
      API_URL + "/api/admin/deleteVendor/" +
      vendorId,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token_admin"),
        },
      }
    );
    getVendors();
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem("token_admin");
    if (jwtToken && getRole(jwtToken) !== "ROLE_ADMIN") router.push("/admin");
    else {
      setTokenExists(true);
      getVendors();
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <title>Madrasda | Creator List</title>
      </Head>
      <Snackbar
        className={"mt-7"}
        open={open}
        autoHideDuration={1400}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
      {tokenExists && (
        <AdminLayout>
          <section className="body-font overflow-hidden font-quest md:ml-32">
            <div className="mt-20 px-5 md:my-10 mx-auto">
              <h1
                className="text-3xl text-primary
                       md:ml-20 m-5"
              >
                Manage Creators
              </h1>
              <div className="flex flex-wrap justify-items-start space-x-12 md:ml-20">
                <div className="lg:w-1/5 md:w-3/4 p-4 w-full lg:h-80 md:h-96 h-80 flex items-center justify-center m-6 rounded duration-200 ease-in-out">
                  <Link href="#">
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                      <AddVendorModal getFormData={handleSubmit} />
                      <p className="font-semibold text-base text-center pt-2">
                        Add new creator
                      </p>
                      <p className="font-light text-shadowGrey text-sm text-center">
                        Add new creators to your list
                      </p>
                    </div>
                  </Link>
                </div>

                {vendors !== null &&
                  vendors.map((vendor, index) => {
                    const delay = 80 * index + "ms";
                    return (
                      <Grow
                        key={uuidv4()}
                        in
                        style={{ transitionDelay: delay }}
                        timeout={500}
                      >
                        <Link
                          href={`/admin/vendorDetails/${vendor.id}`}
                          key={uuidv4()}
                          className="lg:w-1/5 md:w-3/4 p-4 pb-0 min-h-fit h-80 w-full cursor-pointer
                                              bg-off-white m-5 rounded shadow-xl transition-all duration-100
                                               hover:shadow-shadowGrey border border-border"
                        >
                          <div>
                            <VendorListItem
                              key={vendor.id}
                              vendorName={vendor.name}
                              image={vendor.imgUrl}
                            />
                          </div>
                        </Link>
                      </Grow>
                    );
                  })}
              </div>
            </div>
          </section>
        </AdminLayout>
      )}
    </>
  );
}
