// Button Variables
let button = document.createElement(`button`)
let buttonText = document.createTextNode(`Add Square`)
let clickCounter = 0

button.appendChild(buttonText)
document.body.appendChild(button)

// Div Containter for Generated Squares
let squareContainer = document.createElement(`div`)
squareContainer.classList.add(`container`)

document.body.appendChild(squareContainer)

// Button Click
button.addEventListener(`click`, buttonClicked)

function buttonClicked() {
    clickCounter++

    let square = document.createElement(`div`)
    square.classList.add(`square`)
    square.setAttribute(`id`, clickCounter)

    squareContainer.appendChild(square)

    square.addEventListener(`mouseover`, hoverText)
    square.addEventListener(`mouseleave`, noText)
    square.addEventListener(`click`, colorChange)
    square.addEventListener(`dblclick`, deleteSquare)

}

// Hover Text Functions
function hoverText(e) {
    e.target.textContent = `${e.target.id}`
}

function noText(e) {
    e.target.textContent = ``
}

// Color Change Function
let randomColor = [`red`, `orange`, `yellow`, `green`, `blue`, `purple`]

function colorChange(e) {
    e.target.style.backgroundColor = randomColor[Math.floor(Math.random() * 6)]
}

// Delete Square Function
function deleteSquare(e) {
    let squareContents = document.getElementsByClassName(`square`)

    for (i = 0; i < squareContents.length; i++) {

        if (e.target == squareContents[0] && e.target.id % 2 == 1) {
            alert(`No More Existing Boxes to the Left.`)
            break;
        }
        else if (squareContents[i] == e.target && e.target.id % 2 == 1) {
            squareContents[i - 1].remove()
        }
        else if (e.target == squareContents[squareContents.length - 1] && e.target.id % 2 == 0) {
            alert(`No More Existing Boxes to the Right.  Please Add More.`)
            break;
        }
        else if (squareContents[i] == e.target && e.target.id % 2 == 0) {
            squareContents[i + 1].remove()
        }

    }

}
