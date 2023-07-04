// Catégorie de filtrage

function recuperationCategories() {
  // Récupération des catégories de l'API (fetch GET)

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

      boutonTous.addEventListener("click", (e) => {
        e.preventDefault();
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

        boutonsFiltres.addEventListener("click", (e) => {
          e.preventDefault();
          recuperationTravaux(categories.name);
        });
      }
    });
}

// Récupération des donnés Travaux de l'API

function recuperationTravaux(filtre = "tous") {
  /*le parametre de la fonction recuperationTravaux indique 
  l'affichage de filtre tous est l'affichage par defaut par defaut*/

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

        //appel de la fonction affichage avec fitrage pour argument

        affichage(filtrage);
      }
    });
}

//Création de l'affichage

function affichage(elementsGalerie) {
  // Choix de l'emplacement parent (balise qui accueui les fiches)

  const sectionAffichage = document.querySelector(".gallery");

  // rafraichissement affichage
  sectionAffichage.innerHTML = "";

  // boucle sur les element a afficher
  for (let i = 0; i < elementsGalerie.length; i++) {
    const articleGalerie = elementsGalerie[i];

    // Création de l'affiçchage de la galerie par defaut

    const fiche = document.createElement("div");
    fiche.classList.add("fiche");
    const image = document.createElement("img");

    //l'url de l'image correspond a la clé imageURL dans l'API
    image.src = articleGalerie.imageUrl;

    const titre = document.createElement("p");
    //le titre corespond a la clé title de l'API
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

// Statut utilisateur connecté

function statutConnecte() {
  const token = localStorage.getItem("token");
  const login = document.getElementById("login");

  // Condition du statut connecté

  if (token != null) {
    // si le token n'est pas null

    //suppression de l'option Login
    login.style.display = "none";

    //choix de l'emplacemet de la bare de modification

    const header = document.querySelector("header");

    // invertion de l'affichage de la barre de modification et de la nav
    header.style.flexDirection = "column-reverse";

    //création de la barre de modification
    const barreModification = document.createElement("div");
    barreModification.classList.add("barre-modif");

    // icone modification

    const iconeModifier = document.createElement("i");
    iconeModifier.classList = "fa-solid fa-pen-to-square";
    iconeModifier.setAttribute("id", "icone-modifier");

    // label modifier

    const labelModif = document.createElement("p");

    labelModif.innerText = "Mode édition";
    labelModif.classList.add("mode-edition");
    const boutonPublier = document.createElement("button");

    // Création d'un bouton publier

    boutonPublier.innerText = "publier les changements";
    boutonPublier.type = "submit";
    boutonPublier.classList.add("bouton-publier");

    //apparition des optionde modification

    const modifier = document.getElementById("modifier");
    modifier.style.display = "block";
    modifier.style.textDecoration = "none";
    const modale1 = document.getElementsByClassName("modales");
    const modifierProjet = document.getElementById("modifier-projets");

    modifierProjet.style.display = "block";
    modifierProjet.style.textDecoration = "none";

    //Rattachement

    header.appendChild(barreModification);
    barreModification.appendChild(iconeModifier);
    barreModification.appendChild(labelModif);
    barreModification.appendChild(boutonPublier);
  } else {
    // si le statut n'est pas connecté

    logout.style.display = "none";
    login.style.display = "block";
  }
}
statutConnecte();

function seDeconnecter() {
  //selection de l'élement declancheur

  const logout = document.getElementById("logout");

  // Evenement au click

  logout.addEventListener("click", (e) => {
    e.preventdefault;
    deconnection();
  });
}
// Deconnection

function deconnection() {
  // suppression token du localStorage

  const actionDeconnection = localStorage.clear();

  //Rafraichissement de la page

  location.reload();
}

seDeconnecter();
