// Ejercicios

/*

Realizar una función que realice o saatisfaga los siguientes escenarios

Realizar en manera de función general y funcion flecha.

1. Calcular el cuadrado de un número.

2. Escribir un código que convierta de grados celsius
a grados farenheit

3. Realizar una función que calcule el valor de
Voltaje, recibiendo como entradas o parámetros
Resistencia y Corriente.

4. Elaborar una función que calcule el volumen de
un cubo, recibiendo como dato de entrada Lado.

5. Calcular el área de un triángulo

6. Calcular el volumen de una esfera

7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()

*/



//Cuadrado de un número 
function cuadradoNumero(numero){
    return "El cuadrado del número es: " + Math.pow(numero,2) + " u^2";
}

const cuadradoNumeroFlecha = numeroFlecha => {
    return "El cuadrado del número es: " + Math.pow(numeroFlecha,2) + " u^2";
}

//Celsius a Farenheit

function celsiusFarenheit(celsius){
    return "Los grados Farenheit son: " + ((celsius*(9/5))+32) + "° F"; 
}

const celsiusFarenheitFlecha = celsiusFlecha => {
    return "Los grados Farenheit son: " + ((celsiusFlecha*1.8)+32) + "° F";
}

//Voltaje
function calculaVoltaje(resistencia,corriente){
    return "El voltaje es: " + resistencia*corriente + " V";
}

const calculaVoltajeFlecha = (resistenciaFlecha,corrienteFlecha) => {
    return "El voltaje es: " + resistenciaFlecha*corrienteFlecha + " V";
}

//Volumen de un cubo
function volumenCubo(lado){
    return "El volumen del cubo es: " + Math.pow(lado,3) + " u^3";
}

const volumenCuboFlecha = ladoFlecha => {
    return "El volumen del cubo es: " + Math.pow(ladoFlecha,3) + " u^3";
}

//Área de un triángulo
function areaTriangulo(base,altura){
    return "El área del triángulo es: " + (base*altura)/2 + " u^2";
}

const areaTrianguloFlecha = (baseFlecha, alturaFlecha) => {
    return "El área del triángulo es: " + (baseFlecha*alturaFlecha)/2 + " u^2";
}

//Volumen de esfera
function volumenEsfera(radio){
    return "El volumen de la esfera es: " + 3.1416*(4/3)*Math.pow(radio,3) + " u^3";
}

const volumenEsferaFlecha = radioFlecha => {
    return "El volumen de la esfera es: " + (3.1416*(4/3))*Math.pow(radioFlecha,3) + " u^3";
}

//Texto a Mayúscula
function textoMayuscula(texto){
    return "El texto en mayúscula es: " + texto.toUpperCase();
}

const textoMayusculaFlecha = textoFlecha => {
    return "El texto en mayúscula es: " + textoFlecha.toUpperCase();
}