addEventListener("DOMContentLoaded", ()=>{

/// Cálculo de áreas - Elige una figura geométrica:" Triángulo y Círculo
/// ¿Qué figura quiere calcular (Escriba T o C)?
/// Triangulo = base * altura / 2
/// Circulo = PI * radio* radio

/// elijimos que vamos a calcular

let fig = prompt("calcular la siguiente figura circulo(C) o triangulo (T): ")

let pi = 3.14

/// si la figura que se escogia es igual a T

if(fig == "T"){
    
    b = Number(prompt("la base es: "))
    a = Number(prompt("la altura es: "))

    ///calcular el valor
    let resul1 = (b*a)/2

    console.log("el area del triangulo es: ", resul1)


/// si la figura que se escogia es igual a C
}else if(fig == "C"){
    r = Number(prompt("el radio del circulo es: "))

    /// calcular el valor
    let resul2 = pi * r**2

    console.log("el area del circulo es:", resul2 )

}else{
    
    console.log("lo ingresado no es valido")
    /// impresion para no validar

}

})