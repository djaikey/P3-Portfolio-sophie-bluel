const iconeDelete = document.getElementsByClassName("icone-effacer");

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

function supprimer() {
  // non fonctionnel
  iconeDelete.addEventListener("click", (e) => {
    e.preventDefault;
    suppression();
  });
}
supprimer();
