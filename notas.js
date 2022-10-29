"use strict"
function calificacion(){
    /*Guardo en nota la nota introducida por el usuario en la etiqueta numNota del html 
    y la voy commparando, cuando coincide con un rango le devuelvo la respuesta con 
    su nota textual en la etiqueta resultado */
    var nota = document.getElementById('numNota').value;
   

    if (nota > 0 && nota < 5 ){
        document.getElementById('resultado').innerHTML = "Suspenso";
    }else if (nota >= 5 && nota < 6 ){
        document.getElementById('resultado').innerHTML = "Aprobado";
    }else if (nota >= 6 && nota < 7 ){
        document.getElementById('resultado').innerHTML = "Bien";
    }else if (nota >= 7 && nota < 9 ){
        document.getElementById('resultado').innerHTML = "Notable";
    }else if (nota >= 9  && nota <= 10 ){
        document.getElementById('resultado').innerHTML = "Sobresaliente";
    }else {
        document.getElementById('resultado').innerHTML = "Nota inválida";

    }


}



