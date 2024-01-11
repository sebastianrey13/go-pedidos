import React, { useEffect } from 'react'
import { useState } from 'react';
import '../css/cardCategoria.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const CardProductos = (props) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [desplegarTallas, setDesplegarTallas] = useState(false);
    const [tallaSeleccionada, setTallaSeleccionada] = useState('');
    const [isAñadir, setIsAñadir] = useState(false);
    const [isSelectColor, setIsSelectColor] = useState(true);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(0);
    const [precioFormateado, setprecioFormateado] = useState(0);
    const [porcetajeDescuento, setPorcentajeDescuento] = useState('');
    const [precioFinal, setPreciofinal] = useState(0);

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
        formatearPorcentaje(props.descuento);
        precioConDescuento(props.precio, props.descuento);
        setprecioFormateado(formatearNumero(props.precio));
    }, [props.precio, props.descuento, precioFinal]);

    // const formatearNumero = (precio) => {
    //     const partes = String(precio).split(/(?=(?:\d{3})+(?!\d))/);
    //     const resultado = partes.join('.');
    //     return resultado
    // }

    const formatearNumero = (precio) => {
        // Redondear el número a dos decimales si es necesario
        const precioRedondeado = Number.parseFloat(precio).toFixed(2);

        // Separar los miles con punto y usar coma como separador decimal solo si hay decimales
        const partes = precioRedondeado.split('.');
        const parteEntera = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        // Verificar si hay parte decimal y añadirla con coma
        const parteDecimal = partes[1] ? `,${partes[1]}` : '';

        // Unir las partes y devolver el resultado
        const resultado = parteEntera + parteDecimal;
        return resultado;
    }

    const formatearPorcentaje = (descuento) => {
        const porcentaje = descuento * 100;
        setPorcentajeDescuento(porcentaje)
    }

    const precioConDescuento = (precio, descuento) => {
        const precioDescuento = precio - (precio * descuento);
        setPreciofinal(formatearNumero(precioDescuento));
    }


    return (
        <div className='cardProducto'>
            <h2>{props.nombre}</h2>
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
            <p className='cardProductoRef'><span>Ref: </span>{props.referencia}</p>
            <div className='cardProductoPrecios'>
                <p className='cardProductoDescuento'>-{porcetajeDescuento}%</p>
                <p className='cardProductoPrecioNeto'>{`$${precioFormateado}`}</p>
            </div>
            <p className='cardProductoPrecioFinal'>${precioFinal}</p>
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