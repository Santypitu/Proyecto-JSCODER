let nombreUsuario = prompt("ingrese su nombre:");
let apellidoUsuario = prompt("ingrese su Apellido:");
let precioTotal=0;
let costoRemera=5000;
let costoPantalon=6000;
let costoCalzado=10000;
let tipoRopa;
let cantPrenda;
let boolCont;
console.log("Nombre completo es igual a: "+nombreUsuario+" "+ apellidoUsuario)

let intro = prompt("Usted se encuentra en nuestra tienda de ropa, si desea continuar y comprar indique: SI, caso contrario inserte:NO")

while (intro != "SI" && intro != "NO") {
    alert("Por favor ingresa SI o NO")
   intro = prompt("Usted se encuentra en nuestra tienda de ropa, si desea continuar y comprar indique: SI, caso contrario inserte:NO")
}
if (intro == "SI") {
    do{
    AveriguarTipoRopa();
    switch (tipoRopa){
        case 1:
            procesarRemera();
            consultaContinuar();
        case 2:
            procesarPantalon();
            consultaContinuar();
        case 3:
            procesarCalzado();
            consultaContinuar();
    }
    } while (boolCont)

    alert("Muchas gracias por comprar, el precio final es: "+ precioTotal)

}

function AveriguarTipoRopa() {
    let tipoRopa;

    do {
        tipoRopa = parseInt(prompt("Seleccione qué tipo de prenda quiere comprar:\n1 - Remeras\n2 - Pantalones\n3 - Calzado"));

        let opcionesValidas = [1, 2, 3];
        if (!opcionesValidas.includes(tipoRopa)) {
            alert("ERROR: Vuelva a intentarlo");
        }
    } while (!opcionesValidas.includes(tipoRopa));

    tipoRopa = parseInt(tipoRopa);
    
    switch (tipoRopa) {
        case 1:
            alert("Usted eligió Remeras, a continuación se detallarán los modelos");
            break;
        case 2:
            alert("Usted eligió Pantalones, a continuación se detallarán los modelos");
            break;
        case 3:
            alert("Usted eligió Calzado, a continuación se detallarán los modelos");
            break;
    }

    return tipoRopa;
}

function procesarDeuda(precio,cantidad){
    precioTotal += precio*cantidad;
    alert("Precio Total actual: " + precioTotal);
    return precioTotal
}

function procesarRemera(){
    do{
        cantPrenda = prompt("Inserte cantidad de remeras que desea comprar:")
        let cantPrendaParse = parseInt(cantPrenda);
        ValidarNumero(cantPrendaParse);
    } while (!isNumberValid)
    procesarDeuda(costoRemera,cantPrendaParse);
    return precioTotal;
}

function procesarPantalon(){
    do{
        cantPrenda = prompt("Inserte cantidad de pantalones que desea comprar:")
        let cantPrendaParse = parseInt(cantPrenda);
        ValidarNumero(cantPrendaParse);
    } while (!isNumberValid)
    procesarDeuda(costoPantalon,cantPrendaParse);
    return precioTotal;
}

function procesarCalzado(){
    do{
        cantPrenda = prompt("Inserte cantidad de Calzados que desea comprar:")
        let cantPrendaParse = parseInt(cantPrenda);
        ValidarNumero(cantPrendaParse);
    } while (!isNumberValid)
    procesarDeuda(costoCalzado,cantPrendaParse);
    return precioTotal;
}

function ValidarNumero(numero){
    if (!isNaN(numero) && numero<0){
        isNumberValid = true
    }
    else{
        isNumberValid = false
        alert("Error: Inserte numero nuevamente")
    }
    return isNumberValid;
}

function consultaContinuar(){
    confContinuacion = prompt("Desea continuar comprando?: SI/NO")
    switch (confContinuacion){
        case "SI":
            boolCont = true;
            break;
        case "NO":
            boolCont = false;
            break;
        default:
            alert("ERROR: Vuelva a intentarlo")
            consultaContinuar()
            break;
    }
    return boolCont;
}