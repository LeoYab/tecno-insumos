import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import "../ItemListContainer/ItemListContainer.scss"

const ItemListContainer = ({ greeting }) => {

    /* const date = new Date();
    const hour = date.getHours();
    let greetingTime; 
    
    greetingTime = hour >= 6 && hour < 12 ? greetingTime = greeting.dia : (hour >= 12 && hour < 20 ? greetingTime = greeting.tarde : greetingTime = greeting.noche);
    
        return(
    
            <h2>{greetingTime}</h2> 
            
        ) */
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        getProducts().then(respProducts => {
            setProducts(respProducts);
        }).finally(() => {
            setLoading(false);
        })

    }, [])

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