
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
    const [cantidadTarjetas, setCantidadTarjetas] = useState(null);
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

    const ajustarTarjetasCarrousel = () => {
        const anchoPantalla = window.innerWidth;
        if (anchoPantalla < 500 ) {
            setCantidadTarjetas(1);
        } else if (anchoPantalla >= 500 && anchoPantalla < 1000) {
            setCantidadTarjetas(2);
        } else if (anchoPantalla >= 1000 && anchoPantalla < 1300) {
            setCantidadTarjetas(3);
        } else {
            setCantidadTarjetas(4);
        }
    }
    window.addEventListener('resize', () => {
        ajustarTarjetasCarrousel();
    });

    useEffect(()=>{
        ajustarTarjetasCarrousel();
    },[])

    return (
        <>
            {productos.map((categoriaProductos, index) => (
                <div key={index} className=" contenedorTarjetasHome" >
                    <h1 className="text-center my-4 titulosCategorias py-2">{categoriaProductos.categoria}</h1>
                    <div className='mx-2'>
                        <Swiper modules={[Navigation, Scrollbar, A11y]}
                            spaceBetween={40}
                            slidesPerView={cantidadTarjetas}
                            navigation
                            scrollbar={{ draggable: true }}>
                            {categoriaProductos.productos.map((product, productIndex) => (
                                <SwiperSlide key={productIndex} >
                                    <Link className=' text-decoration-none  d-flex flex-column justify-content-center pt-2' to={product.permalink}>
                                        <div style={{ width: "60%", marginInline: "auto" }}>
                                            <img
                                                className="outlineNegro"
                                                src={product.thumbnail}
                                                alt=""
                                                style={{
                                                    width: "100%",
                                                    borderRadius: "10px",
                                                    maxHeight: "100%",
                                                    objectFit: "cover"
                                                }}
                                            />
                                        </div>
                                        <div className='d-flex justify-content-center w-100'>
                                            <div className='lineaDivisora mx-auto w-100 '></div>
                                        </div>
                                        <p className="text-white text-center w-100 text-decoration-none" style={{ fontSize: "16px", lineHeight: "1.2", maxHeight: "2.4em", overflow: "hidden", textOverflow: "ellipsis" }}>{product.title}</p>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            ))}
        </>

    );
};

export default ContenedorTarjetasHome;
