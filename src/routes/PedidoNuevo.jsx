import React, { useEffect, useContext } from 'react'
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

    const { recargarProductos } = useContext(CarroDeComprasContext);
    const [tercero, setTercero] = useState({
        nombre: 'Seleccione un tercero',
    });
    const [signupEmail, setSignupEmail] = useState('');
    const [fechaActual, setFechaActual] = useState('');
    const [fechaDeEntrega, setFechaDeEntrega] = useState('');
    const [isOpenTercero, setIsOpenTercero] = useState(false)
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState("");


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


    const handleLogin = (e) => {
        e.preventDefault();
        const iniciarSesion = {
            username: loginUsername,
            password: loginPassword,
        }

        setIsError(true);
        setError("Usuario no registrado o contraseña incorrecta");
    };

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


    const handleTerceroSeleccionado = (terceroNombre) => {
        setTercero(terceroNombre);
        setIsOpenTercero(false);
    };

    const generarIDPedido = () => {
        const idPedido = Math.floor(Math.random() * 100) + Math.random().toString(36).substr(2, 9)
        return idPedido
    }

    const realizarConfirmacion = (e) => {
        e.preventDefault();
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
                    html: `<div><p>Cotización realizada satisfactoriamente</p><p>Ref: <b>${generarIDPedido().toUpperCase()}</b></p></div>`,
                    icon: 'success',
                    confirmButtonColor: '#009b3e',
                });
                recargarProductos();
                localStorage.clear();
            }
        })
    }

    return (
        <div className='pedidoNuevo'>
            <h2 className='titulo'>Nueva Cotización</h2>
            <form className='form-pedidoNuevo' onSubmit={realizarConfirmacion}>
                <div onClick={togglePopupTecero} className="input-container input-container-tercero">
                    <img src={iconoUsuario} className="custom-icon" />
                    <p className='pedidoNuevoPTercero'>{tercero.nombre}</p>
                </div>
                {isOpenTercero && (
                    <Terceros
                        togglePopupTecero={togglePopupTecero}
                        handleTerceroSeleccionado={handleTerceroSeleccionado}
                    />
                )}
                <div className="input-container">
                    <img src={iconoCorreo} className="custom-icon" />
                    <input
                        type="email"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        placeholder="Ingrese su e-mail"
                    />
                </div>

                <div className="input-container input-select-pedidoNuevo">
                    <img src={formaPagoIco} className="custom-icon" />
                    <select
                        className='estilosForm select-pedidoNuevo'
                        name='role'
                        id='role'
                    >
                        <option className='option-pedidoNuevo' value={undefined}>Forma de Pago</option>
                        {formaDePago.map((opcion, index) => (
                            <option className='option-pedidoNuevo' key={index + 1} value={opcion.id}>{opcion.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className="input-container input-select-pedidoNuevo">
                    <img src={listaDePreciosIco} className="custom-icon" />
                    <select
                        className='estilosForm select-pedidoNuevo'
                        name='role'
                        id='role'
                    >
                        <option className='option-pedidoNuevo' value={undefined}>Lista de Precios</option>
                        {listaDePrecios.map((opcion, index) => (
                            <option className='option-pedidoNuevo' key={index + 1} value={opcion.id}>{opcion.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className="input-container input-select-pedidoNuevo">
                    <img src={tipoFacturaIco} className="custom-icon" />
                    <select
                        className='estilosForm select-pedidoNuevo'
                        name='role'
                        id='role'
                    >
                        <option className='option-pedidoNuevo' value={undefined}>Tipo de Pedido</option>
                        {tipoDeFactura.map((opcion, index) => (
                            <option className='option-pedidoNuevo' key={index + 1} value={opcion.id}>{opcion.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className="input-container input-container-date">
                    <img src={iconoCalendario} className="custom-icon" />
                    <input
                        type="date"
                        className='input-date'
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