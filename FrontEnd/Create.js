const token = localStorage.getItem("token");

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
    const selectionFichier = document.getElementById("selectioner").files[0];
    const titre = ChampsTitre.value;
    const categorie = champsCategorie.value;

    console.log(selectionFichier);
    console.log(titre);
    console.log(categorie);

    let formData = new FormData();
    formData.append("image", selectionFichier);
    formData.append("title", titre);
    formData.append("category", 1);

    fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    }).catch((error) => {
      console.error(error);
    });
  });
}
validationFormulaire();
