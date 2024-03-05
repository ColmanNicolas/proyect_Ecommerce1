import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? 'blue' : 'white', // Cambiar el color de fondo del control
        color: state.isSelected ? 'white' : 'black', // Cambiar el color del texto seleccionado
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? 'blue' : 'white', // Cambiar el color de fondo de las opciones
        color: state.isSelected ? 'white' : 'black', // Cambiar el color del texto de las opciones seleccionadas
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'black', // Cambiar el color del texto de la opción seleccionada
    }),
};

const options = [
    { value: 'herramientas', label: 'Herramientas' },
    { value: 'computacion', label: 'Computación' },
    { value: 'celulares', label: 'Celulares' },
    { value: 'vehiculos', label: 'Vehículos' },
    { value: 'vestimenta', label: 'Vestimenta' },
    { value: 'alimentos', label: 'Alimentos' },
    { value: 'jardineria', label: 'Jardineria' },
    { value: 'deportes', label: 'Deportes' },
    { value: 'muebles', label: 'Muebles' },
    { value: 'juguetes', label: 'Juguetes' },
    { value: 'electrodomesticos', label: 'Electrodomesticos' },
    { value: 'libros', label: 'Libros' },
];


const SelectCrearProducto = ({ name, control }) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => (
                <Select
                    {...field}
                    options={options}
                    isClearable
                    placeholder="Selecciona una categoría"
                    isSearchable
                    styles={customStyles}
                />
            )}
        />
    );
}

export default SelectCrearProducto;