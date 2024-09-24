import NavAdmin from "./nav-admin"
import Footer from "./footer"
import {useEffect, useState} from "react";
import axios from "axios";
import { API_URL } from "@/utils/constants";

export default function AdminLayout({ children }) {
    const [vendorPayoutCount, setVendorPayoutCount] = useState(0);
    const [signupRequestCount, setSignupRequestCount] = useState(0);
    useEffect(() => {
        axios.get(
            API_URL + "/api/admin/getPayoutRequestedVendors",
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token_admin"),
                },
            }
        ).then(response => {
            setVendorPayoutCount(response.data.length);
        });
        axios.get(
            API_URL + "/api/admin/getAllSignups",
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token_admin"),
                },
            }
        ).then(response => {
            setSignupRequestCount(response.data.totalElements);
        });
    }, [])
  return (
    <>
      <NavAdmin vendorPayoutCount={vendorPayoutCount} signupRequestCount={signupRequestCount}/>
      <main className="bg-white font-quest">{children}</main>
    </>
  )
}
