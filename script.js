const menu = document.querySelector("#menu")
const menuTab = document.querySelector("#menu-tab")

menuTab.addEventListener("click", handler)

function handler(e){
    e.preventDefault();
    menu.classList.toggle("header__nav") ;
}