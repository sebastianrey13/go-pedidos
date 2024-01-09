import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import menu from '../../public/menu.png'


const MenuMobile = ({ toggleDesplegado }) => {

    const [menuDesplegado, setMenuDesplegado] = useState(false);
    const menuRef = useRef(null);

    const opcionesMenu = [
        {
            nombre: 'Realizar Pedido',
            url: 'realizar-pedido'
        },
        {
            nombre: 'Opcion 1',
            url: 'realizar-pedido'
        },
        {
            nombre: 'Opcion 2',
            url: 'realizar-pedido'
        },
        {
            nombre: 'Opcion 3',
            url: 'realizar-pedido'
        },
    ]
    const abrirMenu = () => {
        setMenuDesplegado(true)
    }

    const cerrarMenu = () => {
        setMenuDesplegado(false);
    }

    const handleBackgroundClick = () => {
        cerrarMenu();
    };

    // const handleClickOutside = (event) => {
    //     if (menuDesplegado && menuRef.current && !menuRef.current.contains(event.target)) {
    //         cerrarMenu();
    //     }
    // };

    // useEffect(() => {

    
    //     if (menuDesplegado) {
    //         // Agregar event listener para cerrar el menú al hacer clic en el fondo
    //         document.addEventListener('click', handleClickOutside);
    //     }

    //     // Limpiar los event listeners al desmontar el componente
    //     return () => {
    //         document.removeEventListener('click', handleClickOutside);
    //     };
    // }, [menuDesplegado]);

    return (
        // <div ref={menuRef}>
        //     <img className='header-img-iconos' onClick={abrirMenu} src={menu} alt="icono-menu" />
        //     {menuDesplegado && (
        //         <div className='popup-bg-menu' >
        //             <div className="popupMenu">
        //                 <ul className='opcionesMenu'>
        //                     {opcionesMenu.map((opcion, index) => (
        //                         <Link to={`/${opcion.url}`} key={index + 1}>
        //                             <li>{opcion.nombre}</li>
        //                         </Link>
        //                     ))}
        //                 </ul>
        //             </div>
        //         </div>
        //     )}
        // </div>
        <div ref={menuRef}>
            <img className='header-img-iconos' onClick={abrirMenu} src={menu} alt="icono-menu" />
            {menuDesplegado && (
                <div className='popup-bg-menu' onClick={handleBackgroundClick}>
                    <div className="popupMenu">
                        <ul className='opcionesMenu'>
                            {opcionesMenu.map((opcion, index) => (
                                <Link to={`/${opcion.url}`} key={index + 1}>
                                    <li>{opcion.nombre}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MenuMobile
