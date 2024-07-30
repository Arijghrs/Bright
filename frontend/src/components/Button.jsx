import PropTypes from 'prop-types';

const Button = ({ color, colorr, name, onClick, width = "w-32", height = "h-14" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative ${width} ${height} py-1 px-3 border border-black text-black font-semibold bg-white cursor-pointer shadow-${color} hover:transform hover:-translate-x-0.5 hover:translate-y-0.5 hover:shadow-${colorr}`}>
      <span className={`absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-${color} z-0`}></span>
      <span className="absolute inset-0 border border-black bg-white z-10"></span>
      <span className="relative z-20 font-caprasimo font-semibold text-[24px]">{name}</span>
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  colorr: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Button;
