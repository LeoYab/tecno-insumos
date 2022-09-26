import "./Navbar.scss";
import logo from "./assets/Logo.png";
import CartWidget from "../CartWidget/CartWidget";
import Button from "../Button/Button"

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand me-auto p-2" href="index.html">
                    <img className="logo me-2" src={logo} alt="Logo" />Tecno-Insumos</a>

                <CartWidget />

                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle btn btn-link" data-bs-toggle="dropdown" aria-expanded="false">Discos</button>

                            <ul className="category dropdown-menu">
                                <li>
                                    <Button>HDD &raquo;</Button>
                                    <ul className="dropdown-menu dropdown-submenu">
                                        <li><Button>Western Digital</Button></li>
                                        <li><Button>Seagate</Button></li>
                                        <li><Button>Kingston</Button></li>
                                    </ul>
                                </li>

                                <li>
                                    <Button>SSD &raquo;</Button>
                                    <ul className="dropdown-menu dropdown-submenu">
                                        <li><Button>Western Digital</Button></li>
                                        <li><Button>Seagate</Button></li>
                                        <li><Button>Kingston</Button></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle btn btn-link" data-bs-toggle="dropdown" aria-expanded="false">Motherboard</button>
                            <ul className="category dropdown-menu">
                                <li><Button>Asus</Button></li>
                                <li><Button>Gigabyte</Button></li>
                                <li><Button>AMD</Button></li>
                                <li><Button>AsRock</Button></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle btn btn-link" data-bs-toggle="dropdown" aria-expanded="false">CPU</button>
                            <ul className="category dropdown-menu">
                                <li><Button>AMD</Button></li>
                                <li><Button>Intel</Button></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle btn btn-link" data-bs-toggle="dropdown" aria-expanded="false">Placas de video</button>
                            <ul className="category dropdown-menu">
                                <li><Button>MSI</Button></li>
                                <li><Button>Asus</Button></li>
                                <li><Button>Gigabyte</Button></li>
                                <li><Button>Sapphire</Button></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle btn btn-link" data-bs-toggle="dropdown" aria-expanded="false">Memoria</button>
                            <ul className="category dropdown-menu">
                                <li><Button>Kingston</Button></li>
                                <li><Button>Corsair</Button></li>
                                <li><Button>Adata</Button></li>
                                <li><Button>Patriot</Button></li>
                            </ul>
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <Button className="btn btn-outline-info" type="submit">Buscar</Button>
                    </form>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;