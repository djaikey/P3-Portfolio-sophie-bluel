const miniatures = document.querySelector(".affichage-miniature");
miniatures.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest(".bouton-delete")) {
    const jaiCliqueIci = e.target.closest(".bouton-delete");
    const IDClique = jaiCliqueIci.id;
    suppression(IDClique);
  }
});
//attribution de l'id comme valeure de l'icone delete
const boutonSupprimer = document.getElementsByClassName(".bouton-delete");
console.log(boutonSupprimer);

console.log(boutonSupprimer);

// Evenement au click
/*
boutonSupprimer.addEventListener("click", (e) => {
  e.preventDefault;
  console.log("click");
});
*/

// Assiganation de l'Id aux iconnes de suppression

function identification() {
  // choix de l'élément

  const iconeDelete = document.getElementsByClassName("fa-solid fa-trash-can");

  //fetche GET projets

  fetch("http://localhost:5678/api/works")
    .then((reponse) => reponse.json())
    .then((projets) => {
      for (let i = 0; i < projets.length; i++) {
        const elements = projets[i];

        const id = elements.id;
      }
    });
}

// action de supression

function suppression(IDClique) {
  const token = localStorage.getItem("token");
  console.log(token);
  fetch(`http://localhost:5678/api/works/${IDClique}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((reponse) => {
      if (reponse.status == 204) {
        alert("c'est ok!!!");
      } else {
        alert("noooooon!");
      }
    })
    .catch((ERROR) => {
      alert(ERROR);
    });
}
