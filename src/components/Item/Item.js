import "../Item/Item.scss"

const Item = ({ img, name, description }) => {

    return (

            <div className="card col-2">
                <img src={img} className="card-img-top align-self-center" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <a href="index.html" className="btn btn-primary">Agregar al carrito</a>
                </div>
            </div>

    )
}

export default Item;