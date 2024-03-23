//51. Crea una variable llamada `edad` y asigna un valor numérico. Escribe una condición 
//que verifique si la persona es mayor de 18 años y muestra un mensaje en la consola, como
//"Eres mayor de edad", si se cumple la condición.

let edad = 18;

if (edad>17){
    console.log('Eres mayor de edad');
} else {
    console.log('No eres mayor de edad');
}

//52. Define una variable llamada `puntuacion` y asigna un valor numérico entre 0 y 100.
//Utiliza una estructura condicional `if...else` para mostrar un mensaje en la consola que 
//indique si la puntuación es "Aprobada" (si es mayor o igual a 60) o "Reprobada" (si es 
//menor a 60)

let puntuacion = 80;

if (puntuacion>=60) {
    console.log('Aprobado');
} else {
    console.log('Reprobado');
}

//53. Crea una variable llamada `diaSemana` y asígnale el nombre de un día de la semana. 
//Utiliza una declaración `switch` para mostrar un mensaje que indique si es un "Día 
//laboral" o "Fin de semana" en función del valor de `diaSemana`.

let diaSemana = 'martes';

switch (diaSemana){
    case 'sabado' || 'domigo':
        console.log('Es fin de semana');
        break;
    case 'lunes':
        console.log('Es dia de semana');
        break;
    case 'martes':
        console.log('Es dia de semana');
        break;
    case 'miercoles':
        console.log('Es dia de semana');
        break;
    case 'jueves':
        console.log('Es dia de semana');
        break;
    case 'viernes':
        console.log('Es dia de seman');
        break;
    default:
        console.log('El dato ingresado no corresponde a un dia');
}

//54. Define dos variables, `numero1` y `numero2`, y realiza una comparación para determinar
//cuál de los dos números es mayor. Luego, muestra el número mayor en la consola.

let numero1 = parseFloat(prompt('Ingrese el primer número'));
let numero2 = parseFloat(prompt('Ingrese el segundo número'));

if (numero1 > numero2){
    console.log('El valor guardado en numero1 (', numero1, ') es mayor que el numero2 (', numero2, ')');
} else if (numero1 === numero2){
    console.log('El valor guardado en numero1 es IGUAL al valor guardado numero2, ambos son ', numero1);
} else {
    console.log('El valor guardado en numero1 (', numero1,') es menor que numero2 (', numero2, ')');
}

//55. Crea una variable llamada `color` y asígnale el nombre de un color. Utiliza una serie 
//de declaraciones `if...else if` para determinar si el color es "Rojo," "Verde," o "Azul," y 
//muestra un mensaje correspondiente en la consola

let color = 'Azul'

if (color === "Rojo") {
    console.log("El color es Rojo");
} else if (color === "Verde") {
    console.log("El color es Verde");
} else if (color === "Azul") {
    console.log("El color es Azul");
} else {
    console.log("El color no es Rojo, Verde ni Azul");
}

//56. Crea una variable llamada `calificacion` y asígnale un valor numérico entre 0 y 100. Utiliza
//una estructura condicional `if...else if...else` para mostrar en la consola si la 
//calificación es "Excelente," "Aprobado," o "Reprobado" según un rango de calificaciones.

let calificacion = 100;

if (calificacion>100){
    console.log('La calificacion debe ser de un rango entre 0 y 100');
} else if (calificacion>=90){
    console.log('Excelente');
} else if (calificacion>=60) {
    console.log('Aprobado');
} else {
    console.log('Reprobado');
}

//57. Define una variable `numero` y verifica si es positivo, negativo o igual a cero
//utilizando una declaración `if` y muestra el resultado en la consola

let numero = -539

if (numero>0){
    console.log('El número es positivo');
} else if (numero===0){
    console.log('El número es igual a 0');
} else {
    console.log('El número es negativo');
}

//58. Escribe una función llamada `esPar` que tome un número como argumento y retorne 
//`true` si es par o `false` si es impar. Luego, muestra el resultado en la consola

function esPar(numeroAEvaluar) {

    let resto = numeroAEvaluar % 2;
    
    return resto == 0;
}

let numeroAEvaluar = prompt('Indica el número a evaluar');

console.log('El número ingresado ', esPar(numeroAEvaluar) ? 'es par' : 'es impar');

//59. Crea una variable `hora` y asígnale una hora en formato de 24 horas. Escribe una 
//estructura condicional para mostrar "Buenos días", "Buenas tardes" o "Buenas noches" en 
//función de la hora.

let hora =25

if (hora > 5 && hora < 13){

    console.log('Buenos dias!')

} else if (hora > 12 && hora < 21){

    console.log('Buenas tardes!')

} else if ((hora > 20 && hora < 25) || (hora < 6 && hora > -1)){

    console.log('Buenas noches!')

} else{
    console.log('El número no corresponde a una hora del día')
}

//60. Define tres variables `lado1`, `lado2` y `lado3` que representen las longitudes
//de los lados de un triángulo. Escribe una estructura condicional para determinar si 
//el triángulo es equilátero (todos los lados iguales), isósceles (dos lados iguales),
//o escaleno (ningún lado igual)

let lado1 = 6;
let lado2 = 5;
let lado3 = 2;

if (lado1 === lado2 && lado2 === lado3){

    console.log('El triangulo es equilatero');

} else if ((lado1 === lado2)||(lado1 === lado3)||(lado2 === lado3)){

    console.log ('El triangulo es isosceles');

} else {

    console.log('El triangulo es escaleno');
}