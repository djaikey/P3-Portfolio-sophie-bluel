// Assiganation de l'Id aux iconnes de suppression

function identification() {
  // choix de l'élément

  const iconeDelete = document.getElementsByClassName("icone-effacer");

  //fetche GET projets

  fetch("http://localhost:5678/api/works")
    .then((reponse) => reponse.json())
    .then((projets) => {
      for (let i = 0; i < projets.length; i++) {
        const elements = projets[i];

        const id = elements.id;

        //attribution de l'id comme valeure de l'icone delete
        const boutonSupprimer = document.getElementById("bouton-supprimer");
        boutonSupprimer.value = id;
        console.log(boutonSupprimer.value);

        // Evenement au click
        boutonSupprimer.addEventListener("click", (e) => {
          e.preventDefault;
          console.log("click");
        });
      }
    });
}
identification();

// action de supression

function suppression() {
  const gallerie = document.getElementsByClassName("gallery");
  const miniatures = document.getElementsByClassName("affichage-miniature");

  if (iconeDelete.value == id) {
    fetch("DELETE", "http://localhost:5678/api/works/${id}");
    miniatures.innerHTML = "";
    gallerie.innerHTML = "";
  }
}
