function formulaireLogin(infoLogin) {
  const sectionformulaire = document.querySelector(".section-login");

  //formulaire
  const formulaire = document.createElement("form");
  formulaire.classList.add("formulaire-login");

  //Label et champs de l'e-mail
  const labelEmail = document.createElement("p");
  labelEmail.classList.add("label-formulaire");
  labelEmail.innerText = "E-mail";
  const champsEmail = document.createElement("input");
  champsEmail.classList.add("champs-formulaire");

  // Label et champs mot de passe
  const labelMotDePass = document.createElement("p");
  labelMotDePass.classList.add("label-formulaire");
  labelMotDePass.innerText = "Mot de pass";
  const champsMotDePass = document.createElement("input");
  champsMotDePass.classList.add("champs-formulaire");
  // bouton d'envoie du formulaire
  const boutonEnvoieFormulaire = document.createElement("button");
  boutonEnvoieFormulaire.classList.add("bouton-validation");
  boutonEnvoieFormulaire.innerText = "Se connecter";
  boutonEnvoieFormulaire.addEventListener("click", (event) => {
    event.preventDefault;
    alert("saisie  des informations de connection incorrecte");
  });
  // Liens mot de passe oublié

  //Rattachement element formulaire de connection

  sectionformulaire.appendChild(formulaire);
  sectionformulaire.appendChild(boutonEnvoieFormulaire);
  formulaire.appendChild(labelEmail);
  formulaire.appendChild(champsEmail);
  formulaire.appendChild(labelMotDePass);
  formulaire.appendChild(champsMotDePass);
}

formulaireLogin();

function loginRecuperation() {}
