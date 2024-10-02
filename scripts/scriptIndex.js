const details = document.querySelectorAll("details"); //selecteerd de details tag

details.forEach((detail) => { //checkt elke detail
  detail.addEventListener("toggle", () => { // voegt eventlistener toe als detial geklikt word.
    if (detail.open) openDetail(detail); // Als de detail tag open is dan word openDetail toegepast op de open detail
  });
});
  
function openDetail(targetDetail) { 
  details.forEach((detail) => {
    if (detail !== targetDetail) { //checkt of de open detail gelijk is aan de net geopende detail
      detail.open = false; //sluit de gelijke detail
    }
  });
}

//bron: https://stackoverflow.com/questions/16751345/automatically-close-all-the-other-details-tags-after-opening-a-specific-detai