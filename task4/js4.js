let counterValue = 0;
const counter = document.querySelector('#value')

document.querySelector('[data-action="decrement"]').addEventListener('click', () => {counterValue--; counter.innerText = counterValue})
document.querySelector('[data-action="increment"]').addEventListener('click', () => {counterValue++; counter.innerText = counterValue})