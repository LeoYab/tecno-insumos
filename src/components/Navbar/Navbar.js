import "./Navbar.scss";
import logo from "./assets/Logo.png";
import CartWidget from "../CartWidget/CartWidget";
import Button from "../Button/Button"
import { Link } from "react-router-dom";
import Search from "../Search/search";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link to="/" className="navbar-brand me-auto p-2"><img className="logo me-2" src={logo} alt="Logo" />Tecno-Insumos</Link>

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
                        <Link to = {"/category/discos"}><Button className="nav-link dropdown-toggle btn btn-link" data-bs-toggle="dropdown" aria-expanded="false">Discos</Button></Link>
                            <ul className="category dropdown-menu">
                                <li><Link to = "/category/discos/d_hdd"><Button>HDD</Button></Link></li>
                                <li><Link to = "/category/discos/d_ssd"><Button>SSD</Button></Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                        <Link to={"/category/motherboards"}><Button className="nav-link dropdown-toggle btn btn-link" data-bs-toggle="dropdown" aria-expanded="false">Motherboard</Button></Link>
                            <ul className="category dropdown-menu">
                                <li><Link to="/category/motherboards/mb_asus"><Button>Asus</Button></Link></li>
                                <li><Link to="/category/motherboards/mb_gigabyte"><Button>Gigabyte</Button></Link></li>
                                <li><Link to="/category/motherboards/mb_msi"><Button>MSI</Button></Link></li>
                                <li><Link to="/category/motherboards/mb_asrock"><Button>AsRock</Button></Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                        <Link to={"/category/cpu"}><Button className="nav-link dropdown-toggle btn btn-link" data-bs-toggle="dropdown" aria-expanded="false">CPU</Button></Link>
                            <ul className="category dropdown-menu">
                                <li><Link to="/category/cpu/c_amd"><Button>AMD</Button></Link></li>
                                <li><Link to="/category/cpu/c_intel"><Button>Intel</Button></Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                        <Link to={"/category/video"}><Button className="nav-link dropdown-toggle btn btn-link" data-bs-toggle="dropdown" aria-expanded="false">Placas de video</Button></Link>
                            <ul className="category dropdown-menu">
                                <li><Link to="/category/video/v_evga"><Button>EVGA</Button></Link></li>
                                <li><Link to="/category/video/v_asus"><Button>Asus</Button></Link></li>
                                <li><Link to="/category/video/v_gigabyte"><Button>Gigabyte</Button></Link></li>
                                <li><Link to="/category/video/v_sapphire"><Button>Sapphire</Button></Link></li>
                                <li><Link to="/category/video/v_zotac"><Button>Zotac</Button></Link></li>
                                <li><Link to="/category/video/v_msi"><Button>MSI</Button></Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                        <Link to={"/category/memorias"}><Button className="nav-link dropdown-toggle btn btn-link" data-bs-toggle="dropdown" aria-expanded="false">Memoria</Button></Link>
                            <ul className="category dropdown-menu">
                                <li><Link to="/category/memoria/m_kingston"><Button>Kingston</Button></Link></li>
                                <li><Link to="/category/memoria/m_corsair"><Button>Corsair</Button></Link></li>
                                <li><Link to="/category/memoria/m_gskill"><Button>G.Skill</Button></Link></li>
                            </ul>
                        </li>
                    </ul>
             
                     <Search />

                </div>
            </div>
        </nav>
    )
}

export default Navbar;