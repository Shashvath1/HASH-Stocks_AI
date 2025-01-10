function tradeStock() {
    const symbol = document.getElementById('stock-symbol').value;
    // Simulate trading logic
    document.getElementById('trade-result').innerText = `Traded stock: ${symbol}`;
}

function predictStock(event) {
    event.preventDefault();
    const symbol = document.getElementById('predict-symbol').value;
    const date = document.getElementById('predict-date').value;
    // Simulate prediction logic
    const prediction = Math.random() * 1000; // Dummy prediction value
    document.getElementById('prediction-result').innerText = `Predicted price for ${symbol} on ${date}: $${prediction.toFixed(2)}`;

    // Generate a dummy graph
    const ctx = document.getElementById('prediction-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: `${symbol} Stock Price`,
                data: Array.from({ length: 12 }, () => Math.random() * 1000),
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function toggleAboutUs() {
    const aboutUsSection = document.getElementById('about');
    if (aboutUsSection.style.display === 'none' || aboutUsSection.style.display === '') {
        aboutUsSection.style.display = 'block';
    } else {
        aboutUsSection.style.display = 'none';
    }
}