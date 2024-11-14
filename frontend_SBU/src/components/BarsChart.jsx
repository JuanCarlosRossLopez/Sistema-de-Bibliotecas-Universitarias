import { Bar } from 'react-chartjs-2';
import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

Chartjs.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler);

const Lpm = [72, 25, 78, 67, 233];
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const misoptions = {
    responsive: true,
    animation: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        y: {
            min: 0,
            max: 250, // Ajustado para que los datos puedan verse completos
        },
        x: {
            ticks: {
                color: ['blue', 'red', 'green'], // Corrección de la sintaxis de color
            },
        },
    },
};

const midata = {
    labels: meses,
    datasets: [
        {
            label: 'Lpm',
            data: Lpm,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export default function BarsChart() {
    return (
        <div>
            <Bar data={midata} options={misoptions} />
        </div>
    );
}
