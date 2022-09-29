addEventListener("DOMContentLoaded", ()=>{

/// Calcular el valor total del valor de 5 productos, el IVA y el subtotal,
/// visualizar los resultados de: Iva, Subtotal y Total de la compra de los artículos.

/// pedimos valores

let num1 = Number(prompt("valor del producto: "))
let num2 = Number(prompt("valor del producto: "))
let num3 = Number(prompt("valor del producto: "))
let num4 = Number(prompt("valor del producto: "))
let num5 = Number(prompt("valor del producto: "))

/// valor total
let sum = num1+num2+num3+num4+num5 

/// si es mayor a cero
if(sum > 0){

    /// hacemos la operacion
    let iva = sum*0.10
    let total=(sum+iva)
    
    /// imprimimos su precio deacuerdo a lo pedido
    
    console.log("Subtotal: ", sum)
    console.log("IVA: ",iva )
    console.log("resultado TOTAL: ", total)

}


})