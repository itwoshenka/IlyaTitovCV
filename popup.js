const popupBtn = document.querySelectorAll('.submitbutton');
const popupBg = document.querySelector('.popup_bg');
const popupWindow = document.querySelector('.popup');
const popupClose = document.querySelector('.okbutton')
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