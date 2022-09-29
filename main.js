addEventListener("DOMContentLoaded", ()=>{

// Restarle al primer número al segundo (siempre y cuando el primero
/// sea mayor que él segundo, en caso contrario indicar con un mensaje 
/// que la operación no es posible realizarla

/// pedimos datos

let num1 = Number(prompt("ingrese el primer numero:")) 
let num2 = Number(prompt("ingrese el segundo numero:"))

/// si num1 es mayor a num2

if (num1 > num2){
    
    let res = num1-num2
    console.log("resta de los numeros:", res)

}else(

    console.log("la operación no es posible realizar")

)

})