var data = [];

function addData() {
  var input = document.getElementById("inputText");
  var inputValue = input.value.trim();

  if (inputValue !== "") {
    data.push(inputValue);
    input.value = "";
    renderCards();
  }
}

function handleKeyDown(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addData();
  }
}

function renderCards() {
  var cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";

  data.forEach(function(item) {
    var card = document.createElement("div");
    card.className = "card";
    card.innerHTML = item;
    cardContainer.appendChild(card);
  });
}