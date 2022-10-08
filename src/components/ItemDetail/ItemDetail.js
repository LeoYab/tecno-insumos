import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss"

const ItemDetail = ({ id, img, img2, price, name, description, stock, info }) => {
    

    const handleOnAdd = () => {

        let inputCart = document.getElementById("inputCart").value;
        let onCart = inputCart;

        inputCart > stock ? onCart = stock : onCart = inputCart;

        document.getElementById("onCart").innerText = onCart;

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
                    <ItemCount onAdd={[handleOnAdd, stock]} />

                </div>
            </div>


        </div>



    )
}

export default ItemDetail;