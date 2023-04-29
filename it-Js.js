const lines = document.querySelector('#lines'); 
const popup = document.querySelector('#popup'); 
const menu = document.querySelector('.navigation').cloneNode(1); 
 
lines.addEventListener('click', linesHandler); 
 
function linesHandler(element) { 
    element.preventDefault(); 
    popup.classList.toggle('open'); 
    renderPopup(); 
} 
 
function renderPopup(){ 
    popup.appendChild(menu); 
}
