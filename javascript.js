const container = document.querySelector('#container');
const buttonCreate = document.querySelector('#buttonCreate');

let size = 16; // Default grid size
let exists = false;

function calculateSize(size) {
    for (let i = 1; i <= Math.pow(size, 2); i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'item');
        container.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr)`);
        div.textContent = '';
        container.appendChild(div);
    }
}

function addHover() {
    let items = document.querySelectorAll('.item');
    
    items.forEach((item) => {
        function hover() {
            item.style.backgroundColor = 'black';
        }
    
        item.addEventListener('mouseover', hover);
    })
}


function createGrid() {
    if (exists === false) {
        calculateSize(size);

        exists = true;
    } else {
        removeGrid();
        calculateSize(size);
    }

    addHover();
}

createGrid();

function removeGrid() {
    let items = document.querySelectorAll('.item');

    items.forEach((item) => {
        container.removeChild(item);
    })
}

function promptFunction() {
    size = Number(prompt('How many squares? (Maximum: 100)'));

    if (size > 100) {
        do {
            size = Number(prompt('How many squares? (Maximum: 100)'));
        } while (size > 100);
    }

    createGrid();
}

buttonCreate.addEventListener('click', promptFunction);