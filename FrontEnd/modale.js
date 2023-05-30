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

          // création emplacement et importation image
          const image = document.createElement("img");
          image.src = elements.imageUrl;
          image.classList.add = "image-miniature";

          //choix éditer

          const editer = document.createElement("a");
          editer.innerText = "éditer";
          editer.classList.add = "editer";

          //rattahement

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

function ajouterPhoto() {
  const boutonAjouterPhoto = document.getElementById("validation");
  boutonAjouterPhoto.addEventListener("click", (e) => {
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
boutonFermerModale1();
ajouterPhoto();
boutonRetourModale2();
boutonFermerModale2();
