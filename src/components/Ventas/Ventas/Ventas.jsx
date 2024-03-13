import React from "react";
import '../Ventas/Ventas.css';
import DataTable from "react-data-table-component";



const Ventas = () => {
    const columns =[
        {
            name :"ID",
            selector : row =>row.id,
            sortable : true
        },
        {
            name :"Descripción",
            selector : row =>row.descripcion,
            sortable : true
        },
        {
            name :"Precio de la venta",
            selector : row =>row.venta,
            sortable : true
        },
        {
            name :"Fecha de la venta",
            selector : row =>row.fecha,
            sortable : true
        },
        {
            name :"ID pedido",
            selector : row =>row.pedido,
            sortable : true
        }
    ]

    const data = [
        {
            id: 1,
            descripcion: "Esta venta..",
            venta: 50.000,
            fecha: "21/07/2003",
            pedido: 3
        },
        {
            id: 2,
            descripcion: "Esta venta..",
            venta: 50.000,
            fecha: "22/07/2003",
            pedido: 4
        },
        {
            id: 3,
            descripcion: "Esta venta..",
            venta: 50.000,
            fecha: "23/07/2003",
            pedido: 5
        },
    ]
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            
            <div id="tituloVentas">
                <h1>Ventas</h1>
            </div>
            <div class="botonesVentas">
                <button class="boton boton-generar" onclick="imprimirTabla()"><i class="fa-solid fa-file-arrow-down"></i></button>
            </div>
            <div className="tabla">
                <DataTable columns={columns} data={data} pagination/>
            </div>
            
        </>
    )
}

export default Ventas;