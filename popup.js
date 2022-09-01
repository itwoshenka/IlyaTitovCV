const popupBg = document.querySelector('.popup-bg');
const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.submitbutton');
const closePopupButton = document.querySelector('.close-popup');

function openPopup(){ 
    openPopupButton.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBg.classList.add('active'); 
        popup.classList.add('active'); 
    })
};