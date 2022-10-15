import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemList from "../ItemList/ItemList"

const Cart = () => {

const { cart } = useContext(CartContext)
console.log(cart)
    return(
<div>
<ItemList products={cart} />
</div>

    )
}

export default Cart