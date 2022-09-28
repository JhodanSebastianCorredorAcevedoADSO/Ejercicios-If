addEventListener("DOMContentLoaded", ()=>{

/// Desarrollar un diagrama que lea 3 valores diferentes e indique cual es 
/// el mayor de ellos, el menor o si son iguales

///imprimimos los numeros que necesitamos para realizar la operacion

let num1 = Number(prompt("ingrese el primer numero "))
let num2 = Number(prompt("ingrese el segundo numero "))
let num3 = Number(prompt("ingrese el tercer numero "))

/// calcular cual es el numero mayor 

if(num1<num2 && num1<num3){
    
    console.log("numnero 1 es menor ")

}else if(num2<num3 && num2<num1){

    console.log("numero 2 es menor")
    
}if(num1>num2 && num1>num3){
    
    console.log("numero 1 es mayor")
    
}else if(num2>num3 && num2>num1){
    
    console.log("numero 2 es mayor")

}if(num3>num2 && num3>num1){
    
    console.log("numero 3 es mayor")

}else if(num3>num2 && num3>num1){
    
    console.log("numero 3 es mayor")

}if(num3 == num2){
    
    console.log("Número 3 es igual al Número 2 ")

}else if(num2 == num1){
    
    console.log("El número 2 es igual al 1")

}else if(num3 == num1){
    
    print("El número 3 es igual al 12 ")

}
})