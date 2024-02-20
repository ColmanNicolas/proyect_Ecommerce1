
import "./clasesGenerales.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ContenedorTarjetasHome = () => {
    function generarAleatorio() {
        return Math.random() - 0.5;
    }

    const categorias = ["MEDICINA", "COMPUTADORAS", "CONSTRUCCION", "VEHICULOS", "BELLEZA", "CELULARES", "ELECTRODOMESTICOS", "BICICLETAS", "DEPORTE", "BAZAR"];
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriasAleatorias = categorias.sort(generarAleatorio);
                const categoriasLimitadas = categoriasAleatorias.splice(0, 5);
                
                const requests = categoriasLimitadas.map(categoria =>
                    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${categoria}`)
                );
                const responses = await Promise.all(requests);
                const productosPorCategoria = responses.map((response, index) => ({
                    categoria: categoriasLimitadas[index],
                    productos: response.data.results
                }));
                productosPorCategoria.forEach(categoria => {
                    categoria.productos.sort(generarAleatorio);
                });
                setProductos(productosPorCategoria);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            {productos.map((categoriaProductos, index) => (
                <div key={index} className=" bg-primary mx-auto mt-5 outlineNegro" style={{ height: "400px", width: "60%", borderRadius: "10px" }}>
                    <h1 className="text-center bg-dark my-3 py-3 text-white ">{categoriaProductos.categoria}</h1>
                    <div className="conteiner d-flex justify-content-evenly mt-4">
                        {categoriaProductos.productos.slice(0, 4).map((product, productIndex) => (
                            <Link to={product.permalink} key={productIndex} className="bg-dark d-flex flex-column align-items-between px-2 outlineNegro text-decoration-none" style={{ height: "250px", width: "200px", borderRadius: "10px" }}>
                                <div style={{ height: "150px", width: "120px", overflow: "hidden", marginTop: "10px", marginInline: "auto" }}>
                                    <img className="outlineNegro" src={product.thumbnail} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} />
                                </div>
                                <hr className="text-white" />
                                <div className="">
                                    <p className="text-white w-100 text-decoration-none" style={{ fontSize: "16px", lineHeight: "1.2", maxHeight: "2.4em", overflow: "hidden", textOverflow: "ellipsis" }}>{product.title}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default ContenedorTarjetasHome;
