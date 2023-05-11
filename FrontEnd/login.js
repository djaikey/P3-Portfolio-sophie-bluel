function recuperationLogin() {
  fetch("http://localhost:5678/api/works")
    .then((reponse) => reponse.json())
    .then((login) => {
      console.log(login);

      //affichage confirmation de connection

      /*
      const MessageDeConnection= document.querySelector(IdSelecteur)
      idSelecteur.return= "connecté"     
      */

      // recupération token

      /*
    
    function userLoginAction (){

      for (let i = 0; i < userId.length; i++) {
          const userLogin = userId [i];
          
        
          const UserToken = userLogin.token;

           (idSelecteur === "Connecté") {
          const saveLogin = localStorage.setItem(userToken)

          //recharger la page

        
      }
    }
    */
    });
}
recuperationLogin();
