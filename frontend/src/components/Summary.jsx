import play from "../assets/play-circle.png"
import game from "../assets/game.png"
import hat from "../assets/graduationHat.svg"
import lock from "../assets/lock.png"

const Summary = () => {
  return (
    <div className="w-[450px]  pr-4">
      <h4 className="text-blak  text-[20px]  mb-10 mt-5 ml-8 ">
        Course Summary
      </h4>
      <div className="flex  items-center  gap-7 my-2 ml-[30px]">
        <img className="w-10" src={play} alt="play"></img>
        <p className="text-blak text-[17px] ">
          01. Introduction
        </p>
        <span className="text-darkBlue opacity-50 text-[18px] font-montserrat font-semibold tracking-[.36px]  ml-auto">
          2 min
        </span>
      </div>
      <div className="flex items-center  gap-7 my-2 ml-[30px]">
      <img  className="w-10"  src={play} alt="play"></img>
      <p className="text-blak text-[17px] ">
      02. Chapter 1: Lorem ipsum
        </p>
        <span className="text-darkBlue opacity-50 text-[18px] font-montserrat font-semibold tracking-[.36px] ml-auto">
          5 min
        </span>
      </div>
      <div className="flex items-center  gap-7 my-2 ml-[30px]">
      <img className="w-10"  src={play} alt="play"></img>
      <p className="text-blak text-[17px] ">
      03. Lorem ipsum
        </p>
        <span className="text-darkBlue opacity-50 text-[18px] font-montserrat font-semibold tracking-[.36px] ml-auto">
          3 min
        </span>
      </div>

      <div className="flex items-center  gap-7 my-2 ml-[30px]">
        <img className="w-10"  src={game} alt="game"></img>
        <p className="text-blak text-[17px] ">
          04. Evaluation Quizz
        </p>
        <span className="text-darkBlue opacity-50 text-[18px] font-montserrat font-semibold tracking-[.36px] ml-auto">
          5 min
        </span>
      </div>
      <div className="flex  items-center  gap-7 my-2 ml-[30px]">
      <img className="w-10"  src={play} alt="play"></img>
      <p className="text-lightGray text-[17px] ">
          05. Chapter 2: Lorem ipsum
        </p>
        <img src={lock} className="ml-auto"></img>
      </div>
      <div className="flex items-center  gap-7 my-2 ml-[30px]">
      <img className="w-10"  src={play} alt="play"></img>
        <p className="text-lightGray text-[17px] ">
          06. Lorem ipsum
        </p>
        <img src={lock} className="ml-auto"></img>
      </div>

      <div className="flex items-center  gap-7 my-2 ml-[30px]">
        <img className="w-10"  src={hat} alt="hat" ></img>
        <p className="text-lightGray text-[17px] ">
        Certification
        </p>
        <img src={lock} className="ml-auto"></img>
        </div>
    </div>
  );
};

export default Summary;
