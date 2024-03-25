//61- Escribe una función llamada esPrimo que tome un número como argumento y retorne 
//true si es primo o false si no lo es. Un número primo es aquel que solo es divisible
//por 1 y por sí mismo
function esPrimo (number){
    
    let tieneResto = true;

    for (i = 2; i <= (numero - 1); i++) {
        if (numero % i == 0) {
            return false;
        }
    }
    return tieneResto;
}

let numero = 7;

console.log('Es el número', numero, 'primo?', esPrimo(numero));

//62- Define una función llamada invierteCadena que tome una cadena de texto como 
//argumento y retorne una nueva cadena con los caracteres en orden inverso.

funcion invierteCadena(cadena){
    cadenaInvertida = '';
    for (let i = cadena.length - 1; i >= 0; i--)
}