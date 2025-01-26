
console.log("Si tu m'as trouvé, c'est que tu as regardé dans la console !");

/* sélectionneur de requêtes */
const addButton = document.getElementById('add-button');
const addWorkDialog = document.getElementById('add-work');

const updateButton = document.getElementById('update-button');
const editWorkDialog = document.getElementById('edit-work');

const sendButton = document.getElementById('send-button');

// Le bouton "Ajouter un devoir" ouvre la boîte de dialogue. Ajout d'un écouteur d'évènements pour la constante addButton, avec fonction qui ouvre une popup.
addButton.addEventListener('click', () => {
    addWorkDialog.showModal();
});

updateButton.addEventListener('click', () => {
    editWorkDialog.showModal();
});

// Le bouton OK ferme la popup. Ajout d'un écouteur d'évènements pour la constante closeButton, puis fonction close qui ferme la popup.
sendButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prévient la valeur par défaut
    addWorkDialog.close();
});

// Ecouteur d'évènements pour le clic sur les cartes.

const cardColumn = document.getElementById('card');
cardColumn.addEventListener('click', (e) => {
    const target = e.target.closest('.card');
    if (target) {
        const title = target.querySelector('h3').textContent;
        const description = target.querySelector('p').textContent;
        const category = target.querySelector('.category').textContent;

        // Populate modal fields with card data
        document.getElementById('editTitle').value = title;
        document.getElementById('editDescription').value = description;
        document.getElementById('editCategory').value = category;

        // Show edit modal
        editWorkDialog.showModal();
    }
});

// Close edit modal and update card when "Mettre à jour" is clicked
updateButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission

    const title = document.getElementById('editTitle').value;
    const description = document.getElementById('editDescription').value;
    const category = document.getElementById('editCategory').value;

    const target = document.querySelector('.card.selected'); // Assumes card has "selected" class
    if (target) {
        target.querySelector('h3').textContent = title;
        target.querySelector('p').textContent = description;
        target.querySelector('.category').textContent = category;
    }

    editWorkDialog.close();
});