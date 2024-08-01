const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Initialiser la diapositive actuelle
let currentSlide = 0;

// Sélectionner les éléments DOM
const arrow_left = document.querySelector('.arrow_left'); 
const arrow_right = document.querySelector('.arrow_right'); 
const bannerImg = document.querySelector('.banner-img'); 
const bannerTagline = document.querySelector('#banner p'); 
const dotsContainer = document.querySelector(".dots"); 

// Créer les bullet points pour chaque diapositive
slides.forEach((slide, index) => { 
    const dot = document.createElement("div"); // Créer un élément div pour le point
    dot.classList.add("dot"); // Ajouter la classe CSS "dot" au point
    if (index === 0) {
        dot.classList.add("dot_selected"); // Ajouter la classe "dot_selected" au premier point
    }
    dotsContainer.appendChild(dot); // Ajouter le point au conteneur
});

// Sélectionner tous les points
const dots = document.querySelectorAll(".dot");

// Ajouter des écouteurs d'événements pour les bullet points
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        console.log(`Bullet point ${index + 1} cliqué`);
        currentSlide = index; // Mettre à jour la diapositive actuelle en fonction du point cliqué
        updateSlide(currentSlide); // Mettre à jour l'affichage
    });
});


// Fonction pour mettre à jour la diapositive
function updateSlide(index) {
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`; // Mettre à jour l'image de la diapositive
    bannerTagline.innerHTML = slides[index].tagLine; // Mettre à jour le texte de la diapositive
    dots.forEach(dot => dot.classList.remove("dot_selected")); // Retirer la classe "dot_selected" de tous les points
    dots[index].classList.add("dot_selected"); // Ajouter la classe "dot_selected" au point actuel
}








// Ajouter des écouteurs d'événements pour les flèches
arrow_left.addEventListener("click", () => {
    console.log("j'ai cliqué sur la flèche de gauche");
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1; // Mettre à jour la diapositive actuelle

    updateSlide(currentSlide); // Mettre à jour l'affichage
});

arrow_right.addEventListener("click", () => {
    console.log("j'ai cliqué sur la flèche de droite");
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0; // Mettre à jour la diapositive actuelle
    updateSlide(currentSlide); // Mettre à jour l'affichage
});

