addEventListener("DOMContentLoaded", ()=>{

/// Calcular todos los pagos hechos de un restaurante y que si el consumo 
/// ingresado excede los $130.000 el descuento será del 15%, de lo 
/// contrario no hay descuento.

/// pedimos los datos que necesitamos

let num1 = Number(prompt("ingrese el total "))

let num2 = Number(prompt("ingrese el total "))

let num3 = Number(prompt("ingrese el total "))

/// sacamos el total

let sum = num1+num2+num3

/// comparamos si la suma es amyor a 130000

if (sum > 130000){
    
    let iva = sum*0.15
    let des = Number(sum-iva)

    /// imprimimos los valores y descuentos
    
    console.log("el valor de la suma", sum)
    console.log("el valor con descuento es:",des)

}

})