window.onload = function() { //aL cargarse La página
fondo1=document.getElementById("fondouno"); //referencia al primer fondo.
fondo2=document.getElementById("fondodos"); //referencia al segundo fondo

pararmover=setInterval(mover,50); //iniciar primer temporizador: movimiento
setInterval(repetir,2250)// iniciar segundo temporizador: repetición del ciclo.
}
desplazar=0; // estado inicial del movimiento.
function mover() { // temporizador 1: movimiento
    desplazar-=10; //desptazar fondol -lepx
    desplazar2=desplazar+450; //desplazar fond02 a la vez
    posicionl=desplazar+"px"//preparar para código CSS fondol
    posicion2=desplazar2+"px"//preparar para código CSS fondol
    fondol.style.left=posicionl; //cambiar posición fondol mediante CSS
    fondo2.style.left=posicion2; //cambiar posición fond02
}
function repetir() { // temporizador 2: repetir ciclo
fondol.style.left="0px" //posición inicial de fondol
fondo2.style.left="450px" //posición inicial de fond02
desplazar=0; //posicion inicial referencia de movimiento.
}

function ejecutar()
{
    mover();
    repetir();
}