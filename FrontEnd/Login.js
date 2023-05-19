// Par defaut
const formulaire = document.querySelector('form');
const champsEmail = document.querySelector('input[name="email"]');
const champsMotDePasse = document.querySelector('input[name="psw"]');



// Événement de soumission du formulaire
formulaire.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêche l'envoi du formulaire par défaut

  const email = champsEmail.value;
  const password = champsMotDePasse.value;

  // Envoi des données d'identification à l'API pour vérification
  
    const response = fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, password })
  })

//Reponses post identification

  .then(response => {

    //Si la réponse n'est pas correcte

    if (!response.ok) {
      throw new Error('Erreur dans l’identifiant ou le mot de passe');
    }
    return response.json();
  })

  // Si data.token existe

  .then(data => {
    if (data.token) {

      // Stockage du token dans localstorage
      localStorage.setItem('token', data.token);

      // Redirection page d'accueil
      window.location.href = './index.html';
    } else {
      throw new Error('Erreur lors de la connexion');
    }
  })

  // Décommenter pour affichage des erreurs 

  /* supr
  
  .catch(error => {
    console.error('Erreur lors de la connexion:', error);
    alert(error.message);
  });

 supr*/
  
});

