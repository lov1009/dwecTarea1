"use strict";

/*Función que se llama a si misma mientras el parametro que recibe no sea igual a 0
y multiplica el valor recibido por el resultado siguiente de aplicarse, 
hasta que el valor es 0, que entonces devuelve 1.
Es decir, si le pasamos un 3, como no es igual a 0, 
haría 3 * el resultado de hacer la función(3-1), que sería 2 y como es diferente 0
hariamos 2 * el resultado de la función(2-1), que es 1, como sigue siendo diferente a 0
hacemos 1 * el resultado de la funcion (1-1) que es 0, con lo cual devolvería 1.
En total tendríamos 3x2x1x1=6*/

function factorialRecursivo(numero) {
  if (numero == 0) {
    return 1;
  }
  return numero * factorialRecursivo(numero - 1);
}

function factorial() {
  //Patrón para aceptar solo valores enteros y positivos
  var pattern = /^[0-9]+$/;

  //Asigno el valor introducido por el usuario a la variable
  let numIntroducido = document.getElementById("numFactorial").value;

  /*Compruebo que cumpla el patrón. Si es correcto, utilizo la función factorialRecursivo
  para calcularlo y lo devuelvo, si no, muestro un mensaje de error*/
  if (pattern.test(numIntroducido) === true) {
    document.getElementById("resultado").innerHTML =
      "El factorial de " +
      numIntroducido +
      " es " +
      factorialRecursivo(numIntroducido) +
      ".";
  } else {
    document.getElementById("resultado").innerHTML =
      "ERROR. Introduzca un número entero positivo.";
  }
}

function mediaAritmetica(lista) {
  //guardo en la variable size el tamaño de la lista
  let size = lista.length;
  let sumaNumeros = 0;

  //para cada numero de la lista lo voy sumando y guardando el valor en sumaNumeros
  lista.forEach((numero) => {
    sumaNumeros = sumaNumeros + numero;
  });
  /*Divido suma números entre el total de números de la lista
     y añado q tenga dos decimales*/
  return (sumaNumeros / size).toFixed(2);
}

/**guardo el valor introducido por el usuario en la variable numIntroducido,
 * declaro una  variable con un patrón.
 * El numIntroducido lo divido por comas, lo filtro y lo mapeo y lo guardo en array
 */
function media() {
  let pattern = /^([-]?[0-9]+(\.[0-9]+)?|,)+?$/;
  let numIntroducido = document.getElementById("numMedia").value;
  let array = numIntroducido.split(",").filter(Boolean).map(Number);

  /**compruebo que cumple el patrón y que el tamaño es mayor a 0,
   * si lo cumple llamo a la funcion que calcula la media con el valor
   *  del array y si no, muetro un mensaje de error.
   */
  if (pattern.test(numIntroducido) && array.length > 0) {
    document.getElementById("resultado2").innerHTML =
      "La media de (" + array + ") es " + mediaAritmetica(array);
  } else
    document.getElementById("resultado2").innerHTML =
      "ERROR. Introduzca valores válidos.";
}

function comprobarPalindromo() {
  /*Guardo la cadena introducida por el usuario en textoIntro. 
  Si su tamaño es mayor a 0, guardo en la constante cadena el texto, cambiando los caracteres 
  que no sean de palabras o que sean subrayado por "" y paso todas las letras a minúsculas.
  Luego, en la constante cadInversa separo los caracteres de const cadena por los "", le doy la vuelta 
  y le añado los "" de nuevo*/
  let textoIntro = document.getElementById("textoP").value;
  if (textoIntro.length > 0) {
    const cadena = textoIntro.replace(/[\W_]/g, "").toLowerCase();
    const cadInversa = cadena.split("").reverse().join("");

    //Segun si son iguales o no ambas cadenas, muestro el mensaje adecuado
    return cadena === cadInversa
      ? (document.getElementById("resultado3").innerHTML =
          '"' + textoIntro + '" es un palíndromo.')
      : (document.getElementById("resultado3").innerHTML =
          '"' + textoIntro + '" no es un palíndromo.');
  }
  //Cuando no se introduce nada se muestra este error.
  else
    document.getElementById("resultado3").innerHTML =
      "ERROR. Introduzca la cadena.";
}

function validarDNI() {
  //declarar variables y el patrón que debe cumplir el dni
  var numero, letra, letraOk;
  var expresion_regular_dni = /^\d{8}[A-Z]$/;

  //asignamos el valor introducido por el usuario y lo ponemos en mayuscula
  let dni = document.getElementById("dni").value.toUpperCase();

  //Si no está vacío
  if (dni.length > 0) {
    
    /*Si se cumple la expresion regular, separamos las cadenas, una con 
    los numeros y otra con la letra */
    if (expresion_regular_dni.test(dni) === true) {
      numero = dni.substr(0, dni.length - 1);
      letra = dni.substr(dni.length - 1, 1);

      /*Dividimos el numero completo entre 23 y según el valor del resto (modulo %)
      le asignamos una letra de la cadena letraOk, contando desde la posición del  
      número hasta la posicion + 1, por ejemplo si el resto es 2, la letra seria W*/
      letraOk = "TRWAGMYFPDXBNJZSQVHLCKET";
      numero = numero % 23;
      letraOk = letraOk.substring(numero, numero + 1);

      //Comprobar si la letra introducida coincide con la q seria correcta
      if (letra != letraOk) {
        return (document.getElementById("resultado4").innerHTML =
          "ERROR. DNI incorrecto, la letra no corresponde.");
      } else {
        return (document.getElementById("resultado4").innerHTML =
          "DNI correcto.");
      }
    } else {
      //si no se cumple el patrón
      return (document.getElementById("resultado4").innerHTML =
        "ERROR. DNI incorrecto, formato no válido.");
    }
  } else {
    //Si no hay ningún dni introducido
    document.getElementById("resultado4").innerHTML =
      "ERROR. Introduzca el DNI a validar.";
  }
}
