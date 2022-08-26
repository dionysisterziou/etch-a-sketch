const container = document.querySelector('#container');
const buttonCreate = document.querySelector('#buttonCreate');

let size = 16; // Default grid size

function calculateSize(size) {
    for (let i = 1; i <= Math.pow(size, 2); i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'item');
        container.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr)`);
        div.textContent = '';
        container.appendChild(div);
    }
}

console.log(Math.floor(Math.random() * 256));

function addHover() {
    let items = document.querySelectorAll('.item');
    
    items.forEach((item) => {
        function changeColor() {
            const red = Math.floor(Math.random() * 256); // Math.floor(Math.random() * 255 + 1) for both values to be inclusive 
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);

            item.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
    
        item.addEventListener('mouseover', changeColor);
    })
}

function removeGrid() {
    let items = document.querySelectorAll('.item');

    items.forEach((item) => {
        container.removeChild(item);
    })
}


function createGrid() {
    calculateSize(size);
    addHover();
}

createGrid();

function promptFunction() {
    size = Number(prompt('How many squares? (Maximum: 100)'));

    if (size > 100) {
        do {
            size = Number(prompt('How many squares? (Maximum: 100)'));
        } while (size > 100);
    }

    removeGrid();
    createGrid();
}

buttonCreate.addEventListener('click', promptFunction);