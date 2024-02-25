
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import "./clasesGenerales.css"
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
                <div key={index} className="bg-primary mx-auto mt-5 outlineNegro" style={{ height: "400px", width: "60%", borderRadius: "10px" }}>
                    <h1 className="text-center bg-dark my-3 py-3 text-white">{categoriaProductos.categoria}</h1>

                    <Swiper className="" modules={[EffectFade, Navigation, Pagination, Scrollbar, A11y]} effect="fade"
                        spaceBetween={10}
                        slidesPerView={4} // Ajuste aquí para mostrar 4 tarjetas por vista
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}>
                        {categoriaProductos.productos.map((product, productIndex) => (
                            <SwiperSlide key={productIndex} >
                                <Link to={product.permalink} className="" >
                                    <div style={{width:"200px"}}>
                                        <img className="outlineNegro" src={product.thumbnail} alt="" style={{ width: "200px",borderRadius: "10px" }} />
                                    </div>
                                    <hr className="text-white" />
                                    <div className="">
                                        <p className="text-white w-100 text-decoration-none" style={{ fontSize: "16px", lineHeight: "1.2", maxHeight: "2.4em", overflow: "hidden", textOverflow: "ellipsis" }}>{product.title}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ))}
        </>

    );
};

export default ContenedorTarjetasHome;
