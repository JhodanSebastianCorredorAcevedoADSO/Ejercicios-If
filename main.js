addEventListener("DOMContentLoaded", ()=>{

/// Escriba un algoritmo que calcule el área de un rectángulo siempre
/// y cuando los lados sean positivos: área triangulo= lado * lado.

/// pedimos el valor
let lado = Number(prompt("Ingresar el lado del rectangulo "))

if(lado){

    /// operacion y resultado
    let resul1 = lado * lado
    console.log("el lado del rectangulo es :", resul1)

}
})