let counterValue = 0;
const counter = document.querySelector('#value')

document.querySelector('[data-action="decrement"]').addEventListener('click', decrease)
document.querySelector('[data-action="increment"]').addEventListener('click', increase)


function decrease(){
    counterValue--; 
    counter.innerText = counterValue
}

function increase(){
    counterValue++; 
    counter.innerText = counterValue
}