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

let numero1 = 3;
let numero2 = 24;

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