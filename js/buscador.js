//3ra PreEntrega Busqueda de Pedido
const botonConsulta = document.getElementById("botonConsulta");
const resultado = document.getElementById("resultado");

function buscarPedido(consultaDOM) {

    //Testers 

    // largoLista = listaPedidos.length;
    // console.log("La cantidad total de pedidos en la memoria es de: ");
    // console.log(largoLista);

    // for (let i = 0; i < largoLista; i++) { //Pendiente cambio a for of...

    //     console.log("Información de la cotización n°", listaPedidos[i].numPedido);
    //     console.log("La cantidad de personas:", listaPedidos[i].cantidad);
    //     console.log("El tipo de servicio:", listaPedidos[i].servicio);
    //     console.log("Costo:", listaPedidos[i].costo);

    //     console.log("\n"); //Salto de línea

    // }

    //Funcionalidad de la Funcion
    let existePedido = listaPedidos.some(pedido => pedido.numPedido == consultaDOM);
    return existePedido;

}


botonConsulta.onclick = () => {
    let consultaDOM = parseInt(document.getElementById("buscaPedido").value);
    console.log(consultaDOM); //Verificacion de variable
    largoLista = listaPedidos.length;

    if (consultaDOM > 0 && consultaDOM <= largoLista) {
        buscarPedido(consultaDOM);

        if (buscarPedido(consultaDOM)) {
            let pedidoEncontrado = listaPedidos.find(pedido => pedido.numPedido == consultaDOM);
            console.log(pedidoEncontrado);

            let j = consultaDOM - 1;

            (pedidoEncontrado) ? resultado.innerHTML += `<hr><p> Su pedido es el siguiente: N° de pedido:${listaPedidos[j].numPedido}</p>
    <br> <p> Cantidad de personas: ${listaPedidos[j].cantidad} </p>
    <br> <p> Tipo de Servicio: ${listaPedidos[j].servicio} </p>
    <br> <p> Cantidad de personas: ${listaPedidos[j].costo} </p>
    `: resultado.innerHTML += "<hr>Su pedido no ha sido encontrado en la memoria";
        }
    } else {
        alert("El numero de la consulta del pedido no corresponde a ningún numero en sistema"); // Se mejorará con DOM
        console.log(pedidoEncontrado);
        console.log(existePedido);
        console.log(consultaDOM);
    }

}