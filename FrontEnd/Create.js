const token = localStorage.getItem("token");

//preview image

// preview image

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
    } else {
      alert("Envoie du projet en cours");
    }
  });
}
validationFormulaire();
