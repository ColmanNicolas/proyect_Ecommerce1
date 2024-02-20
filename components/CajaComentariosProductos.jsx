import axios from "axios";
import { useEffect, useState } from "react";


const CajaComentariosProductos = () => {

    function generarAleatorio() {
        return Math.random() - 0.5;
    }
    
    const [comentarios, setComentarios] = useState([]);
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((results) => {
            const comentariosAleatorios = [...results.data].sort(generarAleatorio);
            setComentarios(comentariosAleatorios);
            console.log(comentariosAleatorios);
        })
    }, []);
    
    return (
        <div className="bg-dark mx-auto mt-5 outlineNegro pt-2" style={{ width: "700px", borderRadius: "10px" }}>
            <hr className="text-white" />
            <div className=" px-3" >
                <h3 className="text-white ">Comentarios</h3>
            </div>
            <hr className="text-white" />
            <form className="px-2">
                <textarea className="w-100 px-1" name="" id="" placeholder="Ingrese un comentario..." rows="4" required></textarea>
                <div className="text-end">
                    <button className="btn btn-dark border-white" >Enviar</button>
                </div>
            </form>
            <hr className="text-white" />
            {comentarios.slice(0, 7).map((comentario) => (
                <div className="px-3" key={comentario.id}>
                    <div className="d-flex align-items-center justify-content-between ">
                        <h5 className="py-0 my-0 text-white fw-bold">{comentario.email}</h5>
                        <div>
                            <button className="btn btn-success py-0 my-0 mx-2">like <i className="bi bi-hand-thumbs-up"></i></button>
                            <button className="btn btn-danger py-0 my-0">dislike <i className="bi bi-hand-thumbs-down-fill"></i></button>
                        </div>
                    </div>
                    <div className="text-white mt-2">
                        <p className="">{comentario.body}</p>
                    </div>
                    <hr className="text-white" />
                </div>
            ))}
        </div>
    );
    
}
export default CajaComentariosProductos;