import CursorImage from '../assets/Cursor.png';
import girl from '../assets/girl.gif';
import newImage from '../assets/Group.svg';
import rectangle from '../assets/Rectangle 10.png';
import App from '../components/Auth';


export default function Home() {

  const buttonText = "Sign Up Now";
  const buttonAction = "signUp";
  const buttonSize = "50";
 

  return (
    <div>
      <div
            className="absolute top-50 left-0 w-60 h-64 bg-cover bg-no-repeat mt-8"
            style={{ backgroundImage: `url(${newImage})`}}
          ></div>
      <div className="container bg-[#F5F4FF] flex flex-col md:flex-row mx-auto px-12 space-x-6">
        <div className="md:w-1/2 flex flex-col space-y-5 justify-center py-14 my-9 relative pl-6">
          
          <div>
            {['Bright Future', 'starts with', 'the right', 'education'].map((text, index) => (
              <h1 key={index} className="font-caprasimo text-6xl  mb-4 text-black">
                {text}
              </h1>
            ))}
          </div>
          <div>
            <p className="font-montserrat text-xl mb-6">
              Online courses never easier to access with Bright,<br />
              meeting the best pricing, best mentors and best <br />
              planning to achieve your goals in the deadlines <br />
              following your own schedule and time preferences!
            </p>
          </div>
          <div className="flex flex-col items-start space-y-4">
      <App buttonText={buttonText} buttonAction={buttonAction}  buttonSize={buttonSize} />
            <div className="flex flex-col items-start mt-2">
              <img src={CursorImage} alt="cursor" className="w-13 ml-16" />
              <button className="bg-[#A19EF7] text-white font-montserrat px-6 py-1 rounded-none mt-[-50px] ml-[121px]">
                Click!
              </button>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-[630px] flex justify-center mb-[-40px] h-[408px] mt-52 relative z-10">
          <div className="relative">
            <img src={rectangle} alt="Background" className="absolute top-0 left-0 z-0 w-[350px] h-[424px] ml-48 -m-16 " style={{ zIndex: -1 }} />
            <img src={girl} alt="Illustration" className="max-w-[600px] h-auto relative z-10" style={{ zIndex: 10 }} />
          </div>
        </div>

      </div>
      <div className="mt-8"></div>
    
    </div>
  );
}