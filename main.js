addEventListener("DOMContentLoaded", ()=>{

/// Considere dos variables llamadas temperatura y presión. Escriba una sentencia
/// if-else que muestre en pantalla la palabra Alarma si la variable presión 
/// es mayor a 200 o si la variable temperatura es mayor a 100. En caso contrario,
/// se debe mostrar en pantalla la palabra Normal.

/// pedimos el valor

variables = Number(prompt("ingrese la temperatura: "))

/// si la temperatura es mayor a 100

if(variables > 100){
    
    console.log("ALARMA:")

}else(
    
    print("Normal")

)

/// pedimos el valor de la presion
variables = Number(prompt("ingrese la presión: "))

/// si la variable es mayor a 200
if(variables > 200){
    
    console.log("ALARMA")

}else(
    
    console.log("Normal")

)

})