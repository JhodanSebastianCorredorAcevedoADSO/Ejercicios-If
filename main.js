addEventListener("DOMContentLoaded", ()=>{

/// En cierta empresa se les paga a sus trabajadores de la siguiente forma:
/// si el empleado es de planta, la hora trabajada se le paga a $20000, 
/// si el empleado es administrativo, la hora trabajada se le paga a $10000. 
/// Para calcular su pago es necesario conocer el total de horas trabajadas.

let plan1 = 20000

let plan2 = 10000

// preguntamos que cargo ocupa

let h = prompt("ingrese si es de administrativo (A) o de planta (P): ")

let horas1= Number(prompt("ingrese las horas: "))

if(h=="P"){
    
    let resul1 = (horas1*plan1)

    /// impresion de las horas trabajadas
    console.log("horas trabajadas de planta", resul1)
    
}else if(h== "A"){

    let resul2 = (horas1*plan2)

    /// imprimimos lo que necesitamos
    console.log("horas trabajadas de administracion", resul2)

}  

})