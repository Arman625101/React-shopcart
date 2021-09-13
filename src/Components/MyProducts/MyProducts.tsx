import { useEffect, useState } from "react";
import { productAPI } from "../../api";
import { useAuth } from "../../context/AuthContext";
import { Product } from "../../types/global";
import AddProduct from "../AddProduct/AddProduct";
import ProductList from "../ui/ProductList";
import "./MyProducts.scss";



const MyProducts = () => {
  const { profile, currentUser, updateProfile } = useAuth();
  const [myProducts, setMyProducts] = useState<Product[]>([]);

  const onDelete = (id: string) => {
    currentUser &&
      productAPI
        .deleteProduct(currentUser.uid, id)
        .then((res) => updateProfile && updateProfile());
  };

  useEffect(() => {
    if (profile && profile.products) {
      productAPI
        .getUserProducts(profile.products)
        .then((res) => setMyProducts(res));
    }

    return () => {
      myProducts;
    };
  }, [profile]);

  return (
    <>
      <AddProduct />
      {myProducts && <ProductList handleDelete={onDelete} data={myProducts} />}
    </>
  );
};

export default MyProducts;
