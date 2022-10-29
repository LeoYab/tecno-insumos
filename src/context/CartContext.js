import { useState, useEffect, createContext } from "react";


export const CartContext = createContext({
    cart: [],
    quantity: 0,
})


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [totalItems, settotalItems] = useState(0)
    
    useEffect(() => {
    /*   const totalQty = getQuantity()  */
        setQuantity(getQuantity() )
        settotalItems(totalProds())
    }, [cart])


const totalProds = () => {

let accum = 0

cart.forEach(prod => {
    
    accum += (prod.price*prod.quantity)

    })

    return accum


}


    const getQuantity = () => {

        let accum = 0
    
        cart.forEach(prod => {
    
        accum += prod.quantity
        })
    
        return accum
    
    }
    
    const isInCart = (prodToAdd) => {

        return cart.find(prod => prod.id === prodToAdd.id)

    }

    const addItem = (prodToAdd) => {
        
        isInCart(prodToAdd) ? replace(prodToAdd) : setCart([...cart, prodToAdd])

    }

     const removeProd = (id) => {

        const removeProd = cart.filter(prod => prod.id !== id)

        setCart(removeProd)


    } 

    const replace = (prodToAdd) => {

        const replaceProd = cart.filter(prod => prod.id !== prodToAdd.id)
        setCart([...replaceProd, prodToAdd])
    }

    
    const prodsAdded = (id) => {

        const prodadded = cart.find(prod => prod.id === id)
       return prodadded?.quantity 
       
    }
    
    const clearCart = () =>{

        setCart([])
    }


    return (
        <CartContext.Provider value={{ cart, quantity, addItem, removeProd, totalItems, prodsAdded, clearCart }}>
            {children}
        </CartContext.Provider>

    )
}