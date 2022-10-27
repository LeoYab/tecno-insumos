import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
// import { addDoc, collection } from 'firebase/firestore'
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import ItemForm from "../ItemForm/ItemForm"
import { useNavigate } from "react-router-dom"


const CheckOut = () => {

    const [loading, setLoading] = useState(false)

    const { cart, totalItems, clearCart } = useContext(CartContext)


    const navigate = useNavigate()


    const createOrder = async (dataUser) => {

        setLoading(true)

        try {
            const objOrder = {
                buyer: {

                    dataUser

                },
                items: cart,
                total: totalItems
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 3000)

                console.log(`El id de su orden es: ${orderAdded.id}`)
            } else {
                console.log('hay productos que estan fuera de stock')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    if (loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <ItemForm crtordr={{createOrder}} />
            {/*  { <button onClick={createOrder}>generar orden</button>} */}
        </div>
    )
}


export default CheckOut