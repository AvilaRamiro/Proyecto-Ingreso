//41. Crea una variable llamada `nombre` y asígnale tu nombre.
//Luego, muestra el valor de la variable en la consola.

let nombre = "Ramiro Ávila";
console.log(nombre);

//42. Define una variable llamada `edad` y asígnale tu edad. Luego, muestra un mensaje
//que diga "Tienes X años" en la consola, reemplazando X con el valor de la variable.

let edad = 17;
console.log("Tienes " + edad + " años");

//43. Crea una variable llamada `esEstudiante` y asígnale `true` si eres estudiante o `false` 
//si no lo eres. Luego, muestra un mensaje que diga "Eres estudiante" o "No eres 
//estudiante" en la consola según el valor de la variable.

let esEstudiante = true

if (esEstudiante){
    console.log("Eres estudiante");
}else{
    console.log("No eres estudiate");
}

//44. Crea una variable llamada `fruta` y asígnale el nombre de tu fruta favorita. Luego, 
//muestra un mensaje que diga "Mi fruta favorita es [nombre de la fruta]" en la consola.

let fruta = "manzana verde";
console.log ("Mi fruta favorita es: " + fruta);

//45. Define una variable llamada `numero1` y otra llamada `numero2`. Realiza una operación 
//aritmética (suma, resta, multiplicación o división) con estas variables y muestra 
//el resultado en la consola.

let numero1 = 155;
let numero2 = 10;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1/numero2

console.log('La suma es: ', suma)
console.log('La resta es: ', resta)
console.log('La multiplicacion es: ', multiplicacion)
console.log('La division es: ', division)

//46. Crea una variable llamada `temperaturaCelsius` y asígnale un valor en grados 
//Celsius. Convierte esta temperatura a grados Fahrenheit utilizando la fórmula `F = (C * 
//9/5) + 32` y muestra el resultado en la consola

let temperaturaCelsius = 30;
let temperaturaFahrenheit = (temperaturaCelsius *9/5) +32;

console.log(temperaturaCelsius, '°C es igual a ', temperaturaFahrenheit, '°F');

//47. Define una variable llamada `precioProducto` y otra llamada `cantidadComprada`.
//Calcula el costo total de la compra multiplicando estas variables y muestra el resultado en 
//la consola

let precioProducto = 20;
let cantidadComprada = 5;
let precioTotal = precioProducto*cantidadComprada;

console.log('El precio total por ',cantidadComprada, ' productos es de $', precioTotal);

//48. Crea una variable llamada `radio` y asígnale el radio de un círculo. Calcula el área del 
//círculo utilizando la fórmula `A = π * r^2` y muestra el resultado en la consola

let radio = 20;
let area = Math.PI * (radio**2);
let areaRedondeada = area.toFixed(2);

console.log('El area del circulo es de ', areaRedondeada);

//49. Define una variable llamada `num1` y otra llamada `num2`. Escribe una expresión
//que verifique si `num1` es mayor que `num2` y muestra el resultado (true o false) en 
//la consola.

let num1 = 3;
let num2 = 24;

if (num1 > num2){
    console.log('El valor guardado en num1 (', num1, ') es mayor que el num2 (', num2, ')');
} else if (num1 === num2){
    console.log('El valor guardado en num1 es IGUAL al valor guardado num2, ambos son ', num1);
} else {
    console.log('El valor guardado en num1 (', num1,') es menor que num2 (', num2, ')');
}

//50. Crea una variable llamada `cadena1` y otra llamada `cadena2`. Concatena estas dos 
//cadenas utilizando el operador `+` y muestra la cadena resultante en la consola.

let cadena1 = 'Hola';
let cadena2 = 'mundo';

console.log('"' + cadena1 + ' ' + cadena2 + '"');