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
  }
});

// action de supression

function suppression(idDuBouton) {
  const token = localStorage.getItem("token");
  console.log(token);
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
        affichageDesMiniature();
      } else {
        alert("Erreur dans la suppretion du projet");
      }
    })
    .catch((ERROR) => {
      alert(ERROR);
    });
}

//affichage des miniature ??? dois-je les reécrire ici ou puis-je l'appeler d'un autre fichier ???

function affichageDesMiniature() {
  // Récupération elements du tableau travaux de l'API

  miniatures.innerHTML = "";
  fetch("http://localhost:5678/api/works")
    .then((reponse) => reponse.json())
    .then((projets) => {
      // informations fonctionnement affichage

      for (let i = 0; i < projets.length; i++) {
        const elements = projets[i];

        //Condition d'affichage
        if (elements !== null) {
          // Choix de l'emplacement parent (balise qui accueui les fiches)

          // Création de l'affiçchage miniature

          // construction fiche miniature

          const ficheMiniature = document.createElement("div");
          ficheMiniature.classList.add("fiche-miniature");

          const icones = document.createElement("div");
          icones.classList.add("icones-fiche-miniature");

          //bouton icone deplacement =>

          const boutonDeplacer = document.createElement("button");
          boutonDeplacer.setAttribute("id", "bouton-deplacer");
          const iconeDeplacer = document.createElement("i");
          iconeDeplacer.classList = "fa-solid fa-arrows-up-down-left-right";
          iconeDeplacer.setAttribute("id", "icone-deplacer");

          // creation du boutton de suppression
          const boutonSuprimmer = document.createElement("button");
          boutonSuprimmer.classList.add("bouton-delete");
          boutonSuprimmer.setAttribute("id", elements.id);

          // creation de l'icône poubelle
          const iconeEffacer = document.createElement("i");
          iconeEffacer.classList = "fa-solid fa-trash-can";
          iconeEffacer.style.color = "#ffffff";
          iconeEffacer.style.backgroundColor = "black";

          // création emplacement et importation image
          const image = document.createElement("img");
          image.src = elements.imageUrl;
          image.classList.add = "image-miniature";

          //icones poubelles

          //choix éditer

          const editer = document.createElement("a");
          editer.innerText = "éditer";
          editer.classList.add = "editer";

          //rattahement
          icones.appendChild(boutonDeplacer);
          boutonDeplacer.appendChild(iconeDeplacer);
          icones.appendChild(boutonSuprimmer);
          boutonSuprimmer.appendChild(iconeEffacer);
          ficheMiniature.appendChild(icones);
          ficheMiniature.appendChild(image);
          ficheMiniature.appendChild(editer);
          miniatures.appendChild(ficheMiniature);
        }
      }
    });
}
