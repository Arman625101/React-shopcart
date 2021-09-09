import { useEffect } from "react";
import { productAPI } from "../../api";
import { useAuth } from "../../context/AuthContext";
import AddProduct from "./AddProduct/AddProduct";
import "./MyProducts.scss";

const MyProducts = () => {
  const { currentUser, profile } = useAuth();

  useEffect(() => {
    if (profile) {
      console.log(profile);
      productAPI
        .getUserProducts(profile.products)
        .then((res) => console.log(res));
    }
  }, [profile]);

  return (
    <>
      {profile && currentUser && (
        <div className="my-products">
          <AddProduct />
          <div className="my-products"></div>
        </div>
      )}
    </>
  );
};

export default MyProducts;
