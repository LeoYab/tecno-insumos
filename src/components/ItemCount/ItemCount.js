import { useState } from "react";
import "./ItemCount.scss"

const ItemCount = ({ onAdd, stock }) => {

    const [value, setValue] = useState(0);
    const [disableButtonAdd, setDisableButtonAdd] = useState(true)
    const [disableButtonDecrement, setdisableButtonDecrement] = useState(true)
    const [disableButtonIncrement, setdisableButtonIncrement] = useState(false)


    const increment = () => {
        setdisableButtonDecrement(false)

        setDisableButtonAdd(false)

        value < stock ? setValue(parseInt(value + 1)) : setValue(stock);

        value === (stock - 1) && setdisableButtonIncrement(true)

    }

    const decrement = () => {

        setdisableButtonIncrement(false)

        value > 0 ? setValue(parseInt(value - 1)) : setValue(0);

        if (value === 1){

            setDisableButtonAdd(true) 

            setdisableButtonDecrement(true) 
    }
        }


    return (
        <div className="m-2">
            <div className="input-group mb-3 mt-3 justify-content-center">
                <button onClick={decrement} className="btn btn-outline-dark" type="button" disabled={disableButtonDecrement}>-</button>
                <input type="text" id="inputCart" className="form-control text-center" value={value} disabled />
                <button onClick={increment} className="btn btn-outline-dark" type="button" disabled={disableButtonIncrement}>+</button>
            </div>
            <h5>Stock: {stock - value}</h5>
            <div>
                <button id="addToCart" onClick={() => onAdd(value)} className="btn btn-outline-success" type="button" disabled={disableButtonAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;