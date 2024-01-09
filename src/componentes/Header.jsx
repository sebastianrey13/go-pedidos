import '../css/header.css'
import '../css/menuMobile.css'
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Login from './Login'
import SingUp from './SingUp';

import iconoBlanco from '../../public/icono_blanco.png'
import usuario from '../../public/usuario.png'
// import menu from '../../public/menu.png'
import MenuMobile from '../componentes/MenuMobile.jsx';


const Header = () => {

    const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
    const [isSignupPopupOpen, setSignupPopupOpen] = useState(false);
    // const [isMenu, setIsMenu] = useState(false);
    // const [desplegado, setDesplegado] = useState(false);

    const cerrarPopup = () => {
        setLoginPopupOpen(false)
        setSignupPopupOpen(false)
    }

    const abrirSinupPopup = () => {
        setLoginPopupOpen(false)
        setSignupPopupOpen(true)
    }

    const abrirLoginPopup = () => {
        setLoginPopupOpen(true)
        setSignupPopupOpen(false)
    }

    // const abrirMenu = () => {
    //     setDesplegado(true)
    //     setIsMenu(true)
    // }

    // const toggleDesplegado = (valor) => {
    //     setDesplegado(valor);
    // };

    return (
        <div className='header'>
            <div className='header-contenido'>
                <Link to='/home'><img className='header-img-iconos' src={iconoBlanco} alt="icono-blanco" /></Link>
                <h2 className='header-h2'>Go Pedidos</h2>
            </div>
            <div className='header-contenido header-contenido-2'>
                <img onClick={abrirLoginPopup} className='header-img-iconos' src={usuario} alt="usuario" />
                {/* <img className='header-img-iconos' onClick={abrirMenu} src={menu} alt="icono-menu" /> */}
                <MenuMobile />
            </div>

            {isLoginPopupOpen && (
                <Login
                    cerrarPopup={cerrarPopup}
                    abrirSinupPopup={abrirSinupPopup}
                />
            )}
            {isSignupPopupOpen && (
                <SingUp
                    cerrarPopup={cerrarPopup}
                    abrirLoginPopup={abrirLoginPopup}
                />
            )}

            {/* {isMenu && (
                <MenuMobile
                    desplegado={desplegado}
                    toggleDesplegado={toggleDesplegado}
                />
            )} */}

        </div>
    )
}

export default Header