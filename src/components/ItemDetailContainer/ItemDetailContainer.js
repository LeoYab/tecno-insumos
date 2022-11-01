import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/firebase/firestore/product";

const ItemDetailContainer = (() => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams();


    useEffect(() => {

        setLoading(true);

        getProduct(productId).then(product => {

            setProduct(product)

        }).finally(() => {

            setLoading(false);
        })

    }, [productId])


    if (loading) {
        return (
            <div className="spin container-fluid position-relative">
                <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="spinner-border text-info m-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }

    return (

        <ItemDetail {...product} />

    )
})

export default ItemDetailContainer;