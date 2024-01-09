import React, { useEffect } from 'react'
import '../css/pedidoNuevo.css'

import { useState } from 'react';

import cerrar from '../../public/cerrar.png'
import iconoUsuario from '../../public/iconousuario.svg'
import iconoCorreo from "../../public/iconocorreo.svg"
import iconoRol from "../../public/iconorol.png"
import formaPagoIco from "../../public/monedas.png"
import listaDePreciosIco from "../../public/lista-de-precios.png"
import tipoFacturaIco from "../../public/hoja-de-calculo.png"






const PedidoNuevo = () => {

    const [tecero, setTercero] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [fechaActual, setFechaActual] = useState('');
    const [rolSeleccionado, setRolSelecionado] = useState({
        id: 0,
        name: 'Selecciona tu rol',
    });


    const [isError, setIsError] = useState(false);

    const [userId, setUserId] = useState(null);
    const [error, setError] = useState("")

    const handleRolChange = (event) => {
        const selectedRolId = parseInt(event.target.value, 10); // Convertir a entero usando parseInt
        // Actualizar el estado con el id y nombre del rol seleccionado
        setRolSelecionado({
            id: selectedRolId,
            name: selectedRolId === 1 ? 'ADMIN' : 'USER', // Comparar con número en lugar de cadena
        });
    };

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
    }, [tecero])

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


    return (
        <div className='pedidoNuevo'>
            <h2>Nueva Cotización</h2>
            <form className='form-pedidoNuevo' onSubmit={handleLogin}>
                <div className="input-container input-pedidoNuevo">
                    <img src={iconoUsuario} className="custom-icon" />
                    <input
                        type="text"
                        value={tecero}
                        onChange={(e) => setTercero(e.target.value)}
                        placeholder="Escoja un tercero"
                    />
                </div>

                <div className="input-container input-pedidoNuevo">
                    <img src={iconoCorreo} className="custom-icon" />
                    <input
                        type="email"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        placeholder="Ingrese su e-mail"
                    />
                </div>

                <div className="input-container input-pedidoNuevo input-select-pedidoNuevo">
                    <img src={formaPagoIco} className="custom-icon" />
                    <select
                        className='estilosForm select-pedidoNuevo'
                        name='role'
                        id='role'
                        value={rolSeleccionado.id}
                        onChange={handleRolChange}
                    >
                        <option className='option-pedidoNuevo' value={undefined}>Forma de Pago</option>
                        {formaDePago.map((opcion, index) => (
                            <option className='option-pedidoNuevo' key={index + 1} value={opcion.id}>{opcion.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className="input-container input-pedidoNuevo input-select-pedidoNuevo">
                    <img src={listaDePreciosIco} className="custom-icon" />
                    <select
                        className='estilosForm select-pedidoNuevo'
                        name='role'
                        id='role'
                        value={rolSeleccionado.id}
                        onChange={handleRolChange}
                    >
                        <option className='option-pedidoNuevo' value={undefined}>Lista de Precios</option>
                        {listaDePrecios.map((opcion, index) => (
                            <option className='option-pedidoNuevo' key={index + 1} value={opcion.id}>{opcion.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className="input-container input-pedidoNuevo input-select-pedidoNuevo">
                    <img src={tipoFacturaIco} className="custom-icon" />
                    <select
                        className='estilosForm select-pedidoNuevo'
                        name='role'
                        id='role'
                        value={rolSeleccionado.id}
                        onChange={handleRolChange}
                    >
                        <option className='option-pedidoNuevo' value={undefined}>Tipo de Pedido</option>
                        {tipoDeFactura.map((opcion, index) => (
                            <option className='option-pedidoNuevo' key={index + 1} value={opcion.id}>{opcion.nombre}</option>
                        ))}
                    </select>
                </div>


                {/* <div className="input-container input-pedidoNuevo">
                    <img src={iconoUsuario} className="custom-icon" />
                    <input
                        type="date"
                        value={fechaActual}
                        // onChange={(e) => setFechaActual(e.target.value)}
                        placeholder="Fecha Actual"
                        disabled={true}
                    />
                </div> */}

                {isError && (
                    <CardError
                        className='cardError'
                        info={error}
                    />
                )}
                <button className="boton botonIngreso" type="submit">Realizar Pedido</button>
            </form>
        </div>
    )
}

export default PedidoNuevo