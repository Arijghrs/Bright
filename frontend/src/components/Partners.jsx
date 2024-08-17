import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import microsoft from '../assets/microsoft.png';
import coursera from '../assets/coursera.png';

const Partners = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const [setIsMouseOver] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const partners = [
    { id: 1, image: microsoft, name: "Microsoft Learn" },
    { id: 2, image: coursera, name: "Coursera" },
    { id: 3, image: microsoft, name: "Microsoft Learn" },
    { id: 4, image: coursera, name: "Coursera" },
    { id: 5, image: microsoft, name: "Microsoft Learn" },
    { id: 6, image: coursera, name: "Coursera" },
    { id: 7, image: microsoft, name: "Microsoft Learn" },
    { id: 8, image: coursera, name: "Coursera" },
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
    <section
      className="lg:pl-20 max-lg:p-4"
      ref={containerRef}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <h1 className="text-black lg:text-5xl max-lg:text-lg font-montserrat font-medium lg:text-start max-lg:text-center mt-22 lg:mr-12">
        <span className="font-caprasimo">Our Partners</span>
      </h1>
      <p className="text-black lg:text-[20px] max-lg:text-[14px] font-montserrat font-medium lg:text-start max-lg:text-center mt-[22px] lg:mr-12">
        <span className="font-caprasimo">Bright</span> has established partnerships with leading companies and
        organizations in various industries. These partnerships offer <br />
        exclusive job placement opportunities to users who successfully complete relevant
        courses and certifications. By leveraging <br />
        these connections, <span className="font-caprasimo">Bright</span> aims
        to bridge the gap between education and employment, providing a direct
        pathway to job <br />
        opportunities for its users.
      </p>
      <br />
      <Slider ref={sliderRef} {...settings} className="mb-16">
        {partners.map((partner) => (
          <div key={partner.id} className="px-2">
            <PartnerCard image={partner.image} name={partner.name} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

const PartnerCard = ({ image, name }) => (
  <div className="flex flex-col items-center text-center ">
    <img src={image} alt={name} className="w-24 h-24 mb-4 " />
    <h4 className="text-lg font-robotoserif font-semibold">{name}</h4>
  </div>
);

PartnerCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Partners;