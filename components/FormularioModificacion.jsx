import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams  } from "react-router-dom";
import "../components/clasesGenerales.css"

const FormularioModificacion = () => {
    
    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue,
        reset,
    } = useForm();

    const navigate = useNavigate();

    const completeInformation = useParams();
    const partes = completeInformation.target.split("-");
    const accion = partes[0];
    const id = partes[partes.length - 1];

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
        navigate("/productos");    
    }
    
    const enviarFormularrio = async (inputsData) =>{
        if(accion==="modificar"){
            const response = await axios.put(`http://localhost:3000/products/${id}`, inputsData);
            console.log('Elemento modificado:', response.data);
            navigate(`/productos/ver/${inputsData.name + "-"+ inputsData.brand + "-" + id }`);

        }else if (accion ==="agregar") {
            await axios.get(`http://localhost:3000/products`).then((results)=>{
                const idNuevo = parseInt(results.data[results.data.length-1].id)+1;
                inputsData['id']=idNuevo.toString();           
            }).then(()=>{
                axios.post(`http://localhost:3000/products`,inputsData);
                console.log('Elemento creado:', inputsData);                 
            })                     
            navigate(`/productos/ver/${inputsData.name + "-"+ inputsData.brand + "-" + inputsData.id }`);
        } 
        reset();
    }
    return (      
        <form className="bg-dark text-white fw-semibold px-3 py-2 sombraComponente" style={{ width: "500px", marginInline: "auto ", marginBlock: "50px", borderRadius: "10px" }}
        onSubmit={handleSubmit(enviarFormularrio)}>
            <div className="pt-2">
                <h2 className="ps-2 text-center">{accion === 'modificar'? "MODIFICAR PRODUCTO":"AÑADIR PRODUCTO"}</h2>
            </div>
            <hr className="mx-4" />
            <div className="mb-3">
                <label htmlFor="nombreProducto" className="form-label">Producto</label>
                <input type="text" className="form-control" placeholder="Ingrese el nombre del producto" id="nombreProducto" {...register('name', {
                    required: true,
                })
                } />
            </div>
            <div className="mb-3">
                <label htmlFor="marcaProducto" className="form-label">Marca</label>
                <input type="text" className="form-control" placeholder="Ingrese la marca del producto" id="marcaProducto"{...register('brand', {
                    required: true,
                })
                } />
            </div>
            <div className="mb-3">
                <label htmlFor="precioProducto" className="form-label">Precio</label>
                <input type="number" className="form-control" placeholder="Ingrese el precio del producto" id="precioProducto"{...register('price', {
                    required: true,
                })
                } />
            </div>
            <div className="mb-3">
                <label htmlFor="descripcionProducto" className="form-label">Descripcion</label>
                <textarea placeholder="Ingrese una breve descripcion del producto"
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
                <input type="number" className="form-control" placeholder="Ingrese el stock disponible del producto" id="stockProducto"{...register('stock', {
                    required: true,
                })
                } />
            </div>
            <hr className="mx-4" />
            <div className="d-flex justify-content-between py-2 px-4">
                <Link to={"/productos"} className="btn btn-primary fw-semibold" >Volver</Link>
                { accion==="modificar" && <button type="submit" className="btn btn-dark border-white fw-semibold">Modificar</button>}
                { accion==="agregar" && <button type="submit" className="btn btn-success fw-semibold">Guardar Producto</button>}
                { accion==="modificar" && <button type="button" className="btn btn-danger fw-semibold" onClick={borrarProducto}>Eliminar</button>} 
            </div>       
        </form>
    )
}
export default FormularioModificacion;