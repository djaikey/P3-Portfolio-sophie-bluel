// Récupération des élements de l'API'
const elementsfiltres = await fetch("http://localhost:5678/api/categories");
const elementsGallery = await fetch("http://localhost:5678/api/works");

//Création des boutons de filtrage
const filtrage = document.querySelector(".filtres");
const btn1 = document.createElement("button");
btn1.innerText = "Tous";
btn2.innerText = "Objets";
btn3.innerText = "Appartements";
btn4.innerText = "Hôtels & restaurants";
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
const btn4 = document.createElement("button");

// Création des emplacements d'affichage des projets de la Class gallery
const article = elementsGallery[0];

const imageElementGallery = document.createElement("img");
imageElementGallery.src = elementsGallery.imageUrl;

const titreElementGallery = document.createElement("p");
titreElementGallery.innerText = elementsGallery.title;

// Rattachement aux balises
const sectionFiches = document.querySelector(".gallery");
sectionFiches.appendChild(imageElementGallery);
sectionFiches.appendChild(titreElementGallery);
