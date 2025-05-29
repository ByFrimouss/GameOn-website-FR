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
    error.style.color = "red";
    error.style.fontSize = "0.6em";
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
    showError(
      locationRadios[0].parentElement,
      "Veuillez sélectionner une ville."
    );
  }

  // Conditions générales
  if (!termsAccepted.checked) {
    showError(
      termsAccepted,
      "Vous devez accepter les conditions d'utilisation."
    );
  }

  return isValid;
}
