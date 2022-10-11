import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button"

/* Buscador de productos donde envía a App.js el valor del imput ingresado para que luego lo tome ItemListContainer y los muestre en pantalla.
Se generó una propiedad keywords dentro de los objetos en donde estarán las palabras clave de búsqueda.  */

const Search = () => {

    const [imputSearch, setInputSearch] = useState("");
    

    return(
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" value={imputSearch} onChange= {(e) => setInputSearch(e.target.value)} />
       
        <Link to={`/search/${imputSearch}`}><Button className="btn btn-outline-info" type="submit">Buscar</Button></Link>
       
    </form>

    )
}

export default Search;