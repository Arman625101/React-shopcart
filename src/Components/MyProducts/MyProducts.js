import { useEffect } from "react";
import { fetchUserProducts } from "../../api/api";
import { useAuth } from "../contexts/AuthContext";
import AddProduct from "./AddProduct/AddProduct";
import "./MyProducts.scss";

const MyProducts = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    // fetchUserProducts(currentUser.uid).then((res) => console.log(res));
  }, []);

  return (
    <div className="my-products">
      <AddProduct />
      <div className="my-products"></div>
    </div>
  );
};

export default MyProducts;
