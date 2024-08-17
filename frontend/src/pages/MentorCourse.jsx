import React from 'react';
import Profile from '../assets/profile.png';
import Rating from '../components/Rating';
import Button from '../components/Button';
import course1 from '../assets/course1.png';
import course2 from '../assets/course2.png';

const MentorCourse = () => {
    const cards = [
        {
            id: 1,
            title: 'Introduction to Web Development 101',
            subtitle: 'Jane Doe',
            description: 'Start your journey with web development 101 and dive into its fundamentals, rules, and more with Jane Doe.',
            image: course1,
            rate: 3.5
        },
        {
            id: 2,
            title: 'Leadership, Team and project management',
            subtitle: 'Jhon Blake Doe',
            description: 'Start your journey with web development 101 and dive into its fundamentals, rules, and more with Jane Doe.',
            image: course2,
            rate: 4.5
        },
        {
            id: 3,
            title: 'Introduction to Web Development 101',
            subtitle: 'Jane Doe',
            description: 'Start your journey with web development 101 and dive into its fundamentals, rules, and more with Jane Doe.',
            image: course1,
            rate: 3.5
        },
        {
            id: 4,
            title: 'Leadership, Team and project management',
            subtitle: 'Jhon Blake Doe',
            description: 'Start your journey with web development 101 and dive into its fundamentals, rules, and more with Jane Doe.',
            image: course2,
            rate: 4.5
        },
    ];

    return (
        <div className='w-full flex mb-64'>
            <div className='w-1/3'>
                <div className="relative w-64 h-64 mt-14 items-center mx-auto">
                    <span className="absolute inset-0 w-full h-full border border-black rounded-full transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
                    <span className="absolute inset-0 w-full h-full border border-black rounded-full bg-white z-10"></span>
                    <img src={Profile} className="relative z-20 h-full w-full object-cover rounded-full" />
                </div>
                <p className='font-semibold font-montserrat text-4xl text-center mt-6'>Moatez Saii</p>
                <p className='font-semibold font-montserrat text-3xl text-center mt-4 text-[#2C3439]'>UI Design</p>
                <div className='flex justify-center mt-4'>
                    <Rating rate={4.7} />
                </div>

                <div className='flex justify-center mt-8'>
                    <button className="relative w-60 h-14 py-1 px-4 border bg-white">
                        <span className="absolute inset-0 border-[0.5px] border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
                        <span className="absolute inset-0 border-[0.5px] border-black bg-white z-10 flex items-center justify-center"></span>
                        <span className="relative z-20 font-caprasimo text-lg text-blackish">In-Person Course</span>
                    </button>
                </div>
            </div>
            <div className='w-2/3 mt-14'>
                <p className='font-caprasimo text-[#2C3439] mb-6 text-4xl'>Courses</p>

                <div className="grid grid-cols-2 gap-4">
    {cards.map((card) => (
        <div key={card.id} className="bg-white p-4 w-[370px] h-[440px] flex flex-col justify-between">
            <img src={card.image} alt={card.title} className="h-40 w-full object-cover mb-4" />
            <div className="flex flex-col flex-grow">
                <div className="flex-grow">
                    <h2 className="font-semibold text-xl">{card.title}</h2>
                    <h3 className="text-md text-gray-500">{card.subtitle}</h3>
                    <p className="text-gray-600 mt-2">{card.description}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <Button name={"Enroll"} color={"purp"} width={"36"} />
                    <div className="flex flex-col  ml-4 items-end">
                        <span className="text-[#2C3439] text-2xl font-caprasimo text-right">80.000 DT</span>
                        <Rating rate={card.rate} />
                    </div>
                </div>
            </div>
        </div>
    ))}
</div>

            </div>
        </div>
    );
};

export default MentorCourse;
