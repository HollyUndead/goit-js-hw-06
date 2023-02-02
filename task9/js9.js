function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body')
document.querySelector('.change-color').addEventListener('click', ()=>{
    const randomColor = getRandomHexColor()
    body.style.backgroundColor = randomColor;
    document.querySelector('.color').innerText = randomColor
})