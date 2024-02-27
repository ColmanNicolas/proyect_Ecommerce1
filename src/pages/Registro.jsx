
import FormularioRegistro from "../../components/FormularioRegistro";
import '../../components/formulario.css'
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registro = () => {
    const navigate = useNavigate();
    const [respuestaAxios, setRespuestaAxios] = useState(null);

    const handleRespuestaAxios = (respuesta,codigo) => {     
            notify(respuesta,codigo);      
    }

    const notify = (respuesta,codigo) => {       
        if(codigo===0){
            toast.success(respuesta);
            setTimeout(() => {
                navigate('/login');
            }, 2500);
        }else{
            toast.error(respuesta);
        }
    }

    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <Navbar />
                <div className=" d-flex justify-content-center" style={{marginTop:"4%",marginBottom:"7%"}}>
                    <FormularioRegistro onRespuestaAxios={handleRespuestaAxios}/>
                </div>
                <Footer />
            </div>
        </>
    )
};
export default Registro;