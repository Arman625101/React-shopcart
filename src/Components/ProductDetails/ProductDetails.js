import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import {fetchProductById} from "../../api/api";
import "./ProductDetails.scss";


const ProductDetails = () => {
    const [product, setProduct] = useState();

    const {id} = useParams();
    useEffect(() => {
        fetchProductById(id).then((res) => {
            setProduct(res)
        });
        return () => product
    }, [])

    return (
        <>
        {product && (
            <div className="details">
                <img src={product.image} />
                <p className="price">{product.price}</p>
                <p className="name">{product.name}</p>
                <p className="descr">{product.description}</p>
            </div>
        )}
        </>
    )
}
 
export default ProductDetails;