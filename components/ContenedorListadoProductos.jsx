import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ContenedorListadoProductos = () => {

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/products').then((result) => {
            console.log(result.data);
            setProductsList(result.data);
        });
    }, []);

    return (
        <div style={{ width: "1000px", color: "White", marginInline: "auto", borderRadius: "10px" }} className=" my-5 outlineNegro conteiner pb-3 bg-dark">
            <h1 className="text-center pt-4 pb-2" >LISTADO DE PRODUCTOS</h1>
            <hr />
            <div className="d-flex justify-content-between mx-4" >
                <button className="btn btn-primary fw-semibold ">Filtrar por Categoria</button>
                <Link to={`/productos/modificacion/agregar-nuevo`} className="btn btn-primary fw-semibold me-5">Agregar Producto</Link>
            </div>
            <hr />
            <table className="table table-hover table-dark mt-5 " >
                <thead >
                    <tr>
                        <th className="ps-4" scope="col">PRODUCTO</th>
                        <th scope="col">MARCA</th>
                        <th scope="col">PRECIO</th>
                        <th className="text-center ps-5" scope="col">ACCIONES</th>
                    </tr>
                </thead>
                {productsList.map((product, index) => {
                    return <tbody key={product._id}>
                        <tr>
                            <td className=" ps-4 pt-3">{product.name}</td>
                            <td className=" pt-3">{product.brand}</td>
                            <td className=" pt-3">$ {product.price}</td>
                            <td className=" text-end pe-5">
                                <Link to={`/productos/ver/${product.name + "-" + product.brand + "-" + product._id}`} className="btn btn-primary px-4 fw-semibold">Ver</Link>
                                <Link to={`/productos/modificacion/modificar-${product.name + "-" + product._id}`} className="btn btn-danger ms-2 fw-semibold">Modificar</Link>
                            </td>
                        </tr>
                    </tbody>
                })}
            </table>
            <div className="d-flex justify-content-center mt-4"> 
            <nav aria-label=" Page navigation example ">
                <ul className="pagination bg-dark">
                    <li className="page-item">
                        <a className="page-link fw-bold " href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item active"><a className="page-link fw-bold text-dark" href="#">1</a></li>
                    <li className="page-item"><a className="page-link fw-bold text-dark" href="#">2</a></li>
                    <li className="page-item"><a className="page-link fw-bold text-dark" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link fw-bold " href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
            </div>
        </div>
    )
}
export default ContenedorListadoProductos;