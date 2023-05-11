// Récupération des donnés de l'API

function affichage(filtre = "tous") {
  fetch("http://localhost:5678/api/works")
    .then((reponse) => reponse.json())
    .then((travaux) => {
      if (filtre == "tous") {
        maFonction(travaux);
      } else {
        const filtrage = travaux.filter(function (afichageFiltrer) {
          return afichageFiltrer.category.name === filtre;
        });
        maFonction(filtrage);
      }

      // Récupération elements du tableau travaux
    });
}

function maFonction(liste) {
  // Choix de l'emplacement parent (balise qui accueuilra les fiches)

  const sectionAffichage = document.querySelector(".gallery");
  sectionAffichage.innerHTML = "";
  for (let i = 0; i < liste.length; i++) {
    const articleListe = liste[i];

    // Création de l'affiçchage de la galerie par defaut

    const fiche = document.createElement("div");
    fiche.classList.add("fiche");
    const image = document.createElement("img");
    image.src = articleListe.imageUrl;
    const titre = document.createElement("p");
    titre.innerText = articleListe.title;

    //Rattachement des elements

    sectionAffichage.appendChild(fiche);
    fiche.appendChild(image);
    fiche.appendChild(titre);
  }
}

// Catégorie de filtrage

function recuperationCategories() {
  fetch("http://localhost:5678/api/categories")
    .then((reponse) => reponse.json())
    .then((category) => {
      categoriesFiltres = category;
      console.log(categoriesFiltres);

      // Choix de l'emplacement parent

      const sectionFiltres = document.querySelector(".filtres");

      // Création du bouton filtre

      const boutonTous = document.createElement("button");
      boutonTous.innerText = "Tous";

      // Rattachement du bouton

      sectionFiltres.appendChild(boutonTous);

      // Evenement au clique

      boutonTous.addEventListener("click", () => {
        affichage();
      });

      for (let i = 0; i < category.length; i++) {
        const categories = category[i];

        // creation boutons filtres

        const boutonObjet = document.createElement("button");
        boutonObjet.classList.add("boutonObjets");
        boutonObjet.innerText = categories.name;
        sectionFiltres.appendChild(boutonObjet);

        // evenement click

        boutonObjet.addEventListener("click", () => {
          affichage(categories.name);
        });
      }
    });
}
recuperationCategories();
// Appel de la fonction d'affichage par defaut

affichage();
