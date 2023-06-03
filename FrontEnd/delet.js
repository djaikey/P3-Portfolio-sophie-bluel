const gallerie = document.getElementsByClassName("gallery");
const affichageMiniature = document.getElementsByClassName(
  "affichage-miniature"
);

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
  if (id == iconeDelete.value) {
    fetch("http://localhost:5678/api/works/1${id}", { method: "DELETE" }).then(
      () => {}
    );
  }
}

/* addEventListener ne fonctionne pas (ToT)

function actionSuprimer() {
  iconeDelete.addEventListener("click", (e) => {
    e.preventDefault;
    alert("click");
  });
}
actionSuprimer();

*/
