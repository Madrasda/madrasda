import {useRouter} from 'next/router';
import ProductList from "@/pages/productlist";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {UserContext} from "../../../context/context";

function VendorProductsPage() {
    const router = useRouter();
    const ctx = useContext(UserContext);
    const {vendorId} = router.query;
    // Fetch the products for the specified vendorId
    const [vendorProducts, setVendorProducts] = useState([]);
    const [pageNo, setPageNo] = useState(0);
    const [title, setTitle] = useState("")
    const [vendorList, setVendorList] = useState([]);
    const setPageData = (vendors) => {
        setTitle(
          vendors.find(
            (vendor) => vendor.id === parseInt(router.query.vendorId)
          ).name
        );
        axios.get("https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/product/getProductsByVendor/" + vendorId + "?pageNo=" + pageNo + "&pageSize=20")
            .then(response => setVendorProducts(response.data))
            .catch(err => console.log(err));
    }
    useEffect(() => {
        if (router.isReady) {

            if ((ctx.vendorList.length !== 0 && ctx.vendorList !== undefined)) {
                setPageData(ctx.vendorList);
            } else {
                axios.get("https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/admin/getVendors")
                    .then(response => {
                        setPageData(response.data)
                    })
                    .catch(err => console.log(err));
            }
        }
    }, [vendorId, pageNo]);


    return <ProductList productsPage={vendorProducts} setPageNo={setPageNo} pageNo={pageNo} title={title}/>;
}

export default VendorProductsPage;
