import "../Item/Item.scss"
import Button from "../Button/Button";
import { Link } from "react-router-dom"

const Item = ({ id, img, img2, name, description, price, stock }) => {

    return (

        <div id={id} className="card col-2 mt-1 shadow-sm p-3 mb-5 bg-body border-0">
            <div id={`carouselControls${id}`}  className="carousel carousel-dark slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img} className="card-img-top align-self-center" alt={name} />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="card-img-top align-self-center" alt={name} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselControls${id}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#carouselControls${id}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="d-flex flex-column align-items-center w-100">
            {stock === 0 && <p className="cursor mb-2 border border-danger rounded text-danger w-50" >Agotado</p> }
            <h6>Precio: ${price}</h6>
            </div>
           <Link to = {`/item/${id}`}><Button type="button" className="btn btn-outline-info mb-2 col-8 align-self-center">Ver producto</Button></Link>
           
        </div>

    )
}

export default Item;