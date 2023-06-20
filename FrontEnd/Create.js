const selectionFichier = document.getElementById("selectioner").files[0];

function previewPictrure() {
  const sectionPrev = document.getElementById("image-prev");
  const boutonAjouter = document.getElementById("bouton-ajouter-photo");
  boutonAjouter.addEventListener("click", (e) => {
    console.log("click");
    const prevImage = document.createElement("img");
    // image.src = URL.createObjectURL(selectionFichier);
    sectionPrev.appendChild(prevImage);
  });
}
previewPictrure();

function validationFormulaire() {
  const ChampsTitre = document.getElementById("titre");

  const champsCategorie = document.getElementById("liste-categories");

  const valider = document.getElementById("valider-modale2");

  valider.addEventListener("click", (e) => {
    e.preventDefault();

    const titre = ChampsTitre.value;
    const categorie = champsCategorie.value;

    console.log(selectionFichier);
    console.log(titre);
    console.log(categorie);

    let formData = new FormData();
    formData.append("image", selectionFichier);
    formData.append("title", titre);
    formData.append("category", categorie);

    fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    }).catch((error) => {
      console.error(error);
    });
    if (selectionFichier == undefined) {
      alert("Veuillez choisir une image");
    }
    if (titre == "") {
      alert("Veuillez définir un titre");
    }
    if (categorie == "Champs-selection") {
      alert("Veuillez selectionner une catégorie");
    }
  });
}
validationFormulaire();
// Preview de l'image importée

// Preview de l'image importée
/*
let previewPictrure = function (e) {
  const emplacementPrev = document.querySelector(".image-prev");
  //Recupération de l'image

  if (selectionFichier.files) {
    // Creation de l'image

    const prevImage = document.createElement("img");

    // Attribution de l'URL du a l'image prev

    prevImage.src = URL.createObjectURL(selectionFichier);
    console.log(prevImage.src);

    // Rattachement de l'image

    emplacementPrev.appendChild(prevImage);
  }
};

previewPictrure();
*/
