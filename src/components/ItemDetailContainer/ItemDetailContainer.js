import { getProductbyId } from "../../asyncMock"
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = (() => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const  { productId } = useParams();

    
/* UseEffect en donde trae el detalle del producto seleccionado */

    useEffect(() => {
        setLoading(true);
        getProductbyId(productId).then(prod => {
            setProduct(prod);
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
        <div>
            <ItemDetail {...product} />
        </div>
    )
})

export default ItemDetailContainer;