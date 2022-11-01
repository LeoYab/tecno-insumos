import { useState, useEffect } from 'react'
import HeroSlider from '../HeroSlider/HeroSlider'
import ItemList from '../ItemList/ItemList'
import "../ItemListContainer/ItemListContainer.scss"
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore/products'

const ItemListContainer = () => {

    const { categoryId, subcategoryId, imputSearchId } = useParams();

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
   
    useEffect(() => {


        setLoading(true);

        getProducts({categoryId, subcategoryId, imputSearchId}).then(products =>{

            setProducts(products)

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