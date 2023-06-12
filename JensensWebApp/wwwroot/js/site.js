// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Globala variabler
var cardElems;	// Referens till card-elementen för länkarna


// Initiering av globala variabler och händelsehanterare.
function init() {
    cardElems = document.getElementsByClassName("card-body");
    for (var i = 0; i < cardElems.length; i++) {
        cardElems[i].addEventListener('click', cardClick, false);
        console.log("Info: Click-event laddat");
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
            //console.log(elems[i].href); //Debug hjälp
            href = elems[i].href;
        }
    }
    open(href, "_self"); //Öppnas i samma fönster (_blank i ett annat)
    //alert( href ); //Debug hjälp
}