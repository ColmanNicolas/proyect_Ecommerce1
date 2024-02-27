
import { useEffect } from "react";
import CajaComentariosProductos from "../../components/CajaComentariosProductos";
import Footer from "../../components/Footer";
import { Navbar } from  "../../components/Navbars";
import TarjetaProducto from "../../components/TarjetaProducto";
import "../../components/clasesGenerales.css"


const PaginaVerProducto = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <div>
                    <Navbar />
                    <TarjetaProducto />
                    <CajaComentariosProductos />
                </div>
                <div className="mt-auto">
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default PaginaVerProducto;