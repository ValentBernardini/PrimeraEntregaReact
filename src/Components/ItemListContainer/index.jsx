import React from "react";
import Title from "../Title";
import swal from 'sweetalert2'


function ItemListContainer ({greeting}){
    swal.fire({
        title: 'Bienvenido',
        text: `Bievenido seas ${greeting}`

    })
}

export default ItemListContainer;