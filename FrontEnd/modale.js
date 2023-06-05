function affichageDesMiniature() {
  // Récupération elements du tableau travaux de l'API

  fetch("http://localhost:5678/api/works")
    .then((reponse) => reponse.json())
    .then((projets) => {
      // informations fonctionnement affichage

      for (let i = 0; i < projets.length; i++) {
        const elements = projets[i];

        //Condition d'affichage
        if (elements !== null) {
          // Choix de l'emplacement parent (balise qui accueui les fiches)

          const miniatures = document.getElementById("affichage-miniature");

          // Création de l'affiçchage miniature

          // construction fiche miniature

          const ficheMiniature = document.createElement("div");
          ficheMiniature.classList.add("fiche-miniature");

          const icones = document.createElement("div");
          icones.classList.add("icones-fiche-miniature");

          //icone deplacement =>> voir affichage hover

          const iconeDeplacer = document.createElement("i");
          iconeDeplacer.classList = "fa-solid fa-arrows-up-down-left-right";
          iconeDeplacer.setAttribute("id", "icone-deplacer");

          // creation de l'icône poubelle
          const iconeEffacer = document.createElement("i");
          iconeEffacer.setAttribute("id", "icone-poubelle");
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
          icones.appendChild(iconeDeplacer);
          icones.appendChild(iconeEffacer);
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

// interaction modale 1 et 2

function modifcationProjets() {
  const modifierProjets = document.getElementById("modifier-projets");
  modifierProjets.addEventListener("click", (e) => {
    e.preventDefault;
    ouvrirModale1();
  });
}

function ajouterPhoto() {
  const boutonAjouterPhotoModale1 = document.getElementById("validation");
  boutonAjouterPhotoModale1.addEventListener("click", (e) => {
    e.preventDefault;
    ouvrirModale2();
    fermerModale1();
  });
}
function boutonFermerModale1() {
  const boutonFermerModale1 = document.getElementById("fermer-modale1");
  boutonFermerModale1.addEventListener("click", (e) => {
    e.preventDefault;
    fermerModale1();
  });
}

function boutonRetourModale2() {
  const boutonRetour = document.getElementById("retour");
  boutonRetour.addEventListener("click", (e) => {
    e.preventDefault;
    fermerModale2();
    ouvrirModale1();
  });
}

function boutonFermerModale2() {
  const boutonFermerModale2 = document.getElementById("fermer-modale2");
  boutonFermerModale2.addEventListener("click", (e) => {
    e.preventDefault;
    fermerModale1();
    fermerModale2();
  });
}
modifcationProjets();
boutonFermerModale1();
ajouterPhoto();
boutonRetourModale2();
boutonFermerModale2();

//modale1
/*modale2
function boutonAjouterModale2() {
  const boutonAjouterPhotoModale2 =
    document.getElementById("file-upload-button");

  boutonAjouterPhotoModale2.innerText = "+ Ajouter photo";
}
boutonAjouterPhotoModale2();
*/
