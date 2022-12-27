const burger = document.querySelector('.btn-hamburger');
const navBar = document.querySelector('.listnavbar'); 

function toogleNav (){
    burger.classList.toggle('active');
    navBar.classList.toggle('active');
}
burger.addEventListener('click', toogleNav);
