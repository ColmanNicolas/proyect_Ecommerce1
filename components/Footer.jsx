import "./clasesGenerales.css"

const Footer = ()=>{
    return (
        <div className="fondoAzulprimario d-flex mt-5 outlineNegro">
            <div className="fondoAzulprimario col-4 ">
                <h1 className="  text-center text-white py-1" >Contacto</h1>
            </div>
            <div className="bg-dark text-white col-4 d-flex justify-content-center  pt-3">
                <p>© 2024 proyect, Inc.</p>
            </div>
            <div className="fondoAzulprimario  col-4 py-1">
                <h1 className="text-center text-white">Links</h1>
            </div>
        </div>
    )
}
export default Footer;