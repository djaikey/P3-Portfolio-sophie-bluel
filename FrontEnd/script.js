// creation de l'affichage par defaut

// Création de l'affiçchage de la galerie par defaut

// Récuperation des element de l'API

// Affichage des travaux

function recuperationTravaux() {
  fetch("http://localhost:5678/api/works")
    .then((reponse) => reponse.json())
    .then((travaux) => {
      console.log(travaux);
    });
}
recuperationTravaux();

// Catégorie de filtrage

function recuperationCategories() {
  fetch("http://localhost:5678/api/categories")
    .then((reponse) => reponse.json())
    .then((categories) => {
      console.log(categories);
    });
}
recuperationCategories();
