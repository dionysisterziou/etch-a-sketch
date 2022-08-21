const container = document.querySelector('#container');

for (let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'item');
    div.textContent = i;
    container.appendChild(div);
}