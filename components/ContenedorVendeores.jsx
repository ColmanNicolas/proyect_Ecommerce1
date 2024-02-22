
import { useEffect, useState } from "react";
import "./clasesGenerales.css"
import { faker } from "@faker-js/faker";

const ContenedorVendedores = () => {

    const [usuarios, setUsuarios] = useState([]);
    const cantidadAleatoria = faker.number.int({ min: 10, max: 40 });
    const listaUsuarios = [];

    useEffect(() => {
        for (let i = 0; i <= cantidadAleatoria; i++) {
            const usuario = {
                id: faker.string.uuid(),
                nombre: faker.person.fullName(),
                fotoPerfil: faker.image.avatar(),
                direccion: faker.location.streetAddress(),
                ciudad: faker.location.city(),
                pais: faker.location.country(),
            }
            listaUsuarios.push(usuario);
        }
        setUsuarios(listaUsuarios);
        console.log(listaUsuarios);
    }, [])

    return (
        <div className="mt-5 mx-auto bg-primary outlineNegro" style={{ width: "900px", borderRadius: "10px" }}>
            <h1 className="text-center bg-dark my-3 py-3 text-white ">Vendedores Destacados</h1>
            <div className="row px-4">
                {usuarios.map((usuario, index) => {
                    return (
                        <div key={usuario.id} className="col-sm-6 col-md-4 mb-4 ">
                            <div className="d-flex flex-column bg-dark justify-content-center align-items-center  pt-3" style={{ borderRadius: "7px" }}>
                                <img src={usuario.fotoPerfil} alt="" style={{ width: "180px", borderRadius: "10px" }} />
                                <div className="w-100 d-flex  flex-column justify-content-center px-3">
                                    <div className="lineaDivisora w-100 mt-3 mb-0"></div>
                                    <p className=" text-center fw-semibold text-white fs-4 my-1" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>{usuario.nombre}</p>
                                    <div className="lineaDivisora w-100 mt-0"></div>
                                </div>
                                <p className=" fw-semibold text-white mb-0" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>{usuario.direccion + ", "}</p>
                                <p className=" fw-semibold text-white mt-0">{usuario.ciudad}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

    )
}
export default ContenedorVendedores;