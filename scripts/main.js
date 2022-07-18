function get(id) {
    return document.getElementById(id)
}

window.onscroll = function () {
    hideTopbar()
}
// Funzioni per aggiornare la posizione del footer
// a seguito delle modifiche del contenuto della pagina
window.onload = function () {
    placeFooter()
    hideTopbar()
}
window.onresize = function () {
    placeFooter()
    hideTopbar()
}
window.ontransitionend = function () {
    placeFooter()
}
window.onchange = function () {
    placeFooter()
}


/* Funzione per 'alzare' la sidebar quando la topbar
   non è più visibile */
function hideTopbar() {
    if (window.scrollY >= 80) {
        get("sidebar").style.top = "0px"
        get("side-button").style.top = "30px"
    }
    else {
        get("sidebar").style.top = "90px"
        get("side-button").style.top = "110px"
    }
}


/* Funzione per controllare se la sidebar è attualmente attiva
 * oppure no,
 * returns true se è attiva, false altrimenti */
function isSidebarActive() {
    if (get("sidebar").style.width == "0px")
        return false
    return true
}

function toggleSidebar() {
    isSidebarActive() ? closeSidebar() : openSidebar()
}

function openSidebar() {
    get("sidebar").style.width = "250px"
    get("side-rect").style.width = "250px"
    get("side-button").style.left = "270px"
    get("prev-button").style.left = "270px"
    get("main").style.left = "450px"
    get("footer").style.left = "250px"
}

function closeSidebar() {
    get("sidebar").style.width = "0px"
    get("side-rect").style.width = "0px"
    get("side-button").style.left = "20px"
    get("prev-button").style.left = "20px"
    get("main").style.left = "200px"
    get("footer").style.left = "0px"
}

let x = window.matchMedia("(max-width: 1025px)")
adjustMain(x)
x.addListener(adjustMain)

function adjustMain(x) {
    if (x.matches) { // Se lo schermo è più piccolo di 1025px
        get("main").style.left = "20px"
        get("main").style.right = "20px"
        get("footer").style.left = "0px"
    } else {
        get("main").style.right = "200px"
        isSidebarActive() ? get("main").style.left = "450px" : get("main").style.left = "200px"
        isSidebarActive() ? get("footer").style.left = "250px" : get("footer").style.left = "0px"
    }
}


/* Funzione per aprire la searchbar */
function openSearchbar() {
    if (window.innerWidth < 600)
        get("topbar-title").style.display = "none"
    get("search-mobile").style.display = "inline"
    get("menu-img").className = "bx bx-search-alt-2"
}

function closeSearchbar() {
    get("topbar-title").style.display = "inline"
    get("search-mobile").style.display = "none"
    get("menu-img").className = "bx bx-menu"
}

function isSearchbarOpen() {
    if (get("search-mobile").style.display == "inline")
        return true
    return false
}

function toggleSearchbar() {
    isSearchbarOpen() ? closeSearchbar() : openSearchbar()
}

function search() {
    //TODO
}

function prevLesson() {
    //TODO
}

function nextLesson() {
    //TODO
}

// Funzione per calcolare la lunghezza della pagina
// e posizionare il footer in basso
function placeFooter() {
    let hasScrollbar = document.documentElement.scrollHeight > document.documentElement.clientHeight
    if (!hasScrollbar) {
        get("footer").style.position = "fixed"
        get("footer").style.bottom = "0px"
        get("footer").style.top = "auto"
    }
    else {
        get("footer").style.bottom = "0px"
        let h = get("main").scrollHeight
        get("footer").style.position = "absolute"
        get("footer").style.top = h + 100 + "px"
        get("footer").style.bottom = "auto"
    }
}
















