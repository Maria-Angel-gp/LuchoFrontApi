import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import estilos from '../Pedidos/Pedidos.module.css';
import DataTable from 'react-data-table-component';
import moment from "moment";



const Pedidos = () => {
    const [Pedidos, setPedidos] = useState([]);
    const [filtro, setFiltro] = useState('');

    const fetchPedido = async () =>{
        try{
            const response = await fetch ('http://localhost:8082/ventas/pedidos');
            if (response.ok){
                const data = await response.json();
                const pedidoData = data.filter(pedido =>pedido.estado_pedido !==3).map(pedido =>({
                    id_pedido : pedido.id_pedido,
                    observaciones : pedido.observaciones,
                    fecha_venta : moment(pedido.fecha_venta).format('DD/MM/YYYY'),
                    fecha_pedido : moment(pedido.fecha_pedido).format('DD/MM/YYYY'),
                    estado_pedido:pedido.estado_pedido,
                    total_venta: pedido.total_venta,
                    total_pedido: pedido.total_pedido,
                    id_cliente : pedido.id_cliente

                }));
                setPedidos(pedidoData);
            }else{
                console.error('Error al obtener las venta');
            }
        }catch(error){
            console.error('Error al obtener las venta:', error);
        }
    };
    useEffect(() => {
        fetchPedido();
    }, []);
    const handleFiltroChange = (e) => {
        setFiltro(e.target.value);
    };

    const filteredPedidos = Pedidos.filter(pedido =>
        pedido.id_pedido.toString().includes(filtro)||
        pedido.observaciones.toLowerCase().includes(filtro.toLowerCase())||
        pedido.total_pedido.toString().includes(filtro)
    );

    const estadoMapping = {
        1: 'Pendiente',
        2: 'Cancelado',
        3: 'Vendido',
        // Add more state values here as needed
    };

    const columns = [
        {
            name :"Observaciones",
            selector: (row)=>row.observaciones,
            sortable: true
        },
        {
            name :"Total del pedido",
            selector: (row)=>row.total_pedido,
            sortable: true
        },
        {
            name :"Fecha del pedido",
            selector: (row)=>row.fecha_pedido,
            sortable: true
        },
        {
            name :'Cliente',
            selector: (row)=>row.id_cliente,
            sortable: true
        },
        {
            name :"Estado",
            selector: (row)=>estadoMapping[row.estado_pedido],
            sortable: true,
            cell : (row) =>(
                <button className={`${row.estado_pedido ===1 && estilos['estado1-button']} ${row.estado_pedido ===2 && estilos['estado2-button']} ${row.estado_pedido ===3 && estilos['estado3-button']}`}>{estadoMapping[row.estado_pedido]}</button>
            )
        },
        {
            name :'Acciones',
            cell :(row) =>(
                <div className={estilos['acciones']}>
                    <select name="Estado Pedido" id={estilos.estado_pedido} >    
                        <option value="1">Pendiente</option>
                        <option value="2">Cancelado</option>
                        <option value="3">Vendido</option>
                    </select>
                    <button><i className={`fa-solid fa-pen-to-square ${estilos.iconosRojos}`} ></i></button>
                </div>
            ),
        }

    ]
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
                <div id={estilos["titulo"]}>
                    <h2>Pedidos</h2>
                </div>
            <div className={estilos["botones"]}>
                <Link to="/agregarPedidos">
                    <button className={`boton ${estilos["botonAgregar"]}`} ><i class="fa-solid fa-plus"></i> Agregar</button>
                </Link>
                <button class={`boton ${estilos["boton-generar"]}`}><i class="fa-solid fa-file-pdf"></i></button>
            </div>
            <div className={estilos['filtro']}>
                <input type="text" placeholder="Buscar..." value={filtro} onChange={handleFiltroChange} className={estilos['busqueda']}/>
            </div>
            <div className={estilos["tabla"]}>
                <DataTable columns={columns} data={filteredPedidos} pagination paginationPerPage={5} highlightOnHover></DataTable>
            </div>
        </>
    )
}

export default Pedidos;