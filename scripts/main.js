/* Funzione per 'alzare' la sidebar quando la topbar
   non è più visibile */
   function hideTopbar(){
    if (window.scrollY >= 80){
       document.getElementById("sidebar").style.top = "0px";
       document.getElementById("side-button").style.top = "30px";
   }
   else {
       document.getElementById("sidebar").style.top = "90px";
       document.getElementById("side-button").style.top = "110px";
   } 
};

window.onscroll=function() {
   hideTopbar();
};


/* Funzione per controllare se la sidebar è attualmente attiva
 * oppure no,
 * returns true se è attiva, false altrimenti */
function isSidebarActive(){
    if (document.getElementById("sidebar").style.width == "0px")
        return false;
    else 
        return true;
};

function toggleSidebar(){
    isSidebarActive() ? closeSidebar() : openSidebar();
};

function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("side-rect").style.width = "250px";
    document.getElementById("side-button").style.left = "270px";
    document.getElementById("prev-button").style.left = "270px";
    document.getElementById("main").style.left = "450px"; 
};

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("side-rect").style.width = "0px";
    document.getElementById("side-button").style.left = "20px";
    document.getElementById("prev-button").style.left = "20px";
    document.getElementById("main").style.left = "200px"; 
};


function search(){
    //TODO
};

function prevLesson(){
    //TODO
};

function nextLesson(){
    //TODO
};