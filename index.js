const chartTab = document.getElementById('chart-tab');
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
let chart;

function getIncomeValues() {
    return months.map(function (month) {
        const input = document.getElementById(month.toLowerCase() + '-income');
        return Number(input.value) || 0;
    });
}

function getExpenseValues() {
    return months.map(function (month) {
        const input = document.getElementById(month.toLowerCase() + '-expenses');
        return Number(input.value) || 0;
    });
}

// Wait until the Chart panel is visible so the canvas has the correct size.
chartTab.addEventListener('shown.bs.tab', function () {
    const incomeValues = getIncomeValues();
    const expenseValues = getExpenseValues();

    // Refresh the same chart with the latest entries on each visit.
    if (chart) {
        chart.data.datasets[0].data = incomeValues;
        chart.data.datasets[1].data = expenseValues;
        chart.resize();
        chart.update();
        return;
    }

    // Create the chart only the first time its tab opens.
    chart = new Chart(document.getElementById('income-expense-chart'), {
        type: 'bar',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Income',
                    data: incomeValues,
                    backgroundColor: '#198754'
                },
                {
                    label: 'Expenses',
                    data: expenseValues,
                    backgroundColor: '#dc3545'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
