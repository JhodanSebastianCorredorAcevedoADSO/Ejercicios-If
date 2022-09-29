addEventListener("DOMContentLoaded", ()=>{

/// En una tienda de HELADO da un descuento por compra a sus clientes con membresía dependiendo
/// de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C.
/// Los descuentos son los siguientes:
/// Tipo A 10% de descuento
/// Tipo B 15% de descuento
/// Tipo C 20% de descuento

/// damos a eligir lo quie se necesita

let mem = prompt("tipo de membresia (A) (B) (C): ")

if(mem == "A"){

    let a = Number(prompt("ingrese el precio: "))

    let des = a * 0.10

    console.log("imprima el descuento", des )
    
}else if ( mem == "B"){

    let b = Number(prompt("ingrese el precio: "))
    
    let des2 = b * 0.15
    
    console.log("imprima el descuento", des2 )

}if(mem =="C"){

    let c = Number(prompt("ingrese le precio: "))

}
})