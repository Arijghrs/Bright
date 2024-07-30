
import  { useState } from 'react';
import course1 from '../assets/course1.png';
import course2 from '../assets/course2.png';
import course3 from '../assets/course3.png';
import Rating from './Rating';
import Pagination from './Pagination'; 
import Button from './Button';

const cards = [
  {
    id: 1,
    title: 'Introduction to Web Development 101',
    subtitle: 'Jane Doe',
    description: 'Start your journey with web development 101 and dive into its fundamentals, rules, and more with Jane Doe.',
    image: course1,
    rate: 0,
    price: 80.000,
  },
  {
    id: 2,
    title: 'Leadership, Team and Project Management',
    subtitle: 'John Blake Doe',
    description: 'Learn about leadership, team dynamics, and project management essentials with John Blake Doe.',
    image: course2,
    rate: 4.5,
    price: 80.0000,
  },
  {
    id: 3,
    title: 'Norse History: A Brief about the Lost Ages',
    subtitle: 'Magnus Glare',
    description: 'Explore the mysteries of Norse history and delve into the lost ages with Magnus Glare.',
    image: course3,
    rate: 2.5,
    price: 80.0000,
  },
  {
    id: 4,
    title: 'Norse History: A Brief about the Lost Ages',
    subtitle: 'Chris Evans',
    description: 'Master advanced React techniques and patterns with Chris Evans.',
    image: course3,
    rate: 5,
    price: 80.0000,
  },
  {
    id: 5,
    title: 'Leadership, Team and Project Management',
    subtitle: 'Chris Evans',
    description: 'Master advanced React techniques and patterns with Chris Evans.',
    image: course2,
    rate: 3.4,
    price: 80.0000,
  },
  {
    id: 6,
    title: 'Norse History: A Brief about the Lost Ages',
    subtitle: 'Chris Evans',
    description: 'Master advanced React techniques and patterns with Chris Evans.',
    image: course3,
    rate: 4.5,
    price: 80.0000,
  },
  {id: 7,
    title: 'Advanced React Techniques',
    subtitle: 'Chris Evans',
    description: 'Master advanced React techniques and patterns with Chris Evans.',
    image: course1,
    rate: 3.5,
    price: 80.0000,
  },
  {id: 8,
    title: 'Norse History: A Brief about the Lost Ages',
    subtitle: 'Chris Evans',
    description: 'Master advanced React techniques and patterns with Chris Evans.',
    image: course3,
    rate: 2,
    price: 80.0000,
  },
 { id: 9,
    title: 'Leadership, Team and Project Management',
    subtitle: 'Chris Evans',
    description: 'Master advanced React techniques and patterns with Chris Evans.',
    image: course2,
    rate: 1.5,
    price: 80.0000,
  },
  { id: 10,
      title: 'Norse History: A Brief about the Lost Ages',
      subtitle: 'Chris Evans',
      description: 'Master advanced React techniques and patterns with Chris Evans.',
      image: course3,
      rate: 5,
      price: 80.0000,
    },
    { id: 11,
      title: 'Advanced React Techniques',
      subtitle: 'Chris Evans',
      description: 'Master advanced React techniques and patterns with Chris Evans.',
      image: course1,
      rate: 3,
      price: 80.0000,
    },
    { id: 12,
      title: 'Advanced React Techniques',
      subtitle: 'Chris Evans',
      description: 'Master advanced React techniques and patterns with Chris Evans.',
      image: course2,
      rate: 1.5,
      price: 80.0000,
    },
    { id: 13,
      title: 'Norse History: A Brief about the Lost Ages',
      subtitle: 'Chris Evans',
      description: 'Master advanced React techniques and patterns with Chris Evans.',
      image: course3,
      rate: 4.3,
      price: 80.0000,
    },
    { id: 14,
      title: 'Leadership, Team and Project Management',
      subtitle: 'Chris Evans',
      description: 'Master advanced React techniques and patterns with Chris Evans.',
      image: course2,
      rate: 3.5,
      price: 80.0000,
    },
    { id: 15,
      title: 'Advanced React Techniques',
      subtitle: 'Chris Evans',
      description: 'Master advanced React techniques and patterns with Chris Evans.',
      image: course1,
      rate: 5,
      price: 80.0000,
    },
    { id: 16,
      title: 'Norse History: A Brief about the Lost Ages',
      subtitle: 'Chris Evans',
      description: 'Master advanced React techniques and patterns with Chris Evans.',
      image: course3,
      rate: 4,
      price: 80.0000,
    },
    { id: 17,
      title: 'Advanced React Techniques',
      subtitle: 'Chris Evans',
      description: 'Master advanced React techniques and patterns with Chris Evans.',
      image: course3,
      rate: 4.2,
      price: 80.0000,
    },
    { id: 18,
      title: 'Leadership, Team and Project Management',
      subtitle: 'Chris Evans',
      description: 'Master advanced React techniques and patterns with Chris Evans.',
      image: course1,
      rate: 3.3,
      price: 80.0000,
    },
    { id: 19,
      title: 'Advanced React Techniques',
      subtitle: 'Chris Evans',
      description: 'Master advanced React techniques and patterns with Chris Evans.',
      image: course2,
      rate: 5,
      price: 80.0000,
    },
    { id: 20,
      title: 'Advanced React Techniques',
      subtitle: 'Chris Evans',
      description: 'Master advanced React techniques and patterns with Chris Evans.',
      image: course2,
      rate: 2,
      price: 80.0000,
    },
    { id: 21,
      title: 'Advanced React Techniques',
      subtitle: 'Chris Evans',
      description: 'Master advanced React techniques and patterns with Chris Evans.',
      image: course3,
      rate: 1.5,
      price: 80.0000,
    },
    { id: 22,
      title: 'Advanced React Techniques',
      subtitle: 'Chris Evans',
      description: 'Master advanced React techniques and patterns with Chris Evans.',
      image: course2,
      rate: 3.5,
      price: 80.0000,
    },
    { id: 23,
      title: 'Advanced React Techniques',
      subtitle: 'Chris Evans',
      description: 'Master advanced React techniques and patterns with Chris Evans.',
      image: course1,
      rate: 5,
      price: 80.0000,
    },
    { id: 24,
      title: 'Advanced React Techniques',
      subtitle: 'Chris Evans',
      description: 'Master advanced React techniques and patterns with Chris Evans.',
      image: course3,
      rate: 5,
      price: 80.0000,
    },
    { id: 25,
      title: 'Advanced React Techniques',
      subtitle: 'Chris Evans',
      description: 'Master advanced React techniques and patterns with Chris Evans.',
      image: course2,
      rate: 4.3,
      price: 80.0000,
    },{ id: 26,
      title: 'Advanced React Techniques',
      subtitle: 'Chris Evans',
      description: 'Master advanced React techniques and patterns with Chris Evans.',
      image: course1,
      rate: 5,
      price: 80,
    },
];
const ITEMS_PER_PAGE = 6;

const ExploreCourses = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentCards = cards.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="course" id="courses">
      <div className="container mx-auto px-4 py-6 relative mt-2">
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCards.map((card) => (
            <div key={card.id} className="bg-white p-4 w-full h-[420px] flex flex-col justify-between shadow-lg rounded-lg">
              <img src={card.image} alt={card.title} className="h-40 w-full object-cover mb-4 rounded" />
              <div className="flex flex-col flex-grow">
                <div className="flex-grow">
                  <h2 className="font-semibold text-lg sm:text-xl">{card.title}</h2>
                  <h3 className="text-sm sm:text-md text-gray-500">{card.subtitle}</h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">{card.description}</p>
                </div>
                <div className="mt-4 flex   justify-between items-center">
                <Button  name={"Enroll"} color={"purp"} />
                  <div className="fflex flex-col items-start sm:ml-4">
                    <p className="text-darkBlue text-lg sm:text-[22px] font-caprasimo font-normal mt-1 ml-7">
                      {card.price} 000 DT
                    </p>
                    <Rating rate={card.rate} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
     
    </section>
  );
};

export default ExploreCourses;
