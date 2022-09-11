const educationButton = document.getElementById('nav_education');
const skillsButton = document.getElementById('nav_skills');
const hobbiesButton = document.getElementById('nav_hobbies');
const expButton = document.getElementById('nav_exp');
const langsButton = document.getElementById('nav_langs');
const contactButton = document.getElementById('nav_contact')
educationButton.addEventListener('click', () => {
    window.scroll({
        top: 200,
        behavior: "smooth"
    })
});
skillsButton.addEventListener('click', () => {
    window.scroll({
        top: 550,
        behavior: "smooth"
    })
});
hobbiesButton.addEventListener('click', () => {
    window.scroll({
        top: 1050,
        behavior: "smooth"
    })
});
expButton.addEventListener('click', () => {
    window.scroll({
        top: 1300,
        behavior: "smooth"
    })
});
langsButton.addEventListener('click', () => {
    window.scroll({
        top: 1500,
        behavior: "smooth"
    })
});
contactButton.addEventListener('click', () => {
    window.scroll({
        top: 1800,
        behavior: "smooth"
    })
});