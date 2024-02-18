import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import BuscadorMeLi from "../../components/BuscadorMeLi";
import "../../components/clasesGenerales.css"
import ContenedorTarjetasHome from "../../components/ContenedorTarjetasHome";
const Home = () => {

    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <Navbar />
                <BuscadorMeLi />
                <ContenedorTarjetasHome />
                <div className="mt-auto">
                    <Footer />
                </div>
            </div>
        </>
    )
};
export default Home;