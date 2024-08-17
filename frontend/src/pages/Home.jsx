import CursorImage from '../assets/Cursor.png';
import girl from '../assets/girl.gif';
import newImage from '../assets/Group.svg';
import rectangle from '../assets/Rectangle 10.png';
import OurMentors from '../components/Ourmentors';
import Partners from '../components/Partners';
import PopularCourses from '../components/Popularcourses';
import TopCathegories from '../components/TopCathegories';
import TopFooter from '../components/TopFooter';
import App from '../components/Auth';


export default function Home() {

  const buttonText = "Sign Up Now";
  const buttonAction = "signUp";
  const buttonSize = "50";

  return (
    <div>
      <div
        className="absolute top-50 left-0 w-60 h-64 bg-cover bg-no-repeat mt-8"
        style={{ backgroundImage: `url(${newImage})` }}
      ></div>
      <div className="bg-[#F5F4FF] flex flex-col md:flex-row mx-auto px-6 lg:px-12 space-x-0 md:space-x-6 min-h-screen w-full">
      <div className="md:w-1/2 flex flex-col space-y-5 justify-center py-14 my-9 relative pl-6">
          <div>
            {['Bright Future', 'starts with', 'the right', 'education'].map((text, index) => (
              <h1 key={index} className="font-caprasimo text-4xl md:text-6xl mb-4 text-black">
                {text}
              </h1>
            ))}
          </div>
          <div>
            <p className="font-montserrat text-lg md:text-xl mb-6">
              Online courses never easier to access with Bright,<br />
              meeting the best pricing, best mentors and best<br />
              planning to achieve your goals in the deadlines<br />
              following your own schedule and time preferences!
            </p>
          </div>
          <div className="hidden md:flex flex-col -ml-16 items-start space-y-4">
            <App buttonText={buttonText} buttonAction={buttonAction} buttonSize={buttonSize} />
            <div className="flex flex-col items-start mt-2">
              <img src={CursorImage} alt="cursor" className="w-10 md:w-13 ml-10 md:ml-60" />
              <button className="bg-[#A19EF7] text-white font-montserrat px-4 py-1 rounded-none  md:mt-[-5px]  md:ml-[269px]">
                Click!
              </button>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-[630px] flex flex-col items-center justify-center mb-[-20px] md:mb-[-40px] h-[300px] md:h-[408px] mt-12 md:mt-44 relative z-10">
          <div className="relative">
            <img src={rectangle} alt="Background" className="absolute top-0 left-0 z-0 w-[187px] md:w-[350px] h-[300px] md:h-[450px] ml-20 md:ml-36 -m-16   md:mt-[-101px] mt-[-200px]" style={{ zIndex: -1 }} />
            <img src={girl} alt="Illustration" className="max-w-[300px] md:max-w-[540px] h-auto relative  mt-[-120px] md:mt-[-40px]"  />
          </div>
          <div className="mt-4 mr-14 md:hidden">
            <App buttonText={buttonText} buttonAction={buttonAction} buttonSize={buttonSize} />
          </div>
        </div>
      </div>
      <div className="mt-8"></div>
      <PopularCourses />
      <OurMentors />
      <TopCathegories />
      <Partners />
      <TopFooter />
    </div>
    
  );
}