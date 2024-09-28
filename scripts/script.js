// JavaScript Document
console.log("hi");

let openBurger = document.querySelector (".hamburgerKnop");
let sluitBurger = document.querySelector ("#sluitHamburger");
const hamburgerMenu = document.querySelector(".hamburgerMenu");

openBurger.onclick = openMenu;
sluitBurger.onclick = sluitMenu;

function openMenu() {
    hamburgerMenu.id = "toonMenu";
  }

function sluitMenu() {
  hamburgerMenu.removeAttribute("id");
}

//hamburgermenu met hulp van de turorial op DLO en een beetje chatgpt omdat ik een ID inplaats van een class gebruik