import Footer from "../../components/Footer";
import FormularioLogin from "../../components/FormularioLogin";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarLandingPage } from "../../components/Navbars";

const Login = () => {
    const navigate = useNavigate();
    const [respuestaAxios, setRespuestaAxios] = useState(null);
    
    const handleRespuestaAxios = (respuesta,codigo) => {     
            notify(respuesta,codigo);      
    }

    const notify = (respuesta,codigo) => {       
        if(codigo===0){
            toast.success(respuesta);
            setTimeout(() => {
                navigate('/home');
            }, 2500);
        }else{
            toast.error(respuesta);
        }
    }


    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <NavbarLandingPage />
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />

                <div className="d-flex justify-content-center align-items-bottom " style={{ marginTop: "6%", marginBottom: "10%" }}>
                    <FormularioLogin onRespuestaAxios={handleRespuestaAxios}/>
                </div>
                
                <Footer />
            </div>
        </>
    )
};
export default Login;