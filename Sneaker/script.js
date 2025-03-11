// Récupération de l'élément qui va changer de couleur
const overlay = document.getElementById("product-shape");

function changeColor(picker) {
    // Set the fill style
    overlay.style.fill = picker.toHEXString();
}

const productsvg = document.getElementById('product-svg3')
function changeColor(picker) {
    productsvg.style.fill = picker.toHEXString()

}

const animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'),
    path: 'Confetti_2.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
})
animation.play();

const lottieContainer = document.getElementById('lottie');
const animation = bodymovin.loadAnimation({
    container: lottieContainer,
    path: 'Confetti_2.json',
    renderer: 'svg',
    loop: true,
    autoplay: false,
})

// Play the animation on hover
lottieContainer.addEventListener('mouseover', () => {
    animation.play();
});
// Stop the animation after playing once
animation.addEventListener('loopComplete', function () {
    animation.stop();
});