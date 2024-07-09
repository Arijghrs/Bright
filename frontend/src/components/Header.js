import React from 'react';
import Popup from './Popup';

export default function Header() {
    return (
        <nav className="bg-[#F5F4FF] w-full">
            <div className="container mx-auto px-12 py-3 flex justify-between items-center">
                <div className="font-caprasimo text-5xl leading-[55.05px] font-normal">
                    Bright
                </div>
                <ul className="font-caprasimo flex space-x-11 mt-3">
                    <li className="text-darkBlue text-[26px]">Home</li>
                    <li className="text-darkBlue text-[26px]">Courses</li>
                    <li className="text-darkBlue text-[26px]">Mentors</li>
                    <li className="px-2 -mt-2 text-darkBlue text-[26px] rounded-none relative">
                        <Popup/>
                    </li>
                </ul>  
            </div>
        </nav>
    );
}
