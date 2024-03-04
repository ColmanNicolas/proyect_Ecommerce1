import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./clasesGenerales.css"


const TarjetaProducto = () => {
    const completeInformation = useParams();
    const partes = completeInformation.selected.split("-");
    const id = partes[partes.length - 1];

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/products/${id}`).then((result) => {
            setProduct(result.data);
        });
    }, []);
    return (
        <div className="conteiner-fluid d-flex mt-5 justify-content-center ">
            <div className="col-12 col-sm-7 col-md-4  bg-dark text-white p-3 outlineNegro" style={{ width: "450px", borderRadius: "10px" }}>
                <h2 className="fw-bold text-center">{product.name}</h2>
                <hr />
                <div className="d-flex justify-content-center ">
                    <div className="bg-secondary d-flex flex-column text-white p-2 outlineNegro">
                        <span>Imagen no disponible</span>
                        <span>Imagen no disponible</span>
                        <span>Imagen no disponible</span>
                        <span>Imagen no disponible</span>
                        <span>Imagen no disponible</span>
                    </div>
                </div>
                <hr />
                <p className="fs-5" >Marca: {product.brand}</p>
                <p>Descripcion: {product.description}</p>
                <p>Categoria: {product.category}</p>
                <div className="d-flex flex-row align-items-center">
                    <p>Stock: {product.stock} unidades.</p>
                    <p className="ms-auto me-3 fs-5">Precio: $ {product.price}</p>
                </div>
                <hr />
                <div className=" d-flex justify-content-between ">
                    <Link to={"/productos"} className="text-decoration-none btn btn-primary fw-semibold">Volver</Link>
                    <Link to={"*"} className="text-decoration-none btn btn-success fw-semibold">comprar</Link>
                </div>

            </div>
        </div>
    )
}
export default TarjetaProducto;