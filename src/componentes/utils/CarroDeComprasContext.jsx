import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const CarroDeComprasContext = createContext();
// Crear el proveedor del contexto


const CarroDeComprasProvider = ({ children }) => {

    const [reloadArrayProductos, setReloadArrayProductos] = useState(false);
    const [objetosArray, setObjetosArray] = useState([]);
    const [precioNetoTotal, setPrecioNetoTotal] = useState(0);
    const [descuentoTotal, setDescuentoTotal] = useState(0);

    const ObtenerProductosDelLocalStorage = () => {
        const productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];
        return (
            setObjetosArray(productosEnCarrito)
        )
    };

    const recargarProductos = () => {
        setReloadArrayProductos((prev) => !prev);
    };

    useEffect(() => {

        ObtenerProductosDelLocalStorage();
        setPrecioNetoTotal(calcularPrecioCesta());
        setDescuentoTotal(calcularDescuentoCesta());

    }, [reloadArrayProductos])


    const eliminarObjetoArray = (id) => {
        const nuevoArray = objetosArray.filter(objeto => objeto.id !== id);
        localStorage.clear();
        localStorage.setItem('productosEnCarrito', JSON.stringify(nuevoArray));
        setObjetosArray(nuevoArray);
    };

    const calcularPrecioCesta = () => {
        let suma = 0;
        for (let i = 0; i < objetosArray.length; i++) {
            suma = suma + (objetosArray[i].precio * objetosArray[i].unidades);
        }
        return suma
    }

    const calcularDescuentoCesta = () => {
        let suma = 0;
        for (let i = 0; i < objetosArray.length; i++) {
            suma = suma + ((objetosArray[i].precio * objetosArray[i].unidades) * objetosArray[i].descuento);
        }
        return suma
    }





    return (
        <CarroDeComprasContext.Provider value={{ objetosArray, recargarProductos, eliminarObjetoArray, calcularPrecioCesta, calcularDescuentoCesta, precioNetoTotal, descuentoTotal }}>
            {children}
        </CarroDeComprasContext.Provider>
    )

}

export default CarroDeComprasProvider;