import "./Products.scss";
import useFetch from "../../hooks/useFetch";
import { fetchProducts } from "../../api/api";
import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState();
  const { path, url } = useRouteMatch();
  useEffect(() => {
    fetchProducts().then((res) => {
      setProducts(res);
    });
    return () => {
      products;
    };
  }, []);

  return (
    <div className="products">
      {/* {loading && <p>{loading}</p>} */}
      {products && (
        <ul>
          {products.map((prod) => (
            <li key={prod.id}>
              <Link to={`${url}/${prod.id}`}>
                <img src={prod.image} alt={prod.name} />
                <div className="content">
                  <h1 className="price">{prod.price}$</h1>
                  <h2 className="name">{prod.name}</h2>
                  <p className="desc">{prod.description.substr(0, 45)}...</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {/* {error && <p>{error}</p>} */}
    </div>
  );
};

export default Products;
