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
    useEffect(() => {
        if(ctx.vendorList !== undefined && router.isReady) {
            setTitle(ctx.vendorList.find((vendor) => vendor.id === parseInt(vendorId)).name + "'s Products");
        axios.get("http://localhost:8080/api/product/getProductsByVendor/" + vendorId + "?pageNo=" + pageNo)
            .then(response => setVendorProducts(response.data))
            .catch(err => console.log(err));
        }
    }, [vendorId, pageNo]);

    return <ProductList productsPage={vendorProducts} setPageNo={setPageNo} pageNo={pageNo} title={title}/>;
}

export default VendorProductsPage;
