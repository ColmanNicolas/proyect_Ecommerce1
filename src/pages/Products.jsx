import { useState } from "react";
import Navbar from "../../components/Navbar"
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const Products = () => {

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/products').then((result) => {
            setProductsList(result.data);
        });
    }, []);

    return (
        <>
            <Navbar />
            <div style={{ width: "600px", color: "White", paddingBottom: "100px", marginInline: "auto", borderRadius: "10px" }} className=" my-4  conteiner  bg-dark">
                <h1 className="text-center pt-4 pb-2" >LISTADO DE PRODUCTOS</h1>
                <hr />
                <div className="text-end" >
                    <Link to={`/productos/modificacion/agregar-nuevo`} className="btn btn-primary fw-semibold me-4">Agregar Producto</Link>
                </div>
                <hr />
                <ul className="ps-0">
                    {productsList.map((product) => {
                        return <ol key={product.id} className="d-flex align-items-center mb-1">
                            <div>
                                <Link to={`${product.name + "-" + product.brand + "-" + product.id}`} className="text-white fs-5 text-decoration-none ">{product.name}  </Link>
                            </div>
                            <div className="ms-auto me-4">
                                <Link to={`/productos/ver/${product.name + "-" + product.brand + "-" + product.id}`} className="btn btn-primary px-3 fw-semibold">Ver</Link>
                                <Link to={`/productos/modificacion/modificar-${product.name + "-" + product.id}`} className="btn btn-danger ms-2 d-inline-block">Modificar</Link>
                            </div>
                        </ol>
                    })}
                </ul>
            </div>
            <Footer />
        </>
    )
}

export default Products;