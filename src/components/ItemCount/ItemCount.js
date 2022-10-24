import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ItemCount.scss"

const ItemCount = ({ onAdd, stock, initial = 0 }) => {

    const [value, setValue] = useState(initial);
    const navigate = useNavigate()

    const increment = () => {

        value < stock ? setValue(parseInt(value + 1)) : setValue(stock);

    }

    const decrement = () => {

        value > 1 ? setValue(parseInt(value - 1)) : setValue(0);

    }


    return (
        <div className="m-2">
            <div className="input-group mb-3 mt-3 justify-content-center">
                <button onClick={decrement} className="btn btn-outline-dark" type="button" disabled={value === 0 && true}>-</button>
                <input type="text" id="inputCart" className="form-control text-center" value={value} disabled />
                <button onClick={increment} className="btn btn-outline-dark" type="button" disabled={value === stock && true}>+</button>
            </div>
            <h5>Stock: {stock - value}</h5>
            <div>
                <button id="addToCart" onClick={() => onAdd(value)} className="btn btn-outline-success mb-2 col-7" type="button" disabled={value === 0 && true}>Agregar al carrito</button>
                <button type="button" onClick={() => navigate(-1)} className="btn btn-outline-info mb-2 col-7">Volver</button>
            </div>
        </div>
    )
}

export default ItemCount;