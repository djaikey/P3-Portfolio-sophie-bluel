const iconeDelete = document.getElementsByClassName("icone-effacer");

// Assiganation de l'Id aux iconnes de suppression

function identification() {
  fetch("http://localhost:5678/api/works")
    .then((reponse) => reponse.json())
    .then((projets) => {
      for (let i = 0; i < projets.length; i++) {
        const elements = projets[i];

        const id = elements.id;

        iconeDelete.value = id;
        console.log(iconeDelete.value);
      }
    });
}
identification();

// action de supression

function suppression() {
  const gallerie = document.getElementsByClassName("gallery");
  const miniatures = document.getElementsByClassName("affichage-miniature");

  fetch("http://localhost:5678/api/works/${id}", {
    method: "DELETE",
  }).then(() => {
    miniatures.innerHTML = "";
    gallerie.innerHTML = "";
  });
}

// Evenement au click
/*
function supprimer() {   // non fonctionnel
  iconeDelete.addEventListener("click", (e) => {
    e.preventDefault;
    suppression();
  });
}
supprimer();
*/
