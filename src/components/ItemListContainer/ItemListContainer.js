import HeroSlider from '../HeroSlider/HeroSlider'
import ItemList from '../ItemList/ItemList'
import "../ItemListContainer/ItemListContainer.scss"
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'

const ItemListContainer = () => {

    const { categoryId, subcategoryId, imputSearchId } = useParams();

    const getProductsFirestore = () => getProducts({ categoryId, subcategoryId, imputSearchId })

    const { data: products, error, loading } = useAsync(getProductsFirestore, [categoryId, subcategoryId, imputSearchId])


    if (loading) {
        return (
            <div>
                <HeroSlider />
                <div className="spin container-fluid position-relative">
                    <div className="position-absolute top-50 start-50 translate-middle">
                        <div className="spinner-border text-info m-5" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        <div className="d-flex align-items-end dot-pulse position-absolute top-50 start-50 translate-middle" >
            <h1 className="mb-0">Error al cargar la página</h1>
        </div>
    }


    return (

        <div>
            <HeroSlider />
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;