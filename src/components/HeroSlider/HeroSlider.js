import "./HeroSlider.scss"
import assets1 from "./assets/SliderGforce.png"
import assets2 from "./assets/SliderKingston.png"
import assets3 from "./assets/SliderMotherboard.png"
const HeroSlider = () => {


    
        return(

        <div id="heroSlider" className="carousel slide" data-bs-ride="carousel">
            <div>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#heroSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={assets1} className="d-block w-100" alt="image1" />
                </div>
                <div className="carousel-item">
                    <img src={assets2} className="d-block w-100" alt="image2" />
                </div>
                <div className="carousel-item">
                    <img src={assets3} className="d-block w-100" alt="image3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#heroSlider" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroSlider" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
        )
    }
 

export default HeroSlider