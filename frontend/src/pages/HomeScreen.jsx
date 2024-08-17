import React from 'react';
import Profile from '../assets/profile.png';
import Rating from '../components/Rating';
import Button from '../components/Button';
import mentor1 from '../assets/Mentor.png';
import Partners from '../components/Partners'
import Topfooter from '../components/TopFooter'

const HomeScreen = () => {
    const mentors = [
        {
            id: 1,
            name: 'Jane Doe',
            title: 'Web Developer',
            image: mentor1,
            rate: 5
        },
        {
            id: 2,
            name: 'John Blake Doe',
            title: 'Project Manager',
            image: mentor1,
            rate: 4.5
        },
        {
            id: 3,
            name: 'Magnus Glare',
            title: 'Historian',
            image: mentor1,
            rate: 3.5
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
            id: 3,
            name: 'Magnus Glare',
            title: 'Historian',
            image: mentor1,
            rate: 3.5
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
        }
    ];

    return (
        <div className="w-full ">
            <p className="text-4xl font-caprasimo text-blackish mb-4 ml-14 mt-14">Our mentors</p>
            <p className="text-xl text-[#2C3439] font-medium font-montserrat mt-6 mx-14">
                With Bright, you can now schedule an in-person course with our trusted mentors and 
                meet them whether in your school, seminars, or any event of your agreement.
            </p>
            <button className="relative w-60 h-14 py-1 px-4 border bg-white mt-6 ml-14">
                <span className="absolute inset-0 border-[0.5px] border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
                <span className="absolute inset-0 border-[0.5px] border-black bg-white z-10 flex items-center justify-center"></span>
                <span className="relative z-20 font-caprasimo text-lg text-blackish">In-Person Course</span>
            </button>
        
            <p className="text-xl font-medium font-montserrat text-[#2C3439] mt-10 ml-14">Get to Know Our Mentors</p>

            <div className="grid grid-cols-5 gap-2">
    {mentors.map((mentor) => (
        <div key={mentor.id} className="bg-white h-[420px] flex flex-col justify-between items-center mx-auto w-44 ">
            <div className="relative w-32 h-32 mb-2 mt-8">
                <span className="absolute inset-0 w-full h-full border border-black rounded-full transform -translate-x-1 translate-y-1 bg-[#a19ef7] z-0"></span>
                <span className="absolute inset-0 w-full h-full border border-black rounded-full bg-white z-10"></span>
                <img src={mentor.image} alt={mentor.name} className="relative z-20 h-full w-full object-cover rounded-full" />
            </div>
            <div className="flex flex-col flex-grow items-center ">
                <h2 className="font-semibold text-xl font-montserrat">{mentor.name}</h2>
                <h3 className="font-semibold text-lg text-[#2C3439]">{mentor.title}</h3>
                <div className="flex items-center mt-2">
                    <Rating rate={mentor.rate} />
                </div>
            </div>
        </div>
    ))}
    
</div>
<div className='mt-64'>
    <Partners/>
    <Topfooter/>
    </div>
        </div>
    );
};

export default HomeScreen;
