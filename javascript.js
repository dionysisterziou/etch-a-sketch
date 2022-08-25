const container = document.querySelector('#container');
const buttonCreate = document.querySelector('#buttonCreate');
let size = 16;

function createGrid(size) {
    for (let i = 1; i <= Math.pow(size, 2); i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'item');
        container.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr)`);
        div.textContent = '';
        container.appendChild(div);
    }
}

createGrid(size);

// Create default (16x16) grid
// for (let i = 1; i <= 256; i++) {
//     const div = document.createElement('div');
//     div.setAttribute('class', 'item');
//     container.setAttribute('style', `grid-template-columns: repeat(16, 1fr)`);
//     div.textContent = '';
//     container.appendChild(div);
// }

let items = document.querySelectorAll('.item');

// Change color to grid items when they're hovered
items.forEach((item) => {
    function hover() {
        item.style.backgroundColor = 'black';
    }

    item.addEventListener('mouseover', hover);
})

function promptFunction() {
    let size = Number(prompt('How many squares? (Maximum: 100)'));

    if (size > 100) {
        do {
            size = Number(prompt('How many squares? (Maximum: 100)'));
        } while (size > 100);
    }

    // Removes previous squares
    items.forEach((item) => {
        container.removeChild(item);
    })

    // for (let i = 1; i <= Math.pow(size, 2); i++) {
    //     const div = document.createElement('div');
    //     div.setAttribute('class', 'item');
    //     container.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr)`);
    //     div.textContent = '';
    //     container.appendChild(div);
    // }

    items = document.querySelectorAll('.item');

    items.forEach((item) => {
        function hover() {
            item.style.backgroundColor = 'black';
        }
    
        item.addEventListener('mouseover', hover);
    })
}

buttonCreate.addEventListener('click', promptFunction);