import "../Item/Item.scss"
import Button from "../Button/Button";

const Item = ({ img, name, description, price }) => {

    return (

            <div className="card col-2 mt-1 shadow-sm p-3 mb-5 bg-body rounded border-0">
                <img src={img} className="card-img-top align-self-center" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <p>Precio: ${price}</p>
                <Button type="button" className="btn btn-outline-info mb-2 col-8 align-self-center">Agregar al carrito</Button>
            </div>

    )
}

export default Item;