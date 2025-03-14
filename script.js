// script.js
console.log("Le fichier JavaScript est correctement relié !");

function confirmExit(event) {
    event.preventDefault(); // Empêche la redirection immédiate
    let confirmation = confirm("Es-tu sûr de vouloir quitter cette page ?");
    if (confirmation) {
        window.location.href = event.target.href; // Redirige vers la page cible
    }
}

let exitUrl = "";

function openConfirm(event) {
    event.preventDefault(); // Empêche la navigation immédiate
    exitUrl = event.target.href; // Stocke l'URL cible
    document.getElementById("custom-confirm").style.display = "flex"; // Affiche la boîte
}

function confirmExit() {
    window.location.href = exitUrl; // Si l'utilisateur clique sur Oui
}

function closeConfirm() {
    document.getElementById("custom-confirm").style.display = "none"; // Si l'utilisateur clique sur Non
}
