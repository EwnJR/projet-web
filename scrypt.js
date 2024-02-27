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
    const champsSaisie = document.querySelectorAll('.zone-noir input[type="text"]');
    
    // Parcourez chaque champ de saisie et réinitialisez sa valeur à une chaîne vide
    champsSaisie.forEach(champ => {
        champ.value = '';
    });
});
