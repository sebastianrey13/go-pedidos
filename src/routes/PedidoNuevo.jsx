import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/pedidoNuevo.css'
import '../css/loginSingUp.css'

import { useState } from 'react';
import CardError from '../componentes/CardError.jsx'

import cerrar from '../../public/cerrar.png'
import iconoUsuario from '../../public/iconousuario.svg'
import iconoCorreo from "../../public/iconocorreo.svg"
import iconoCalendario from "../../public/calendario.png"
import formaPagoIco from "../../public/monedas.png"
import listaDePreciosIco from "../../public/lista-de-precios.png"
import tipoFacturaIco from "../../public/hoja-de-calculo.png"
import Terceros from '../componentes/Terceros';
import Swal from 'sweetalert2';
import { CarroDeComprasContext } from '../componentes/utils/CarroDeComprasContext.jsx';


const PedidoNuevo = () => {

    const navigate = useNavigate();
    const { recargarProductos } = useContext(CarroDeComprasContext);
    const [fechaActual, setFechaActual] = useState('');
    const [isOpenTercero, setIsOpenTercero] = useState(false)
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState("");

    const [tercero, setTercero] = useState({ nombre: 'Seleccione un tercero' });
    const [email, setEmail] = useState('');
    const [formaDePagoSeleccionada, setFormaDePagoSeleccionada] = useState('Forma de Pago');
    const [listaPrecioSeleccionada, setListaPrecioSeleccionada] = useState('Lista de Precios');
    const [tipoFacturaSeleccionada, setTipoFacturaSeleccionada] = useState('Tipo de Pedido');
    const [fechaDeEntrega, setFechaDeEntrega] = useState('');

    const [campoTerceroRequerido, setCampoTerceroRequerido] = useState(false);
    const [campoEmailRequerido, setCampoEmailRequerido] = useState(false);
    const [campoFormaPagoRequerido, setCampoFormaPagoRequerido] = useState(false);
    const [campoListaPreciosRequerido, setCampoListaPreciosRequerido] = useState(false);
    const [campoTipoFacturaRequerido, setCampoTipoFacturaRequerido] = useState(false);
    const [campoFechaDeEntregaRequerido, setCampoFechaDeEntregaRequerido] = useState(false);

    const formaDePago = [
        {
            id: 1,
            nombre: 'Efectivo',
        },
        {
            id: 2,
            nombre: 'Credito 15 días',
        },
        {
            id: 3,
            nombre: 'Credito 30 días',
        },
        {
            id: 4,
            nombre: 'Pago en linea PSE',
        },
    ]

    const listaDePrecios = [
        {
            id: 1,
            nombre: 'Lista de precios - Medellin',
        },
        {
            id: 2,
            nombre: 'Lista de precios - Cali',
        },
        {
            id: 3,
            nombre: 'Lista de precios - Bogota',
        },
        {
            id: 4,
            nombre: 'Lista de precios - Bucaramanga',
        },
    ]

    const tipoDeFactura = [
        {
            id: 1,
            nombre: 'Factura',
        },
        {
            id: 2,
            nombre: 'Remisión',
        },
    ]


    useEffect(() => {
        obtenerFechaActual()
    }, [tercero])

    const obtenerFechaActual = () => {
        let hoy = new Date();
        let dia = hoy.getDate();
        let mes = hoy.getMonth() + 1;
        let anio = hoy.getFullYear();

        dia = (dia < 10) ? "0" + dia : dia;
        mes = (mes < 10) ? "0" + mes : mes;

        const fechaActualString = anio + "-" + mes + "-" + dia;
        setFechaActual(fechaActualString); // Actualizar el estado con la fecha actual
    };

    const togglePopupTecero = () => {
        setIsOpenTercero(!isOpenTercero)
    }

    const generarIDPedido = () => {
        const idPedido = Math.floor(Math.random() * 100) + Math.random().toString(36).substr(2, 9)
        return idPedido
    }

    const esRequerido = () => {
        setCampoTerceroRequerido(false);
        setCampoEmailRequerido(false);
        setCampoFormaPagoRequerido(false);
        setCampoListaPreciosRequerido(false);
        setCampoTipoFacturaRequerido(false);
        setCampoFechaDeEntregaRequerido(false);
        setIsError(false);
    }

    const clearForm = () => {
        setTercero({ nombre: 'Seleccione un tercero' });
        setEmail('');
        setFormaDePagoSeleccionada('Forma de Pago');
        setListaPrecioSeleccionada('Lista de Precios');
        setTipoFacturaSeleccionada('Tipo de Pedido');
        setFechaDeEntrega('');
    }

    const handleTerceroSeleccionado = (terceroNombre) => {
        esRequerido();
        setTercero(terceroNombre);
        setIsOpenTercero(false);
    };

    const handleFormaDePagoChange = (event) => {
        esRequerido();
        const valorSeleccionado = event.target.value;
        setFormaDePagoSeleccionada(valorSeleccionado);
    };

    const handleListaPreciosChange = (event) => {
        esRequerido();
        const valorSeleccionado = event.target.value;
        setListaPrecioSeleccionada(valorSeleccionado);
    };

    const handleTipoFacturaChange = (event) => {
        esRequerido();
        const valorSeleccionado = event.target.value;
        setTipoFacturaSeleccionada(valorSeleccionado);
    };

    const handleFechaDeEntregaChange = (event) => {
        esRequerido();
        const nuevaFecha = event.target.value;
        setFechaDeEntrega(nuevaFecha);
    };


    const realizarConfirmacion = (e) => {
        e.preventDefault();
        obtenerFechaActual();

        if (tercero.nombre === 'Seleccione un tercero') {
            esRequerido();
            setIsError(true);
            setError('Tercero es requerido');
            setCampoTerceroRequerido(true);
        } else if (email === '') {
            esRequerido();
            setIsError(true);
            setError('correo electrónico es requerido');
            setCampoEmailRequerido(true);
        } else if (formaDePagoSeleccionada === 'Forma de Pago') {
            esRequerido();
            setIsError(true);
            setError('Forma de pago es requerido');
            setCampoFormaPagoRequerido(true);
        } else if (listaPrecioSeleccionada === 'Lista de Precios') {
            esRequerido();
            setIsError(true);
            setError('Lista de precios es requerido');
            setCampoListaPreciosRequerido(true);
        } else if (tipoFacturaSeleccionada === 'Tipo de Pedido') {
            esRequerido();
            setIsError(true);
            setError('Tipo de factura es requerido');
            setCampoTipoFacturaRequerido(true);
        } else if (fechaDeEntrega === '') {
            esRequerido();
            setIsError(true);
            setError('Fecha de entrega es requerido');
            setCampoFechaDeEntregaRequerido(true);
        } else {
            const idPedido = generarIDPedido().toUpperCase();
            console.log(idPedido)
            Swal.fire({
                title: 'Go Pedidos',
                html: `<p>¿Realizar Cotización?</p>`,
                icon: 'question',
                showDenyButton: true,
                confirmButtonText: 'Si',
                confirmButtonColor: '#009b3e'
            }).then((respuesta) => {
                if (respuesta.isConfirmed) {
                    Swal.fire({
                        title: 'Go Pedidos',
                        html: `<div><p>Cotización realizada satisfactoriamente</p><p>Ref: <b>${idPedido}</b></p></div>`,
                        icon: 'success',
                        confirmButtonColor: '#009b3e',
                    });
                    recargarProductos();
                    clearForm();

                    const productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];

                    // Obtén el array actual de cotizacionesRealizadas desde localStorage
                    const cotizacionesRealizadas = JSON.parse(localStorage.getItem('cotizacionesRealizadas')) || [];

                    const nuevaCotizacion = {
                        id: idPedido,
                        tercero: tercero,
                        email: email,
                        formaDePago: formaDePagoSeleccionada,
                        listaPrecios: listaPrecioSeleccionada,
                        tipoFactura: tipoFacturaSeleccionada,
                        fechaDeEntrega: fechaDeEntrega,
                        fechaActual: fechaActual,
                        productosCotizados: productosEnCarrito,
                    }

                    // Agrega productosEnCarrito a cotizacionesRealizadas
                    cotizacionesRealizadas.push(nuevaCotizacion);

                    // Almacena el nuevo array cotizacionesRealizadas en localStorage
                    localStorage.setItem('cotizacionesRealizadas', JSON.stringify(cotizacionesRealizadas));

                    // Opcional: Limpia el array productosEnCarrito (si es necesario)
                    localStorage.setItem('productosEnCarrito', JSON.stringify([]));

                    navigate('/historial')
                }
            })
        }
    }

    return (
        <div className='pedidoNuevo'>
            <h2 className='titulo'>Nueva Cotización</h2>
            <form className='form-pedidoNuevo' onSubmit={realizarConfirmacion}>
                <div onClick={togglePopupTecero} className={`input-container input-container-tercero ${campoTerceroRequerido === true ? 'inputRequerido' : ''}`}>
                    <img src={iconoUsuario} className="custom-icon" />
                    <p className='pedidoNuevoPTercero'>{tercero.nombre}</p>
                </div>
                {isOpenTercero && (
                    <Terceros
                        togglePopupTecero={togglePopupTecero}
                        handleTerceroSeleccionado={handleTerceroSeleccionado}
                    />
                )}
                <div className={`input-container ${campoEmailRequerido === true ? 'inputRequerido' : ''}`}>
                    <img src={iconoCorreo} className="custom-icon" />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            esRequerido();
                            setEmail(e.target.value)
                        }}
                        placeholder="Ingrese su e-mail"
                    />
                </div>

                <div className={`input-container input-select-pedidoNuevo ${campoFormaPagoRequerido === true ? 'inputRequerido' : ''}`}>
                    <img src={formaPagoIco} className="custom-icon" />
                    <select
                        className='estilosForm select-pedidoNuevo'
                        name='formaDePago'
                        id='formaDePago'
                        onChange={handleFormaDePagoChange}
                        value={formaDePagoSeleccionada}
                    >
                        <option className='option-pedidoNuevo' value='Forma de Pago'>Forma de Pago</option>
                        {formaDePago.map((opcion, index) => (
                            <option className='option-pedidoNuevo' key={index + 1} value={opcion.nombre}>{opcion.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className={`input-container input-select-pedidoNuevo ${campoListaPreciosRequerido === true ? 'inputRequerido' : ''}`}>
                    <img src={listaDePreciosIco} className="custom-icon" />
                    <select
                        className='estilosForm select-pedidoNuevo'
                        name='listaPrecios'
                        id='listaPrecios'
                        onChange={handleListaPreciosChange}
                        value={listaPrecioSeleccionada}
                    >
                        <option className='option-pedidoNuevo' value='Lista de Precios'>Lista de Precios</option>
                        {listaDePrecios.map((opcion, index) => (
                            <option className='option-pedidoNuevo' key={index + 1} value={opcion.nombre}>{opcion.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className={`input-container input-select-pedidoNuevo ${campoTipoFacturaRequerido === true ? 'inputRequerido' : ''}`}>
                    <img src={tipoFacturaIco} className="custom-icon" />
                    <select
                        className='estilosForm select-pedidoNuevo'
                        name='tipoFactura'
                        id='tipoFactura'
                        onChange={handleTipoFacturaChange}
                        value={tipoFacturaSeleccionada}
                    >
                        <option className='option-pedidoNuevo' value="Tipo de Pedido">Tipo de Pedido</option>
                        {tipoDeFactura.map((opcion, index) => (
                            <option className='option-pedidoNuevo' key={index + 1} value={opcion.nombre}>{opcion.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className={`input-container input-container-date ${campoFechaDeEntregaRequerido === true ? 'inputRequerido' : ''}`}>
                    <img src={iconoCalendario} className="custom-icon" />
                    <p className={`pedidoNuevoFechaEntrega ${campoFechaDeEntregaRequerido === true ? 'inputRequerido' : ''}`}>Fecha de entrega:</p>
                    <input
                        type="date"
                        className='input-date'
                        onChange={handleFechaDeEntregaChange}
                        value={fechaDeEntrega}
                    />
                </div>
                {isError && (
                    <CardError
                        className='cardError'
                        info={error}
                    />
                )}
                <button className="botonFinzalizar" type="submit">Finalizar Cotización</button>
            </form>
        </div>
    )
}

export default PedidoNuevo