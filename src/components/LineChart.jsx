import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
// npm install chart.js react-chartjs-2

const LineChart = () => {
  const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'], // Customize os meses ou categorias
    datasets: [
      {
        label: 'Progresso de Dados (%)',
        data: [10, 30, 50, 70, 90, 100], // Valores correspondentes
        borderColor: '#4F46E5', // Cor da linha (Tailwind Indigo 600)
        backgroundColor: 'rgba(79, 70, 229, 0.2)', // Fundo preenchido transparente
        tension: 0.4, // Deixa a linha levemente curva
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Progresso de Inserção de Dados',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#E5E7EB', // Tailwind Gray 200
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
