const rangeInput = document.querySelector('#font-size-control')
const textSpan = document.querySelector('#text')
rangeInput.addEventListener('input', () => {
    textSpan.style.fontSize = rangeInput.value + 'px'
})