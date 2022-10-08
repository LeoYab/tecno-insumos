import "../Item/Item.scss"
import Button from "../Button/Button";
import { Link } from "react-router-dom"

const Item = ({ id, img, img2, name, description, price, info }) => {

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
            {/*      <img src={img} className="card-img-top align-self-center d-block w-100" alt={name} /> */}
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
            <h6>Precio: ${price}</h6>
      
           <Link to = {`/detail/${id}`}><Button type="button" className="btn btn-outline-info mb-2 col-8 align-self-center">Detalle</Button></Link>
           
        </div>

    )
}

export default Item;