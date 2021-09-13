import "./Products.scss";
import { productAPI } from "../../api";
import { useEffect, useState } from "react";
import ProductList from "../ui/ProductList";

const Products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    productAPI.getProducts().then((res) => setProducts(res));

    return () => {
      products;
    };
  }, []);

  return <>{products && <ProductList data={products} />}</>;
};

export default Products;
