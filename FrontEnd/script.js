// fonction affichage par defaut
function affichageDefault(recuperation) {
  for (let i = 0; i < recuperation.length; i++) {
    const elementGallery = recuperation[i];

    document.innerHTML = "";
    elementGallery = recuperation[i];

    const sectionGallery = document.querySelector(".gallery");

    const sectionFiche = document.createElement("figure");
    sectionGallery.appendChild(sectionFiche);

    const imageElementFiches = document.createElement("img");
    return (imageElementFiches.src = elementGallery[i].imageUrl);

    sectionFiches.appendChild(imageElementFiches);

    const titreElementFiches = document.createElement("p");
    return (titreElementFiches.innerText = elementGallery[i].title);

    sectionFiches.appendChild(titreElementFiches);
  }
}

// Création affichage des projets de la Class gallery

// Rattachement aux balises

//Création des boutons de filtrage

const filtrage = document.querySelector(".filtres"); // création div = .classList.add ('filtre')

const fitreTous = document.createElement("button");
fitreTous.innerText = "Tous";

const filtreObjets = document.createElement("button");
filtreObjets.innerText = "Objets";

const filtreAppartements = document.createElement("button");
filtreAppartements.innerText = "Appartements";

const filtreHotelRestaurants = document.createElement("button");
filtreHotelRestaurants.innerText = "Hôtels & restaurants";

// Rattachement aux balises

filtrage.appendChild(fitreTous);
filtrage.appendChild(filtreObjets);
filtrage.appendChild(filtreAppartements);
filtrage.appendChild(filtreHotelRestaurants);

// Affichage par défaut

// Action de filtrage

function affichageFiltreTous(recuperation) {
  for (let i = 0; i < recuperation.length; i++) {
    if (condition) {
    }
    const element = recuperation[i];
  }
}

// Récupération des élements de l'API' mettre en bas de la page

fetch("http://localhost:5678/api/works")
  .then((reponse) => reponse.json())
  .then((recuperation) => {
    console.log(recuperation);
  });

fetch("http://localhost:5678/api/categories")
  .then((retour) => retour.json())
  .then((category) => {
    console.log(category);
  });
