// Affichage par defaut
function affichage(travaux) {
  for (let i = 0; i < travaux.length; i++) {
    const element = travaux[i];
    // Création de l'affiçchage de la galerie par defaut

    const sectionArticle = document.querySelector(".gallery");

    const article = (document.createElement("article").innerHTML += "");
    article = element;

    const imageUrlArticle = document.createElement("img");
    imageUrlArticle.src = imageUrl.element;

    const titleArticle = document.createElement("p");
    titleArticle.innerText = title.element;

    article.appendChild(sectionArticle);
    imageUrlArticle.appendChild(article);
    titleArticle.appendChild(article);
  }
}
affichage();

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
