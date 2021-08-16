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
        <div className="details">
            <p>{product && product.name}</p>
            <p>{product && product.description}</p>
        </div>
    )
}
 
export default ProductDetails;