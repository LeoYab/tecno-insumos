import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss"

const ItemDetail = ({ product }) => {
    
    
let stock = product.stock;

    const handleOnAdd = () => {

        let inputCart = document.getElementById("inputCart").value;
        let onCart = inputCart;

        inputCart > stock ? onCart = stock : onCart = inputCart;

        document.getElementById("onCart").innerText = onCart;

    }


    return (

        <div>
            <div className="d-flex flex-column flex-md-row bg-transparent shadow pt-3 pb-3 mb-5 container-sm rounded">
                <div className="col-8 bg-transparent">
                    <div id={`carouselControls2${product.id}`} className="carousel carousel-dark slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={product.img} className="card-img-top align-self-center removeBg" alt={product.name} />
                            </div>
                            <div className="carousel-item">
                                <img src={product.img} className="card-img-top align-self-center removeBg" alt={product.name} />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#carouselControls2${product.id}`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#carouselControls2${product.id}`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
                <div className="col-4 bg-light rounded">
                    <h1 className="mb-4 fw-bold">{product.name}</h1>
                    <p className="mb-4">{product.description}</p>
                    <h2>${product.price}</h2>
                    <ItemCount onAdd={[handleOnAdd, product.stock]} />

                </div>
            </div>


        </div>



    )
}

export default ItemDetail;