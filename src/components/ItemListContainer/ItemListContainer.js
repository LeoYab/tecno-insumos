import { useState, useEffect } from 'react'
import { getProducts, filterProductByCategory, filterProductBySubCategory, filterProductByInputSearch } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import "../ItemListContainer/ItemListContainer.scss"
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {

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

        const asyncFuncProd = imputSearchId ? filterProductByInputSearch(imputSearchId) : (categoryId ? (subcategoryId ? filterProductBySubCategory(subcategoryId) : filterProductByCategory(categoryId)) : getProducts());
   

        asyncFuncProd.then(respProducts => {
            setProducts(respProducts);
        }).finally(() => {
            setLoading(false);
        })

    }, [categoryId, subcategoryId, imputSearchId]) 


    if (loading) {
        return (
            <div className="spinner-border text-info m-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    return (

        <ItemList products={products} />

    )
}

export default ItemListContainer;