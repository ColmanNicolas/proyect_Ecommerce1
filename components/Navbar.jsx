import { NavLink } from "react-router-dom";
import './clasesGenerales.css'
const Navbar = () =>{
    return(
<nav className="bg-primary d-flex " style={{borderBottom:"2px solid black"}}>
    <div className="fs-1 py-1 px-2 fw-bold text-white ">LOGO</div>
    <NavLink to={"/home"} className="mx-2 navLinkItems">Inicio</NavLink>
    <NavLink to={"/vendedores"} className="navLinkItems">Vendedores</NavLink>
    <NavLink to={"/productos"} className="mx-2 navLinkItems">Productos</NavLink>
    <NavLink to={"/about"} className="navLinkItems">Informacion</NavLink>
    <NavLink to={"/registro"} className="ms-auto navLinkItems">Registrarse</NavLink>
    <NavLink to={"/login"} className="mx-2 navLinkItems">Ingresar</NavLink>
</nav>
    )
} 
export default Navbar;