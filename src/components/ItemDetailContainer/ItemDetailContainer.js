import { getProductbyId } from "../../asyncMock"
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = (() => {

    const [product, setProduct] = useState([])

    const  { productId } = useParams();


    useEffect(() => {
        getProductbyId(productId).then(prod => {
            setProduct(prod);
        })

    }, [productId])


    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
})

export default ItemDetailContainer;