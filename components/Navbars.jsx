import { Link, NavLink } from "react-router-dom";
import './clasesGenerales.css'
import { faker } from "@faker-js/faker";

const Navbar = () => {


    return (
        <nav className="fondoAzulprimario d-flex align-items-center" style={{ borderBottom: "2px solid black" }}>
            <Link to={"/home"} className="fs-1  ps-3 pe-3 fw-bold text-white my-1"><img className="dropShadowImg" src="../src/assets/logo.png" style={{ width: "160px", height: "60px" }} /></Link>
            <NavLink to={"/home"} className="mx-2 navLinkItems">Inicio</NavLink>
            <NavLink to={"/vendedores"} className="navLinkItems">Vendedores</NavLink>
            <NavLink to={"/productos"} className="mx-2 navLinkItems">Productos</NavLink>
            <NavLink to={"/about"} className="navLinkItems">Informacion</NavLink>
            <NavLink to={"/pagina404"} className="ms-auto px-2 navLinkItems me-2">Mi Cuenta</NavLink>
            <div className="d-flex align-items-center me-3">
                <button type="button" className="rounded-5 carritoButton position-relative" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent" >
                    <i className="bi bi-cart-check  "></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger px-2 py-1">
                        {faker.number.int({ min: 0, max: 12 })}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item fw-semibold" href="#">Ver mi carrito</a></li>
                    <li><a className="dropdown-item fw-semibold" href="#">Seguir un envío</a></li>
                    <li><a className="dropdown-item fw-semibold" href="#">contacto vendedor</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item fw-semibold" href="#">Hacer un reclamo</a></li>
                </ul>
            </div>
        </nav>
    );
}

const NavbarLandingPage = () => {
    return (
        <nav className="fondoAzulprimario d-flex align-items-center" style={{ borderBottom: "2px solid black" }}>
            <Link to={"/home"} className="fs-1  ps-3 pe-3 fw-bold text-white my-1"><img className="dropShadowImg" src="../src/assets/logo.png" style={{ width: "160px", height: "60px" }} /></Link>
            <NavLink to={"/registro"} className="ms-auto navLinkItems">Registrarse</NavLink>
            <NavLink to={"/login"} className="mx-2 navLinkItems">Ingresar</NavLink>
        </nav>
    );
}
export { Navbar, NavbarLandingPage };