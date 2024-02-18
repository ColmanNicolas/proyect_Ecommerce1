import { NavLink } from "react-router-dom";
import FormularioRegistro from "../../components/FormularioRegistro";
import '../../components/formulario.css'
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
const Registro = () => {

    return (
        <>
            <Navbar />
            <div className="d-flex justify-content-center my-5">
                <FormularioRegistro />
            </div>
            <Footer/>
        </>
    )
};
export default Registro;