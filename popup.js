const popupBtn = document.querySelectorAll('.submitbutton');
const popupBg = document.querySelector('.popup_bg');
const popupWindow = document.querySelector('.popup');
const popupClose = document.querySelector('.okbutton');
const popupText = document.querySelector('.popup_text');
popupBtn.forEach((popupBtn) => {
            popupBtn.addEventListener('click', (e) => {
                e.preventDefault();
            popupBg.classList.add('active');
            popupWindow.classList.add('active');
        })
    });
popupClose.addEventListener('click',() =>{
    popupBg.classList.remove('active');
    popupWindow.classList.remove('active');
})
document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popupWindow.classList.remove('active');
    }
});
let inputEmail= document.getElementById("email");
let inputName= document.getElementById("name");
let inputMsg= document.getElementById("message");
let formInputs = document.querySelectorAll('.input')
let division = document.createElement('span');
division.textContent= ','
document.getElementById('name').oninput = () => {
    document.querySelector('.userName').innerHTML = document.getElementById('name').value + division.textContent;
}
function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.onsubmit = function () {
    let emailVal = inputEmail.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');

        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('inputs not filled');
        return false;
    }

    if(!validateEmail(emailVal)) {
        console.log('email not valid');
        inputEmail.classList.add('error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }
}