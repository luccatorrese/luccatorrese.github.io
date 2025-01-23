// script.js
console.log("Le fichier JavaScript est correctement relié !");

console.log("Test JavaScript");

function send_message() {
    if (confirm('Etes-vous sûr de vouloir envoyer ce message ?')) {
        // Do it!
        console.log('Le message a bien été envoyé.');
    } else {
        // Do nothing!
        console.log('Le message n a pas été envoyé.');
    }
}