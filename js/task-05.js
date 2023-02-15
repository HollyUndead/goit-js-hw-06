const input = document.querySelector('#name-input')
input.addEventListener('input', ()=>{
    let check = input.value
    const checkAction = () => {
            if(check === ''){
                document.querySelector('#name-output').innerText = 'Anonymous'
                return
            }
            document.querySelector('#name-output').innerText = check
    }
    checkAction()
})