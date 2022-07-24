
/* Funzioni per gestire la pressione del menu-button
 * visibile dal cellulare */
function toggleMenu() {
    isMenuActive() ? closeMenu() : openMenu()
}

function isMenuActive() {
    let menuContent = document.getElementById("menu-content")
    return menuContent.style.height == "65px"
}

function closeMenu() {
    let menuContent = document.getElementById("menu-content")
    let searchBar = document.getElementById("searchbar-mobile")
    let searchBtn = document.getElementById("searchbtn-mobile")
    let icon = document.querySelectorAll("#menu-button-mobile i")[0]

    searchBar.style.display = "none"
    searchBtn.style.display = "none"
    menuContent.style.height = "0px"
    icon.className = "bx bx-menu"
    icon.style.fontSize = "36px"
}

function openMenu() {
    let menuContent = document.getElementById("menu-content")
    let searchBar = document.getElementById("searchbar-mobile")
    let searchBtn = document.getElementById("searchbtn-mobile")
    let icon = document.querySelectorAll("#menu-button-mobile i")[0]

    searchBar.style.display = "block"
    searchBtn.style.display = "block"
    menuContent.style.height = "65px"
    icon.className = "bx bx-x"
    icon.style.fontSize = "42px"
}