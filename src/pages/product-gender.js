import {useRouter} from 'next/router';
import ProductList from "@/pages/productlist";
import {useEffect, useState} from "react";
import axios from "axios";
import { isTokenValid, getRole } from '@/utils/JWTVerifier';

function PersonBasedProductsPage() {
    const router = useRouter();
    const [pageNo, setPageNo] = useState(0);
    const [title, setTitle] = useState("")
    const [products, setProducts] = useState([]);
    const {gender} = router.query;
    const [client, setClient] = useState(false);

    useEffect(() => {
        if (router.isReady) {
            setTitle(gender + "'s Products");
            axios
              .get(
                "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/client/products/" +
                  gender +
                  "?pageNo=" +
                  pageNo +
                  "&pageSize=12"
              )
              .then((response) => setProducts(response.data))
              .catch((err) => console.log(err));
        }
    }, [gender, pageNo]);



    return <ProductList productsPage={products} setPageNo={setPageNo} pageNo={pageNo} title={title}/>;
}

export default PersonBasedProductsPage;
