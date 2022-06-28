const board = document.getElementById('board');
const color = ['red', 'blue', 'green', 'yellow', 'purple'];
const SQUARE_NUMBER = 500;

for(let i = 0; i < SQUARE_NUMBER; i ++) {
    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square);

    square.addEventListener('mouseover', setColor);
    square.addEventListener('mouseleave',removeColor);

}

function setColor(event) {
    const element = event.target;
    const color = getRandomColor();
    console.log(color);
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor (event) {
    const element = event.target;
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    return color[Math.floor(Math.random() * color.length)];
}
