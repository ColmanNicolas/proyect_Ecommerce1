
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import './clasesGenerales.css'


const BuscadorMeLi = () => {
    const navigate = useNavigate();
    const {
        handleSubmit,
        register,

    } = useForm();
    const elemento = "celular";
    const realizarBusqueda = (data) => {
        navigate(`/paginaproductosmeli/${data.elemento}`)
    }
    return (
        <form onSubmit={handleSubmit(realizarBusqueda)} className="d-flex align-items-center justify-content-end py-3 bg-dark sombraComponente">
            <input className="form-control form-control-sm" type="text" placeholder="Ingrese un producto" style={{ width: "300px" }} {...register("elemento",{
                required:true,
                minLength: 3,
                maxLength: 20,
            }

            )}/>
            <button type="submit" className="btn btn-dark fw-semibold mx-2 border-primary border-2">Búsqueda en Mercado Libre</button>
        </form>
    )
}
export default BuscadorMeLi;