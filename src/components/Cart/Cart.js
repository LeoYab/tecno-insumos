import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const Cart = () => {

    const { cart, removeProd, totalItems } = useContext(CartContext)
 
    const deleteItemCart = (idToDelete) =>{

        removeProd(idToDelete)
    }

    
    const cartList = cart.map(prod => {

        return (
            <tr key={prod.id}>
                <th scope="row">{prod.name}</th>
                <td>${prod.price}</td>
                <td className="text-center">X{prod.quantity}</td>
                <td><button onClick={() => deleteItemCart(prod.id)} className="btn btn-danger btn-sm" type="button">Eliminar</button></td>
            </tr>

        )

    })
    return (
        <div className="d-flex flex-column align-items-center">
            <table className="table table-striped w-50 text-start">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col" className="text-center">Cantidad</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody className="align-middle">
                    {cartList}
                </tbody>
            </table>
            <h1>Total: ${totalItems}</h1>
        </div>

    )
}

export default Cart