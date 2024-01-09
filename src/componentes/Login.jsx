import React from 'react'
import '../css/loginSingUp.css'

import { useState } from 'react';
import CardError from './CardError.jsx'
import cerrar from '../../public/cerrar.png'
import iconoUsuario from '../../public/iconousuario.svg'
import iconoContrasena from '../../public/iconocontrasena.svg'

const Login = (props) => {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const [userId, setUserId] = useState(null);
    const [error, setError] = useState("")

    const closeLoginPopup = () => {
        setError("");
        setIsError(false);
        setLoginUsername('');
        setLoginPassword('');
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const iniciarSesion = {
            username: loginUsername,
            password: loginPassword,
        }

        setIsError(true);
        setError("Usuario no registrado o contraseña incorrecta");
    };

    return (
        <div className="popup-bg">
            <div className="popup">
                <img onClick={props.cerrarPopup} className="close-button-img" src={cerrar} alt="Cerrar" />
                <h2 className="popup-title">Iniciar Sesión</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-container">
                        <img src={iconoUsuario} className="custom-icon" />
                        <input
                            type="text"
                            value={loginUsername}
                            onChange={(e) => setLoginUsername(e.target.value)}
                            placeholder="Tu usuario"
                        />
                    </div>

                    <div className="input-container">
                        <img src={iconoContrasena} className="custom-icon" />
                        <input
                            type="password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            placeholder="Contraseña"
                        />
                    </div>
                    {isError && (
                        <CardError
                            className='cardError'
                            info={error}
                        />
                    )}
                    <button className="boton botonIngreso" type="submit">Iniciar Sesión</button>
                </form>
                <p className="registerLink">¿No tienes una cuenta? <span
                    className='registerLinkHere'
                    onClick={props.abrirSinupPopup}
                >Regístrate aquí</span>
                </p>
            </div>
        </div>
    );
}

export default Login