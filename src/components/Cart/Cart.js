import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { NotificationContext } from "../../Notifications/NotificationsServices"

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



    const cartList = cart.map(prod => {

        return (
            <tr key={prod.id}>
                <th scope="row">{prod.name}</th>
                <td className="text-center">X{prod.quantity}</td>
                <td>${prod.price}</td>
                <td><button onClick={() => [deleteItemCart(prod.id), ntfyRemoveItem(prod.name)]} className="btn btn-danger btn-sm" type="button">Eliminar</button></td>
            </tr>

        )
    })

    return (
        <div className="d-flex flex-column align-items-center mt-2">
            <table className="table table-striped w-50 text-start">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col" className="text-center">Cantidad</th>
                        <th scope="col" colSpan="2">Precio</th>
                    </tr>
                </thead>
                <tbody className="align-middle">
                    {totalItems === 0 ? emptyCart() : cartList}
                </tbody>
            </table>
            <div className="w-50 text-end">
                <h2>{totalItems !== 0 ? "Precio: $" + totalItems :  <Link to="/"><h5>Ir a comprar</h5></Link>}</h2>
            </div>
        </div>

    )

}

export default Cart