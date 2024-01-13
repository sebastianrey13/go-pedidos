import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const CarroDeComprasContext = createContext();
// Crear el proveedor del contexto


const CarroDeComprasProvider = ({ children }) => {

    const [reloadArrayProductos, setReloadArrayProductos] = useState(false);
    const [objetosArray, setObjetosArray] = useState([]);

    const ObtenerProductosDelSessionStorage = () => {
        const productosEnCarrito = JSON.parse(sessionStorage.getItem('productosEnCarrito')) || [];
        return (
            setObjetosArray(productosEnCarrito)
        )
    };

    const recargarProductos = () => {
        setReloadArrayProductos((prev) => !prev);
    };

    useEffect(() => {

        ObtenerProductosDelSessionStorage();

    }, [reloadArrayProductos])


    const eliminarObjetoArray = (id) => {
        const nuevoArray = objetosArray.filter(objeto => objeto.id !== id);
        sessionStorage.clear();
        sessionStorage.setItem('productosEnCarrito', JSON.stringify(nuevoArray));
        setObjetosArray(nuevoArray);
    };

    return (
        <CarroDeComprasContext.Provider value={{ objetosArray, recargarProductos, eliminarObjetoArray }}>
            {children}
        </CarroDeComprasContext.Provider>
    )

}

export default CarroDeComprasProvider;