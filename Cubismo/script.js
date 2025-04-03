const productsvg = document.getElementById('product-svg')
productsvg.style.fill="#be3d2c"
function changeColor(picker){
  productsvg.style.fill = picker.toHEXString()
  
}

const productsvg2 = document.getElementById('product-svg2')
productsvg2.style.fill="#be3d2c"
function changeColor2(picker){
  productsvg2.style.fill = picker.toHEXString()
  
}

const productsvg3 = document.getElementById('product-svg3')
productsvg3.style.fill="#be3d2c"
function changeColor3(picker){
  productsvg3.style.fill = picker.toHEXString()
  
}

const productsvg7 = document.getElementById('product-svg7')
productsvg7.style.fill="#be3d2c"
function changeColor7(picker){
  productsvg7.style.fill = picker.toHEXString()
  
}

document.querySelectorAll('.switch-image').forEach(item => {
    item.addEventListener('click', event => {
        const targetImagePath = item.getAttribute('data-target');
        // Supposons que #main-shoe-image est l'id de l'élément img de la chaussure actuelle
        document.getElementById('main-shoe-image').src = targetImagePath;
    });
});
