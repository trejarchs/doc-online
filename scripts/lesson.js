/*============
    * ELEMENTI
    =============*/
let sidebar = document.getElementById("sidebar")
let sideRect = document.getElementById("sidebar-rect")
let sideBtn = document.getElementById("side-btn")
let prevBtn = document.getElementById("prev-btn")
let main = document.getElementById("lesson-page")
let footer = document.getElementById("footer")

/*============
    * FUNZIONI
    =============*/
window.onscroll = function () {
    hideTopbar()
}

/* Funzione per aggiornare la posizione della sidebar
 * quando la topbar non è più visibile */
function hideTopbar() {
    if (window.scrollY > 100) {
        sidebar.style.top = "0px"
        sideBtn.style.top = "30px"
    } else {
        sidebar.style.top = "90px"
        sideBtn.style.top = "110px"
    }
}

/* Se la sidebar è attiva, chiude la Sidebar
 * altrimenti la apre */
function toggleSidebar() {
    mainTransition()
    isSidebarActive() ? closeSidebar() : openSidebar()
    updateMainPosition()

}

/* Funzione per far sì che il contenuto del main si sposti a destra/sinistra 
 * a seconda dello stato della sidebar in maniera fluida.
 * Non potevo aggiungere direttamente la proprietà 
 * "transition: margin-left .2s, margin-right .2s" al main-content perchè
 * tale proprietà avrebbe sovrascritto la proprietà "transition: none" che 
 * mi permette di avere una animazione fluida di spostamento nel caso di 
 * window resizing.
 * In questo modo riesco ad avere un'animazione fluida sia nel caso di window 
 * resizing sia quando si apre/chiude la sidebar. */
function mainTransition() {
    main.style.transition = "0.2s"
    setTimeout(function () {
        main.style.transition = "0s"
    }, 200)
}

/* Funzione per controllare se la sidebar è attualmente attiva
 * oppure no,
 * returns true se è attiva, false altrimenti */
function isSidebarActive() {
    if (sidebar.style.width == "0px")
        return false
    return true
}

/* Funzione per aggiornare la posizione del main a seconda
 * dello stato della Sidebar */
function updateMainPosition() {
    if (isSidebarActive()) {
        main.style.marginLeft = "max(350px, 30vw)"
        main.style.marginRight = "max(100px, calc(30vw - 250px))"
    }
    else {
        main.style.marginLeft = "max(100px, 21.9vw)"   //21.9vw per preservare la larghezza originale del contenuto
        main.style.marginRight = "max(100px, 21.9vw)"
    }
}

/* Funzione per aprire la sidebar */
function openSidebar() {
    sidebar.style.width = "250px"
    sideRect.style.width = "250px"
    sideBtn.style.left = "270px"
    prevBtn.style.left = "270px"
    footer.style.width = "calc(100% - 250px)"
}

/* Funzione per chiudere la sidebar */
function closeSidebar() {
    sidebar.style.width = "0px"
    sideRect.style.width = "0px"
    sideBtn.style.left = "20px"
    prevBtn.style.left = "20px"
    footer.style.width = "100%"
}


/* Quando chiudo/apro la sidebar, le funzioni updateMainPosition() e 
 * open/closeSidebar() sovrascrivono anche le proprietà all'interno del 
 * @media query (in particolare i margini right/left di main-content
 * e la width del footer), quindi è necessario scrivere una funzione 
 * che controlli sempre la dimensione della finestra e aggiusti queste 
 * proprietà di conseguenza */
let x = window.matchMedia("(max-width: 853px)")
adjustMain(x)
x.addListener(adjustMain)

function adjustMain(x) {
    if (x.matches) { // Se lo schermo è più piccolo di 853px
        main.style.marginLeft = "20px"
        main.style.marginRight = "20px"
        footer.style.width = "100%"
    } else {
        updateMainPosition()
        isSidebarActive() ? footer.style.width = "calc(100% - 250px)" : footer.style.width = "100%"
    }
}

/* Funzioni per navigare tra le lezioni */
function prevLesson() {
    //TODO
}

function nextLesson() {
    //TODO
}

function getCurrentPage() {
    /* class Page {
        constructor(chapter, lesson) {
            this.chapter = chapter
            this.lesson = lesson
        }
    }

    let curPage = window.location.pathname  //  "/lezioni/4-1-oggetti.html" 
        .split("/")
        .pop()  //  "4-1-oggetti.html"
        .split("-")

    let chapter = curPage[0]
    let lesson = curPage[1]
        
    curPage = new Page(chapter, lesson)
    return curPage */
}




