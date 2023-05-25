function recuperationElements() {
  // Récupération elements du tableau travaux de l'API

  fetch("http://localhost:5678/api/works")
    .then((reponse) => reponse.json())
    .then((projets) => {
      // informations fonctionnement affichage

      console.log(projets);
      for (let i = 0; i < projets.length; i++) {
        const element = projets[i];

        if (element !== null) {
          // Choix de l'emplacement parent (balise qui accueui les fiches)

          const affichageMiniatures = document.getElementById(
            "affichage-miniature"
          );

          // Création de l'affiçchage miniature

          // construction fiche miniature

          const ficheMiniature = document.createElement("div");
          ficheMiniature.classList.add("fiche-miniature");
          // création emplacement et importation image
          const image = document.createElement("img");
          image.src = element.imageUrl;
          image.classList.add = "image-miniature";

          //choix éditer

          const editer = document.createElement("p");
          editer.innerText = "éditer";
          editer.classList.add = "editer";

          //rattahement

          affichageMiniatures.appendChild(ficheMiniature);
          ficheMiniature.appendChild(image);
          ficheMiniature.appendChild(editer);
        }
      }
    });

  // information d'affichage filtrer
}
recuperationElements();
