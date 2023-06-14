function affichageDesMiniature() {
  // Récupération elements du tableau travaux de l'API
  const miniatures = document.getElementById("affichage-miniature");
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
affichageDesMiniature();

// ouvrir et fermer modale1

function ouvrirModale1() {
  //const fondModales = document.querySelector(".modales");
  const modale1 = document.getElementById("modale1");
  modale1.style.display = "block";
  modale1.removeAttribute("aria-hidden");
  modale1.setAttribute("aria-modal", true);
}

function fermerModale1() {
  modale1.style.display = "none";
  modale1.removeAttribute("aria-hidden");
  modale1.setAttribute("aria-modale", true);
}

//ouvrir fermer modale2

function ouvrirModale2() {
  modale2.style.display = "Block";
  modale2.removeAttribute("aria-hidden");
  modale2.setAttribute("aria-modal", true);
}

function fermerModale2() {
  const modale2 = document.getElementById("modale2");
  modale2.style.display = "none";
  modale2.removeAttribute("aria-modale");
  modale2.setAttribute("aria-hidden", true);
}

//  Le clique sur Modifier Ouvre la modale 1

function modifcationProjets() {
  const modifierProjets = document.getElementById("modifier-projets");
  modifierProjets.addEventListener("click", (e) => {
    e.preventDefault;
    ouvrirModale1();
  });
}

// Le bouton Ajouter une photo Ouvre la modale 2 et ferme la modale 1

function ajouterPhoto() {
  const boutonAjouterPhotoModale1 = document.getElementById("validation");
  boutonAjouterPhotoModale1.addEventListener("click", (e) => {
    e.preventDefault;
    ouvrirModale2();
    fermerModale1();
  });
}

// Le bouton fermer modale 1

function boutonFermerModale1() {
  const boutonFermerModale1 = document.getElementById("fermer-modale1");
  boutonFermerModale1.addEventListener("click", (e) => {
    e.preventDefault;
    fermerModale1();
  });
}

// le bouton retour de la modale 2 ferme la modale 2 et ouvre la modale 1

function boutonRetourModale2() {
  const boutonRetour = document.getElementById("retour");
  boutonRetour.addEventListener("click", (e) => {
    e.preventDefault;
    fermerModale2();
    ouvrirModale1();
  });
}

// le bouton fermer de la modale 2 ferme la modale 2

function boutonFermerModale2() {
  const boutonFermerModale2 = document.getElementById("fermer-modale2");
  boutonFermerModale2.addEventListener("click", (e) => {
    e.preventDefault;
    fermerModale2();
  });
}

document.onclick = (event) => {
  console.log(event.target.value);
  window.addEventListener("mousemove", (e) => {
    console.log(e.target);
  });
};

function clickDehors() {}
clickDehors();

modifcationProjets();
boutonFermerModale1();
ajouterPhoto();
boutonRetourModale2();
boutonFermerModale2();
