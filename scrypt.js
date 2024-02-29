const menuBtn = document.querySelector('.menu-btn');
const menuLinks = document.querySelector('.menu-links');
let boutonAnnuler; 

menuBtn.addEventListener('click', () => {
    menuLinks.classList.toggle('show-menu');
});

document.addEventListener('DOMContentLoaded', function() {
    boutonAnnuler = document.getElementById('annuler'); 

    if (boutonAnnuler) {
        boutonAnnuler.addEventListener('click', function() {
            console.log("Bouton 'Annuler' cliqué");
        });
    } else {
        console.error("Élément avec l'ID 'annuler' non trouvé.");
    }
});

if (boutonAnnuler) {
    boutonAnnuler.addEventListener('click', () => {
        const champsTexte = document.querySelectorAll('.zone-noir input[type="text"]');
        const champsEmail = document.querySelectorAll('.zone-noir input[type="email"]');
        const champsMotDePasse = document.querySelectorAll('.zone-noir input[type="password"]');
        
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
}

const motDePasse = document.getElementById('mot-de-passe');
const confirmerMotDePasse = document.getElementById('mdp');
const forceMotDePasse = document.getElementById('force-mot-de-passe');
const imageinsuffisant = document.getElementById('imageinsuffisant');
const imagevalide = document.getElementById('imagevalide');

function validerMotDePasse() {
    const motDePasseValue = motDePasse.value;
    const confirmerMotDePasseValue = confirmerMotDePasse.value;
    
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:',.<>?/\\]).{8,}$/;
    
    if (!regex.test(motDePasseValue)) {
        motDePasse.setCustomValidity("Le mot de passe doit contenir au moins 8 caractères et inclure au moins un chiffre et un caractère spécial.");
        forceMotDePasse.textContent = 'Faible';
        forceMotDePasse.style.color = 'red'; 
        imageinsuffisant.style.display = 'inline-block';
        imagevalide.style.display = 'none';
    } else {
        motDePasse.setCustomValidity("");
        if (motDePasseValue.length < 5) {
            forceMotDePasse.textContent = 'Faible'; 
            forceMotDePasse.style.color = 'red';
        } else if (motDePasseValue.length >= 5 && motDePasseValue.length < 8) {
            forceMotDePasse.textContent = 'Moyen';
            forceMotDePasse.style.color = 'orange'; 
        } else {
            forceMotDePasse.textContent = 'Fort';
            forceMotDePasse.style.color = 'green'; 
            imageinsuffisant.style.display = 'none';
            imagevalide.style.display = 'inline-block';
        }
    }
    
    if (motDePasseValue !== confirmerMotDePasseValue) {
        confirmerMotDePasse.setCustomValidity("Les mots de passe ne correspondent pas.");
    } else {
        confirmerMotDePasse.setCustomValidity("");
    }
}

motDePasse.addEventListener('input', validerMotDePasse);
confirmerMotDePasse.addEventListener('input', validerMotDePasse);

function enregistrerDonneesInscription(nomUtilisateur, emailUtilisateur) {
    const donneesInscription = {
        nom: nomUtilisateur,
        email: emailUtilisateur
    };

    const donneesJSON = JSON.stringify(donneesInscription);

    localStorage.setItem('donneesInscription', donneesJSON);

    
    console.log('Données d\'inscription enregistrées :', donneesInscription);
}

const nomUtilisateur = document.getElementById('nom-dutilisateur').value;
const emailUtilisateur = document.getElementById('mail').value;

enregistrerDonneesInscription(nomUtilisateur, emailUtilisateur);
console.log('Données d\'inscription enregistrées :', donneesInscription);

const langageListe = document.getElementById('langage');
const imageContainer = document.getElementById('imageContainer');

langageListe.addEventListener('change', function() {

    const image = document.createElement('img');
    switch (langageListe.value) {
        case 'Alphabet-scrabble':
            image.src = 'ressources/alphabet-scrabble/memory_detail_scrabble.png';
            break;
        case 'Animaux':
            image.src = 'chemin/vers/image-animaux.jpg';
            break;
        case 'Animaux animés':
            image.src = 'chemin/vers/image-animaux-animes.jpg';
            break;
        default:
            break;
    }

    imageContainer.appendChild(image);
});


document.addEventListener('DOMContentLoaded', function() {
    const boutonAnnuler = document.getElementById('annuler');

    if (boutonAnnuler) {
        boutonAnnuler.addEventListener('click', function() {
            console.log("Bouton 'Annuler' cliqué");
        });
    } else {
        console.error("Élément avec l'ID 'annuler' non trouvé.");
    }

    const creationCompteForm = document.getElementById('creation-compte-form');

    creationCompteForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nomUtilisateur = document.getElementById('nomUtilisateur').value;
        const emailUtilisateur = document.getElementById('emailUtilisateur').value;

        enregistrerDonneesInscription(nomUtilisateur, emailUtilisateur);
    });
});
