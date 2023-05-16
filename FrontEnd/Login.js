function formulaireLogin() {
  const sectionformulaire = document.querySelector(".section-login");

  //formulaire
  const formulaire = document.createElement("form");
  formulaire.classList.add("formulaire-login");

  //Label et champs de l'e-mail
  const labelEmail = document.createElement("label");
  labelEmail.classList.add("label-formulaire");
  labelEmail.innerText = "E-mail";
  const champsEmail = document.createElement("input");
  champsEmail.classList.add("champs-formulaire");

  // Label et champs mot de passe
  const labelMotDePass = document.createElement("label");
  labelMotDePass.classList.add("label-formulaire");
  labelMotDePass.innerText = "Mot de pass";
  const champsMotDePass = document.createElement("input");
  champsMotDePass.classList.add("champs-formulaire");
  // bouton d'envoie du formulaire
  const boutonEnvoie = document.createElement("button");
  boutonEnvoie.classList.add("bouton-validation");
  boutonEnvoie.innerText = "Se connecter";
  boutonEnvoie.addEventListener("click", (e) => {
    e.preventDefault();
    alert("click sur Se connecter effectué");
  });

  //Rattachement element formulaire de connection

  sectionformulaire.appendChild(formulaire);

  formulaire.appendChild(labelEmail);
  formulaire.appendChild(champsEmail);
  formulaire.appendChild(labelMotDePass);
  formulaire.appendChild(champsMotDePass);
  sectionformulaire.appendChild(boutonEnvoie);
}
formulaireLogin();

seConnecter();
/*
function RecuperationToken() {
  fetch("http://localhost:5678/api/users/login");
  (method = "POST"),
    (headers = {
      "Content-Type": "application/json",
      body: JSON.stringify(),

      
      if(eMail!email || motDePass! password){
        alert("information erronée")
      }
      if(eMail===email || motDePass=== Password{
        alert("connection en cours")
      }
      
    });
    
}

RecuperationToken();
*/
