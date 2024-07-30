import PropTypes from "prop-types";
import graduation from "../assets/graduationHat.svg";
import playButton from "../assets/playButton.svg";
import radio from "../assets/radio.svg";

const AddCourseList = ({ category, title }) => {
  let src = "";
  let displayTitle = title;

  if (category === "certificate") {
    src = graduation;
    displayTitle = "certificate";
  } else if (category === "video") {
    src = playButton;
  } else if (category === "quiz") {
    src = radio;
    displayTitle = "quiz";
  }

  return (
    <div className="flex items-center">
      <div className="mr-7">
        <img src={src} alt={category} className="" />
      </div>
      <div className="mr-7 w-60 flex text-black text-lg font-normal font-montserrat">
        <div>01.</div>
        <div className="text-black text-lg font-normal font-montserrat ml-2">
          {displayTitle}
        </div>
      </div>
      <div className="mr-4">2min</div>
    </div>
  );
};

AddCourseList.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AddCourseList;
