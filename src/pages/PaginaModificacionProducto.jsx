import Footer from "../../components/Footer";
import FormularioModificacion from "../../components/FormularioModificacion";
import Navbar from "../../components/Navbar";

const PaginaModificacionProducto = () => {
    FormularioModificacion
    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <div>
                    <Navbar />
                    <FormularioModificacion />
                </div>
                <div className="mt-auto">
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default PaginaModificacionProducto;