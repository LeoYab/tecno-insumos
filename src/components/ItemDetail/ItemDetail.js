import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.scss"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ id, img, img2, price, name, description, stock, info }) => {

    const [totProd, setTotProd] = useState(0)

    const { addItem } = useContext(CartContext)


    const handleOnAdd = (quantity) => {
     
       const addProdToCart = { id, name, price, quantity }

        addItem(addProdToCart)

        setTotProd(quantity)


    }


    return (

        <div>
            <div className="d-flex flex-column flex-md-row bg-transparent shadow pt-3 pb-3 mb-5 container-sm gap-1 rounded">
                <div className="col-8 bg-white border rounded">
                    <div id={`carouselControls2${id}`} className="carousel carousel-dark slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={img} className="card-img-top align-self-center removeBg" alt={name} />
                            </div>
                            <div className="carousel-item">
                                <img src={img2} className="card-img-top align-self-center removeBg" alt={name} />
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target={`#carouselControls2${id}`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#carouselControls2${id}`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>

                <div className="col-4 bg-light border rounded">
                    <h1 className="mb-4 fw-bold">{name}</h1>
                    <p className="mb-4">{description}</p>
                    <h2>${price}</h2>

                    {totProd ? <Link to="/cart"><Button type="button" className="btn btn-outline-info mb-2 col-8 align-self-center">Terminar Compra</Button></Link> : <ItemCount onAdd={handleOnAdd} stock={stock}/>}

                </div>
            </div>


        </div>



    )
}

export default ItemDetail;