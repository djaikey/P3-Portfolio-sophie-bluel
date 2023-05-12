//Création de l'affichage

function affichage(elementsGalerie) {
  // Choix de l'emplacement parent (balise qui accueui les fiches)

  const sectionAffichage = document.querySelector(".gallery");
  sectionAffichage.innerHTML = "";
  for (let i = 0; i < elementsGalerie.length; i++) {
    const articleGalerie = elementsGalerie[i];

    // Création de l'affiçchage de la galerie par defaut

    const fiche = document.createElement("div");
    fiche.classList.add("fiche");
    const image = document.createElement("img");
    image.src = articleGalerie.imageUrl;
    const titre = document.createElement("p");
    titre.innerText = articleGalerie.title;

    //Rattachement des elements

    sectionAffichage.appendChild(fiche);
    fiche.appendChild(image);
    fiche.appendChild(titre);
  }
}

/* Récupération des donnés de l'API 
la fonction recuperationTravaux indique que l'affichage de filtre tous et l'affichage par defaut par defaut*/

function recuperationTravaux(filtre = "tous") {
  // Récupération elements du tableau travaux de l'API
  fetch("http://localhost:5678/api/works")
    .then((reponse) => reponse.json())
    .then((travaux) => {
      // informations fonctionnement affichage
      if (filtre == "tous") {
        affichage(travaux);

        // information d'affichage filtrer
      } else {
        const filtrage = travaux.filter(function (afichageFiltrer) {
          return afichageFiltrer.category.name === filtre;
        });
        affichage(filtrage);
      }
    });
}

// Catégorie de filtrage

function recuperationCategories() {
  // Récupération des catégories de l'API

  fetch("http://localhost:5678/api/categories")
    .then((reponse) => reponse.json())
    .then((category) => {
      categoriesFiltres = category;

      // Choix de l'emplacement parent

      const sectionFiltres = document.querySelector(".filtres");

      // Création du bouton filtre

      const boutonTous = document.createElement("button");
      boutonTous.classList.add("boutonTous");
      boutonTous.innerText = "Tous";

      // Rattachement du bouton

      sectionFiltres.appendChild(boutonTous);

      // Evenement au clique

      boutonTous.addEventListener("click", () => {
        recuperationTravaux();
      });

      // assignation des catégories au boutons filtres

      for (let i = 0; i < category.length; i++) {
        const categories = category[i];

        // creation boutons filtres

        const boutonsFiltres = document.createElement("button");
        boutonsFiltres.classList.add("boutonsFiltres");
        boutonsFiltres.innerText = categories.name;
        sectionFiltres.appendChild(boutonsFiltres);

        // evenement click

        boutonsFiltres.addEventListener("click", () => {
          recuperationTravaux(categories.name);
        });
      }
    });
}

// Appel de la fonction recuperation des travaux

recuperationCategories();

// Appel de la fonction d'affichage par defaut

recuperationTravaux();
