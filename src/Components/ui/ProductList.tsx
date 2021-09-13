import { Link, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "../../types/global";

interface IProps {
  data: Product[];
  handleDelete?: (id: string) => void;
}

const ProductList = ({ data, handleDelete }: IProps) => {
  const [products, setProducts] = useState(data);
  const { url } = useRouteMatch();

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <div className="products">
      {/* {loading && <p>{loading}</p>} */}
      <ul>
        {products &&
          products.map((prod) => {
            return (
              <li key={prod.id}>
                <Link to={`${url}/${prod.id}`}>
                  <img src={prod.image} alt={prod.name} />
                  <div className="content">
                    <h1 className="price">{prod.price}$</h1>
                    <h2 className="name">{prod.name}</h2>
                    <p className="desc">{prod.description.substr(0, 45)}...</p>
                  </div>
                </Link>
                {url === "/myproducts" && handleDelete && (
                  <>
                    <button onClick={() => handleDelete(prod.id)}>
                      Delete
                    </button>
                  </>
                )}
              </li>
            );
          })}
      </ul>
      {/* {error && <p>{error}</p>} */}
    </div>
  );
};

export default ProductList;
