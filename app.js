

console.log("EJERCICIO 1");
function parImpar(a) {
    if (a % 2 == 0) {
        return a + " es un numero par.";
    } else {
        return a + " es un numero impar.";
    }
}
console.log(parImpar(3));



console.log("EJERCICIO 2");
function mayorMenorIgual(a, b) {
    let resultado;
    if (a > b) {
        resultado = a + " es mayor que " + b;
    } else {
        resultado = a + " es menor que " + b;
    } if (a == b) {
        resultado = a + " es igual que " + b;
    }
    return resultado;
}
console.log(mayorMenorIgual(10, 50));



console.log("EJERCICIO 3");
function multiploDe5(a) {
    if (a % 5 == 0) {
        return a + " es multimplo de 5.";
    } else {
        return a + " no es multiplo de 5.";
    }
}
console.log(multiploDe5(14));


console.log("EJERCICIO 4");
function printToNum(a) {
    for (let i = 0; i <= a; i++) {
        console.log(i);
    }
}
printToNum(10);


console.log("EJERCICIO 5");
function palabraNumero(palabra, numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(i + palabra);
    }
}
console.log(palabraNumero(" chicha", 5));



console.log("EJERCICIO 6");
function productos(frutas) {
    console.log(frutas);
}
let frutas = ["banana", "pera", "manzana"];
productos(frutas);


console.log("EJERCICIO 7");
function avoid5(numeros) {
    for (let i = 0; i <= numeros.length; i++){
        if (i == 4){
            continue;
        } 
        console.log(numeros[i]) 
    }           
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
avoid5(array);



console.log("EJERCICIO 8");
const arrayXNum = (array2, num2) => {
    for (let i = 0; i <= array2.length; i++){
        console.log(array2[i] * num2);       
    }
}
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num2 = 5;
arrayXNum(array2, num2);
















