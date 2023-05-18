var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Función para limpiar el resultado
function clearResult() {
    document.getElementById("result").innerText = "0";
  }

  // Función para agregar un carácter al resultado
  function addToResult(character) {
    var result = document.getElementById("result");
    if (result.innerText === "0") {
      result.innerText = character;
    } else {
      result.innerText += character;
    }
  }

  function characterKe(){
    var Ke = 8.99e9;
    addToResult(characterKe(Ke));

  }

  // Función para calcular el resultado
  function calculateResult() {
    var result = document.getElementById("result");
    var equation = result.innerText;
    var answer = eval(equation);
    result.innerText = answer;
  }

  // Obtener el botón que abre la calculadora
  var btn = document.getElementById("myBtn");

  // Obtener el elemento modal
  var modal = document.getElementById("myModal");

  // Obtener el botón de cierre
  var span = document.getElementsByClassName("close")[0];

  // Obtener todas las tarjetas
const cards = document.querySelectorAll('.card');

