// Récupération de l'élément qui va changer de couleur
const overlay = document.getElementById("product-shape");
const overlay2 = document.getElementById("product-shape");
const overlay3 = document.getElementById("product-shape");


function changeColor(picker) {
    // Set the fill style
    overlay.style.fill = picker.toHEXString();
}