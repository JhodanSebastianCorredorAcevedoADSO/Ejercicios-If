addEventListener("DOMContentLoaded", ()=>{

/// Determinar si un número es positivo y menor que 100. 

let numero = Number(prompt("ingrese un numero "));

if(numero > 0 && numero < 100){
    console.log("numero positivo menor que 100 ");
}    
else{
/// imprimimos deacuerdo al numero 
    
    console.log("numero negativo y mayor que 100");
}
})