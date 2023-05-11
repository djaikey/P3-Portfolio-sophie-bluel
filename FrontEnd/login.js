function recuperationLogin() {
  fetch("http://localhost:5678/api/works")
    .then((reponse) => reponse.json())
    .then((login) => {
      console.log(login);
    });
}
recuperationLogin();
