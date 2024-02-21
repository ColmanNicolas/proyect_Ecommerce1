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

            axios.get(`http://localhost:4000/productos/${id}`).then((result) => {
                
                setValue('name', result.data.name)
                setValue('brand', result.data.brand)
                setValue('price', result.data.price)
                setValue('description', result.data.description)
                setValue('stock', result.data.stock)
            });
        }
    }, []);

    const borrarProducto = async () =>{
        const response = await axios.delete(`http://localhost:4000/productos/${id}`);
        console.log('Elemento borrado:', response.data);
        navigate("/productos");    
    }
    
    const enviarFormularrio = async (inputsData) =>{
        if(accion==="modificar"){
            const response = await axios.put(`http://localhost:4000/productos/${id}`, inputsData).then((response)=>{
                console.log('Elemento modificado:', response.data);
                navigate(`/productos/ver/${response.data.name + "-"+ response.data.brand + "-" + id }`);
            })

        }else if (accion ==="agregar") {
            axios.post(`http://localhost:4000/productos`,inputsData).then((response)=>{
                console.log(response.data);        
                navigate(`/productos/ver/${response.data.name + "-"+ response.data.brand + "-" + response.data.id }`);
            })
            }                  
            reset();
        } 
    
    return (      
        <form className="bg-dark text-white fw-semibold px-3 py-2 outlineNegro " style={{ width: "500px", marginInline: "auto ", marginBlock: "50px", borderRadius: "10px" }}
        onSubmit={handleSubmit(enviarFormularrio)}>
            <div className="pt-2">
                <h2 className="ps-2 text-center">{accion === 'modificar'? "MODIFICAR PRODUCTO":"AÑADIR PRODUCTO"}</h2>
            </div>
            <hr className="mx-4" />
            <div className="">
                <label htmlFor="nombreProducto" className="form-label">Producto</label>
                <input type="text" className="form-control" placeholder="Ingrese el nombre del producto" id="nombreProducto" {...register('name', {
                    required: true,
                })
                } />
            </div>
            {errors.name && errors.name.type === "required" && <p className="formatoErros">Este campo no puede quedar vacío</p>}
            <div className="mt-2">
                <label htmlFor="marcaProducto" className="form-label">Marca</label>
                <input type="text" className="form-control" placeholder="Ingrese la marca del producto" id="marcaProducto"{...register('brand', {
                    required: true,                 
                })
                } />
            </div>

            {errors.brand && errors.brand.type === "required" && <p className="formatoErros">Este campo no puede quedar vacío</p>}

            <div className="mt-2">
                <label htmlFor="precioProducto" className="form-label">Precio</label>
                <input type="number" className="form-control" placeholder="Ingrese el precio del producto" id="precioProducto"{...register('price', {
                    required: true,
                    pattern:/^[1-9]\d*$/,
                })
                } />
            </div>

            {errors.price && errors.price.type === "required" && <p className="formatoErros">Este campo no puede quedar vacío</p>}
            {errors.price && errors.price.type === "pattern" && <p className="formatoErros">Ingrese una cantidad válida</p>}

            <div className="mt-2">
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

            {errors.description && errors.description.type === "required" && <p className="formatoErros">Este campo no puede quedar vacío</p>}

            <div className="mt-2">
                <label htmlFor="stockProducto" className="form-label">Stock</label>
                <input type="number" className="form-control" placeholder="Ingrese el stock disponible del producto" id="stockProducto"{...register('stock', {
                    required: true,
                    pattern:/^[1-9]\d*$/,
                })
                } />
            </div>

            {errors.stock && errors.stock.type === "required" && <p className="formatoErros">Este campo no puede quedar vacío</p>}
            {errors.stock && errors.stock.type === "pattern" && <p className="formatoErros">Ingrese una cantidad valida</p>}

            <hr className="mx-4 mt-4" />
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