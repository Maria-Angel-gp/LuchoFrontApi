import React from "react";
import { Outlet, Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import '../../Layout.css';
import estilos from '../Clientes/Clientes.module.css';
import Modal from './modal';
import styled from 'styled-components';

const Cliente = () => {
    const [clientes, setclientes] = useState([]);
    const [filtro, setFiltro] = useState('');

    const [estadoModal1, cambiarEstadoModal1] = useState(false);

    const fetchVenta = async () => {
        try {
            const response = await fetch('http://localhost:8082/ventas/clientes');
            if (response.ok) {
                const data = await response.json();
                const clienteData = data.map(cliente => ({
                    id_cliente: cliente.id_cliente,
                    nombre_cliente: cliente.nombre_cliente,
                    telefono_cliente: cliente.telefono_cliente,
                    direccion_cliente: cliente.direccion_cliente,
                    cliente_frecuente: cliente.cliente_frecuente,
                    estado_cliente: cliente.estado_cliente,
                }));
                setclientes(clienteData);
            } else {
                console.error('Error al obtener las venta');
            }
        } catch (error) {
            console.error('Error al obtener las venta:', error);
        }
    };
    useEffect(() => {
        fetchVenta();
    }, []);
    const handleFiltroChange = (e) => {
        setFiltro(e.target.value);
    };
    const filteredClientes = clientes.filter(cliente =>
        cliente.id_cliente.toString().includes(filtro) ||
        cliente.nombre_cliente.toLowerCase().includes(filtro.toLowerCase()) ||
        cliente.telefono_cliente.includes(filtro) ||
        cliente.direccion_cliente.toString().includes(filtro)||
        cliente.cliente_frecuente.toString().includes(filtro)||
        cliente.estado_cliente.toString().includes(filtro)

    );
    
    const columns =[
        {
            name : "Documento",
            selector: (row)=>row.id_cliente,
            sortable: true
        },
        {
            name : "Nombre",
            selector: (row)=>row.nombre_cliente,
            sortable: true
        },
        {
            name : "Teléfono",
            selector: (row)=>row.telefono_cliente,
            sortable: true
        },
        {
            name : "Dirección",
            selector: (row)=>row.direccion_cliente,
            sortable: true
        },
        {
            name : "Cliente Frecuente",
            // selector : (row) =>row.cliente_frecuente ===1 ? 'Frecuente' : 'No frecuente',
            // selector : (row) => row.cliente_frecuente,
            sortable: true,
            // conditionalCellStyles: [
            //     {
            //         when: (row)=>row.cliente_frecuente ===1,
            //         style :{
            //             color: '#00FF00'
            //         }                    
            //     },
            //     {
            //         when: (row)=>row.cliente_frecuente !==1,
            //         style :{
            //             // color: '#6d6d6db2'
            //             color: '#992222'
            //         }                    
            //     }
            // ],
            cell: (row) =>(
                <div>
                    <button className={`${estilos["frecuente-button"]} ${row.cliente_frecuente !== 1 && estilos['no-frecuente-button']}`}>{row.cliente_frecuente ==1 ? 'Frecuente' : 'No frecuente'}</button>
                </div>
            ),
        },
        {
            name : "Acciones",
            cell : (row) =>(
                <div className= {estilos["acciones"]}>
                    <label className={estilos["switch"]}>
                        <input type="checkbox" onchange="cambiarEstado(this)" />
                        <span className={`${row.cliente_frecuente == 1 && estilos['slider2']} ${row.cliente_frecuente !==1 && estilos['slider']}`}></span>
                    </label>
                    <button><i className={`fa-solid fa-pen-to-square ${estilos.iconosRojos}`}></i></button>
                </div>
            )
        },
        
    ]
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
                <div id={estilos["tituloCliente"]}>
                    <h1>Clientes</h1>
                </div>
            <div className={estilos["botones"]}>
                <button onClick={() => cambiarEstadoModal1(!estadoModal1)} className={`boton ${estilos.botonAgregar} ${estilos.rojo}`}><i className="fa-solid fa-plus"></i> Agregar Cliente</button>
                <button className={`boton ${estilos["boton-generar"]} ${estilos.vinotinto}`}><i className="fa-solid fa-file-pdf"></i></button>
            </div>
            <div className={estilos['filtro']}>
                <input type="text" placeholder="Buscar..." value={filtro} onChange={handleFiltroChange} className={estilos["busqueda"]} />
            </div>
            <div className={estilos["tabla"]}>
                <DataTable columns={columns} data={filteredClientes} pagination paginationPerPage={4} highlightOnHover></DataTable>
            </div>
            <Modal
				estado={estadoModal1}
				cambiarEstado={cambiarEstadoModal1}
				titulo="Prueba!"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={'center'}
                width={'500px'}
				padding={'20px'}
			>
				<Contenido>
					<h1>Ventana Modal</h1>
					<p>Reutilizable y con opciones de personalización.</p>
					<button onClick={() => cambiarEstadoModal1(!estadoModal1)}>Aceptar</button>
				</Contenido>
			</Modal>
        </>
    )
}
// id, nombre, telefono, direccion, funciones

export default Cliente;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;