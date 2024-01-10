import React, { useEffect } from 'react'
import { useState } from 'react';
import '../css/cardCategoria.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import tennisImg1 from '../../public/productos/tennis/tenis_azules.png'
// import tennisImg2 from '../../public/productos/tennis/tenis_grieses.png'
// import tennisImg3 from '../../public/productos/tennis/tenis_naranjas.png'


const CardProductos = (props) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [desplegarTallas, setDesplegarTallas] = useState(false);
    const [tallaSeleccionada, setTallaSeleccionada] = useState('');
    const [isAñadir, setIsAñadir] = useState(false);
    const [isSelectColor, setIsSelectColor] = useState(true);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(0);
    const [precioFormateado, setprecioFormateado] = useState(0);

    const tallas = [
        {
            id: 1,
            talla: 'XS'
        },
        {
            id: 2,
            talla: 'S'
        },
        {
            id: 3,
            talla: 'M'
        },
        {
            id: 4,
            talla: 'L'
        },
        {
            id: 5,
            talla: 'XL'
        },
    ]

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setDesplegarTallas(!desplegarTallas)
    };

    const seleccionarTalla = (talla) => {
        setTallaSeleccionada(talla);
        toggleDropdown();
        setIsAñadir(true);
    };

    const toggleSelectcolor = () => {
        setIsSelectColor(!isSelectColor)
    }

    const [selectedColorIndex, setSelectedColorIndex] = useState(null);

    const handleColorClick = (index) => {
        setSelectedColorIndex(index);
        setImagenSeleccionada(index);
    };

    useEffect(() => {
        formatearNumero(props.precio);
    }, [props.precio]);

    function formatearNumero(precio) {
        const partes = String(precio).split(/(?=(?:\d{3})+(?!\d))/);
        const resultado = partes.join('.');
        setprecioFormateado(resultado);
    }

    return (
        <div className='cardProducto'>
            <div className='cardProductoDiv1'>
                <img src={props.colores[imagenSeleccionada].img} alt="" />
                <div className='cardProductoDiv1P'>
                    {isAñadir ? (
                        <p
                            className='pAñadir'
                        >
                            Añadir
                        </p>
                    ) : (
                        <p>Talla</p>
                    )}
                    <div
                        className={`iconoDeTallas ${isAñadir ? 'tallaSeleccionada' : ''}`}
                        onClick={toggleDropdown}
                    >
                        {isAñadir && (
                            <p>{tallaSeleccionada}</p>
                        )}
                        <FontAwesomeIcon
                            icon={desplegarTallas ? faAngleDown : faAngleUp}
                        />
                    </div>
                    {isDropdownOpen && (
                        <ul className="dropdown-list">
                            {tallas.map((talla, index) => (
                                <li
                                    onClick={() => seleccionarTalla(talla.talla)}
                                    key={index + 1}>
                                    {talla.talla}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <p>{`$${precioFormateado}`}</p>
            {isSelectColor ?
                (
                    <p className='cardProducto-masColores' onClick={toggleSelectcolor}>Más Colores +</p>
                ) : (
                    <div className='cardProducto-contenedorDecolores'>
                        {props.colores.map((color, index) => (
                            <img
                                className={`coloresProductos ${selectedColorIndex === index ? 'selected' : ''}`}
                                key={index + 1}
                                id={color.id}
                                src={color.img}
                                alt=""
                                onClick={() => handleColorClick(index)}
                            />
                        ))}
                    </div>
                )}
        </div>
    )
}

export default CardProductos