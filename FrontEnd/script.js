// Récupération des élements de l'API'

fetch("http://localhost:5678/api/works")
  .then((reponse) => reponse.json())
  .then((recuperation) => {
    console.log(recuperation);

    //Création des boutons de filtrage

    const filtrage = document.querySelector(".filtres");

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

    // Création affichage des projets de la Class gallery

    const sectionGallery = document.querySelector(".gallery");

    const sectionFiche = document.createElement("figure");

    const imageElementFiches = document.createElement("img");
    imageElementFiches.src = recuperation.imageUrl;

    const titreElementFiches = document.createElement("p");
    titreElementFiches.innerText = recuperation.title;

    // Rattachement aux balises

    sectionGallery.appendChild(sectionFiche);
    sectionFiches.appendChild(imageElementFiches);
    sectionFiches.appendChild(titreElementFiches);
  });

// Affichage par défaut

function premierAffichage(recuperation) {
  for (let i = 0; i < recuperation.length; i++) {
    const element = recuperation[i];
    const imageElementFiches = imageUrl;
    const titreElementFiches = title;
  }

  // Action de filtrage

  function affichageFiltreTous(recuperation) {
    for (let i = 0; i < recuperation.length; i++) {
      if (condition) {
      }
      const element = recuperation[i];
    }
  }
}
