import React, { useState, useEffect } from "react";
import moment from "moment";
import '../Ventas/Ventas.css';
import DataTable from "react-data-table-component";



const Ventas = () => {
    const [ventas, setVentas] = useState([]);
    const [filtro, setFiltro] = useState('');
    // const data = [
    //     {
    //         id: 1,
    //         descripcion: "Esta venta..",
    //         venta: 50.000,
    //         fecha: "21/07/2003",
    //         pedido: 3

    //     },
    //     {
    //         id: 2,
    //         descripcion: "Esta venta..",
    //         venta: 50.000,
    //         fecha: "22/07/2003",
    //         pedido: 4
    //     },
    //     {
    //         id: 3,
    //         descripcion: "Esta venta..",
    //         venta: 50.000,
    //         fecha: "23/07/2003",
    //         pedido: 5
    //     },
    // ]
    const fetchVenta = async () => {
        try {
            const response = await fetch('http://localhost:8082/ventas/pedidos');
            if (response.ok) {
                const data = await response.json();
                const ventaData = data.filter(venta => venta.estado_pedido === 1).map(venta => ({
                    id_venta: venta.id_pedido,
                    observacion: venta.observaciones,
                    fecha_venta: moment(venta.fecha_venta).format('DD/MM/YYYY'),
                    total_venta: venta.total_venta,
                }));
                setVentas(ventaData);
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

    const filteredVentas = ventas.filter(venta =>
        venta.id_venta.toString().includes(filtro) ||
        venta.observacion.toLowerCase().includes(filtro.toLowerCase()) ||
        venta.fecha_venta.includes(filtro) ||
        venta.total_venta.toString().includes(filtro)
    );
    const columns = [
        {
            name: "Número de venta",
            selector: (row) => row.id_venta,
            sortable: true
        },
        {
            name: "Observación",
            selector: (row) => row.observacion,
            sortable: true
        },
        {
            name: "Fecha de la venta",
            selector: (row) => row.fecha_venta,
            sortable: true
        },
        {
            name: "Precio de la venta",
            selector: (row) => row.total_venta,
            sortable: true
        },
        {
            name: "Accion",
            cell: (row) => (
                <div>
                    <label class="switch">
                        <input id="@pro.IdProducto" type="checkbox" onchange="cambiarEstado(this)" />
                        <span class="slider"></span>
                    </label>
                </div>
            )
        }
    ]
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

            <div id="tituloVentas">
                <h1>Ventas</h1>
            </div>
            <div class="botonesVentas">
                <button class="boton boton-generar" onclick="imprimirTabla()"><i class="fa-solid fa-file-pdf"></i></button>
            </div>
            <div className='filtro'>
                <input type="text" placeholder="Buscar..." value={filtro} onChange={handleFiltroChange} className="busqueda" />
            </div>
            <div className='tabla'>
                <DataTable columns={columns} data={filteredVentas} pagination highlightOnHover />
            </div>

        </>
    )
}

export default Ventas;