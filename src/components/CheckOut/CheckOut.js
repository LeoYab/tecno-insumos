import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemForm from "../ItemForm/ItemForm"
import { useNavigate } from "react-router-dom"
import { createOrder } from "../../services/firebase/firestore/order"

const CheckOut = () => {

    const [loading, setLoading] = useState(false)

    const { cart, totalItems, clearCart } = useContext(CartContext)


    const navigate = useNavigate()

    const formOrder = (dataUserForm) => {

        createOrder({cart, totalItems, clearCart, setLoading, navigate, dataUserForm})

    }

    if (loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    return (
        <div>
            <ItemForm crtordr={formOrder} />
        </div>
    )
}


export default CheckOut