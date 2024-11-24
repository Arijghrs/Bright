import PropTypes from 'prop-types'; 
import path from "../assets/Path 2.png";

const SquareChart = ({ total, month, today, sTotal, sMonth, sToday }) => {
  return (
    <div className="w-[180px] h-[158px] bg-white mt-12 mx-7 ml-3 border-2 border-gray-100 text-gray-600 relative">
      <div className="mb-2 mt-3 ml-2 text-left">
        <h2 className="font-medium text-lg">{total}</h2>
        <h1 className="font-bold text-xl">{sTotal} TND</h1>
      </div>

      <div className="flex justify-between items-center mt-4 pb-5">
        <div className="mb-2 ml-2 text-left">
          <p className="font-semibold text-[12px]">{month}</p>
          <h1 className="font-bold">{sMonth} TND</h1>
        </div>
        <div className="mb-2 ml-2 text-left">
          <h2 className="font-semibold text-[12px]">{today}</h2>
          <h1 className="font-bold">{sToday} TND</h1>
        </div>
        <img src={path} alt="chart path" className="absolute bottom-0 right-0 w-[145px]" />
      </div>
    </div>
  );
};

SquareChart.propTypes = {
  total: PropTypes.number.isRequired,
  month: PropTypes.string.isRequired,
  today: PropTypes.string.isRequired,
  sTotal: PropTypes.number.isRequired,
  sMonth: PropTypes.number.isRequired,
  sToday: PropTypes.number.isRequired,
  src: PropTypes.string
};

export default SquareChart;
