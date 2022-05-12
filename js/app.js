
function log() {
  
  let container = document.querySelector('.container');
  let login = prompt("Login:");
  let motDePasse = prompt("Mot de passe:");

  if (login != "cisco", motDePasse != "linkt") {
    alert("Le login est incorrect");
    container.style.display = "none";
  }
    else {
      alert("Le login est correct ", "Bienvenue chez Linkt");
      container.style.display = "block";
    }

}

log();


const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
  tab.addEventListener('click', event => getActiveStep(event));
});

function getActiveStep(event) {
  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));
  
  event.target.classList.add('active');
  document.querySelector(`#${event.target.dataset.id}`).classList.add('active');
};
