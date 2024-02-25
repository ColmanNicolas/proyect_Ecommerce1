import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";

import axios from "axios";
import './formulario.css'



const formularioRegistro = ({ onRespuestaAxios }) => {

    const {
        handleSubmit,
        register,
        formState: { errors },
        watch,
        reset,
    } = useForm();
    
    const [showPassword, setShowPassword] = useState(false);
    
    const visibilidadContraseña = () => {
        setShowPassword(!showPassword);
    };

    const enviarFormulario = async (data) => {
        try {
            await axios.post(`http://localhost:4000/api/register`, data).then((response)=>{
                onRespuestaAxios(response.data.message, 0);
            })
        } catch (error) {
            if (error.response && error.response.status === 400) {
                onRespuestaAxios(error.response.data.message, 1);
            } else {
                console.error("Ocurrió un error durante la solicitud: ", error);
            }
        }
    }
    

    return (<>
    
        <div><Toaster/></div>
        <form
            className="contenedorformulario p-3 outlineNegro text-white"
            onSubmit={handleSubmit(enviarFormulario)}
        >
            <h3 className="my-2 text-white">FORMULARIO DE REGISTRO</h3>
            <div className="lineaDivisora"></div>
            <div className="mb-3">
                <label htmlFor="nombreRegistro" className="form-label fw-semibold">
                    Nombre Completo
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="nombreRegistro"
                    {...register("nombreRegistro", {
                        required: true,
                        minLength: 6,
                        maxLength: 30,
                        pattern: /^[a-zA-Z\s']+$/,
                    })}
                />
                {errors.nombreRegistro && (
                    <>
                        {errors.nombreRegistro.type === "required" && (
                            <p className="formatoErros">
                                Ingrese su nombre
                            </p>
                        )}
                        {errors.nombreRegistro.type === "minLength" && (
                            <p className="formatoErros">
                                Nombre muy corto
                            </p>
                        )}
                        {errors.nombreRegistro.type === "maxLength" && (
                            <p className="formatoErros">
                                Nombre muy largo
                            </p>
                        )}
                        {errors.nombreRegistro.type === "pattern" && (
                            <p className="formatoErros">
                                Nombre contiene caracteres inválidos
                            </p>
                        )}
                    </>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="correoRegistro" className="form-label fw-semibold">
                    Correo Electronico
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="correoRegistro"
                    {...register("correoElectronico", {
                        required: true,
                        maxLength: 35,
                    })}
                />
                {errors.correoElectronico && (
                    <p className="formatoErros">
                        ingrese su correo electronico
                    </p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="contraseñaRegistro" className="form-label fw-semibold">
                    Contraseña
                </label>
                <div className="d-flex">
                    <input
                        type={showPassword ? "text" : "password"} 
                        className="form-control"
                        id="contraseñaRegistro"
                        {...register("contraseñaRegistro", {
                            required: true,
                            minLength: 8,
                            maxLength: 30,
                            pattern: /^(?=.*[A-Z])(?=.*\d).+$/,
                        })}
                        style={{ borderRadius: "10px 0 0 10px " }}
                    />
                    <button type="button" className=" bg-dark px-2 text-white fw-bold"
                        onClick={visibilidadContraseña}
                        style={{ borderRadius: "0 10px 10px 0 " }}> {showPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>} </button>
                </div>
                {errors.contraseñaRegistro && (
                    <>
                        {errors.contraseñaRegistro.type === "required" && (
                            <p className="formatoErros">
                                Ingrese una contraseña
                            </p>
                        )}
                        {errors.contraseñaRegistro.type === "minLength" && (
                            <p className="formatoErros">
                                Debe tener al menos 8 caracteres
                            </p>
                        )}
                        {errors.contraseñaRegistro.type === "maxLength" && (
                            <p className="formatoErros">
                                No puede superar los 25 caracteres
                            </p>
                        )}
                        {errors.contraseñaRegistro.type === "pattern" && (
                            <p className="formatoErros">
                                La contraseña no es válida
                            </p>
                        )}
                    </>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="contraseñaRegistroRep" className="form-label fw-semibold">
                    Repetir Contraseña
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="contraseñaRegistroRep"
                    {...register("contraseñaRegistroRep", {
                        required: true,
                        validate: (value) => value === watch("contraseñaRegistro"),
                    })}
                />
                {errors.contraseñaRegistroRep && (
                    <>
                        {errors.contraseñaRegistroRep.type === "required" && (
                            <p className="formatoErros">
                                Ingrese una contraseña
                            </p>
                        )}
                        {errors.contraseñaRegistroRep.type === "validate" && (
                            <p className="formatoErros">
                                Las contraseñas no coinciden
                            </p>
                        )}
                    </>
                )}
            </div>
            <div className="lineaDivisora"></div>
            <p className="p-2 bg-primary text-white " style={{ borderRadius: "7px", fontSize: "0.9rem", fontWeight: "600" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                corrupti dignissimos quisquam, error excepturi hic, quaerat tempora
                laboriosam sequi distinctio optio, nemo omnis. Quod corrupti incidunt
                alias voluptatem totam tempore.
            </p>
            <div className="text-end">
                <button type="submit" className="btn btn-dark border-white">
                    Enviar
                </button>
            </div>
        </form>
        </>
    );
};

export default formularioRegistro;


