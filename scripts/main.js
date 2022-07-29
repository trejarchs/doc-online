/*============
    * ELEMENTI
    =============*/
const menuContent = document.getElementById("menu-content")
const searchBar = document.getElementById("searchbar-mobile")
const searchBtn = document.getElementById("searchbtn-mobile")
const menuIcon = document.querySelectorAll("#menu-btn-mobile i")[0]
const main = document.getElementsByClassName("main")[0]

/*============
    * FUNZIONI
    =============*/
/* Se il menu è attivo e l'utente clicca fuori dalla topbar
 * oppure scrolla la pagina, chiude il menu */
main.onclick = function () {
    closeMenu()
}
window.onscroll = function () {
    closeMenu()
}

/* Funzioni per gestire la pressione del menu-btn
 * visibile dal cellulare */
function toggleMenu() {
    isMenuActive() ? closeMenu() : openMenu()
}

function isMenuActive() {
    return menuContent.style.height == "50px"
}

function closeMenu() {
    searchBar.style.display = "none"
    searchBtn.style.display = "none"
    menuContent.style.height = "0px"
    menuIcon.className = "bx bx-menu"
    menuIcon.style.fontSize = "36px"
}

function openMenu() {    
    searchBar.style.display = "block"
    searchBtn.style.display = "block"
    menuContent.style.height = "50px"
    menuIcon.className = "bx bx-x"
    menuIcon.style.fontSize = "42px"
}