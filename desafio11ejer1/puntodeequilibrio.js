let costosfijos= prompt("Ingrese el costo fijo");
let preciodeventa= prompt("Ingrese el precio de venta");
let costosvariables= prompt("Ingrese el costo variable");

let cv = (costosfijos/(preciodeventa-costosvariables));

console.log("El calculo de cv es "+ cv );