// CODE DU BURGER PRECEDENT

// function editNav() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

// MISE A JOUR DU CODE POUR LE MENU BURGER
function editNav() {
  var x = document.getElementById("myTopnav");
  var icon = document.querySelector("#burgerIcon i");

  if (x.className === "topnav") {
    x.className += " responsive";
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    x.className = "topnav";
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
// const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "flex";
  modalbg.style.alignItems = "center";
  modalbg.style.justifyContent = "center";
}

// ÉVÈNEMENT AU CLIC SUR LA CROIX DES MODALES
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);

//  FONCTION POUR FERMER LA MODALE
function closeModal() {
  const form = document.querySelector("form");
  const confirmationMessage = document.getElementById("confirmation-message");

  modalbg.style.display = "none";
  // document.body.classList.remove("modal-open"); Empêcher le scroll du body
  form.style.display = "block"; // Réinitialiser pour la prochaine soumission
  confirmationMessage.classList.remove("active"); // Cacher le message
}

function validate() {
  let isValid = true;

  // Récupérer les champs
  const firstName = document.getElementById("first");
  const lastName = document.getElementById("last");
  const email = document.getElementById("email");
  const birthdate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  const locationRadios = document.getElementsByName("location");
  const termsAccepted = document.getElementById("checkbox1");

  // Reset messages d'erreur
  document.querySelectorAll(".error-message").forEach((el) => el.remove());

  // Fonction utilitaire pour afficher une erreur
  function showError(element, message) {
    const error = document.createElement("div");
    error.className = "error-message";
    error.style.color = "#fe142f";
    error.style.fontSize = "0.7em";
    error.textContent = message;
    element.parentElement.appendChild(error);
    isValid = false;
  }

  // Prénom
  if (!firstName.value.trim() || firstName.value.trim().length < 2) {
    showError(
      firstName,
      "Veuillez entrer au moins 2 caractères pour le prénom."
    );
  }

  // Nom
  if (!lastName.value.trim() || lastName.value.trim().length < 2) {
    showError(lastName, "Veuillez entrer au moins 2 caractères pour le nom.");
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    showError(email, "Veuillez entrer une adresse e-mail valide.");
  }

  // Date de naissance
  if (!birthdate.value) {
    showError(birthdate, "Veuillez entrer votre date de naissance.");
  }

  // Quantité
  if (quantity.value === "" || isNaN(quantity.value) || quantity.value < 0) {
    showError(quantity, "Veuillez entrer un nombre valide.");
  }

  // Lieu sélectionné
  let locationSelected = false;
  for (let radio of locationRadios) {
    if (radio.checked) {
      locationSelected = true;
      break;
    }
  }
  if (!locationSelected) {
    showError(locationRadios[0], "Veuillez sélectionner une ville.");
  }

  // Conditions générales
  if (!termsAccepted.checked) {
    showError(
      termsAccepted,
      "Vous devez accepter les conditions d'utilisation."
    );
  }

  if (isValid) {
    showConfirmationMessage();
  }

  return false;
}

function showConfirmationMessage() {
  const form = document.querySelector("form");
  const confirmationMessage = document.getElementById("confirmation-message");

  form.style.display = "none";
  confirmationMessage.classList.add("active");
}
