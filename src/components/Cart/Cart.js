import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { NotificationContext } from "../../Notifications/NotificationsServices"
import CartItem from "../CartItem/CartItem"
import "../Cart/Cart.scss"
const Cart = () => {

    const { cart, removeProd, totalItems } = useContext(CartContext)

    const { ntfyRemoveItem } = useContext(NotificationContext)


    const deleteItemCart = (idToDelete) => {

        removeProd(idToDelete)

    }

    const emptyCart = () => {

        return (
            <tr>
                <td className="text-center" colSpan="4">Carrito Vacío</td>
            </tr>

        )
    }

    return (
        <div className="d-flex flex-column align-items-center m-2">

            <table className="tableCart table table-striped text-start">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col" className="text-center">Cantidad</th>
                        <th scope="col" colSpan="2">Precio</th>
                    </tr>
                </thead>

                <tbody className="align-middle">

                    {totalItems === 0 ? emptyCart() : cart.map(prod => <CartItem key={prod.id} {...prod} deleteItemCart={deleteItemCart} ntfyRemoveItem={ntfyRemoveItem} />)}

                </tbody>

            </table>

            <div className="w-50 text-end">

                <h2>{totalItems !== 0 ? "Precio: $" + totalItems : <Link to="/"><h5>Ir a comprar</h5></Link>}</h2>
                <Link to="/checkout"><button>Realizar Compra</button></Link>

            </div>
        </div>

    )

}

export default Cart