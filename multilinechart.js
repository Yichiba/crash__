import data from './data.js';

document.addEventListener('DOMContentLoaded', function () {
    console.log(data);
    const ctx = document.getElementById('myChart').getContext('2d'); // Get 2D context from the canvas

    const labels = data.map(item => item.date); // Extract dates for labels

    const chartData = {
        labels: labels,
        datasets: [{
            label: 'Value', // Label for the dataset
            data: data.map(item => item.value), // Extract values for the dataset
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Set background color with transparency
            borderColor: 'rgba(75, 192, 192, 1)', // Set border color
            borderWidth: 1, // Set border width
        }]
    };

    const config = {
        type: 'line', // Chart type: line chart
        data: chartData,
        options: {
  scales: {
    y: {
      beginAtZero: false,
      min: 1,
      max: 10
    }
  },
  plugins: {
    zoom: {
      pan: {
        enabled: true,
        mode: 'x', // Zoom and pan only in x-direction
      },
      zoom: {
        wheel: {
          enabled: true
        },
        pinch: {
          enabled: true
        },
        mode: 'x', // Zoom only in x-direction
      }
    }
  }
}

    };

    const myChart = new Chart(ctx, config); // Create the chart instance

    function resizeChart(canvas) {
        // Code to resize the chart, using the passed canvas element
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
        myChart.resize();
    }

    // Call resizeChart initially (optional)
    resizeChart(document.getElementById('myChart')); // Pass the canvas element

    // Add event listener for window resize (optional)
    window.addEventListener('resize', function() {
        resizeChart(document.getElementById('myChart'));
    });
});