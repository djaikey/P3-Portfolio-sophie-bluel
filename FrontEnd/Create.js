const valider = document.getElementById("valider-modale2");

function previewPictrure() {
  const sectionPrev = document.getElementById("image-prev");
  const inputImage = document.getElementById("selectioner");
  inputImage.addEventListener("change", (e) => {
    sectionPrev.innerHTML = "";
    const prevImage = document.createElement("img");
    let selectionFichier = document.getElementById("selectioner").files[0];
    const urlObjet = URL.createObjectURL(selectionFichier);
    prevImage.src = urlObjet;
    sectionPrev.appendChild(prevImage);
  });
}
previewPictrure();

function validationFormulaire() {
  let selectionFichier = document.getElementById("selectioner").files[0];
  const titre = document.getElementById("titre").value;
  const categorie = document.getElementById("liste-categories").value;
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
  // console.log(selectionFichier);
  // console.log(titre);
  // console.log(categorie);

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
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("erreur lors du transfert");
    })
    .then((data) => {
      console.log(data);
      fermerModale2();
      ouvrirModale1();
      affichageDesMiniature();
      recuperationTravaux();
    })
    .catch((error) => {
      console.error(error);
    });
}

valider.addEventListener("click", (e) => {
  e.preventDefault();
  validationFormulaire();
});
