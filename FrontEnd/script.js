// Récupération des donnés de l'API

function affichageParDefaut() {
  fetch("http://localhost:5678/api/works")
    .then((reponse) => reponse.json())
    .then((travaux) => {
      console.log(travaux);

      // Récupération elements du tableau travaux

      for (let i = 0; i < travaux.length; i++) {
        const article = travaux[i];

        // Choix de l'emplacement parent (balise qui accueuilra les fiches)

        const sectionAffichage = document.querySelector(".gallery");

        // Création de l'affiçchage de la galerie par defaut

        const fiche = document.createElement("div");
        const image = document.createElement("img");
        image.src = article.imageUrl;
        const titre = document.createElement("p");
        titre.innerText = article.title;

        //Rattachement des elements

        sectionAffichage.appendChild(fiche);
        fiche.appendChild(image);
        fiche.appendChild(titre);
      }
    });
}

// Appel de la fonction d'affichage par defaut

affichageParDefaut();

// Catégorie de filtrage

function recuperationCategories() {
  fetch("http://localhost:5678/api/categories")
    .then((reponse) => reponse.json())
    .then((category) => {
      categoriesFiltres = category;
      console.log(categoriesFiltres);

      for (let i = 0; i < category.length; i++) {
        const categories = category[i];

        function boutonFiltreTous() {
          // Choix de l'emplacement parent

          const sectionFiltres = document.querySelector(".filtres");

          // Création du bouton filtre

          const boutonTous = document.createElement("button");
          boutonTous.innerText = "Tous";

          // Rattachement du bouton

          sectionFiltres.appendChild(boutonTous);

          // Evenement au clique

          boutonTous.addEventListener("click", () => {
            document.querySelector(".gallery").innerHTML = "";
            affichageParDefaut();
          });
        }
      }
      boutonFiltreTous();
    });
}
recuperationCategories();
