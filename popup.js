const popupBtns = document.querySelectorAll('.submitbutton');
const popupBg = document.getElementById('')
const popupWindow = document.getElementById('')
function popupAppear(){
        popupBtns.addEventListener("click", function (e){
            e.preventDefault();
            alert("JAVASCRIIIPT!");
        })
    }
console.log(popupBtns)