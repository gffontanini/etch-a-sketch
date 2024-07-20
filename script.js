const container = document.querySelector(".container");
const button = document.getElementById("newGridButton");

function createGrid(size) {
	container.innerHTML = "";

	const squareSize = 960 / size;

	for (let i = 0; i < size * size; i++) {
		const square = document.createElement("div");
		square.classList.add("grid-square");
		square.style.width = `${squareSize}px`;
		square.style.height = `${squareSize}px`;
		container.appendChild(square);

		square.addEventListener("mouseenter", () => {
			square.style.backgroundColor = "gray";
		});
	}
}

function requestGridSize() {
	let input = prompt("How many squares per side would you like? (max 100)");
	if (input === null) {
		return;
	}

	const size = Number(input);

	if (isNaN(size) || size <= 0) {
		alert("Please enter a valid number");
		requestGridSize();
	} else if (size > 100) {
		alert("Please use a number under 100");
		requestGridSize();
	} else {
		createGrid(size);
	}
}

button.addEventListener("click", () => {
	requestGridSize();
});

createGrid(16);
