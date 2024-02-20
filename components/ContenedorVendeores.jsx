import axios from "axios";
import { useEffect, useState } from "react";
import "./clasesGenerales.css"
const ContenedorVendedores = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character").then((result) => {
            setUsuarios(result.data.results);
            console.log(result.data);
        })
    }, [])
    return (
        <div className="mt-5 mx-auto bg-primary outlineNegro" style={{ width: "900px",borderRadius:"10px" }}>
              <h1 className="text-center bg-dark my-3 py-3 text-white ">Vendedores Destacados</h1>
            <div className="row px-4">
                {usuarios.map((usuario, index) => {
                    return (
                        <div key={usuario.id} className="col-md-4 mb-4 ">
                            <div className="d-flex flex-column bg-dark justify-content-center align-items-center outlineNegro pt-3" style={{borderRadius:"10px" }}>
                                <img src={usuario.image} alt="" style={{ width: "200px",borderRadius:"10px" }}/>
                                <p className=" fw-semibold text-white mt-2">{usuario.name}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

    )
}
export default ContenedorVendedores;