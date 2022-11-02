import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemForm from "../ItemForm/ItemForm"
import { useNavigate } from "react-router-dom"
import { createOrder } from "../../services/firebase/firestore/order"
import { DotPulse } from '@uiball/loaders'
import { NotificationContext } from "../../Notifications/NotificationsServices"
import Cart from "../Cart/Cart"

const CheckOut = () => {

    const [loading, setLoading] = useState(false)

    const { cart, totalItems, clearCart } = useContext(CartContext)

    const { orderCreated, failOrder } = useContext(NotificationContext)
    
    const date = new Date();
    
    const navigate = useNavigate()

    const formOrder = (dataUserForm) => {

        createOrder({ cart, totalItems, clearCart, setLoading, navigate, dataUserForm, orderCreated, failOrder, date})

    }

    if (loading) {

        return (
            <div className="d-flex align-items-end dot-pulse position-absolute top-50 start-50 translate-middle" >
                <h1 className="mb-0">Se esta generando su orden</h1>
                <div className="ms-1 mb-1">
                    <DotPulse size={40} speed={1.3} color="#2a2a2a" />
                </div>
            </div>
        )
    }

    return (
        <div>
            <ItemForm crtordr={formOrder} />
        </div>
    )
}


export default CheckOut