function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// ÉVÈNEMENT AU CLIC SUR LA CROIX DE LA MODAL
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);

//  FONCTION POUR FERMER LA MODALE
function closeModal() {
  modalbg.style.display = "none";
}
