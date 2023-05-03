// Affichage par defaut

function affichageParDefaut(travaux) {
  // Récupération elements du tableau travaux

  for (let i = 0; i < article.length; i++) {
    const article = travaux[i];
    const imageUrl = article.imageUrl;
    const title = article.title;
    const id = article.id;
    console.log(id);

    // Choix de l'emplacement parent (balise qui accueuilra les fiches)

    const sectionArticle = document.querySelector(".gallery");

    // Création de l'affiçchage de la galerie par defaut

    const contenuArticle = document.createElement("article");

    imageUrlArticle = document.createElement("img");
    imageUrlArticle.src = imageUrl;

    titleArticle = document.createElement("p");
    titleArticle.innerText = title;

    //Rattachement des elements

    sectionArticle.appendChild(contenuArticle);
    contenuArticle.appendChild(article.imageUrl);
    contenuArticle.appendChild(article.title);
  }
}

// Appel de la fonction affichageParDefdaut()

affichageParDefaut();

//Création des boutons de filtrage

const sectionFiltre = document.querySelector(".filtres");

// Fonction de filtrage

function actionFiltre() {

  // Création filtre "Tous"

  function filreTous(travaux) {
    
      const fitrageTous = document.createElement("button");
      fitrageTous.innerText = "Tous";
      filtrageTous.id= "btn1"

      filtrageTous.addEventListener(click, () => {
       
      filtrageTous.querySelecto(sectionFiltre);
      sectionArticle.innerHTML="";
      .affichageParDefaut()


     });

  }

  // Appel de la fonction filteTous();

filteTous();


  //  Création  filtre "catégory"

  function fitreObjets (categories) {

    // Création du bouton

    const filtrageObjet= document.querySelector(".filtres")
    filtrageObjet.addEventListener("click", ()=>{

      

    });
    
  }

  
}
// Appel de la fonction actionFiltre()

actionFiltre()

// Récupération des donnés de l'API

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
