import PropTypes from 'prop-types';

const Card = (props) => {
  const { title, description, marginLeft } = props;
  return (
    <div className={`w-[240px] h-[150px] border border-solid border-blackish bg-purp relative ml-${marginLeft}`}>
      <div className="w-[240px] h-[150px] border border-solid border-blackish bg-white absolute bottom-1 left-1.5 p-2 grid items-stretch">
        <h3 className="text-blackish text-[18px] font-montserrat font-semibold text-center flex items-center justify-center">
          {title}
        </h3>
        <p className="text-blackish text-[11px] font-montserrat text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  marginLeft: PropTypes.string,
};

export default Card;
