alert("Bienvenido al restaurante. Esta es tu cuenta");
var entrada = parseInt(prompt("Ingresa el costo de la entrada"));
var plato = parseInt(prompt("Ingresa el costo del plato principal"));
var postre = parseInt(prompt("Ingresa el costo del postre"));
var total = postre + entrada + plato
var igv = total * 1.18


alert("Para poder observar los resultados, debes presionar F12 y visualizar la consola");
console.log("El costo de la entrada es: " + entrada);
console.log("El costo del segundo es: " + plato);
console.log("El costo del postre es: " + postre);
console.log("El costo total es: " + total);
console.log("El costo total con IGV es: " + igv);


