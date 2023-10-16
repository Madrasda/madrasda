import Head from "next/head";
import VendorLayout from "@/components/layout-vendor";
import Image from "next/image";
import { forwardRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getRole, isTokenValid } from "@/utils/JWTVerifier";
import { Button, Snackbar, TextField } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "next/link";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Alert = forwardRef(function Alert(props, ref) {
  //snackbar alert
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Feedback() {
  const [tokenExists, setTokenExists] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  let isReady = router.isReady;
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputValue === "") {
      setError(true);
      setOpen(true);
      setMessage("Please enter all fields");
      setSeverity("error");
      return;
    }
    try {
      const response = await fetch(
        "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/feedback/postFeedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token_vendor"),
          },
          body: JSON.stringify({ query: inputValue, resolution: false }),
        }
      ).then((res) => {
        setOpen(true);
        setMessage("Query Successfully Sent");
        setSeverity("success");
        setInputValue("");
      });
    } catch (error) {
      setOpen(true);
      setMessage("An error has occurred, please try again");
      setSeverity("error");
    }
    setInputValue("");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
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
  }, []);
  // if (loading && isReady)
  // 	return (
  // 		<div className='z-50 h-screen w-screen overflow-hidden'>
  // 			<Image
  // 				src='/loader.gif'
  // 				width={1920}
  // 				height={1080}
  // 				className='object-cover object-center w-full h-full'
  // 			/>
  // 		</div>
  // 	);
  return (
    <>
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
      <Head>
      <meta name="description" content="Madrasda is India's first content creators marketplace, providing a one-stop destination for official merchandise of your favorite content creators. Discover a diverse range of products from top Indian creators Shop now and get exclusive merchandise at Madrasda."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <title>Madrasda | Feedback</title>
      </Head>

      {tokenExists && (
        <VendorLayout>
          <main className="md:ml-32 overflow-hidden font-raj">
            <div className="mt-20 px-5 md:my-10 mx-auto">
              <div className="md:ml-24 md:mt-10">
                <h1 className="body-font text-primary text-3xl">QUERIES</h1>
              </div>

              <hr className="h-px md:ml-20 my-6 border-shadowGrey border-1"></hr>
              <div className="md:ml-24 lg:ml-32">
                <h1 className="title-font font-medium text-2xl pb-8 text-[#535253]">
                  1.Post your Queries:
                </h1>
                <form className={"mr-12"}>
                  <TextField
                    id="comment"
                    rows={4}
                    label={"Your comment"}
                    className="w-full px-0 text-sm text-black mb-3"
                    placeholder="Write your queries..."
                    required
                    multiline
                    value={inputValue}
                    error={error}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <div className="pt-4">
                    <Button
                      css={{ fontFamily: "$algeria" }}
                      style={{
                        background:
                          "linear-gradient(45deg, #ffa000 30%, #ffc107 90%)",
                        color: "white",
                      }}
                      variant={"contained"}
                      onClick={handleSubmit}
                    >
                      Post Query
                    </Button>
                  </div>
                </form>
              </div>

              <hr className="h-px md:ml-20 my-6 border-shadowGrey border-1"></hr>

              <div className="md:ml-24 lg:ml-32">
                <h1 className="title-font font-medium text-2xl pb-8 text-[#535253]">
                  2.FAQ:
                </h1>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>What is a Vendor Dashboard?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      A Vendor Dashboard is an online platform where vendors can
                      manage their business operations, track sales, and access
                      various tools and features to enhance their selling
                      experience.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>
                      How do I access the Vendor Dashboard?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      To access the Vendor Dashboard, you need to log in to your
                      vendor account on the platform's website. Once logged in,
                      you can access the dashboard.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>
                      What can I do with the Vendor Dashboard?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The Vendor Dashboard offers a range of features and
                      functionalities to help vendors manage their business.
                      Some common tasks you can perform include adding and
                      updating products, managing inventory, processing orders,
                      tracking sales and revenue, and accessing analytics and
                      reports.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>
                      Can I customize the Vendor Dashboard to suit my
                      preferences?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The level of customization available in the Vendor
                      Dashboard is limited.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>
                      How can I add and manage my products on the Vendor
                      Dashboard?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Typically, you can add and manage products by navigating
                      to the "create templates" section of the Vendor Dashboard.
                      From there, you can create new product listings, provide
                      product details, upload images, set prices, and update
                      product information as needed.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>
                      How can I process orders through the Vendor Dashboard
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      When a customer places an order, it routes to Madras Da
                      Admin and the fulfilment is taken care by Madras da Team.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>
                      Can I track my sales and revenue through the Vendor
                      Dashboard?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, the Vendor Dashboard typically provides tools to
                      track your sales and revenue. You can usually access
                      reports or analytics that show information such as total
                      sales, revenue over a specific period, top-selling
                      products, customer insights, and more. This data can help
                      you make informed business decisions and evaluate your
                      performance.{" "}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>
                      How can I communicate with customers using the Vendor
                      Dashboard?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Communicating to the customer is restricted to vendors
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>
                      Can I integrate third-party services or tools with the
                      Vendor Dashboard?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No, Integrating third-party I not possible.{" "}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>
                      Is there any customer support available for using the
                      Vendor Dashboard?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, platforms often provide customer support channels for
                      vendors. If you have questions, encounter technical
                      issues, or need assistance with using the Vendor
                      Dashboard, you can usually reach out to the platform's
                      support team via email, or a dedicated support portal.
                      They will guide you and address any concerns you may have.
                      <br></br>support@madrasda.com
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>
                      How does the Commission Process work for the two cycles in
                      a month?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The Commission Process for our platform operates in two
                      cycles each month. This means that earnings from your
                      sales are processed and paid out twice within the same
                      month.{" "}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>
                      When are the commission cycles scheduled in a month?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The commission cycles are typically scheduled on specific
                      dates within the month for E.G 1-15th sales will be paid
                      before 20th of each month and 16-30th sales will be paid
                      before 5th of every month.{" "}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>
                      What happens during the first commission cycle of the
                      month?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      During the first commission cycle, the platform calculates
                      and processes the earnings you have accumulated up until a
                      predetermined date, usually around the middle of the
                      month. These earnings will be prepared for payment.{" "}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>
                      When can I expect to receive the payment for the first
                      commission cycle?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Payment for the first commission cycle is usually
                      processed shortly after the cycle ends, which could be
                      within a few days or up to a week. including payment
                      processing times and any additional verification
                      processes.{" "}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>
                      How are earnings from the second commission cycle of the
                      month handled?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The second commission cycle accounts for earnings
                      generated after the cut-off date of the first cycle, up
                      until the end of the month. These earnings will be
                      calculated separately and prepared for payment.{" "}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>
                      When will I receive the payment for the second commission
                      cycle?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Payment for the second commission cycle is typically
                      processed shortly after the cycle ends, which is usually
                      at the end of the month. Similar to the first cycle, the
                      exact timing may vary based on payment processing and
                      verification procedures.{" "}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>
                      Are there any payment thresholds or minimum amounts
                      required to receive a payout?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The platform may have specific payment thresholds or
                      minimum amounts that need to be reached before a payout is
                      initiated. This helps ensure that the payment processing
                      is efficient and cost-effective. Check the platform's
                      documentation or terms to find information about any such
                      requirements.{" "}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>
                      How are the commission payments delivered?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Commission payments are typically delivered through the
                      chosen pay out method on the platform. This may include
                      options such as direct bank transfers, electronic payment
                      systems or other supported payment gateways.{" "}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>
                      Can I track my commission earnings and payment status on
                      the platform?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, platforms provide a dashboard or section where you
                      can track your commission earnings and payment status.
                      This allows you to monitor your earnings, view pending
                      payments, and track the progress of your commission
                      cycles.{" "}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    css={{ fontFamily: "$algeria" }}
                    style={{
                      background: "#EAEAEA",
                      color: "black",
                    }}
                  >
                    <Typography>
                      What should I do if I have any questions or issues
                      regarding the commission process?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      If you have any questions or encounter issues related to
                      the commission process, it's best to reach out to the
                      support team. They can provide you with specific
                      information, address any concerns, and assist you in
                      resolving any problems you may have.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <hr className="h-px md:ml-20 my-6 border-shadowGrey border-1"></hr>

              <div className="md:ml-24 lg:ml-32 text-[#2c2c2d]">
                <h1 className="title-font font-medium text-2xl pb-8 text-[#535253]">
                  Admin Contact Details
                </h1>
                <h2>
                  Email:{" "}
                  <Link href="mailto:Support@madrasda.com">
                    Support@madrasda.com
                  </Link>
                </h2>
                <h2>Phone Number: 9345354341</h2>
              </div>

              <hr className="h-px md:ml-20 my-6 border-shadowGrey border-1"></hr>
            </div>
          </main>
        </VendorLayout>
      )}
    </>
  );
}
