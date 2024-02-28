const menuBtn = document.querySelector('.menu-btn');
const menuLinks = document.querySelector('.menu-links');

menuBtn.addEventListener('click', () => {
    menuLinks.classList.toggle('show-menu');
});

// Sélectionnez le bouton "Annuler"
const boutonAnnuler = document.getElementById('annuler');

// Ajoutez un écouteur d'événements au clic sur le bouton "Annuler"
boutonAnnuler.addEventListener('click', () => {
    // Sélectionnez tous les champs de saisie dans le formulaire
    const champsTexte = document.querySelectorAll('.zone-noir input[type="text"]');
    const champsEmail = document.querySelectorAll('.zone-noir input[type="email"]');
    const champsMotDePasse = document.querySelectorAll('.zone-noir input[type="password"]');
    
    // Parcourez chaque champ de saisie et réinitialisez sa valeur à une chaîne vide
    champsTexte.forEach(champ => {
        champ.value = '';

        
    });
    champsEmail.forEach(champ => {
        champ.value = '';
    });
    champsMotDePasse.forEach(champ => {
        champ.value = '';
    });
});

// Récupérer les éléments du formulaire
const formulaire = document.querySelector('form');
const motDePasse = document.getElementById('mot-de-passe');
const confirmerMotDePasse = document.getElementById('mdp');
const forceMotDePasse = document.getElementById('force-mot-de-passe');

function validerMotDePasse() {
    // Récupérer les valeurs des champs de mot de passe et de confirmation de mot de passe
    const motDePasseValue = motDePasse.value;
    const confirmerMotDePasseValue = confirmerMotDePasse.value;
    
    // Expression régulière pour valider le mot de passe
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:',.<>?/\\]).{8,}$/;
    
    // Tester si le mot de passe valide la regex
    if (!regex.test(motDePasseValue)) {
        // Si le mot de passe ne correspond pas au motif, définir un message d'erreur personnalisé
        motDePasse.setCustomValidity("Le mot de passe doit contenir au moins 8 caractères et inclure au moins un chiffre et un caractère spécial.");
        forceMotDePasse.textContent = 'Faible';
        forceMotDePasse.style.color = 'red'; // Couleur rouge pour un mot de passe faible
        imageinsuffisant.style.display = 'inline-block';
        imagevalide.style.display = 'none';
    } else {
        // Si le mot de passe correspond au motif, réinitialiser le message d'erreur
        motDePasse.setCustomValidity("");
        // Vérifier la longueur du mot de passe pour déterminer la force
        if (motDePasseValue.length < 5) {
            forceMotDePasse.textContent = 'Faible';
            forceMotDePasse.style.color = 'red';
        } else if (motDePasseValue.length >= 5 && motDePasseValue.length < 8) {
            forceMotDePasse.textContent = 'Moyen';
            forceMotDePasse.style.color = 'orange'; // Couleur orange pour un mot de passe moyen
        } else {
            forceMotDePasse.textContent = 'Fort';
            forceMotDePasse.style.color = 'green'; // Couleur verte pour un mot de passe fort
            imageinsuffisant.style.display = 'none';
            imagevalide.style.display = 'inline-block';
        }
    }
    
    // Tester si le mot de passe correspond à la confirmation du mot de passe
    if (motDePasseValue !== confirmerMotDePasseValue) {
        // Si les mots de passe ne correspondent pas, définir un message d'erreur personnalisé pour la confirmation du mot de passe
        confirmerMotDePasse.setCustomValidity("Les mots de passe ne correspondent pas.");
    } else {
        // Si les mots de passe correspondent, réinitialiser le message d'erreur pour la confirmation du mot de passe
        confirmerMotDePasse.setCustomValidity("");
    }
}


// Écouter les événements de saisie pour les champs de mot de passe
motDePasse.addEventListener('input', validerMotDePasse);
confirmerMotDePasse.addEventListener('input', validerMotDePasse);

// Soumettre le formulaire
formulaire.addEventListener('submit', function(event) {
    if (motDePasse.value !== confirmerMotDePasse.value) {
        event.preventDefault(); // Empêcher la soumission du formulaire si les mots de passe ne correspondent pas
        // Vous pouvez également afficher un message d'erreur à l'utilisateur ici
    }
});

// Lorsque le compte est créé avec succès
alert("Votre compte a été créé avec succès!");


// Récupérer les informations du formulaire
var username = document.getElementById("nom-dutilisateur").value;
var password = document.getElementById("mot-de-passe").value;

// Créer un objet pour les informations du compte
var accountInfo = {
    username: username,
    password: password
};

// Convertir l'objet en chaîne JSON et enregistrer dans le localStorage
localStorage.setItem("accountInfo", JSON.stringify(accountInfo));

// Afficher la pop-up de confirmation
alert("Votre compte a été créé avec succès!");



// Récupérer les informations du formulaire de connexion
var inputUsername = document.getElementById("login-username").value;
var inputPassword = document.getElementById("login-password").value;

// Récupérer les informations du compte enregistrées dans le localStorage
var storedAccountInfo = JSON.parse(localStorage.getItem("accountInfo"));

// Vérifier si les informations de connexion sont valides
if (storedAccountInfo && inputUsername === storedAccountInfo.username && inputPassword === storedAccountInfo.password) {
    // Rediriger l'utilisateur vers la page de profil
    window.location.href = "profil.html";
} else {
    // Afficher un message d'erreur si les informations de connexion sont incorrectes
    alert("Identifiant ou mot de passe incorrect.");
}
