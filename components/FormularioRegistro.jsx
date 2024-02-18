import { useForm } from "react-hook-form";

import './formulario.css'


const formularioRegistro = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
        watch,
    } = useForm();

    const enviarFormulario = (data) => {
        console.log(data);
    };

    return (
        <form
            className="contenedorformulario p-3 sombracomponentes bg-dark text-white"
            onSubmit={handleSubmit(enviarFormulario)}
        >
            <h3 className="my-2 text-white">FORMULARIO DE REGISTRO</h3>
            <div className="lineaDivisora"></div>
            <div className="mb-3">
                <label htmlFor="nombreRegistro" className="form-label fw-semibold">
                    Nombre
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
                            <p className="text-white bg-danger d-inline-block px-2 mt-1 fw-bold ">
                                Ingrese su nombre
                            </p>
                        )}
                        {errors.nombreRegistro.type === "minLength" && (
                            <p className="text-white bg-danger d-inline-block px-2 mt-1 fw-bold">
                                Nombre muy corto
                            </p>
                        )}
                        {errors.nombreRegistro.type === "maxLength" && (
                            <p className="text-white bg-danger d-inline-block px-2 mt-1 fw-bold">
                                Nombre muy largo
                            </p>
                        )}
                        {errors.nombreRegistro.type === "pattern" && (
                            <p className="text-white bg-danger d-inline-block px-2 mt-1 fw-bold">
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
                        maxLength: 30,
                    })}
                />
                {errors.correoElectronico && (
                    <p className="text-white bg-danger d-inline-block px-2 mt-1 fw-bold">
                        ingrese su correo electronico
                    </p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="contraseñaRegistro" className="form-label fw-semibold">
                    Contraseña
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="contraseñaRegistro"
                    {...register("contraseñaRegistro", {
                        required: true,
                        minLength: 8,
                        maxLength: 30,
                        pattern: /^(?=.*[A-Z])(?=.*\d).+$/,
                    })}
                />
                {errors.contraseñaRegistro && (
                    <>
                        {errors.contraseñaRegistro.type === "required" && (
                            <p className="text-white bg-danger d-inline-block px-2 mt-1 fw-bold">
                                Ingrese una contraseña
                            </p>
                        )}
                        {errors.contraseñaRegistro.type === "minLength" && (
                            <p className="text-white bg-danger d-inline-block px-2 mt-1 fw-bold">
                                Debe tener al menos 8 caracteres
                            </p>
                        )}
                        {errors.contraseñaRegistro.type === "maxLength" && (
                            <p className="text-white bg-danger d-inline-block px-2 mt-1 fw-bold">
                                No puede superar los 25 caracteres
                            </p>
                        )}
                        {errors.contraseñaRegistro.type === "pattern" && (
                            <p className="text-white bg-danger d-inline-block px-2 mt-1 fw-bold">
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
                            <p className="text-white bg-danger d-inline-block px-2 mt-1 fw-bold">
                                Ingrese una contraseña
                            </p>
                        )}
                        {errors.contraseñaRegistroRep.type === "validate" && (
                            <p className="text-white bg-danger d-inline-block px-2 mt-1 fw-bold">
                                Las contraseñas no coinciden
                            </p>
                        )}
                    </>
                )}
            </div>
            <div className="lineaDivisora"></div>
            <p className="p-2 bg-secondary text-white ">
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
    );
};

export default formularioRegistro;


