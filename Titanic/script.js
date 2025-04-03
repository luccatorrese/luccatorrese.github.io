document.addEventListener('DOMContentLoaded', () => {
    console.log('Site Web du Titanic en route !');
});

const ctx = document.getElementById('survivalChart').getContext('2d');
const survivalChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Survivants', 'Décédés'],
        datasets: [{
            label: 'Nombre de passagers',
            data: [342, 549], // Exemple de données
            backgroundColor: ['#4caf50', '#f44336'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true },
            title: { display: true, text: 'Taux de survie des passagers du Titanic' }
        }
    }
});

