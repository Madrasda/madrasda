import Image from "next/image";
import Head from "next/head";
import VendorLayout from "@/components/layout-vendor";
import axios from "axios";
import { useRouter } from "next/router";
import { isTokenValid, getRole } from "@/utils/JWTVerifier";
import UploadModal from "@/components/upload-modal";
import { forwardRef, useEffect, useRef, useState } from "react";
import MuiAlert from "@mui/material/Alert";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { API_URL } from "@/utils/constants";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function DesignGallery() {
  const [tokenExists, setTokenExists] = useState(false);
  const [designs, setDesigns] = useState(null);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState(""); // success , error
  const [open, setOpen] = useState(false); // same as spinner
  const [spinner, setSpinner] = useState(false);
  const router = useRouter();
  const isReady = router.isReady;
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const getDesigns = () => {
    setSpinner(true);
    axios
      .get(
        API_URL + "/api/vendor/designs",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token_vendor"),
          },
        }
      )
      .then((response) => {
        setSpinner(false);
        setDesigns(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleUpload = (bool) => {
    if (bool) {
      getDesigns();
    }
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem("token_vendor");
    if (
      jwtToken === undefined ||
      !isTokenValid(jwtToken) ||
      getRole(jwtToken) !== "ROLE_VENDOR"
    )
      router.push("/vendor");
    else setTokenExists(true);
    if (isReady) {
      getDesigns();
    }
  }, []);

  return (
    <>
      <Head>
      <meta name="description" content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <title>Madrasda | Design Gallery</title>
      </Head>

      {tokenExists && (
        <VendorLayout>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={spinner}
          >
            <CircularProgress color="inherit" />
          </Backdrop>

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
          <section
            className="body-font overflow-hidden font-algeria
                        md:ml-32"
          >
            <div className="mt-20 px-5 md:my-10 mx-auto">
              <h1
                className="text-3xl text-primary
                       md:ml-20"
              >
                DESIGN GALLERY
              </h1>
              <div className="md:ml-20 md:mt-10">
                <h1 className="text-lg my-5">Upload a new design</h1>
                <UploadModal
                  upload={true}
                  setMessage={setMessage}
                  setOpen={setOpen}
                  setSeverity={setSeverity}
                  gallery={true}
                  refreshDesigns={getDesigns}
                />
              </div>
              <div className="flex flex-wrap justify-start md:ml-20">
                {designs &&
                  designs.map((d) => {
                    return (
                      <div
                        className="lg:w-1/4 md:w-1/3 p-4 w-full h-full bg-off-white m-5 rounded drop-shadow-[4px_4px_10px_rgba(0,0,0,0.2)]"
                        key={d.id}
                      >
                        <div className="block relative h-[200px] md:h-[100px] lg:h-[200px] rounded overflow-hidden">
                          <Image
                            src={d.imgUrl}
                            alt="ecommerce"
                            height={1080}
                            width={1920}
                            className="object-contain object-center w-full h-full"
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
              <br />
            </div>
          </section>
        </VendorLayout>
      )}
    </>
  );
}
