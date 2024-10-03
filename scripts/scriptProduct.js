//hamburgermenu met hulp van de turorial op DLO

const MaatOnderboek = document.querySelectorAll(".pagina2 main ul:nth-of-type(3) li"); //selecteerd de ul van de maten

//selecteerd de li's in de maat ul 
MaatOnderboek.forEach(item => { 
  item.addEventListener("click", function() { // zorgt er voor dat als je er op clickt dat de functie word uitgevoerd
    event.preventDefault(); // Voorkomt dat de pagina terug naar boven gaat als je op een van de atjes clikt

     // Verwijder de class van alle ptjes  
    MaatOnderboek.forEach(i => {
      i.querySelector("p").classList.remove("geselecteerd");
    });
    
    // Voeg de class toe aan het geklikte ptje
    this.querySelector("p").classList.add("geselecteerd");
  });
});

//hulp van chatgpt 

const inWinkelmand = document.querySelector("#inWinkelmand");
const originalPosition = inWinkelmand.getBoundingClientRect().top + window.scrollY; // Verkrijg de originele positie van de winkelmand op basis van de horizontale scroll

document.addEventListener("scroll", function() {
    const currentScroll = window.scrollY; // scrollpositie van de window, verticaal (y)

    // als de huidige scollpositie groter is dan de originele positie van de winkelmand gaat de winkelmand bovenaanstaan
    if (currentScroll > originalPosition + 320   ) { //de +320 pixels zorgt er voor dat hij niet meteen bovenaan gaat staan, maar pas 320 pixels later
        inWinkelmand.classList.add("fixed-top"); // Voeg de fixed top class toe
    } else {
        inWinkelmand.classList.remove("fixed-top"); // Verwijdert de fixed top
    }
});

//met hulp van chatGPT