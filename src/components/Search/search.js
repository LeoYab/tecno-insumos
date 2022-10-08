import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button"

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