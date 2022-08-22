const container = document.querySelector('#container');
const buttonCreate = document.querySelector('#buttonCreate');

// Create grid
for (let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'item');
    div.textContent = i;
    container.appendChild(div);
}

const items = document.querySelectorAll('.item');

// Change color to grid items when they're hovered
items.forEach((item) => {
    function hover() {
        item.style.backgroundColor = 'red';
    }

    item.addEventListener('mouseover', hover);
})

function promptFunction() {
    let size = Number(prompt('How many squares?'));
}

buttonCreate.addEventListener('click', promptFunction);