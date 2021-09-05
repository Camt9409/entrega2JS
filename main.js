while (true) {
    let nombre = prompt("Bienvenido a la aplicación para calular el pago de las cuotas de tu deuda, ingresa tu nombre");

alert("Hola " + nombre);

let montoTotal = parseInt(prompt("Ingrese el monto total de la deuda en COP"));
let option;

switch (option = parseInt(prompt("Ingrese 1 si quiere calcular basado en cuotas, 2 si quiere calcular segun capacidad de pago")))
    {
    case 1:
        let cuotas = parseInt(prompt("Ingrese el número de cuotas a pagar:"));
        if (cuotas > 0) {
            let cantidadCuotas = montoTotal/cuotas ; 
            alert("El monto a pagar en cada una de sus " + cuotas + "cuotas es: $" + cantidadCuotas + "COP");
        }else{
            alert("la cantidad de cuotas ingresada no es valida")
        }
     break;
    case 2:
        let capacidadPago = parseInt(prompt("Ingrese la capacidad de pago mensual:"));
        if (capacidadPago > 0) {
            let cantidadCuotasPorPago = montoTotal/capacidadPago ;  
            alert("La cantidad de cuotas a pagar es " + cantidadCuotasPorPago);
        }else{
            alert("El monto ingresado no es valido")
        }
     break;
     }
}


