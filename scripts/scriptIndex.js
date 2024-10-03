//een details tag kan maar tegelijk open zijn
const details = document.querySelectorAll("details"); //selecteerd alle details

details.forEach((detail) => { //checkt elke detail en voert het onderstaande uit voor elke detail tag
  detail.addEventListener("toggle", () => { // voegt eventlistener toe als detial geklikt word.
    if (detail.open) openDetail(detail); // Als de detail tag open is dan word openDetail toegepast op de open detail
  });
});
  
function openDetail(targetDetail) {  //Deze functie zorgt ervoor dat als één detail wordt geopend, alle andere details sluiten.
  details.forEach((detail) => {
    if (detail !== targetDetail) { //checkt of de open detail gelijk is aan de net geopende detail
      detail.open = false; //sluit de gelijke detail
    }
  });
}

//bron: https://stackoverflow.com/questions/16751345/automatically-close-all-the-other-details-tags-after-opening-a-specific-detai