import React from 'react'
import '../css/loginSingUp.css'

import { useState, useEffect } from 'react';
import CardError from './CardError';
import cerrar from '../../public/cerrar.png'
import iconoUsuario from '../../public/iconousuario.svg'
import iconoContrasena from '../../public/iconocontrasena.svg'
import iconoCorreo from "../../public/iconocorreo.svg"
import telefonoIco from "../../public/telefono_ico.png"
import iconoRol from "../../public/iconorol.png"

const SingUp = (props) => {

    const [error, setError] = useState("")
    // const [signupUser, setSignupUser] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
    const [signupName, setSignupName] = useState('');
    const [signupLastName, setSignupLastName] = useState('');
    const [signupPhoneNumber, setSignupPhoneNumber] = useState('');
    const [rolSeleccionado, setRolSelecionado] = useState({
        id: 0,
        name: 'Selecciona tu rol',
    });

    const handleRolChange = (event) => {
        const selectedRolId = parseInt(event.target.value, 10); // Convertir a entero usando parseInt
        // Actualizar el estado con el id y nombre del rol seleccionado
        setRolSelecionado({
            id: selectedRolId,
            name: selectedRolId === 1 ? 'ADMIN' : 'USER', // Comparar con número en lugar de cadena
        });
    };

    const handleSignup = (e) => {
        e.preventDefault();
        
        if (signupPassword !== signupConfirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        if (!signupEmail || !signupPassword || !signupConfirmPassword ||
            !signupName || !signupLastName || !signupPhoneNumber) {
            setError('Todos los campos son obligatorios');
            return;
        }

        if(signupPassword === signupConfirmPassword && signupEmail || signupPassword || signupConfirmPassword ||
            signupName || signupLastName || signupPhoneNumber){
                setError('Crear usuario no esta disponible');
                return;
            }

        const registrarUsuario = {
            name: signupName,
            lastName: signupLastName,
            email: signupEmail,
            phoneNumber: signupPhoneNumber,
            password: signupPassword,
            enabled: 1,
            role: rolSeleccionado,
        };

    };

    return (
        <div className="popup-bg">
            <div className="popup popupSinup">
                <img onClick={props.cerrarPopup} className="close-button-img" src={cerrar} alt="Cerrar" />
                <h2 className="popup-title">Crear Cuenta</h2>
                <form onSubmit={handleSignup}>

                    {/* <div className="input-container">
                        <img src={iconoUsuario} className="custom-icon" />
                        <input
                            type="text"
                            value={signupUser}
                            onChange={(e) => setSignupUser(e.target.value)}
                            placeholder="Tu usuario"
                        />
                    </div> */}

                    <div className="input-container">
                        <img src={iconoCorreo} className="custom-icon" />
                        <input
                            type="email"
                            value={signupEmail}
                            onChange={(e) => setSignupEmail(e.target.value)}
                            placeholder="correo@example.com"
                        />
                    </div>

                    <div className="input-container">
                        <img src={iconoContrasena} className="custom-icon" />
                        <input
                            type="password"
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                            placeholder="Contraseña"
                        />
                    </div>
                    <div className="input-container">
                        <img src={iconoContrasena} className="custom-icon" />
                        <input
                            type="password"
                            value={signupConfirmPassword}
                            onChange={(e) => setSignupConfirmPassword(e.target.value)}
                            placeholder="Confirmar contraseña"
                        />
                    </div>

                    {/* ------------------------------------------------------------ */}

                    <div className="input-container">
                        <img src={iconoUsuario} className="custom-icon" />
                        <input
                            type="text"
                            value={signupName}
                            onChange={(e) => setSignupName(e.target.value)}
                            placeholder="Nombre"
                        />
                    </div>

                    <div className="input-container">
                        <img src={iconoUsuario} className="custom-icon" />
                        <input
                            type="text"
                            value={signupLastName}
                            onChange={(e) => setSignupLastName(e.target.value)}
                            placeholder="Apellido"
                        />
                    </div>

                    <div className="input-container">
                        <img src={telefonoIco} className="custom-icon" />
                        <input
                            type="number"
                            value={signupPhoneNumber}
                            onChange={(e) => setSignupPhoneNumber(e.target.value)}
                            placeholder="Telefono "
                        />
                    </div>

                    <div className="input-container">
                        <img src={iconoRol} className="custom-icon" />
                        <select
                            className='estilosForm'
                            name='role'
                            id='role'
                            value={rolSeleccionado.id}
                            onChange={handleRolChange}
                        >
                            <option value={''}>Escoja un Rol</option>
                            <option value='1'>ADMIN</option>
                            <option value='2'>USER</option>

                        </select>
                    </div>


                    <button className="boton botonIngreso" type="submit">Crear Cuenta</button>
                </form>
                <CardError
                    info={error}
                />
                <p className="registerLink">¿Ya tienes una cuenta? <span
                    className='registerLinkHere'
                    onClick={props.abrirLoginPopup}
                >Ingresa aquí</span>
                </p>
            </div>
        </div>
    );
}

export default SingUp