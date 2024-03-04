import { Link } from "react-router-dom";
import "./clasesGenerales.css"

const Footer = () => {
    return (
        <div className="fondoFooter row mt-5 outlineNegro">
            <div className=" py-4 col-12 col-md-4">
                <h2 className="  text-center text-white py-1" >Legal</h2>
                <div className="lineaDivisora w-50 mx-auto"></div>
                <ul className="text-center text-white d-flex flex-column text-decoration-none ps-0">
                    <Link className="mt-1 text-decoration-none text-white">Terminos y Condiciones</Link>
                    <Link className="mt-1 text-decoration-none text-white">Privacidad</Link>
                    <Link className="mt-1 text-decoration-none text-white">Avisos Legales</Link>
                    <Link className="mt-1 text-decoration-none text-white">Devoluciones y Reemplacos</Link>
                    <Link className="mt-1 text-decoration-none text-white">Tarifas de Envío y Políticas</Link>
                </ul>
            </div>
            <div className=" text-white col-12 col-md-4 d-flex justify-content-center align-items-end mb-3">
                <div className=" text-center ">
                    <Link className="btn text-white fs-3"><i className="bi bi-github"></i></Link>
                    <Link className="btn text-white fs-3"><i className="bi bi-trello"></i></Link>
                    <Link className="btn text-white fs-3"><i className="bi bi-twitter-x"></i></Link>
                    <Link className="btn text-white fs-3"><i className="bi bi-slack"></i></Link>
                    <p className="text-center mt-2">© 2024 Proyect Ecommerce, Inc. <i className="bi bi-lightning"></i></p>
                </div>
            </div>
            <div className=" py-4 col-12 col-md-4">
                <h2 className="text-center text-white w-75 mx-auto">Centro de Ayuda</h2>
                <div className="lineaDivisora w-50 mx-auto"></div>
                <ul className="text-center text-white d-flex flex-column ps-0">
                    <Link className="mt-1 text-decoration-none text-white">Preguntas Frecuentes </Link>
                    <Link className="mt-1 text-decoration-none text-white">Contacto</Link>
                    <Link className="mt-1 text-decoration-none text-white">Blog</Link>
                    <Link className="mt-1 text-decoration-none text-white">Empleo</Link>
                    <Link className="mt-1 text-decoration-none text-white">Contacto</Link>
                </ul>
            </div>
        </div>
    )
}
export default Footer;