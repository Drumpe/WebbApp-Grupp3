// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Globala variabler


// Initiering av globala variabler och händelsehanterare.
function init() {
    let cardElems = document.getElementsByClassName("card-body");
    for (var i = 0; i < cardElems.length; i++) {
        cardElems[i].addEventListener('click', cardClick, false);
    }
initSupportButton();
initSubmitButton();
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

// Funktioner för Support knapp
function initSupportButton() {
    var supportButton = document.getElementById("supportbutton");
    supportButton.addEventListener('click', () => {
        var pageUrl = '/SupportUs/support.html';
        window.location.href = pageUrl;
    });
}
function initSubmitButton() {
    document.getElementById('submitButton').addEventListener('click', function () {
        var email = document.getElementById('emailInput').value;
        console.log(email);
        document.getElementById('thankYouMessage').style.display = 'block';
    });
}

// Här är funktion som gör toggle mellan theme och kontrollerar den nuvarande theme.
document.addEventListener("DOMContentLoaded", function() { 
    var icon = document.getElementById("theme-icon");
    var currentTheme = localStorage.getItem("theme") || "light-theme";
    console.log(currentTheme);

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === "dark-theme") {
                icon.src = "Images/sun-icon.png"
        } else { 
                icon.src = "Images/moon-icon.png"
        }
        
    }

    if (icon) {
        icon.onclick = function() {
            document.body.classList.toggle("dark-theme");
            if (document.body.classList.contains("dark-theme")) { 
                currentTheme = "dark-theme";
                icon.src = "Images/sun-icon.png"
            } else { 
                icon.src = "Images/moon-icon.png"
                currentTheme = "light-theme";
            }

            localStorage.setItem("theme", currentTheme);
        };
    }
});


