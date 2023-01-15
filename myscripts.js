const container = document.querySelector(".gridcontainer")
const squares = document.querySelectorAll(".squares")

for (let i = 0; i < 16; i++) {
    const divs = document.createElement("div");
    divs.classList.add("squares")
    container.appendChild(divs);
}

squares.forEach((square) => {
    square.addEventListener('onmouseover', () => {
        squares.style.backgroundColor = "red";
    });
});