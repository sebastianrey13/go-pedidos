import React, { useState, useEffect, useContext } from 'react'
import { CarroDeComprasContext } from './utils/CarroDeComprasContext.jsx'

import papelera from '../../public/papelera.png'


const CardProductoCarro = (props) => {

    const { objetosArray, recargarProductos, eliminarObjetoArray } = useContext(CarroDeComprasContext);

    const formatearNumero = (precio) => {
        const precioRedondeado = Number.parseFloat(precio).toFixed(2);
        const partes = precioRedondeado.split('.');
        const parteEntera = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        const parteDecimal = partes[1] ? `,${partes[1]}` : '';
        const resultado = parteEntera + parteDecimal;
        return resultado;
    }

    const eliminarProductoCarro = () => {
        eliminarObjetoArray(props.id);
    }

    return (
        <div className='cardProductoCarro'>
            <div className='cardProductoCarroContainer1'>
                <img className='cardProductoCarroContainer1Img' src={props.img} alt="" />
            </div>
            <div className='cardProductoCarroContainer2'>
                <h3><b>{props.nombre}</b></h3>
                <p>Ref: {props.referencia}</p>
                <p>Color: {props.color}</p>
                <p>Talla: {props.talla}</p>
                <p><b>x {props.unidades}</b></p>
            </div>
            <div className='cardProductoCarroContainer3'>
                <p><b>$</b><span className='CardProducoCarroPrecio'>{formatearNumero(props.precio * props.unidades)}</span></p>
                <img onClick={eliminarProductoCarro} className='CardProducoCarroPrecioPapeleraIco' src={papelera} alt="" />

            </div>
        </div>
    )
}

export default CardProductoCarro


