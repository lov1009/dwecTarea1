
let valor1, valor2;
/*Función que almacena los valores introducidos para las operaciones , 
para no estar repitiendolos en todas las funciones*/
function obtenerValores() {
  valor1 = document.getElementById("num1").value;
  valor2 = document.getElementById("num2").value;
}

//Devuelvo los valores si no están vacíos
function validarValores() {
  return valor1.length > 0 && valor2.length > 0;
}

/*LLamo al metodo para obtener los valores, compruebo si son válidos, y si lo son, los sumo, 
convierto en float y guardo en la variable resultado, que luego devuelvo al usuario (con dos decimales), 
si no, muestro mensaje de error*/
function suma() {
  obtenerValores();
  if (validarValores()) {
    let resultado = parseFloat(valor1) + parseFloat(valor2);

    document.getElementById("resultado").innerHTML = 'Resultado SUMA: ' + resultado.toFixed(2);
  } else {
    document.getElementById("resultado").innerHTML = "ERROR. Introduce los valores.";
  }
}

//Como la suma pero restando los valores
function resta() {
  obtenerValores();
  if (validarValores()) {
  let resultado = parseFloat(valor1) - parseFloat(valor2);

  document.getElementById("resultado").innerHTML = 'Resultado RESTA: ' + resultado.toFixed(2);
} else {
  document.getElementById("resultado").innerHTML = "ERROR. Introduce los valores.";
}

}

//Igual que suma y resta pero multiplicando los valores
function multiplicacion() {
  obtenerValores();
  if (validarValores()) {
  let resultado = parseFloat(valor1) * parseFloat(valor2);
  
  document.getElementById("resultado").innerHTML = 'Resultado MULTIPLICACIÓN: ' + resultado.toFixed(2);
} else {
  document.getElementById("resultado").innerHTML = "ERROR. Introduce los valores.";
}

}

/*Igual que las anteriores, pero en este caso controlé que si es una división con 
denominador = 0 muestre un mensaje de error y no realice la operacion*/
function division() {
  obtenerValores();
  if (validarValores()) {
    if(valor2 == 0){
      document.getElementById("resultado").innerHTML = "ERROR. División por 0.";
      return;
    }

  let resultado = parseFloat(valor1) / parseFloat(valor2);

  document.getElementById("resultado").innerHTML = 'Resultado DIVISIÓN: ' + resultado.toFixed(2);
} else {
  document.getElementById("resultado").innerHTML = "ERROR. Introduce los valores.";
}

}

//Igual que la división también controlo que si el segundo valor es 0 muestre un mensaje de error.
function mod() {
  obtenerValores();
  if (validarValores()) {
    if(valor2 == 0){
      document.getElementById("resultado").innerHTML = "ERROR módulo. División por 0.";
      return;
    }
  let resultado = parseFloat(valor1) % parseFloat(valor2);

  document.getElementById("resultado").innerHTML = 'Resultado MÓDULO: ' + resultado.toFixed(2);
} else {
  document.getElementById("resultado").innerHTML = "ERROR. Introduce los valores.";
}

}


/*Función que tras llamar a la función para obtener los valores y a la que los valida,
si son válidos, hace un bucle en el cual por cada vuelta va sumando a la variable 
resultado, que la he iniciado en 1, el valor de resultado * el del valor1 introducido, 
se hace el bucle mientras i sea mayor al valor2*/
function potencia() {
  obtenerValores();
  if (validarValores()) {
  let resultado = 1;
  for (let i = 0; i < valor2; i++) {
    resultado = resultado * valor1;
  }

  document.getElementById("resultado").innerHTML = 'Resultado POTENCIA: ' + resultado.toFixed(2);
} else {
  document.getElementById("resultado").innerHTML = "ERROR. Introduce los valores.";
}

}

/*

function potenciaRecursiva(base, exp){
  if (exp == 0) {
    return 1;
  }
  return base * potenciaRecursiva(base, exp - 1);
}

function potencia2(){
  obtenerValores();
  if (validarValores()) {
    document.getElementById("resultado").innerHTML = potenciaRecursiva(valor1, valor2).toFixed(2);
  } else {
    document.getElementById("resultado").innerHTML = "ERROR. Introduce los valores.";
  }
    
}

*/
