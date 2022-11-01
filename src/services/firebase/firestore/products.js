import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '..'
import { createProdAdaptedFirestore } from '../../../adapter/productAdapter'

export const getProducts = ({categoryId, subcategoryId, imputSearchId}) => {

    return new Promise ((resolve, reject) => {

        const collectionRef = imputSearchId ? query(collection(db, 'products'), where('keywords', 'array-contains', imputSearchId.toLowerCase())) : (categoryId ? (subcategoryId ? query(collection(db, 'products'), where('subcategory', '==', subcategoryId)) : query(collection(db, 'products'), where('category', '==', categoryId))) :  collection(db, 'products'))
        
        getDocs(collectionRef).then(respProducts => {

            const productsAdapted = respProducts.docs.map(doc => {
      
    
            return(createProdAdaptedFirestore(doc))
    
        })
    
        resolve(productsAdapted);
    
        })

    })

}