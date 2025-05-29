const keys = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';', 'h', 'g'];
let currentKeyIndex = 0;

const keyDisplay = document.getElementById('key');
const message = document.getElementById('message');

function setCurrentKey() {
  if (currentKeyIndex >= keys.length) {
    PNotify.success({
      text: 'Вітаємо! Ви натиснули всі клавіші правильно!',
      delay: 2000,
    });
    keyDisplay.textContent = '';
    return;
  }
  keyDisplay.textContent = keys[currentKeyIndex];
}

setCurrentKey();


window.addEventListener('keydown', function (event) {
  const pressedKey = event.key.toLowerCase();

  if (pressedKey === keys[currentKeyIndex]) {
    currentKeyIndex++;
    setCurrentKey();
  } else {
    PNotify.error({
      text: `Неправильна клавіша: натиснуто "${pressedKey}". Очікувалась "${keys[currentKeyIndex]}".`,
      delay: 1500,
    });
  }
});


window.addEventListener('keypress', function (event) {
  event.preventDefault();
});


document.getElementById('new-game').addEventListener('click', () => {
  currentKeyIndex = 0;
  setCurrentKey();
  PNotify.info({
    text: 'Нова гра почалася!',
    delay: 1500,
  });
});

const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "rgba(33, 150, 243, 0.2)",
      borderColor: "#2196f3",
      borderWidth: 2,
      fill: true,
      tension: 0.3
    },
  ],
};

const ctx = document.getElementById('sales-chart').getContext('2d');

const salesChart = new Chart(ctx, {
  type: 'line',
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Дні місяця'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Продажі'
        },
        beginAtZero: true,
      }
    }
  }
});