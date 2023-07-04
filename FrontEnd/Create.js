const valider = document.getElementById("valider-modale2");
const prevImage = document.createElement("img");
const iconeImage = document.getElementById("icone-image");
// Prévisualisation de l'image selectionnée
function previewPictrure() {
  const sectionPrev = document.getElementById("image-prev");
  const inputImage = document.getElementById("selectioner");

  // evenement change pour acceder a l'input file

  inputImage.addEventListener("change", (e) => {
    iconeImage.style.display = "none";
    sectionPrev.innerHTML = "";

    //création de la prévisualisation

    prevImage.classList.add("imagePrevisualise");
    let selectionFichier = document.getElementById("selectioner").files[0];

    //création et assigantion de l'url du fichier a l'image
    const urlObjet = URL.createObjectURL(selectionFichier);
    prevImage.src = urlObjet;
    sectionPrev.appendChild(prevImage);
  });
}
previewPictrure();

//Validation et vérification formulaire

function validationFormulaire() {
  //Capture de l'élément seléctionné

  let selectionFichier = document.getElementById("selectioner").files[0];

  // Valeure du champs titre

  const titre = document.getElementById("titre").value;

  // valeur du champs catégorie

  const categorie = document.getElementById("liste-categories").value;

  //Condition de validation gestion des erreurs
  console.log(selectionFichier);
  if (selectionFichier == undefined) {
    alert("Veuillez choisir une image");
    return;
  }
  if (titre == "") {
    alert("Veuillez définir un titre");
    return;
  }
  if (categorie == "Champs-selection") {
    alert("Veuillez selectionner une catégorie");
    return;
  }

  // Création FormData avec les éléments du formulaire

  let formData = new FormData();
  formData.append("image", selectionFichier);
  formData.append("title", titre);
  formData.append("category", categorie);

  // Envoie FormData dans la requète poste

  fetch("http://localhost:5678/api/works", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("erreur lors du transfert");
    })
    .then((data) => {
      fermerModale2();
      document.querySelector(".formulaire-ajout").reset();
      prevImage.remove();
      iconeImage.style.display = "block";
      ouvrirModale1();
      affichageDesMiniature();
      recuperationTravaux();
    })
    .catch((error) => {
      console.error(error);
    });
}

// Evenement de validation du formulaire

valider.addEventListener("click", (e) => {
  e.preventDefault();
  validationFormulaire();
});
