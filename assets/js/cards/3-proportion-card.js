const inputOne = document.getElementById("input-1");
const inputTwo = document.getElementById("input-2");
const inputThree = document.getElementById("input-3");
const inputFour = document.getElementById("input-4");
const buttonCalculate = document.getElementById("button-calculate");

buttonCalculate.addEventListener("click", function(event) {
  event.preventDefault();

  calcularRegraDeTres();
});

function calcularRegraDeTres() {
  const valueOne = parseFloat(inputOne.value) || 0;
  const valueTwo = parseFloat(inputTwo.value) || 0;
  const valueThree = parseFloat(inputThree.value) || 0;

  if (valueTwo !== 0) {
    const resultado = (valueThree * valueTwo) / valueOne;
    inputFour.value = resultado.toFixed(2);
  } else {
    alert("Erro: O segundo valor não pode ser zero");
  }
}
