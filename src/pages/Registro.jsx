import { NavLink } from "react-router-dom";
import FormularioRegistro from "../../components/FormularioRegistro";
import '../../components/formulario.css'
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
const Registro = () => {

    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <div>
                    <Navbar />
                    <div className="mt-5 d-flex justify-content-center">
                        <FormularioRegistro />
                    </div>
                </div>
                <div className="mt-auto">
                    <Footer />
                </div>
            </div>
        </>
    )
};
export default Registro;