function envoieFourmulaireAjout() {
  const formulaireAjout = document.getElementByClassName("formulaire-ajout");
  const champsPhoto = document.getElementByClassName("inserer-photo");
  const champsTitre = document.getElementById("champs-titre");
  const champsCategorie = document.getElementById("liste-categories");
  const valider = document.getElementById("valider");

  valider.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    alert("click");
  });
}
envoieFourmulaireAjout();
