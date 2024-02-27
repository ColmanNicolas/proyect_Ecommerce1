import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Home from "./pages/Home";
import About from "./pages/About";
import Pagina404 from "./pages/Pagina404";
import Products from "./pages/Products";
import PaginaVerProducto from "./pages/PaginaVerProducto";
import PaginaProductosMeLi from "./pages/PaginaProductosMeli";
import PaginaModificacionProducto from "./pages/PaginaModificacionProducto";
import Vendedores from "./pages/Vendedores";


function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="login"/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<Login /> }/>
            <Route path="/registro" element={<Registro />} />
            <Route path="/vendedores" element={<Vendedores />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/productos/ver/:selected" element={<PaginaVerProducto />} />
            <Route path="/productos/modificacion/:target" element={<PaginaModificacionProducto/>} />
            <Route path="/paginaproductosmeli/:busqueda" element={<PaginaProductosMeLi />} />
            <Route path="*" element={<Pagina404 />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>;
}
export default App;
