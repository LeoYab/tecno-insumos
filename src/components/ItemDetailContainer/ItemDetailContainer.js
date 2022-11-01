import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/firebase/firestore/product";

const ItemDetailContainer = (() => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const  { productId } = useParams();


    useEffect(() => {

        setLoading(true);

        getProduct(productId).then(product =>{

            setProduct(product)

        }).finally(() => {
    
            setLoading(false);
        })
      
    }, [productId])


    /* Si es verdadero muestra el spinner de carga*/

    if (loading) {
        return (
            <div className="spinner-border text-info m-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    return (
  
            <ItemDetail {...product} />

    )
})

export default ItemDetailContainer;