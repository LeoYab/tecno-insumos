import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '..'
import { createProdAdaptedFirestore } from '../../../adapter/productAdapter'

export const createOrder = async ({cart, totalItems, clearCart, setLoading, navigate, dataUserForm}) => {

    setLoading(true)

    try {
        const objOrder = {
            buyer: {

                dataUserForm

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

            const dataDoc = createProdAdaptedFirestore(doc)

            const stockDb = dataDoc.stock 

            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart?.quantity

            if (stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity })
            } else {
                outOfStock.push(createProdAdaptedFirestore(doc)/* { id: doc.id, ...dataDoc } */)
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