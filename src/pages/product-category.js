import { useRouter } from 'next/router';
import ProductList from "@/pages/productlist";
import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from '@/utils/constants';

function CategoryProductsPage() {
  const [products, setProducts] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const router = useRouter();
  const { id, title } = router.query;

  useEffect(() => {
    if (router.isReady) {
      axios
        .get(
          API_URL + "/api/product/getByMockupId/" +
            id
        )
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [id, pageNo]);
  return (
    <ProductList
      productsPage={products}
      setPageNo={setPageNo}
      pageNo={pageNo}
      title={title}
    />
  );
}

export default CategoryProductsPage;
