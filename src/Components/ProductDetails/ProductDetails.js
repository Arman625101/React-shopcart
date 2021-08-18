import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById, fetchUserById } from "../../api/api";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const [prodUser, setProdUser] = useState();

  const { id } = useParams();
  useEffect(() => {
    fetchProductById(id).then((res) => {
      setProduct(res);
      fetchUserById(res.seller.id).then((user) => setProdUser(user));
    });

    return () => product;
  }, []);

  return (
    <>
      {product && prodUser && (
        <div className="details">
          <div className="product">
            <div className="image">
              <img src={product.image} />
            </div>
            <div className="info">
              <div className="title">
                <p className="price">{product.price} $</p>
                <p className="dash">&#8213;</p>
                <p className="name">{product.name}</p>
              </div>
              <div className="descr">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
          <div className="seller">
            <div className="info">
              <img src={prodUser.avatar} alt={prodUser.username} />
              <p className="username">{prodUser.username}</p>
              <p className="email">{prodUser.email}</p>
              <p></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
