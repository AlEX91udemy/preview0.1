// Получите ссылку на элемент canvas
var ctx = document.getElementById('myChart').getContext('2d');

// Создайте данные для диаграммы (пример)
var data = {
  
  datasets: [{
    data: [70,30], // Проценты для каждой категории
    backgroundColor: ['rgba(113, 187, 255, 1)', 'rgba(246, 248, 251, 1)']
  }]
};

var options = {
cutoutPercentage: 70 // Процент выреза для пончика
};

var myChart = new Chart(ctx, {
type: 'doughnut', // Изменили тип на 'doughnut'
data: data,
options: options
});

