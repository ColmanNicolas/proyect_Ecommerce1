import "./clasesGenerales.css"

const Footer = ()=>{
    return (
        <div className="bg-primary d-flex mt-5 outlineNegro">
            <div className="bg-primary col-4">
                <h1 className="text-center" >Contacto</h1>
            </div>
            <div className="bg-dark text-white col-4 d-flex justify-content-center pt-3">
                <p>© 2024 proyect, Inc.</p>
            </div>
            <div className="bg-primary  col-4">
                <h1 className="text-center">Links</h1>
            </div>
        </div>
    )
}
export default Footer;