const gridContainer = document.querySelector('#gridContainer');
const buttonCreate = document.querySelector('#buttonCreate');

// Default grid size
let size = 16; 

function calculateGridSize(size) {
    for (let i = 1; i <= Math.pow(size, 2); i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'item');
        gridContainer.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr)`);
        div.textContent = '';
        gridContainer.appendChild(div);
    }
}

// This function makes the color 10% darker
function addBlack(item) {
    const REGEX = /\d?\.?\d/; 
    let brightness = window.getComputedStyle(item).filter;
    let amount = Number(brightness.match(REGEX)[0]);

    item.style.filter = `brightness(${amount - 0.1})`;
}

function changeColor(item) {
    // Math.floor(Math.random() * 255 + 1) for both values to be inclusive 
    let red = Math.floor(Math.random() * 256);; 
    let green = Math.floor(Math.random() * 256);;
    let blue = Math.floor(Math.random() * 256);;

    if (!item.target.style.backgroundColor) {
        item.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    } else {
        addBlack(item.target);
    }

}

function addHover() {
    let items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('mouseover', changeColor);
    })
}

function removeGrid() {
    let items = document.querySelectorAll('.item');

    items.forEach((item) => {
        gridContainer.removeChild(item);
    })
}


function createGrid() {
    calculateGridSize(size);
    addHover();
}

createGrid();

function promptFunction() {
    size = Number(prompt('How many squares? (Maximum: 100)'));

    if (size === 0 || Number.isNaN(size) || size > 100) {
        do {
            size = Number(prompt('How many squares? (Maximum: 100)'));
        } while (size === 0 || Number.isNaN(size) || size > 100);
    }

    removeGrid();
    createGrid();
}

buttonCreate.addEventListener('click', promptFunction);