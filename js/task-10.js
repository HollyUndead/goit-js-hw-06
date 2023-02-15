function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, 0)}`;
}

const rnageInput = document.querySelector('#controls>input')
const boxContainer = document.querySelector('#boxes')
const createBoxs = document.querySelector('[data-create]').addEventListener('click', ()=>{
  let boxList = '';
  let startSize = 30
  for (let i=0; i<rnageInput.value; i++){
      boxList += `<div  style="background-color: ${getRandomHexColor()}; height: ${startSize}px; width: ${startSize}px;"></div>`
      startSize+=10
  }
  boxContainer.insertAdjacentHTML('beforeend', boxList)
})
const destroyBoxs = document.querySelector('[data-destroy]').addEventListener('click', ()=>{
  boxContainer.innerHTML =''
})