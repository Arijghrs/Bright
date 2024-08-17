import rectangle2 from '../assets/Rectangle2.png';
import vector2 from '../assets/Vector2.png';
import vector1 from '../assets/Vector1.png';
import rectangle1 from '../assets/Rectangle1.png';
import Button from './Button';

export default function TopFooter() {
  const buttons = [
    { name: "Subscribe", color: "yellow", colorr: "yelloww" },
  ];

  return (
    <div className="h-[447px] bg-[#F5F4FF] lg:pt-20 relative"> 
      <h2 className="text-black lg:text-3xl max-lg:text-[14px] font-caprasimo  text-center max-lg:pt-14 lg:w-[743px] max-lg:max-w-[400px] mx-auto">
       Subscribe to our newsletter in order <br />
       to get the latest news and offers <br />
       from Bright</h2>  
      <div className="lg:flex lg:items-center lg:justify-center max-lg:text-center gap-8 mt-14 ">
      <input
       className="border border-grey px-4 shadow-shdInset lg:max-w-[600px] max-lg:[300px] max-lg:mb-4 h-14 font-monteserrat text-[20px] focus:outline-none placeholder-gray-500 placeholder-opacity-50 w-1/3"        
        placeholder="E-mail address"
        type="text"/>
       <div>
        {buttons.map((button, index) => (
          <Button key={index} name={button.name} color={button.color} colorr={button.colorr} width="w-50" />
        ))}
       </div>
      </div>
    

     <div className="relative mt-36 max-md:hidden">
      <img className=" w-[50px]  absolute bottom-36 right-48" 
      src={rectangle2} alt="rectangle" ></img>
      <img className="w-[212px] absolute bottom-0 right-0 " 
      src={vector2} alt="vector"></img>
      <img className=" w-[50px]  absolute  top-[-364px]  left-40" 
      src={rectangle1} alt="group"></img>
      <img className=" w-[175px] h-[330px]  absolute bottom-0 left-0 " 
      src={vector1} alt="vector" ></img>
    </div>
  
 
 
  </div>
);
}
