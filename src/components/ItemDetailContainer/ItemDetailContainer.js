import { getProductbyId } from "../../asyncMock"
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = (() => {
  
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProductbyId("33").then(prod => {
            setProduct(prod);
        })

    }, [])

   

 
    return (
        <div>
           <ItemDetail product = {product} />
        </div>
    )
})

export default ItemDetailContainer;