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

// Récupération des donnés Travaux de l'API

function recuperationTravaux(filtre = "tous") {
  /*le parametre de la fonction recuperationTravaux indique 
  l'affichage de filtre tous et l'affichage par defaut par defaut*/

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
        //appel de la fonction affichage avec fitrage pour argument
      }
    });
}

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

// Appel de la fonction recuperation des travaux

recuperationCategories();

// Appel de la fonction d'affichage par defaut

recuperationTravaux();

// Action logout déconnection
function seDeconnecter() {
  const logout = document.getElementById("logout");

  logout.addEventListener("click", (e) => {
    e.preventdefault;
    deconnection();
  });
}

function deconnection() {
  const actionDeconnection = localStorage.clear();
  location.reload();
}

seDeconnecter();

function statutConnecte() {
  const token = localStorage.getItem("token");
  const login = document.getElementById("login");
  console.log(token);

  // Condition

  if (token != null) {
    login.style.display = "none";
    const header = document.querySelector("header");
    header.style.flexDirection = "column-reverse";
    const barreModification = document.createElement("div");
    barreModification.classList.add("barre-modif");
    const labelModif = document.createElement("h3");
    labelModif.innerText = "Mode édition";
    const boutonPublier = document.createElement("button");
    boutonPublier.innerText = "publier les changements";
    boutonPublier.type = "submit";
    boutonPublier.classList.add("bouton-publier");
    //Rattachement

    header.appendChild(barreModification);
    barreModification.appendChild(labelModif);
    barreModification.appendChild(boutonPublier);
  } else {
    logout.style.display = "none";
    login.style.display = "block";
  }
}
statutConnecte();
