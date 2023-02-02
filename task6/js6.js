const input = document.querySelector('#validation-input')
const maxLength = input.dataset.length;

input.addEventListener('input', ()=>{
    let length = input.value.length
    if(length > maxLength || length < maxLength){
        input.className = 'invalid'
    }else if(length == maxLength){
        input.className = 'valid'
    }
})