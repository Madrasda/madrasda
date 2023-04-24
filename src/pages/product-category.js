import { useRouter } from 'next/router';
import ProductList from "@/pages/productlist";

function CategoryProductsPage() {
    const router = useRouter();
    const { category } = router.query;

    // Fetch the products for the specified vendorId
    const products = [];
    // return <ProductList products={products} />;
}

export default CategoryProductsPage;
