import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";

import axios from "axios";
import './formulario.css'
import './clasesGenerales.css'



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
            await axios.post(`http://localhost:4000/api/register`, data).then((response) => {
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

        <div><Toaster /></div>
        <form
            className="contenedorformularioRegister  text-white"
            onSubmit={handleSubmit(enviarFormulario)}
        >
            <h3 className="my-2 text-white text-center pb-2 pt-3">FORMULARIO DE REGISTRO</h3>
            <div className="container px-4">
                <div className="lineaDivisora"></div>
                <div className="row  px-2">
                    <div className="mb-3 col-12 col-md-6">
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
                    <div className="mb-3 col-12 col-md-6">
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
                </div>

                <div className="row px-2">
                    <div className="mb-3 col-12 col-md-6">
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
                                style={{ borderRadius: "0 10px 10px 0 " }}> {showPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
                            </button>
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
                                        La contraseña no cumple los requisitos minimos de seguridad
                                    </p>
                                )}
                            </>
                        )}
                    </div>
                    <div className="mb-3 col-12 col-md-6">
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
                </div>
                <p className="px-2 " style={{ fontSize: "0.83rem" }}>La contraseña debe contener entre 8 y 25 caracteres e incluir al menos un carácter numérico una letra mayúscula.</p>
                <div className="lineaDivisora"></div>
                <div>

                    <p className="p-2 mx-2 bg-dark text-white " style={{ borderRadius: "7px", fontSize: "0.9rem", fontWeight: "600" }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                        corrupti dignissimos quisquam, error excepturi hic, quaerat tempora
                        laboriosam sequi distinctio optio, nemo omnis. Quod corrupti incidunt
                        alias voluptatem totam tempore.
                    </p>
                    <div className=" mx-2 d-flex align-items-center  justify-content-center">
                        <p className="m-0 p-0 pe-2" style={{ fontSize: "0.85rem" }}>Acepto los Términos de Uso y  la Política de Privacidad. </p>
                        <input className="form-check-input m-0 p-0" type="checkbox" value="" id="flexCheckChecked" {...register("terms",{required: true})}/>
                        <label className="form-check-label" htmlFor="flexCheckChecked"></label>
                        {errors.terms && (
                            <p className="formatoErros m-0 p-0 ms-2 px-2 ">
                                Confirmacion requerida
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center my-2">
                <button type="submit" className="btn buttonDecoration">
                    Enviar Formulario
                </button>
            </div>
        </form>
    </>
    );
};

export default formularioRegistro;


