import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/firebase/firestore/product";
import { useAsync } from "../../hooks/useAsync";

const ItemDetailContainer = (() => {

    const { productId } = useParams();

    const getProductsFirestore = () => getProduct(productId)

    const { data: product, error, loading } = useAsync(getProductsFirestore, productId)

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

    if (error) {
        return(
            <div className="d-flex align-items-end dot-pulse position-absolute top-50 start-50 translate-middle" >
                <h1 className="mb-0">No existe el producto seleccionado</h1>
            </div>
        )
    }


    return (

        <ItemDetail {...product} />

    )
})

export default ItemDetailContainer;