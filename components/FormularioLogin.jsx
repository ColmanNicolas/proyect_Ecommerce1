import { useForm } from "react-hook-form";

import { useState } from "react";
import axios from "axios";

import './formulario.css'
import { Link } from "react-router-dom";

const formularioLogin = ({ onRespuestaAxios }) => {

    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    const visibilidadContraseña = () => {
        setShowPassword(!showPassword);
    };

    const enviarFormulario = async (data) => {
        try {
            const response = await axios.post(`http://localhost:4000/api/login`, data).then((response) => {
                onRespuestaAxios(response.data.message, 0);
                console.log("Token firmado: " ,response.data.token);
            })
        } catch (error) {
            if (error.response && error.response.status === 400) {
                onRespuestaAxios(error.response.data.message, 1);
            } else {
                console.error("Ocurrió un error durante la solicitud: ", error);
            }
        }
    }


    return (
        <form
            className="contenedorformularioLogin p-3  text-white"
            onSubmit={handleSubmit(enviarFormulario)}
        >

            <h3 className="my-2 text-white text-center">INICIAR SESION</h3>
            <div className="container">

                <div className="lineaDivisora"></div>
                <div className="mb-3 ">
                    <label htmlFor="correoRegistro" className="form-label fw-semibold">
                        Correo Electronico
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="correoRegistro"
                        {...register("correoElectronico", {
                            required: true,
                            maxLength: 30,
                        })}
                    />
                    {errors.correoElectronico && (
                        <p className="formatoErros">
                            ingrese su correo electronico
                        </p>
                    )}
                </div>
                <div className="mb-3 ">
                    <label htmlFor="contraseñaLogin" className="form-label fw-semibold">
                        Contraseña
                    </label>
                    <div className="d-flex">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            id="contraseñaLogin"
                            {...register("contraseñaLogin", {
                                required: true,
                                maxLength: 25,
                            })}
                            style={{ borderRadius: "10px 0 0 10px " }}
                        />
                        <button type="button" className=" bg-dark px-2 text-white fw-bold"
                            onClick={visibilidadContraseña}
                            style={{ borderRadius: "0 10px 10px 0 " }}> {showPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>} </button>
                    </div>
                    {errors.contraseñaLogin && (
                        <>
                            {errors.contraseñaLogin.type === "required" && (
                                <p className="formatoErros">
                                    Ingrese una contraseña
                                </p>
                            )}
                        </>
                    )}
                </div>

                <div className="lineaDivisora"></div>
            </div>
            <div className="text-center">
                <Link to={"pagina404"} className="text-white text-decoration-none">¿Perdiste tu contraseña?</Link>
                <div className="d-flex justify-content-center pt-2">
                    <p className="pe-1">¿No tienes cuenta?</p>
                    <Link to={"/registro"} className="fw-semibold text-decoration-none"> Resgistrate</Link>
                </div>
            </div>
            <div className=" d-flex justify-content-center">
                <button type="submit" className="btn buttonDecoration">
                    Ingresar
                </button>

            </div>
        </form>
    )
}
export default formularioLogin;