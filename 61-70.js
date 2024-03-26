//61- Escribe una función llamada esPrimo que tome un número como argumento y retorne 
//true si es primo o false si no lo es. Un número primo es aquel que solo es divisible
//por 1 y por sí mismo
function esPrimo(number){
    
    let tieneResto = true;

    for (i = 2; i <= (number - 1); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return tieneResto;
}
esPrimo(number = 7)
//let numero = 7;

console.log('Es el número', number, 'primo?', esPrimo(number));

//62- Define una función llamada invierteCadena que tome una cadena de texto como 
//argumento y retorne una nueva cadena con los caracteres en orden inverso.

function invierteCadena(cadena){

    let cadenaString = numero.toString()
    let cadenaInvertida = ""

    for (let i = cadena.length - 1; i >= 0; i--){
        cadenaInvertida = cadenaInvertida + cadenaString[i]
    }

    return cadenaInvertida
}

invierteCadena('Hola como estas')
console.log(cadenaInvertida)