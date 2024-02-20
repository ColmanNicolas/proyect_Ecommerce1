import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import BuscadorMeLi from "../../components/BuscadorMeLi";
import "../../components/clasesGenerales.css"


const PaginaProductosMeLi = () => {
    const [products, setProductList] = useState([]);
    const object = useParams();

    useEffect(() => {
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${object.busqueda}`).then((result) => {
            setProductList(result.data.results);
            console.log(result.data.results);
        });
    }, [object.busqueda]); // Aquí se especifica que el useEffect se ejecutará cada vez que object.busqueda cambie

    return (
        <div className="d-flex flex-column min-vh-100 bg-terciary">
            <Navbar />
            <BuscadorMeLi />
            <div className="my-4 mx-auto w-75 bg-primary text-white p-4 d-flex " style={{ borderRadius: "10px" }}>
                <div className="w-25 me-4  min-vh-100 bg-dark pt-3 px-3" style={{ borderRadius: "10px 0 0 10px" }} >
                    <hr className=" mb-2 text-primary " />
                    <h1 className=" ps-1 fs-3 m-0 p-0 ">Filtros</h1>
                    <hr className=" my-2 text-primary" />
                </div>
                <div className="w-76 bg-dark" style={{ borderRadius: "0px 10px 10px 0" }}>
                    {products.map((producto, index) => (
                        <div key={producto.id}>
                            <div className="ms-auto w-100 py-3 px-5 d-flex align-items-center">
                                <div className="d-flex justify-content-center pe-5">
                                    <img className="outlineNegro" src={producto.thumbnail} alt="Imagen del producto" width={130} height={150} style={{ borderRadius: "7px" }} />
                                </div>
                                <div className="w-100">
                                    <hr />
                                    <h1 className="ps-2 fs-4 pt-0 mt-0 w-100">{producto.title}</h1>
                                    <hr />
                                    <div className="d-flex align-items-center ps-2  fs-5">
                                        <p className="pe-2 fw-semibold">Vendedor:</p>
                                        <p className=""> {producto.seller.nickname}</p>
                                    </div>
                                    <p className="ps-2 fw-semibold">Condición: {producto.condition}</p>
                                    <div className="d-flex justify-content-between align-items-center px-2">
                                        <p className="pb-0 mb-0 fs-5">Precio: ${producto.price}</p>
                                        <Link to={producto.permalink} className="btn btn-dark border-primary fw-semibold border-2" >Comprar</Link>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            {index !== products.length - 1 && <hr className="text-primary border-2 " />}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    )
}

export default PaginaProductosMeLi;

