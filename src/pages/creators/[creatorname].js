import { useRouter } from "next/router";
import ProductList from "@/pages/productlist";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../../context/context";

function VendorProductsPage() {
  const router = useRouter();
  const ctx = useContext(UserContext);
  const { query } = router;
  const { id } = router.query;
  // Fetch the products for the specified vendorId
  const [vendorProducts, setVendorProducts] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [title, setTitle] = useState("");
  const [vendorList, setVendorList] = useState([]);
  const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const setPageData = (vendors) => {
    const vendorName = vendors.find((vendor) => slugify(vendor.companyName) === query.creatorname)
    // console.log(vendors, vendorName, router.pathname, query)
    setTitle(
      vendorName.companyName
    );
    axios
      .get(
        "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/product/getProductsByVendor/" +
          vendorName.id +
          "?pageNo=" +
          pageNo +
          "&pageSize=20"
      )
      .then((response) => {
        setVendorProducts(response.data);
        // console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (query && router.isReady) {
      if (ctx.vendorList.length !== 0 && ctx.vendorList !== undefined) {
        setPageData(ctx.vendorList);
      } else {
        axios
          .get(
            "https://spring-madrasda-2f6mra4vwa-em.a.run.app/api/admin/getVendors"
          )
          .then((response) => {
            setPageData(response.data);
            // console.log(response.data);
          })
          .catch((err) => console.log(err));
      }
    }
  }, [id, query, pageNo]);

  return (
    <ProductList
      productsPage={vendorProducts}
      setPageNo={setPageNo}
      pageNo={pageNo}
      title={title}
    />
  );
}

export default VendorProductsPage;
