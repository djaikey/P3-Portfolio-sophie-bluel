const selectionFichier = document.getElementById("selectioner");
function preview() {
  // image selectioner

  // prévisualisation de l'image
  const previsualisation = document.getElementById("image-prev");
  // bouton ajouter
  const boutonAjouter = document.getElementById("bouton-ajouter-photo");
  boutonAjouter.addEventListener("click", (e) => {
    console.log("Click");
    // récupération de l'objet
    //création d'un URL à l'objet
    //previsualisation.src = URL.createObjectURL(selectionFichier.value); ne fonctionne pas
    // affichage de l'image selectionner
    previsualisation.style.display = "block";
  });
}
preview();

function validationFormulaire() {
  const ChampsTitre = document.getElementById("titre");

  const champsCategorie = document.getElementById("liste-categories");

  const valider = document.getElementById("valider-modale2");

  valider.addEventListener("click", (e) => {
    e.preventDefault();

    const titre = ChampsTitre.value;
    const categorie = champsCategorie.value;

    console.log(selectionFichier.value);
    console.log(titre);
    console.log(categorie);

    /*if ((titre, true)) {
      console.log(titre);
    }
    if ((categorie, true)) {
      console.log(categorie);
    } else {
      alert("infos manquantes");
    }*/

    /*const envoie = fetch("http://localhost:5678/api/works", {
      method: "POST",
      accept: application/json
      Autorization: Bearer (token)
      headers: { "Content-Type": "multipart/form-data" },
      body: JSON.stringify({ titre, categorie / token (files ou blob)}),
      (files/ image =>titre =>categorie)
    });*/
  });
}
validationFormulaire();
