
// Ejercicio 1
const imagen = document.getElementById("dino");

// Establecer un estado inicial para el borde
let bordeRojo = false;

// Función para alternar el borde
imagen.addEventListener("click", function() {
    if (bordeRojo) {imagen.style.border = "2px solid white";
    } 
    else {imagen.style.border = "2px solid red";
    }

    // Alternar el borde
    bordeRojo = !bordeRojo;
});

// Ejercicio 2

function validarSuma() {
    let valor1 = parseInt(document.getElementById('input1').value) || 0;
    let valor2 = parseInt(document.getElementById('input2').value) || 0;
    let valor3 = parseInt(document.getElementById('input3').value) || 0;

    let suma = valor1 + valor2 + valor3;

    // Verificar si la suma es mayor que 10
    if (suma > 10) {
        alert("Llevas demasiados stickers");
    } else {
        alert("Tienes " + suma + " stickers");
    }
}

// Ejercicio 3
const resultado = document.getElementById('resultado');
const btn =document.getElementById('btn');

btn.addEventListener('click', () =>{

    const primero = document.getElementById('primero').value;
    const segundo = document.getElementById('segundo').value;
    const tercero = document.getElementById('tercero').value;

    const password = primero + segundo + tercero;

    if(password == '911'){
        resultado.innerHTML = 'Password 1 correcto';
    }
    else if(password == '714'){
        resultado.innerHTML = 'Password 2 correcto';
    }
    else {resultado.innerHTML = 'Password incorrecto';}
    
    console.log(btn)
})