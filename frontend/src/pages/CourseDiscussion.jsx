import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Button from "../components/Button";
import Summary from "../components/summary";
import Rating from "../components/Rating";
import courseImage from '../assets/Rectangle 977.png'; 
import Discussion from '../components/Discussion';
import About from '../components/About';
import add from '../assets/add-circle.png';

const CourseDiscussion = () => {
  const [activeTab, setActiveTab] = useState('about'); 
  const navigate = useNavigate(); 

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleClick = () => {
    navigate('/payment'); // Redirect to the checkout page
  };

  return (
    <div className="flex justify-between">
      <div className="w-[70%]">
        <div className='h-[569px] bg-blur'>
          <div className="relative w-full h-[569px]">
            <img
              src={courseImage}
              alt="Course"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-20 pt-20 pl-10 w-[65%] h-28">
            <h2 className="font-montserrat text-[48px] font-bold text-white w-[580px]">
              Introduction to web development 101
            </h2>

            <div className="flex items-center w-72 mb-4">
              <Rating rate={4.5} textColor="text-white" />
            </div>

            <p className="font-montserrat text-[20px] text-white w-[500px] my-4">
              Start your journey with web development 101 and dive into its fundamentals, rules, and more with Jane Doe.
            </p>
            <p className="font-caprasimo text-[24px] text-white">80.000 DT</p>

            <div className="flex items-center mt-6">
              <button 
                onClick={handleClick} 
                className="relative w-52 h-12 py-1 px-5 border border-blackish border-0.5 bg-white cursor-pointer shadow-purple-400 hover:transform hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-purple-500"
              >
                <span className="absolute inset-0 border border-blackish transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
                <span className="absolute inset-0 border border-blackish bg-white z-10"></span>
                <span className="relative z-20 text-lg font-caprasimo text-black">Enroll Now</span>
              </button>
              <div className="flex items-center w-[200px] gap-2 ml-7">
                <img src={add} alt="add" />
                <p className="text-white font-montserrat text-[18px] font-medium">Add to wishlist</p>
              </div>
              <div className='ml-auto'>
                <p className='font-montserrat font-bold text-white text-xl'>Watch introduction</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-28 flex items-center">
          <ul className="font-caprasimo flex space-x-20 ml-16">
            <li
              className={`text-[23px] cursor-pointer ${activeTab === 'about' ? 'text-darkBlue font-bold' : 'text-gray-500'}`}
              onClick={() => handleTabClick('about')}
            >
              About
            </li>
            <li
              className={`text-[23px] cursor-pointer ${activeTab === 'discussion' ? 'text-darkBlue font-bold' : 'text-gray-500'}`}
              onClick={() => handleTabClick('discussion')}
            >
              Discussion
            </li>
          </ul>
        </div>

        {/* Conditionally render components based on activeTab */}
        {activeTab === 'about' && <About />}
        {activeTab === 'discussion' && <Discussion />}
      </div>
      <Summary />
    </div>
  );
};

export default CourseDiscussion;
