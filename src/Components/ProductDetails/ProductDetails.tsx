import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productAPI } from "../../api";
import { Product } from "../../types/global";
import "./ProductDetails.scss";

type Param = {
  id: string;
};

const ProductDetails = () => {
  const [product, setProduct] = useState<Product>();

  const { id } = useParams<Param>();
  useEffect(() => {
    productAPI.getProductById(id).then((res) => {
      setProduct(res);
    });

    return () => {
      product;
    };
  }, []);

  return (
    <>
      {product && (
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
              <img
                src={product.seller?.avatar}
                alt={product.seller?.username}
              />
              <p className="username">{product.seller?.username}</p>
              <p className="email">{product.seller?.email}</p>
              <p></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
