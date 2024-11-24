import user from '../assets/user.png';
import pen from '../assets/edit-2.png';
import jane from '../assets/Ellipse 304.svg';
import mentor from '../assets/Mentor.png';

const Discussion = () => {
    return (
        <div className="p-5 mt-5">
            <div className="mb-5 p-4">
                <p className="text-3xl font-montserrat font-bold mb-10">Comments</p>
                <div className="flex items-start ml-3">
                <div className="flex flex-col items-center mr-4 w-10 h-10">
                    <div className="relative w-14 h-14">
                    <span className="absolute inset-0 w-full h-full border border-black rounded-full transform -translate-x-[2px] translate-y-[2px] bg-[#FDEE6D] z-0"></span>
                    <span className="absolute inset-0 w-full h-full border border-black rounded-full bg-white z-10"></span>
                    <img src={jane} className="relative z-20 h-full w-full object-cover rounded-full" />
                    </div>
                    <p className="text-center text-lg font-caprasimo mt-1">Jane</p>
                </div>
                <div className="flex flex-col ml-4">
                    <p className="text-black mb-2 text-[16px] font-montserrat">
                    I'm currently taking an online web development course, but I'm struggling with understanding JavaScript. Any tips on how to grasp the concepts better?
                    </p>
                    <button className="flex items-center text-[#2C3439] hover:underline self-start">
                    <img src={pen} alt="Edit" className="mr-2 w-4 h-4 font-montserrat" />
                    Reply
                    </button>
                </div>
                </div>

                <div className="flex items-start ml-24 mt-7">
                <div className="flex flex-col items-center mr-4 w-10 h-10">
                    <div className="relative w-14 h-14">
                    <span className="absolute inset-0 w-full h-full border border-black rounded-full transform -translate-x-[2px] translate-y-[2px] bg-[#FDEE6D] z-0"></span>
                    <span className="absolute inset-0 w-full h-full border border-black rounded-full bg-white z-10"></span>
                    <img src={user} className="relative z-20 h-full w-full object-cover rounded-full" />
                    </div>
                    <p className="text-center text-lg font-caprasimo mt-1">Thomas</p>
                </div>
                <div className="flex flex-col ml-4">
                    <p className="text-black mb-2 text-[16px] font-montserrat">
                    Hi there! JavaScript can be challenging at first, but don't worry, you'll get the hang of it. One tip is to break down complex concepts into smaller parts and practice them individually. Additionally, try working on mini-projects to apply what you've learned. Don't hesitate to ask specific questions or seek additional resources when needed. Keep pushing forward, and you'll see progress!</p>
                </div>
                </div>

                <div className="flex items-start ml-24 my-7">
                <div className="flex flex-col items-center mr-4 w-10 h-10">
                    <div className="relative w-14 h-14">
                    <span className="absolute inset-0 w-full h-full border border-black rounded-full transform -translate-x-[2px] translate-y-[2px] bg-[#FDEE6D] z-0"></span>
                    <span className="absolute inset-0 w-full h-full border border-black rounded-full bg-white z-10"></span>
                    <img src={jane} className="relative z-20 h-full w-full object-cover rounded-full" />
                    </div>
                    <p className="text-center text-lg font-caprasimo mt-1">Jane</p>
                </div>
                <div className="flex flex-col ml-4">
                    <p className="text-black mb-2 text-[16px] font-montserrat">
                    Thank you so much!
                    </p>
                </div>
                </div>

                <div className="flex items-start ml-3 mt-14">
                <div className="flex flex-col items-center mr-4 w-10 h-10">
                    <div className="relative w-14 h-14">
                    <span className="absolute inset-0 w-full h-full border border-black rounded-full transform -translate-x-[2px] translate-y-[2px] bg-[#FDEE6D] z-0"></span>
                    <span className="absolute inset-0 w-full h-full border border-black rounded-full bg-white z-10"></span>
                    <img src={mentor} className="relative z-20 h-full w-full object-cover rounded-full" />
                    </div>
                    <p className="text-center text-lg font-caprasimo mt-1">Mentor</p>
                </div>
                <div className="flex flex-col ml-4 ">
                    <p className="text-black mb-2 text-[16px] font-montserrat mt-3">
                    Hello, I can’t download the course resources! any idea what to do?                
                    </p>
                    <button className="flex items-center text-[#2C3439] hover:underline self-start">
                    <img src={pen} alt="Edit" className="mr-2 w-4 h-4 font-montserrat" />
                    Reply
                    </button>
                </div>
                </div>

                <div className="relative mt-14 w-[839px] h-24">
                <input
                    className="border border-1 pl-24 pr-3 py-3 border-gray-400 font-montserrat text-lg shadow-shdInsetPurp h-20 w-full font-monteserrat outline-none"
                    type="text"
                    placeholder="write a comment..."
                />
                <div className="absolute top-[14px] left-4 w-12 h-12">
                    <span className="absolute inset-0 w-full h-full border border-black rounded-full transform -translate-x-[2px] translate-y-[2px] bg-[#FDEE6D] z-0"></span>
                    <span className="absolute inset-0 w-full h-full border border-black rounded-full bg-white z-10"></span>
                    <img src={mentor} className="relative z-20 h-full w-full object-cover rounded-full" />
                </div>
                </div>

            </div>
            </div>


);
};

export default Discussion;