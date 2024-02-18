import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams  } from "react-router-dom";

const FormularioModificacion = () => {
    
    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue,
    } = useForm();

    const [product, setProduct] = useState([]);

    const completeInformation = useParams();
    const partes = completeInformation.target.split("-");
    const accion = partes[0];
    const id = partes[partes.length - 1];
    console.log(id + "    " + accion);


    useEffect(() => {

        if(accion==="modificar"){

            axios.get(`http://localhost:3000/products/${id}`).then((result) => {
                
                setValue('name', result.data.name)
                setValue('brand', result.data.brand)
                setValue('price', result.data.price)
                setValue('description', result.data.description)
                setValue('stock', result.data.stock)
            });
        }
    }, []);

    const borrarProducto = async () =>{
        const response = await axios.delete(`http://localhost:3000/products/${id}`);
        console.log('Elemento borrado:', response.data);
        setInterval(() => {
            
        }, 5000);
        return (response.data === undefined) ? true : false;

    }
    const enviarFormularrio = async (data) =>{
        const response = await axios.put(`http://localhost:3000/products/${id}`, data);
        console.log('Elemento modificado:', response.data);
    }
    return (
        <form className="bg-dark text-white fw-semibold px-3 pb-2" style={{ width: "500px", marginInline: "auto ", marginBlock: "50px", borderRadius: "10px" }}
        onSubmit={handleSubmit(enviarFormularrio)}>
            <div className="pt-2">
                <h2 className="ps-2 text-center">Modificar Producto</h2>
            </div>
            <hr className="mx-4" />
            <div className="mb-3">
                <label htmlFor="nombreProducto" className="form-label">Producto</label>
                <input type="text" className="form-control" id="nombreProducto" {...register('name', {
                    required: true,
                })
                } />
            </div>
            <div className="mb-3">
                <label htmlFor="marcaProducto" className="form-label">Marca</label>
                <input type="text" className="form-control" id="marcaProducto"{...register('brand', {
                    required: true,
                })
                } />
            </div>
            <div className="mb-3">
                <label htmlFor="precioProducto" className="form-label">Precio</label>
                <input type="number" className="form-control" id="precioProducto"{...register('price', {
                    required: true,
                })
                } />
            </div>
            <div className="mb-3">
                <label htmlFor="descripcionProducto" className="form-label">Descripcion</label>
                <textarea
                    className="form-control"
                    id="descripcionProducto"
                    {...register('description', {
                        required: true,
                    })}
                    rows="4"
                ></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="stockProducto" className="form-label">Stock</label>
                <input type="number" className="form-control" id="stockProducto"{...register('stock', {
                    required: true,
                })
                } />
            </div>
            <hr className="mx-4" />
            <div className="d-flex justify-content-evenly py-2">
                <Link to={"/productos"} className="btn btn-primary" >Volver</Link>
                <button type="submit" className="btn btn-dark border-white">Modificar</button>
                <Link to={"/productos"} className="btn btn-danger" onClick={borrarProducto}>Eliminar</Link> 
            </div>
        </form>

    )
}
export default FormularioModificacion;