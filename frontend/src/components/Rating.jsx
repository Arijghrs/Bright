import PropTypes from 'prop-types';
import star from "../assets/star.png"; // Assurez-vous que star.png est correctement importé
import star1 from "../assets/star1.svg"; // Assurez-vous que star1.svg est correctement importé
import emptyStarSVG from "../assets/emptystar.svg";

const Rating = (props) => {
  return (
    <div className="flex mt-[4px] space-x-1 items-center">
      <p className="text-darkblue text-[20px] max-md:text-[12px] font-montserrat font-semibold mr-2">{props.rate}</p> 
       
      {/* Boucle sur les étoiles */}
      {[1, 2, 3, 4, 5].map((value) => (
        <div key={value} className="relative">
          {/* Condition pour afficher l'étoile pleine, vide ou demi-étoile */}
          {value <= Math.floor(props.rate) ? (
            <img className="h-4 w-4 max-md:w-2.5 max-md:h-2.5 text-yellow-500" src={star} alt="star" />
          )
           : value === Math.ceil(props.rate) && props.rate % 1 !== 0 ? (
            <img className="h-4 w-4 max-md:w-2.5 max-md:h-2.5 text-yellow-500" src={star1} alt="empty-star" />
          )
           : (
            <img className="h-4 w-4 max-md:w-2.5 max-md:h-2.5 text-yellow-500" src={emptyStarSVG} alt="star1" />
          )}
        </div>
      ))}
      <p className="text-grey text-[12px] max-md:text-[12px] font-montserrat ml-2">(211)</p> 
    </div>
  );
};

Rating.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default Rating;
