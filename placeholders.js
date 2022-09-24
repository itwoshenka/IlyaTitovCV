const ph1 = document.getElementById('name');
const langSelect = document.querySelector('selection')
function changeLanguage(langSelect){
langSelect.addEventListener('click', (e) => {
    e.preventDefault();
    ph1.placeholder==="Введите ваше имя";
    refreshLabels();
});
};