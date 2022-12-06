//Cotización en servicios de catering, descuento por cantidad de comensales, variando así los precios fijos del servicio.
let valor = 0;
let largoLista = 0;
let numeroPedido = parseInt(localStorage.getItem("contador"));

if (JSON.parse(localStorage.getItem("contador") == undefined)) {
    numeroPedido = 1;
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


const listaPedidos = []; //Array vacío para llenar con parse


//Check si hay datos en itineración
const iterable = (localStorage.getItem("itineracion") == 'true') ? true : false


const pedidosAlmacenados = JSON.parse(localStorage.getItem("listaPedidosGuardada"));

if (iterable) {

    for (const objeto of pedidosAlmacenados) {
        listaPedidos.push(objeto);
    }

}




//Se aplica el 10% multiplicado por 0.9
function aplicarDescuento(x) {
    return x * 0.9;
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

    // numeroPedido = numeroPedido++;

    function ingresarNuevoPedido() {
        let precioDeServicio = valorServicio(tipoDeServicio, cantidadPersonas);
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

    const guardarLocal = (clave, valor) => {
        localStorage.setItem(clave, valor)
    };

    guardarLocal("listaPedidosGuardada", JSON.stringify(listaPedidos));
    localStorage.setItem("itineracion", true);
    localStorage.setItem("contador", numeroPedido++);


    console.log("\n");
    console.table(listaPedidos);
    console.log(listaPedidos);

}