const form = document.querySelector('.login-form')
const inputs = document.querySelectorAll('input')

const checkAction = (checkArr) => {
    const indexOf = checkArr.indexOf(' ')
    if(indexOf != -1){
        checkArr.splice(indexOf, 1)
        checkAction()
    }else if(checkArr.length == 0){
        return false
    }else {
        return true
    }
}



form.addEventListener('submit', (event)=>{
    event.preventDefault();
    form.preventDefa
    let loginData = {};
    for(let i=0; i<inputs.length; i++){
        const check = inputs[i].value;
        let checkArr = check.split('')
        if(checkAction(checkArr) == false){
            alert('Please, fill all inputs')
            return;
        }else{
            loginData[inputs[i].type] = inputs[i].value
        }
    }
    console.log(loginData);
    form.reset()
})