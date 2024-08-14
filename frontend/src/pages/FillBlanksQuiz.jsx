import About from "../components/About";
import Summary from "../components/Summary";

export default function FillBlanksQuiz() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="ml-20 mt-[40px]">
          <div className="flex gap-5 items-center">
            <h3 className="text-black text-[24px] font-semibold tracking-[.36px]">
              Choose the right answer
            </h3>
            <span className="text-darkBlue opacity-50 text-[20px] font-semibold tracking-[.36px]">
              2 min
            </span>
          </div>
          <p className="text-black text-[16px] font-normal tracking-[.24px] my-5 text-start">
          Complete the following paragraph with words from the list:          </p>
     <div className="space-x-2 -mt-3">
  <input 
    className="border border-black bg-[#F5F4FF] w-20 h-8 rounded-none  p-2 text-black  focus:outline-none  "
    type="text"
    value="dynamic" 
    readOnly
  />
  <input 
    className="border border-black bg-[#F5F4FF] w-32 h-8 rounded-none  p-2 text-black  focus:outline-none  "
    type="text"
    value="programming" 
    readOnly
  />
  <input 
    className="border border-black bg-[#F5F4FF] w-20 h-8 rounded-none  p-2 text-black  focus:outline-none  "
    type="text"
    value="content" 
    readOnly
  />
  <input 
    className="border border-black bg-[#F5F4FF] w-24 h-8 rounded-none  p-2 text-black  focus:outline-none  "
    type="text"
    value="elements" 
    readOnly
  />
  <input 
    className="border border-black bg-[#F5F4FF] w-28 h-8 rounded-none  p-2 text-black  focus:outline-none  "
    type="text"
    value="functionality" 
    readOnly
  />
</div>

          <p className="text-dark font-montserrat text-[16px] font-normal tracking-[.24px] my-6 ">
      
          <p className=" text-black">
           Web development involves creating and maintaining  
            <input 
            type="text" 
            placeholder="[................]" 
            className="w-20 mx-2 border-none outline-none focus:border-none"/>  
            websites <br/> and web applications. It requires knowledge of 
            <input 
            type="text" 
            placeholder="[................]" 
            className="w-20 mx-2 border-none outline-none focus:border-none"/>  
            languages such <br/> as HTML, CSS, and JavaScript. HTML is used to structure the 
            <input 
            type="text" 
            placeholder="[................]" 
            className=" w-20 mx-2 border-none outline-none focus:border-none"/>
            of a <br/> web page, CSS is  to style and format the 
            <input 
            type="text" 
            placeholder="[................]" 
            className=" w-20  mx-2 border-none outline-none focus:border-none"/>, 
            and JavaScript is  <br/> to add 
            <input 
            type="text" 
            placeholder="[................]" 
            className="w-20 mx-2 border-none outline-none focus:border-none"/> 
            and interactivity to the website.
            </p>
           </p>
          <p className="text-darkBlue opacity-50 text-[16px] font-normal tracking-[.24px] my-5 text-start">
          Check your answers, once you submit your choice it cannot be edited! </p>
          <div className="flex items-center">
            <button className="relative w-45 h-9 py-1 px-14 border border-black text-black font-semibold bg-white cursor-pointer shadow-purple-400 hover:transform hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-purple-500">
              <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
              <span className="absolute inset-0 border border-black bg-white z-10"></span>
              <span className="relative z-20 text-black">Next</span>
            </button>
            <p className="ml-4 text-darkBlue opacity-50 text-[16px] tracking-[.36px]">
              01/10
            </p>
          </div>
        </div>
        <Summary />
      </div>
      <About />
    </div>
  )
}
