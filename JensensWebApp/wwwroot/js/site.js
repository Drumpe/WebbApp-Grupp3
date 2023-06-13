// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Globala variabler


// Initiering av globala variabler och händelsehanterare.
function init() {
    let cardElems = document.getElementsByClassName("card-body");
    for (var i = 0; i < cardElems.length; i++) {
        cardElems[i].addEventListener('click', cardClick, false);
    }
} // End init
window.addEventListener("load", init); // init aktiveras då sidan är inladdad

// Funktion för hantering av click på card
function cardClick() {
    let href;
    let elems = this.children;
    //gå igenom elems och hitta "card-link"
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].className == "card-link") {
            href = elems[i].href;
        }
    }
    open(href, "_self"); //Öppnas i samma fönster (_blank i annat fall)
}


// BUtton för signup i footern

function clickSignUp() {
    var signUpBtn = document.getElementById("signupButton");
    signUpBtn.addEventListener('click', () => {
        window.open('https://localhost:7241', 'popUp', 'height = 300, width = 500, left = 100, top = 100, scrollbars = yes, resizable = yes, menubar = no, toolbar = yes, location = no, directories = no, status = yes')

    });

}
clickSignUp();