
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import TarjetaProducto from "../../components/TarjetaProducto";



const PaginaVerProducto = () => {

    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <div>
                    <Navbar />
                    <TarjetaProducto />
                </div>
                <div className="mt-auto">
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default PaginaVerProducto;