import Item from "../Item/Item";

const ItemList = ({ products }) => {

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center me-0 mt-2 gap-4">
            { products.map(prod => <Item key={prod.id} {...prod} />) }
        </div>
    )
}

export default ItemList