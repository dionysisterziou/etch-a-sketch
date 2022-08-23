const container = document.querySelector('#container');
const buttonCreate = document.querySelector('#buttonCreate');

// Create grid
for (let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'item');
    container.setAttribute('style', `grid-template-columns: repeat(16, 30px)`);
    div.textContent = i;
    container.appendChild(div);
}

let items = document.querySelectorAll('.item');

// Change color to grid items when they're hovered
items.forEach((item) => {
    function hover() {
        item.style.backgroundColor = 'red';
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

    for (let i = 1; i <= Math.pow(size, 2); i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'item');
        container.setAttribute('style', `grid-template-columns: repeat(${size}, 30px)`);
        div.textContent = i;
        container.appendChild(div);
    }

    items = document.querySelectorAll('.item');

    items.forEach((item) => {
        function hover() {
            item.style.backgroundColor = 'red';
        }
    
        item.addEventListener('mouseover', hover);
    })
}

buttonCreate.addEventListener('click', promptFunction);