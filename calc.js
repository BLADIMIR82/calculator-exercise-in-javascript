const botonNumeros = document.getElementsByName("data-number");
// console.log(botonNumeros)
const botonOpera = document.getElementsByName("data-opera");
// console.log(botonOpera)
const botonIgual = document.getElementsByName("data-igual")[0];
const botonDelete = document.getElementsByName("data-delete")[0];
var result = document.getElementById("result");
var opeActual = "";
var opeAnterior = "";
var operacion = undefined;
////Events//////

botonNumeros.forEach( (boton) => {
  //console.log(botonNumeros);
  boton.addEventListener("click",  ()=> {
    agregarNumero(boton.innerHTML);
  });
 // console.log(agregarNumero);
});

botonOpera.forEach( (boton) => {
    console.log(botonOpera);
  boton.addEventListener("click", () => {
    selectOperacion(boton.innerHTML);
  });
});

botonIgual.addEventListener("click", ()=> {
  calcular();
  actualizarDisplay();
});

botonDelete.addEventListener("click",  ()=> {
  clear();
  actualizarDisplay();
});

function selectOperacion(op) {
  if (opeActual === "") return;
  if (opeAnterior !== "") {
    calcular();
  }
  operacion = op.toString();
  opeAnterior = opeActual;
  opeActual = "";
}
///Functions/////

function calcular() {
  let calculo;
  const anterior = parseFloat(opeAnterior);
  const actual = parseFloat(opeActual);
  if (isNaN(anterior) || isNaN(actual)) return;
  switch (operacion) {
    case "+":
      calculo = anterior + actual;
      break;
    case "-":
      calculo = anterior - actual;
      break;
    case "x":
      calculo = anterior * actual;
      break;
    case "/":
      calculo = anterior / actual;
      break;
    default:
      return;
  }
  opeActual = calculo;
  operacion = undefined;
  opeAnterior = "";
}

function agregarNumero(num) {
  opeActual = opeActual.toString() + num.toString();
  actualizarDisplay();
}

function clear() {
  opeActual = "";
  opeAnterior = "";
  operacion = undefined;
}

function actualizarDisplay() {
  result.value = opeActual;
}

clear();
