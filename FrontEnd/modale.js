function affichageDesMiniature() {
  // Récupération elements du tableau travaux de l'API

  fetch("http://localhost:5678/api/works")
    .then((reponse) => reponse.json())
    .then((projets) => {
      console.log(projets);
      // informations fonctionnement affichage

      for (let i = 0; i < projets.length; i++) {
        const elements = projets[i];
        console.log(elements);

        //Condition d'affichage
        if (elements !== null) {
          // Choix de l'emplacement parent (balise qui accueui les fiches)

          const miniatures = document.getElementById("affichage-miniature");
          // Création de l'affiçchage miniature

          // construction fiche miniature

          const ficheMiniature = document.createElement("div");
          ficheMiniature.classList.add("fiche-miniature");
          console.log(ficheMiniature);
          // création emplacement et importation image
          const image = document.createElement("img");
          image.src = elements.imageUrl;
          image.classList.add = "image-miniature";
          console.log(image);
          //choix éditer

          const editer = document.createElement("p");
          editer.innerText = "éditer";
          editer.classList.add = "editer";
          console.log(editer);
          //rattahement

          ficheMiniature.appendChild(image);
          ficheMiniature.appendChild(editer);
          miniatures.appendChild(ficheMiniature);
        }
      }
    });
}
affichageDesMiniature();
