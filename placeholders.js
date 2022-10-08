const ph1 = document.getElementById('name');
const langSelect = document.querySelector('.selection')
function changeLanguage(langSelect){
langSelect.addEventListener('click', () => {
    ph1.placeholder.textcontent=="Введите ваше имя";
    refreshLabels();
});
};