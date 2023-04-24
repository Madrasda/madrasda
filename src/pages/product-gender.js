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
            axios.get("https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/client/products/" + gender + "?pageNo=" + pageNo)
                .then(response => setProducts(response.data))
                .catch(err => console.log(err));
        }
    }, [gender, pageNo]);

    useEffect(() => {
    const jwtToken = localStorage.getItem('token');
    if(jwtToken && getRole(jwtToken) === "ROLE_ADMIN")
        router.push("/admin");
    if(jwtToken && getRole(jwtToken) === "ROLE_VENDOR")
        router.push("/vendor");
    if(jwtToken && isTokenValid(jwtToken))
        setClient(true);
    else
        setClient(false);
  }, []);

    return <ProductList productsPage={products} setPageNo={setPageNo} pageNo={pageNo} title={title}/>;
}

export default PersonBasedProductsPage;
