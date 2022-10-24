import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = (() => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const  { productId } = useParams();

    
/* UseEffect en donde trae el detalle del producto seleccionado */

    useEffect(() => {
        
        setLoading(true);

        const docRef = doc(db, "products", productId)

        getDoc(docRef).then(respProduct => {

            const data = respProduct.data()
            const productAdapted = {id: respProduct.id, ...data}
            setProduct(productAdapted)

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