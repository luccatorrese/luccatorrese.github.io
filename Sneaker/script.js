// Récupération de l'élément qui va changer de couleur
const overlay = document.getElementById("product-shape");

overlay.style.fill = "#be3d2c"
function changeColor(picker) {
    // Set the fill style
    overlay.style.fill = picker.toHEXString();
}

const productsvg = document.getElementById('product-svg3')
function changeColor(picker) {
    productsvg.style.fill = picker.toHEXString()

}