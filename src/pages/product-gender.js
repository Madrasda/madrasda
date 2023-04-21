import {useRouter} from 'next/router';
import ProductList from "@/pages/productlist";
import {useEffect, useState} from "react";
import axios from "axios";

function PersonBasedProductsPage() {
    const router = useRouter();
    const [pageNo, setPageNo] = useState(0);
    const [title, setTitle] = useState("")
    const [products, setProducts] = useState([]);
    const {gender} = router.query;
    useEffect(() => {
        if (router.isReady) {
            setTitle(gender + "'s Products");
            axios.get("http://localhost:8080/api/client/products/" + gender + "?pageNo=" + pageNo)
                .then(response => setProducts(response.data))
                .catch(err => console.log(err));
        }
    }, [gender, pageNo]);

    return <ProductList productsPage={products} setPageNo={setPageNo} pageNo={pageNo} title={title}/>;
}

export default PersonBasedProductsPage;
