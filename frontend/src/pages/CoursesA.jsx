import { useState } from "react";
import Button from "../components/Button";
import Summary from "../components/Summary";
import Rating from "../components/Rating";
import Card from "../components/Card";
import About from "../components/About";

const CoursesA = () => {
  const [isWatch, setIsWatch] = useState(false);
  const [url , setUrl] = useState('');

  const watch = () => {
    setIsWatch(true);
    setUrl('?autoplay=1');
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-8"> {/* Added mb-8 for some spacing between sections */}
        <div className={`w-[70%]  h-[445px] ${!isWatch && "bg-blur"}`}>
          <div className="w-[100%] relative z-[-1] video-container">
           
            <iframe
              src={`https://www.youtube.com/embed/uuT54JIpJzc${url}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="video"
              className="w-[100%] h-[445px]"
            />
          </div>
          <div
            className={`absolute top-20 pt-20 pl-10 w-[65%] ${isWatch && "hidden"}`}
          >
            <h2 className="font-montserrat text-[40px] font-bold text-white w-[600px]">
              {Card.title}
            </h2>
            <div className="flex items-center justify-between w-32">
              <p className="text-white text-[20px] max-md:text-[20px] font-montserrat font-semibold mr-2">
                5
              </p>
              <Rating rate={5} />
            </div>
            <p className="font-montserrat text-[20px] font-medium text-white w-[500px] my-4">
              {Card.description}
            </p>
            <p className="font-custom text-[24px] font-medium text-white">
              80.000 DT
            </p>

            <div className="flex items-center justify-between mt-6">
              <Button name={"Enroll Now"} color={"purp"} colorr={"purpp"}/>
              <div className="flex items-center w-[200px] gap-2">
                <img src="add-circle.svg" alt=""></img>
                <p className="text-white font-montserrat text-[18px] font-medium">
                  Add to wishlist
                </p>
              </div>
              <p
                className="text-white font-montserrat text-[18px] font-bold cursor-pointer"
                onClick={watch}
              >
                Watch introduction
              </p>
            </div>
          </div>
        </div>
        <Summary />
      </div>
      <About /> {/* Added About component here */}
    </div>
  );
};

export default CoursesA;
