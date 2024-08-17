import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Custom plugin to apply Tailwind CSS classes to the title
const titlePlugin = {
  id: 'customTitle',
  beforeDraw: (chart) => {
    const { ctx, options } = chart;
    if (options.plugins.title.display) {
      ctx.save();
      ctx.font = '16px sans-serif';
      ctx.fillStyle = 'text-gray-700'; // Tailwind CSS color 'text-gray-700' equivalent
      ctx.globalAlpha = 0.7; // Set opacity
      ctx.textAlign = 'start';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        options.plugins.title.text,
        chart.width / 2,
        20 // Adjust the position of the title as needed
      );
      ctx.restore();
    }
  },
};

const LineChart = () => {
  const data = {
    labels: ['01', '02', '03', '04', '05', '06'], // Custom x-axis labels
    datasets: [
      {
        label: 'Last 6 days',
        data: [65, 59, 70, 75, 56, 55],
        fill: false,
        backgroundColor: '#A19EF7',
        borderColor: '#A19EF7',
        pointRadius: 0, // Remove data point circles
        pointHoverRadius: 0, // Remove data point hover circles
      },
      {
        label: 'Last week',
        data: [40, 55, 56, 60, 70, 59],
        fill: false,
        backgroundColor: '#E6E8EC',
        borderColor: '#E6E8EC',
        pointRadius: 0, 
        pointHoverRadius: 0, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true, 
          pointStyle: 'circle',
          boxWidth: 9, 
          boxHeight: 9, 
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false, 
        grid: {
          display: false, 
        },
      },
    },
  };

  return (
    <div className="flex bg-[#FAFAFA]"> 
      <div className="bg-white w-full pl-3 ml-5 mt-9 mx-9">
        <div className='m-5'>
            <div className="flex justify-between items-center mb-4 ">
            <div>
              <p className='text-base font-montserrat text-left mb-1'>Purchases</p> 
              <p className='font-montserrat text-xl font-bold mb-1 text-left '>2.568</p>
              <p className='text-[#A19EF7] font-montserrat text-xs text-left'>
              <span className="text-[#F2383A]">↓ 2.1%</span> vs last week
              </p>
              <br/>
              <p className='text-black opacity-50 font-montserrat'>Sales from 1-6 Dec, 2020</p>
            </div>
            <button className="relative w-full lg:w-28 h-8 py-1 px-4 border border-grey text-purp font-semibold bg-white transition-transform transform hover:-translate-y-1">
              <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
              <span className="absolute inset-0 border border-black bg-white z-10 flex items-center justify-center"></span>
              <span className="relative z-20 font-montserrat text-xs font-normal">View report</span>
            </button>

          </div>
        </div>
        <div className="w-[550px] h-[350px]">
          <Line data={data} options={options} plugins={[titlePlugin]} />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
