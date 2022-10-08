const popupBtn = document.querySelectorAll('.submitbutton');
const popupBg = document.querySelector('.popup_bg');
const popupWindow = document.querySelector('.popup');
const popupClose = document.querySelector('.okbutton');
const popupText = document.querySelector('.popup_text');
let formInputs = document.querySelectorAll('.input');
let form = document.querySelector('.contact_form');
let division = document.createElement('span');
let inputEmail= document.getElementById("email");
let inputName= document.getElementById("name");
let inputMsg= document.getElementById("message");
division.textContent= ',';
// inputEmail.addEventListener('input',() => {
//     sessionStorage.setItem('inputEmail1', inputEmail.value);
// });
// inputName.addEventListener('input',() => {
//     sessionStorage.setItem('inputName1', inputName.value);
// });
// inputMsg.addEventListener('input',() => {
//     sessionStorage.setItem('inputMsg1', inputMsg.value);
// })
function PopupGo(){
    if(inputName.value.length == 0){
        alert('Please fill in the Name and Email fields');
        // inputName.value = sessionStorage.getItem('inputName1');
        // inputEmail.value = sessionStorage.getItem('inputEmail1');
        // inputMsg.value = sessionStorage.getItem('inputMsg1');
        }
    else if(inputEmail.value.length == 0){
        alert('Please fill in the Name and Email fields');
        // inputName.value = sessionStorage.getItem('inputName1');
        // inputEmail.value = sessionStorage.getItem('inputEmail1');
        // inputMsg.value = sessionStorage.getItem('inputMsg1');
        }
    else if((inputName.value.length == 0)&&(inputEmail.value.length == 0)){
        alert('Please fill in the Name and Email fields');
        // inputName.value = sessionStorage.getItem('inputName1');
        // inputEmail.value = sessionStorage.getItem('inputEmail1');
        // inputMsg.value = sessionStorage.getItem('inputMsg1');
    }
    else{
        popupBg.classList.add('active');
        popupWindow.classList.add('active');
        // inputName.value = sessionStorage.getItem('inputName1');
        // inputEmail.value = sessionStorage.getItem('inputEmail1');
        // inputMsg.value = sessionStorage.getItem('inputMsg1');
    }}
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
document.getElementById('name').oninput = () => {
    document.querySelector('.userName').innerHTML = document.getElementById('name').value + division.textContent;
}
function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// form.onsubmit = function () {
//     let emailVal = inputEmail.value,
//         emptyInputs = Array.from(formInputs).filter(input => input.value === '');

//     formInputs.forEach(function (input) {
//         if (input.value === '') {
//             input.classList.add('error');

//         } else {
//             input.classList.remove('error');
//         }
//     });

//     if (emptyInputs.length !== 0) {
//         console.log('inputs not filled');
//         return false;
//     }

//     if(!validateEmail(emailVal)) {
//         console.log('email not valid');
//         inputEmail.classList.add('error');
//         return false;
//     } else {
//         inputEmail.classList.remove('error');
//     }
// }