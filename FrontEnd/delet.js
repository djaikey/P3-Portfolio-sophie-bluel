const miniatures = document.querySelector(".affichage-miniature");
//event click dans l'affichage miniature
miniatures.addEventListener("click", (e) => {
  e.preventDefault();

  // Assiganation de l'Id aux bouton de suppression

  if (e.target.closest(".bouton-delete")) {
    const emplacementClick = e.target.closest(".bouton-delete");
    const idDuBouton = emplacementClick.id;
    //declaration de la fonction suppression
    suppression(idDuBouton);
    miniatures.innerHTML = "";
    affichageDesMiniature();
  }
});

// action de supression

function suppression(idDuBouton) {
  const token = localStorage.getItem("token");

  fetch(`http://localhost:5678/api/works/${idDuBouton}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((reponse) => {
      if (reponse.status == 204) {
        miniatures.innerHTML = "";
      } else {
        alert("Erreur dans la suppretion du projet");
      }
    })
    .catch((ERROR) => {
      alert(ERROR);
    });
}
