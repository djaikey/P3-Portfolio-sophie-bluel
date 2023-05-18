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
    console.log(champsEmail.value);
    console.log(champsMotDePasse.value);
    
    if(champsEmail.value== 0|| champsMotDePasse.value== 0){
      alert("Erreur dans l’identifiant ou le mot de passe")
    }
    
    fetch ("http://localhost:5678/api/users/post",{

      method:"POST",
      headers: {
        "accept":"application/json",
        string:"application/json"  
      },
      body:JSON.stringify({   
        "email": champsEmail.value,
        "password": champsEmail.value,
      })
    });

  });
  
}


