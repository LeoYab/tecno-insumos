import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '..'
import { createProdAdaptedFirestore } from '../../../adapter/productAdapter'

export const createOrder = async ({ cart, totalItems, clearCart, setLoading, navigate, buyer, orderCreated, failOrder, date }) => {

    setLoading(true)

    try {
        const objOrder = {

            buyer,
            
            date: date,
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

            const dataDoc = createProdAdaptedFirestore(doc)

            const stockDb = dataDoc.stock

            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart?.quantity

            if (stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity })
            } else {
                outOfStock.push(createProdAdaptedFirestore(doc))
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()

            const orderRef = collection(db, 'orders')

            const orderAdded = await addDoc(orderRef, objOrder)


            clearCart()

            setTimeout(() => {

                navigate('/')
            }, 1000)

            orderCreated(orderAdded.id)

        } else {

            failOrder()

        }

    } catch (error) {
        return (
            <div className="d-flex align-items-end dot-pulse position-absolute top-50 start-50 translate-middle" >
                <h1 className="mb-0">Error al cargar la página {error}</h1>
            </div>
        )
    } finally {
        setLoading(false)
    }

}