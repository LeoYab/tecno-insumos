import { getDoc, doc } from 'firebase/firestore'
import { db } from '..'
import { createProdAdaptedFirestore } from '../../../adapter/productAdapter'

export const getProduct = (categoryid) => {

    return new Promise ((resolve, reject) => {

        const docRef = doc(db, "products", categoryid)
    
        getDoc(docRef).then(respProduct => {
    
            resolve(createProdAdaptedFirestore(respProduct))
    
        }).catch(error => {
            reject (error)
            
        })

    })
   
}