// Récupération des élements de l'API'
const elementsfiltres = fetch("http://localhost:5678/api/categories");
const elementsGallery = fetch("http://localhost:5678/api/works");

//Création des boutons de filtrage
document.querySelector(".filtres");
document.createElement("button");

// Affichage des projets de la Class gallery
const article = elementsGallery[0];

document.querySelector(".gallery");

const ficheElementGallery = document.createElement("article");

const imageElementGallery = document.createElement("img");
imageElementGallery.src = elementsGallery.imageURL;

const titreElementGallery = document.createElemen("p");
titreElementGallery.innerText = elementsGallery.title;
