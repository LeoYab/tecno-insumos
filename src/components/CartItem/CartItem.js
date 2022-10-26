
const CartItem = ({id, name, quantity, price, deleteItemCart, ntfyRemoveItem }) => {
   
    return (
      
        <tr key={id}>
            <th scope="row">{name}</th>
            <td className="text-center">X{quantity}</td>
            <td>${price}</td>
            <td><button onClick={() => [deleteItemCart(id), ntfyRemoveItem(name)]} className="btn btn-danger btn-sm" type="button">Eliminar</button></td>
        </tr>
      
    )

}

export default CartItem