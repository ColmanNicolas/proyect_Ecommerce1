import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";


const Login = ( ) =>{
    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <div>
                    <Navbar />
                    <div className="mt-5 d-flex justify-content-center">                    
                    </div>
                </div>
                <div className="mt-auto">
                    <Footer />
                </div>
            </div>
        </>
    )
};
export default Login;