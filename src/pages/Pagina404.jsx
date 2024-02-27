import { Link } from "react-router-dom";
import "../../components/clasesGenerales.css"
const Pagina404 = () => {
    
    return (
        <>
            <div className="min-vh-100 d-flex justify-content-center align-items-center text-white ">
                <div>
                    <hr />
                    <h1 className="text-center">ERROR 404</h1>
                    <hr />
                    <h3>Pagina No encontrada</h3>
                    <div className="text-center mt-4">
                    <Link to={"home"} className="btn btn-dark border-white fw-semibold fondoAzulprimario">Volver a Home</Link>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Pagina404;