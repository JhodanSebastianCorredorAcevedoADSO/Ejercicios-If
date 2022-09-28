addEventListener("DOMContentLoaded", ()=>{

/// Calcule el mayor de tres números, permitiendo leer 3 valores diferentes

/// pedimos los datos que necesitamos

let num1 = Number(prompt("ingrese el primer numnero "));

let num2 = Number(prompt("ingrese el segundo numero "));

let num3 = Number(prompt("ingrese el tercer numero "));

///calcular cual es el numero mayor

///si numero 1 es mayor a numero 2 y numero 1 es mayor numero 3

if (num1>num2 && num1>num3){
    
    console.log("numnero 1 es mayor");

}else if(num2>num3 && num2>num1){;

    /// imprimimos si es menor despues de dar valor
    console.log("numero 2 es mayor");

}else{
    
    /// imprimos si es mayor despues del valor
    console.log("numero 3 es mayor");

}

})