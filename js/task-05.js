const input = document.querySelector('#name-input')
input.addEventListener('input', ()=>{
    let check = input.value
    const checkAction = () => {
            document.querySelector('#name-output').innerText = check
            if(checkArr.length === ''){
                document.querySelector('#name-output').innerText = 'Anonymous'
            }
    }
    checkAction()
})