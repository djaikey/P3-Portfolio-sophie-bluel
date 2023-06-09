function importerPhoto() {
  const imagePrevew = document.getElementById("image");
  imagePrevew.style.display = "none";
  const champsImage = document.querySelector(".inserer-photo");
  const BoutonAjouterPhoto = document.getElementById("bouton-ajouter-photo");
  BoutonAjouterPhoto.addEventListener("click", (e) => {
    e.preventDefault(), 

   const formData = new FormData() ;
    formData.append("inserer-photo",champsImage.files[0]);
    console.log(champsImage.files);
  });
}
importerPhoto();

function validerFormulaire() {
  const ChampsTitre = document.getElementById("titre");
  const selectionCategorie = document.getElementById("liste-categories");
  const valider = document.getElementById("valider-modale2");
  

  /*
  const titre = ChampsTitre.value;
  const categorie = selectionCategorie.value;*/

  valider.addEventListener("click", (e) => {
    e.preventDefault();

    const response = fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body://valeurs attendues ,
    }).then((response) => {
      if (!response.status == 201) {
        alert("Création du projet effectué");
      }
      if (!response.status == 400) {
        alert("Mauvaise demande");
      }
      if (!response.status == 401) {
        alert("Non autorisé");
      }
      if (!response.status == 500) {
        alert("Erreur inattendue");
      }
    });
    //console.log(image.value + titre.value + categorie.value);
  });
}
validerFormulaire();

/*
valider.addEventListener("click", (e) => {
  e.preventDefault(), console.log(photo + titre + categorie);
});
valider.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    alert("click");
  });*/
/*
valider.addEventListener("submit", (event) => {
  event.preventDefault(); // Empêche l'envoi du formulaire par défaut

  
  // Envoi des données d'identification à l'API pour vérification

  
    //Reponses post identification

    .then((response) => {
      //Si la réponse n'est pas ok

     
      return response.json();
    });

  });*/
