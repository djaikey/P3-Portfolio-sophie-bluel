const sectionformulaire = document.querySelector(".section-login");

function formulaire() {
  //formulaire
  const formulaire = document.createElement("form");
  formulaire.classList.add("formulaire-login");

  //Label et champs de l'e-mail
  const labelEmail = document.createElement("label");
  labelEmail.classList.add("label-formulaire");
  labelEmail.innerText = "E-mail";
  const champsEmail = document.createElement("input");
  champsEmail.classList.add("champs-formulaire");
  champsEmail.type = "text";
  champsEmail.name = "email";

  console.log(champsEmail.value);

  formulaire.appendChild(labelEmail);
  formulaire.appendChild(champsEmail);

  // Label et champs mot de passe
  const labelMotDePasse = document.createElement("label");
  labelMotDePasse.classList.add("label-formulaire");
  labelMotDePasse.innerText = "Mot de passe";
  const champsMotDePasse = document.createElement("input");
  champsMotDePasse.classList.add("champs-formulaire");
  champsMotDePasse.type = "text";
  champsMotDePasse.name = "motDePasse";

  formulaire.appendChild(labelMotDePasse);
  formulaire.appendChild(champsMotDePasse);

  //Rattachement element formulaire de connection

  sectionformulaire.appendChild(formulaire);
}
formulaire();

function boutonFormulaire() {
  const boutonEnvoie = document.createElement("button");
  boutonEnvoie.classList.add("bouton-validation");
  boutonEnvoie.innerText = "Se connecter";

  // Rattachement
  sectionformulaire.appendChild(boutonEnvoie);

  //Evenement
  boutonEnvoie.addEventListener("click", (evenement) => {
    evenement.preventDefault();
    alert("click");

    fetch("http://localhost:5678/api/users/login");
    {
      "POST", Headers;
      {
      }
    }
  });
}
boutonFormulaire();
