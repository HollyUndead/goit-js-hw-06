const input = document.querySelector('#name-input')
input.addEventListener('input', ()=>{
    let check = input.value
    let checkArr = check.split('')
    const checkAction = () => {
        const indexOf = checkArr.indexOf(' ')
        if(indexOf != -1){
            checkArr.splice(indexOf, 1)
            checkAction()
        }else{
            document.querySelector('#name-output').innerText = check
            if(checkArr.length === 0){
                document.querySelector('#name-output').innerText = 'Anonymous'
            }
        }
    }
    checkAction()
})