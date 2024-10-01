// JavaScript Document
console.log("hi");

let openBurger = document.querySelector (".hamburgerKnop"); //vind de .hamburgerknop
let sluitBurger = document.querySelector ("#sluitHamburger"); //vind de #sluitHamburger

const hamburgerMenu = document.querySelector(".hamburgerMenu");

openBurger.onclick = openMenu; //roept de functie openMenu aan als je op openBurger (de hamburgermenuknop) drukt
sluitBurger.onclick = sluitMenu; //roept de functie sluitMenu aan als je op sluitBurger (het kruisje) drukt

function openMenu() { //deze functie doet de toonMenu id aan waardoor de hamburgermenu tevoorschijn komt
    hamburgerMenu.id = "toonMenu";
  }

function sluitMenu() { //deze functie haalt de toonMenu id weg waardoor het hamburgermenu weg gaat
  hamburgerMenu.removeAttribute("id");
}

//hamburgermenu met hulp van de turorial op DLO