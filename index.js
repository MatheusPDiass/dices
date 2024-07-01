function changeDice(value) {
  const dicesArea = document.getElementById("dicesArea");
  dicesArea.classList = "";

  switch (value) {
    case 4:
      dicesArea.classList = "dices-4";
      break;
    case 6:
      dicesArea.classList = "dices-6";
      break;
    case 10:
      dicesArea.classList = "dices-10";
      break;
    case 20:
      dicesArea.classList = "dices-20";
      break;
    case 100:
      dicesArea.classList = "dices-100";
      break;
  }
}

function renderResult(number) {
  const dicesArea = document.getElementById("dicesArea");
  const alreadyResult = document.getElementById("resultNumber");

  if (alreadyResult) {
    console.log(alreadyResult);
    dicesArea.removeChild(alreadyResult);
  }

  const resultNumber = document.createElement("p");
  resultNumber.textContent = number;
  resultNumber.id = "resultNumber";

  dicesArea.appendChild(resultNumber);
}

function randonDice(value) {
  console.log(value);
}

let newDice = document.getElementById("randonDice");
newDice.addEventListener("click", randonDice(newDice.value));
