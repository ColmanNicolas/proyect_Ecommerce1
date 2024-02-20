import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContenedorVendedores from "../../components/ContenedorVendeores";

const Vendedores = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <ContenedorVendedores />
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    )
};
export default Vendedores;