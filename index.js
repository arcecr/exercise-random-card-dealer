const generateRandomCard = () => {
	let suits = ["heart", "spade", "club", "diamond"];
	let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

	const randomSuit = Math.floor(Math.random() * 4);
	const randomValue = Math.floor(Math.random() * 13);

	const cardObj = document.getElementsByClassName("card");
	cardObj[0].classList.add(suits[randomSuit]);

	const valueItem = document.createElement("p");
	valueItem.innerText = values[randomValue];
	valueItem.classList.add("cardValue");

	const suitIconTop = document.createElement("i");
	suitIconTop.classList.add("fas");
	suitIconTop.classList.add("fa-" + suits[randomSuit]);

	const suitIconBottom = suitIconTop.cloneNode();

	cardObj[0].appendChild(valueItem);
	cardObj[0].insertBefore(suitIconTop, valueItem);
	cardObj[0].insertBefore(suitIconBottom, valueItem.nextSibling);
}

window.onload = generateRandomCard();