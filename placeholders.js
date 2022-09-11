const ph1 = document.getElementsByName('name')[0].placeholder="Enter your name...";
const langSelect = document.getElementsByClassName('selection')
function changeLanguage(langSelect){
langSelect.addEventListener('change', (e) => {
    e.preventDefault();
    if (ph1.value==="Enter your name...") ph1.value==="Введите ваше имя";
    else ph1.value==="Enter your name..."
});
};
console.log(langSelect)