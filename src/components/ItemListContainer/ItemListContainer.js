import { useState, useEffect } from 'react'
import HeroSlider from '../HeroSlider/HeroSlider'
import ItemList from '../ItemList/ItemList'
import "../ItemListContainer/ItemListContainer.scss"
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = ({ greeting }) => {

    /* Comentado: Muestra saludo dependiendo del horario*/

    /* const date = new Date();
    const hour = date.getHours();
    let greetingTime; 
    
    greetingTime = hour >= 6 && hour < 12 ? greetingTime = greeting.dia : (hour >= 12 && hour < 20 ? greetingTime = greeting.tarde : greetingTime = greeting.noche);
    
        return(
    
            <h2>{greetingTime}</h2> 
            
        ) */

    const { categoryId, subcategoryId, imputSearchId } = useParams();

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
   
    useEffect(() => {
       
        const collectionRef = imputSearchId ? query(collection(db, 'products'), where('keywords', 'array-contains', imputSearchId.toLowerCase())) : (categoryId ? (subcategoryId ? query(collection(db, 'products'), where('subcategory', '==', subcategoryId)) : query(collection(db, 'products'), where('category', '==', categoryId))) :  collection(db, 'products'))


        /* UseEffect en donde trae el filtrado de productos dependiendo de qué parámetro esté activo. Sino muestra la totalidad de productos */

        setLoading(true);

      
        getDocs(collectionRef).then(respProducts => {
        
            const productsAdapted = respProducts.docs.map(doc => {
            const data = doc.data()

            return{id: doc.id, ...data}

        })

        setProducts(productsAdapted);

        }).catch(() => {

            return (
                <h1 className="visually-hidden">ERROR</h1>
            )
            
        }).finally(() => {
            setLoading(false);
        })

    }, [categoryId, subcategoryId, imputSearchId])

    /* Si es verdadero muestra el spinner de carga*/

    if (loading) {
        return (
            <div>
            <HeroSlider />
            <div className="spinner-border text-info m-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>
        )
    }

  
    return (
        
        <div>
        <HeroSlider />
        <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;