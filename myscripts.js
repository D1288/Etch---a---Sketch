const container = document.querySelector(".gridcontainer")
const squares = document.querySelectorAll(".squares")
const userInput = document.querySelector('.userinput');
const gridcontainer = document.querySelector('.gridcontainer');
const reset = document.querySelector('.reset')
let colorChange = document.querySelector(".colorpicker")
let opacityController = document.querySelector(".opacity")



userInput.addEventListener('click', () => {
    gridcontainer.textContent = " "
})

userInput.addEventListener('click', () => {


    let gridSize = prompt("Please enter the size of the grid. Max size is 100px")
    while (gridSize > 100) {
        gridSize = prompt("Please enter the size of the grid. Max size is 100px");
    }
    // return gridSize




    let totalGrid = gridSize * gridSize
    for (let i = 0; i < totalGrid; i++) {
        const divs = document.createElement("div");
        divs.classList.add("squares");
        container.appendChild(divs);
        
        colorChange.addEventListener('input', () => {
            divs.addEventListener("mouseover", () => {
                divs.style.backgroundColor = colorChange.value
            })
        })
        reset.addEventListener('click', () => {
            divs.style.backgroundColor = "white";
        })
        
        
    }

    gridcontainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridcontainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;


})




// opacityController.addEventListener('input', () =>{
//     colorChange = colorChange.style.opacity
// })


