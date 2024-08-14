import  { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import mentor1 from '../assets/Mentor.png'; 
import Rating from './Rating';

const OurMentors = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const [setIsMouseOver] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    nextArrow: null,
    prevArrow: null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          centerPadding: '20px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          centerPadding: '10px',
          dots: true // Afficher les points de pagination pour les très petits écrans
        }
      }
    ]
  };

  const mentors = [
    {
      id: 1,
      name: 'Jane Doe',
      title: 'Senior Web Developer',
      image: mentor1,
      rate: 5
    },
    {
      id: 2,
      name: 'John Blake Doe',
      title: 'Project Manager',
      image: mentor1,
      rate: 4
    },
    {
      id: 3,
      name: 'Magnus Glare',
      title: 'Historian',
      image: mentor1,
      rate: 3
    },
    {
      id: 4,
      name: 'Chris Evans',
      title: 'React Specialist',
      image: mentor1,
      rate: 2
    },
    {
      id: 5,
      name: 'Emma Watson',
      title: 'UI/UX Designer',
      image: mentor1,
      rate: 5
    },
    {
      id: 6,
      name: 'Emma Watson',
      title: 'UI/UX Designer',
      image: mentor1,
      rate: 5
    },
    {
      id: 7,
      name: 'Emma Watson',
      title: 'UI/UX Designer',
      image: mentor1,
      rate: 5
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current || !sliderRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const offset = e.clientX - rect.left;

      if (offset > rect.width * 0.8) {
        sliderRef.current.slickNext();
      } else if (offset < rect.width * 0.2) {
        sliderRef.current.slickPrev();
      }
    };

    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className=" mx-auto px-4 py-8 relative" ref={containerRef} onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
      <div className="font-caprasimo text-5xl pl-16 leading-10 font-normal mb-8 ">
        Our Mentors
      </div>
      <Slider ref={sliderRef} {...settings}>
        {mentors.map((mentor) => (
          <div key={mentor.id} className="px-2">
            <div className="bg-white p-4 w-full max-w-[370px] h-[420px] flex flex-col justify-between items-center mx-auto">
              <div className="relative w-24 h-24 mb-4 mt-8">
                <span className="absolute inset-0 w-full h-full border border-black rounded-full transform -translate-x-1 translate-y-1 bg-[#a19ef7] z-0"></span>
                <span className="absolute inset-0 w-full h-full border border-black rounded-full bg-white z-10"></span>
                <img src={mentor.image} alt={mentor.name} className="relative z-20 h-full w-full object-cover rounded-full" />
              </div>
              <div className="flex flex-col flex-grow items-center text-center">
                <h2 className="font-semibold text-lg sm:text-xl">{mentor.name}</h2>
                <h3 className="text-sm sm:text-md text-gray-500">{mentor.title}</h3>
                <div className="flex items-center ml-4 mt-2">
                  <Rating rate={mentor.rate} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className='flex justify-center -mt-20'>
        <button className="relative w-full max-w-xs h-16 py-1 px-3 border border-black text-black font-semibold bg-white cursor-pointer shadow-purple-400 hover:transform hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-purple-500">
          <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
          <span className="absolute inset-0 border border-black bg-white z-10"></span>
          <span className="relative z-20 font-caprasimo text-lg font-normal text-black">In-Person Course</span>
        </button>
      </div>
    </div>
  );
};

export default OurMentors;
