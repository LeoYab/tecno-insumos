import { useState } from "react";
import "./ItemCount.scss"

const ItemCount = ({ onAdd, stock }) => {

    const [value, setValue] = useState(0);

    const increment = () => {

    value < stock ? setValue(parseInt(value + 1)) : setValue(stock);  

    }

    const decrement = () => {

        value > 0 ? setValue(parseInt(value - 1)) : setValue(0);
    }


    return (
        <div>
            <div className="input-group mb-3 mt-3 justify-content-center">
                <button onClick={decrement} className="btn btn-outline-secondary" type="button">-</button>
                <input type="text" id="inputCart" className="form-control text-center" value={value} disabled />
                <button onClick={increment} className="btn btn-outline-secondary" type="button">+</button>
            </div>
            <h5>Stock: {stock - value}</h5>
            <div>
                <button id="addToCart" onClick={() => onAdd(value)} className="btn btn-outline-secondary" type="button">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;