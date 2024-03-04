import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams  } from "react-router-dom";
import "../components/clasesGenerales.css"
import { faker } from '@faker-js/faker';

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

            axios.get(`http://localhost:4000/api/products/${id}`).then((result) => {
                
                setValue('name', result.data.name)
                setValue('brand', result.data.brand)
                setValue('price', result.data.price)
                setValue('description', result.data.description)
                setValue('category', result.data.category)
                setValue('stock', result.data.stock)
            });
        }
    }, []);

    const generarProducto = ()=>{
        setValue('name', faker.commerce.product())
        setValue('brand', faker.company.name())
        setValue('price', faker.commerce.price({min: 1, max: 99999}))
        setValue('description', faker.commerce.productDescription())
        setValue('stock', faker.number.int({ min: 1, max: 1000 }) )

    }

    const borrarProducto = async () =>{
        const response = await axios.delete(`http://localhost:4000/api/products/${id}`);
        console.log('Elemento borrado:', response.data);
        navigate("/productos");    
    }
    
    const enviarFormularrio = async (inputsData) =>{
        if(accion==="modificar"){
            const response = await axios.put(`http://localhost:4000/api/products/${id}`, inputsData).then((response)=>{
                console.log('Elemento modificado:', response.data.producto);
                navigate(`/productos/ver/${response.data.name + "-"+ response.data.brand + "-" + id }`);
            })

        }else if (accion ==="agregar") {
            axios.post(`http://localhost:4000/api/products`,inputsData).then((response)=>{

                console.log(response.data._id);        
                navigate(`/productos/ver/${response.data.name + "-"+ response.data.brand + "-" + response.data._id }`);
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
                <input type="number" step="0.01"  className="form-control" placeholder="Ingrese el precio del producto" id="precioProducto"{...register('price', {
                    required: true,
                    pattern: /^[0-9]+(\.[0-9]{1,2})?$/,
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
                <label htmlFor="categoriaProducto" className="form-label">Categoria</label>
                <input type="text" className="form-control" placeholder="Ingrese la categoría del producto" id="categoriaProducto"{...register('category', {
                    required: true,
                    minLength: 3,
                    maxLength: 20,
                })
                } />
            </div>

            {errors.category && errors.category.type === "required" && <p className="formatoErros">Este campo no puede quedar vacío</p>}
            {errors.category && errors.category.type === "minLength" && <p className="formatoErros">categoria no valida</p>}
            {errors.category && errors.category.type === "maxLength" && <p className="formatoErros">categoria no valida</p>}

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
                { accion==="agregar" && <button type="button" className="btn btn-warning fw-semibold" onClick={generarProducto}>Generar Aleatorio</button>}
                { accion==="agregar" && <button type="submit" className="btn btn-success fw-semibold">Guardar Producto</button>}
                { accion==="modificar" && <button type="button" className="btn btn-danger fw-semibold" onClick={borrarProducto}>Eliminar</button>} 
            </div>       
        </form>
    )
}
export default FormularioModificacion;