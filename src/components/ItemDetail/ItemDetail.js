import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.scss"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { NotificationContext } from "../../Notifications/NotificationsServices";

const ItemDetail = ({ id, img, img2, price, name, description, stock, info }) => {

    const [totProd, setTotProd] = useState(0)

    const { addItem, prodsAdded } = useContext(CartContext)

    const { ntfyAddItem } = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {

        const addProdToCart = { id, name, price, quantity }

        addItem(addProdToCart)

        setTotProd(quantity)

        ntfyAddItem(name)  

    }

const quantityAdded = prodsAdded(id)

    return (

            <div className="d-flex flex-column flex-lg-row bg-transparent p-3 m-4 justify-content-evenly gap-2 shadow rounded">
                <div className="minview d-flex col-7 bg-white align-items-center border rounded">
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

                <div className="minview col-4 bg-light border rounded">
                    <h1 className="mb-4 fw-bold">{name}</h1>
                    <p className="mb-4">{description}</p>
                    <p className="m-3 mb-4 text"><small>{info/* .replace(/--/g, "\n •") */}</small></p>
                    <h2>${price}</h2>

                    {totProd ? <Link to="/cart"><Button type="button" className="btn btn-outline-success mb-2 col-8 align-self-center">Terminar compra</Button></Link> : <ItemCount onAdd={handleOnAdd} stock={stock} initial={quantityAdded} />}
                    {totProd ? <Link to="/"><Button type="button" className="btn btn-outline-info mb-2 col-8 align-self-center">Seguir comprando</Button></Link> : ""}
                </div>
            </div>

    )
}

export default ItemDetail;