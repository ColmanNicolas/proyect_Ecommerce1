
import { Navbar } from  "../../components/Navbars"

import Footer from "../../components/Footer";
import "../../components/clasesGenerales.css"
import ContenedorListadoProductos from "../../components/ContenedorListadoProductos";

const Products = () => {
    
    return (
        <>
            <Navbar />
            <ContenedorListadoProductos />         
            <Footer />
        </>
    )
}

export default Products;