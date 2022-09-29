addEventListener("DOMContentLoaded", ()=>{

//p rograma nombre, apellido edad

let nombre = prompt(`ingrese su nombre`)
let apellido = prompt(`ingrese su apellido`)
let edad =  Number(prompt(`ingrese su edad`))
let nota1 = Number(prompt(`ingrese la nota 1 :`))
let nota2 = Number(prompt(`ingrese la nota 2 :`))
let nota3 = Number(prompt(`ingrese la nota 3 :`))
let promed = (nota1+nota2+nota3)/3

if(promed > 59){

    console.log(`el estudiante ${nombre} ${apellido} su edad ${edad} fue aprobado `)

}else{
    console.log(`el estudiante ${nombre} ${apellido} su edad ${edad} No fue aprobado `)
}

console.log(`el promedio del grado  es `,promed)




})