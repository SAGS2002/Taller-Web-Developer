/*const API_URL = "https://jsonplaceholder.typicode.com"

const HTMLResponse = document.querySelector("#app")
const ul = document.createElement("ul")

fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        users.forEach(user => {
            let elem = document.createElement("li")
            elem.appendChild(
                document.createTextNode(`nombre:${user.name}`)
            )

            ul.appendChild(elem)
        });
        HTMLResponse.appendChild(ul)
    })
*/

//mayor de edad

/*
const edadStr = prompt("ingrese su edad")
const edad = parseInt(edadStr)

if (isNaN(edad) || edadStr===null || edadStr.trim()==="") {
    alert("Entrada invalida. POr favor, ingrese un número para tu edad")
}else{
    const edadMin = 18
    if (edad >= edadMin) {
        alert("Eres mayor de edad")
    } else {
        alert("Eres menor de edad")
    }
}
*/

// numero par, impar

/*
const num = prompt("ingrese un numero")
const number = parseInt(num)

if (number % 2 == 0) {
    alert("Es un numero par")
} else {
    alert("Es un numero impar")
}
*/

//Bucle


//For. Se usa para repetir un bloque de código un número conocido de veces

/* 
for (let i = 1; i <= 10; i++) {
    console.log(`iteración: ${i}`)
}
*/

//While. Se usa cuando no sabemos cuantas veces se repetira, pero si sabemos la condicion
/* 
let i=1
while (i<= 10) {
    console.log(`number:${i}`);
    i++
}
*/

//Recorre los elementos de un array o estructura iterable
/* 
let list = ["Manzana", "Pera", "Lechoza"]

for (const element of list) {
    console.log(element)
}
*/


//tabla de multiplicar

/* 
const num = prompt("ingrese un numero")
const number = parseInt(num)

for (let i = 1; i <= 10; i++) {
    let result = number * i
    let table = console.log(`${number}x${i}=${result}`)
    if (result % 2 == 0) {
        console.log("Es un numero par")
    } else {
        console.log("Es un numero impar")
    }
}
*/

//Array
/* 
let names = ["Halo", "Call of duty", "GTA 6"]
console.log(names)
names.pop()
console.log(names)
names.push("Skyrim")
console.log(names)

names.shift()
console.log(names)
names.unshift("Dark Souls 3")
console.log(names)



for (let i = 0; i < names.length; i++) {
    if (i % 2 == 0) {
        console.log(`${names[i]} es par`)
    }else{
        console.log(`${names[i]} es impar`)
    }
}

for (const element of names) {
    console.log("")
    console.log(element)
}

let mayus = names.map(function(x) {
    return x.toUpperCase()
})
console.log(mayus)
*/

// funciones
/* 
const numStr1 = prompt("ingresa numero 1")
const num1 = parseInt(numStr1)
const numStr2 = prompt("ingresa numero 1")
const num2 = parseInt(numStr2)

function sum(a, b) {
    return a + b
}

let result = sum(num1, num2)
alert(`el resultado de la suma es:${result}`)

const numStr1 = prompt("ingresa numero 1")
const num1 = parseInt(numStr1)
const numStr2 = prompt("ingresa numero 1")
const num2 = parseInt(numStr2)

function sum(a, b) {
    return a + b
}

let result = sum(num1, num2)
alert(`el resultado de la suma es:${result}`)
*/

/* 
const nombre = prompt("ingresa tu nombre")


function saludo(name) {
    alert(`Hola ${name}, bienvenido a mi pagina web.
Mi nombre es Sebastián y soy desarrollador FrontEnd Junior`)
}
let hi = saludo(nombre)
*/

//DOM

let boton = document.getElementById("botonSaludo")
let i = 1
boton.addEventListener("click", function(){
    alert("Ya le diste click:" + i++)
})
