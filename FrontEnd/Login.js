
/*
//formulaire
const sectionformulaire = document.querySelector(".section-login");
const formulaire = document.createElement("form");
formulaire.classList.add("formulaire-login");

//Rattachement 

sectionformulaire.appendChild(formulaire);

//Label et champs de l'e-mail

const labelEmail = document.createElement("label");
labelEmail.classList.add("label-formulaire");
labelEmail.innerText = "E-mail";
const champsEmail = document.createElement("input");
champsEmail.classList.add("champs-formulaire");
champsEmail.type = "text";
champsEmail.name = "email";

//Rattachement
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

//Rattachement

formulaire.appendChild(labelMotDePasse);
formulaire.appendChild(champsMotDePasse);

//appel Bouton
boutonFormulaire();


//Lien mot de passe oublié

const lienOublieMDP = document.createElement("a");
lienOublieMDP.textContent= " Mot de passe oublié"
lienOublieMDP.classList.add="Lien-oublie"


sectionformulaire.appendChild(lienOublieMDP)



//donnée du formulaire

function boutonFormulaire() {

  const boutonEnvoie = document.createElement("button");
  boutonEnvoie.classList.add("bouton-validation");
  boutonEnvoie.innerText = "Se connecter";

  // Rattachement
  sectionformulaire.appendChild(boutonEnvoie);
  
  boutonEnvoie.addEventListener("click", (e) => {
    e.preventDefault
    const email = champsEmail.value;
    const motDePasse = champsMotDePasse.value;
    console.log(email);
    console.log(motDePasse);
    
    if(champsEmail.value== ""|| champsMotDePasse.value== ""){
      alert("Erreur dans l’identifiant ou le mot de passe")
    }
    
    
    /*const response = fetch ("http://localhost:5678/api/users/login",{

      method:"POST",
      headers: {
       "Content-Type":"application/json"
      },
      body:JSON.stringify({   
        email,
        motDePasse
      })


    })
    const response = fetch('http://localhost:5678/api/users/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, motDePasse })
    })
    .catch(error=> {
      alert(error.message)
    })

  });
  
}
*/
const loginForm = document.querySelector('form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="psw"]');

// Écoute de l'événement de soumission du formulaire de connexion
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêche l'envoi du formulaire par défaut

  const email = emailInput.value;
  const password = passwordInput.value;

  // Envoi des données d'identification à l'API pour vérification
  
    const response = fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, password })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur dans l’identifiant ou le mot de passe');
    }
    return response.json();
  })
  .then(data => {
    if (data.token) {
      // Stockage du token dans le stockage local
      localStorage.setItem('token', data.token);

      // Redirection vers la page d'accueil
      window.location.href = './index.html';
    } else {
      throw new Error('Erreur lors de la connexion');
    }
  })
  .catch(error => {
    console.error('Erreur lors de la connexion:', error);
    alert(error.message);
  });
  
});

