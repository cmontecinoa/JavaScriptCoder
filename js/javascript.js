//Cotización en servicios de catering, descuento por cantidad de comensales, variando así los precios fijos del servicio.
let valor = 0;
let numeroPedido = 0;
let largoLista = 0;
const listaPedidos = []; //Array vacío

//Se aplica el 10% multiplicado por 0.9
function aplicarDescuento(x) {
    return x * 0.9;
}

//Declaración de clase para objetos pedido
class pedido {
    constructor(numPedido, correo, cantidad, servicio, costo) {
        this.numPedido = numPedido;
        this.correo = correo;
        this.cantidad = cantidad;
        this.servicio = servicio;
        this.costo = costo;
    }
}

//Funcion para calculo del precio total, Precio per Capita * Cantidad, evaluación de descuento

function valorServicio(tipoDeServicio, cantidadPersonas) {
    let valor = 0; //Reinicio de variable, por si acaso

    //Valores del servicio por persona
    const precio1 = 15000;
    const precio2 = 13000;
    const precio3 = 30000;

    switch (tipoDeServicio) {
        case 1:
            if (cantidadPersonas > 100) {
                valor = cantidadPersonas * precio1;
                return valor = aplicarDescuento(valor);
            } else {
                return valor = cantidadPersonas * precio1;
            }
            case 2:
                if (cantidadPersonas > 100) {
                    valor = cantidadPersonas * precio2;
                    return valor = aplicarDescuento(valor);
                } else {
                    return valor = cantidadPersonas * precio2;
                }

                case 3:
                    if (cantidadPersonas > 100) {
                        valor = cantidadPersonas * precio3;
                        return valor = aplicarDescuento(valor);
                    } else {
                        return valor = cantidadPersonas * precio3;
                    }
    }
    return valor;

}





//Captura de datos desde formulario
const botonFormulario = document.getElementById("botonFormulario");


botonFormulario.onclick = () => {

    function ingresarNuevoPedido() {
        let precioDeServicio = valorServicio(tipoDeServicio, cantidadPersonas);
        numeroPedido = numeroPedido + 1;
        let nuevoPedido = new pedido(numeroPedido, email, cantidadPersonas, tipoDeServicio, precioDeServicio);
        listaPedidos.push(nuevoPedido);
        console.log("done!")
    }

    let email = document.getElementById("email").value;
    let cantidadPersonas = parseInt(document.getElementById("cantidadDePersonas").value);
    let tipoDeServicio = 0;

    if (document.getElementById("tipoDeServicio").value == "Desayuno") {
        tipoDeServicio = 1;
    } else if (document.getElementById("tipoDeServicio").value == "Coffe Break") {
        tipoDeServicio = 2;
    } else if (document.getElementById("tipoDeServicio").value == "Matrimonio") {
        tipoDeServicio = 3;
    } else {
        console.log("algo esta fallando");
    }


    ingresarNuevoPedido(email, cantidadPersonas, tipoDeServicio);

    console.log("\n");
    console.table(listaPedidos);
    console.log("\n");
    console.log(listaPedidos);

}


// while (cantidadPersonas >= 300 || tipoDeServicio <= 0) {
//     alert();
// }


//3ra PreEntrega Busqueda de Pedido



const botonConsulta = document.getElementById("botonConsulta");
const resultado = document.getElementById("resultado");
// let pedidoEncontrado = [];
// let existePedido = false;

function buscarPedido(consultaDOM) {

    //Testers 
    largoLista = listaPedidos.length;
    console.log("La cantidad total de pedidos en la memoria es de: ");
    console.log(largoLista);

    for (let i = 0; i < largoLista; i++) { //Pendiente cambio a for of...

        console.log("Información de la cotización n°", listaPedidos[i].numPedido);
        console.log("La cantidad de personas:", listaPedidos[i].cantidad);
        console.log("El tipo de servicio:", listaPedidos[i].servicio);
        console.log("Costo:", listaPedidos[i].costo);

        console.log("\n"); //Salto de línea

    }

    //Funcionalidad de la funcion
    let existePedido = listaPedidos.some(pedido => pedido.numPedido == consultaDOM);
    // console.log(pedidoEncontrado);
    // console.log(existePedido);
    // console.log(consultaDOM);
    return existePedido;

}


botonConsulta.onclick = () => {
    let consultaDOM = parseInt(document.getElementById("buscaPedido").value);
    console.log(consultaDOM);
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