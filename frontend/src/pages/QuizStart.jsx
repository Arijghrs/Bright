import About from "../components/About";
import Summary from "../components/Summary";

export default function QuizStart() {
  return (
    <div className="flex flex-col">
    <div className="flex justify-between">
    <div className="p-32 text-center ">
      <h3 className="text-blak font-montserrat text-2xl font-semibold text-center tracking-[.36px]">
        Chapter One: Evaluation Quiz
      </h3>

      <p className="text-darkBlue opacity-50 text-[24px] font-montserrat font-semibold tracking-[.36px]  my-6">
        5min
      </p>
      <p className="text-darkBlue font-montserrat text-[16px] font-normal tracking-[.24px] w-[660px] text-center mx-auto">
        Have you ever wondered how these websites actually work? How are they
        built? How do browsers, computers, and mobile devices interact with the
        web? What skills are necessary to build a website? In this quiz we will
        be asking questions to put you on track with the course introduction and
        to let you familiarize yourself with BRIGHT quiz types.
      </p>

      <p className="text-darkBlue opacity-[0.6] text-[16px] font-montserrat font-normal tracking-[.24px] mx-auto my-6 w-[520px]">
        Answers are final once submitted, make sure you double check before you
        submit
      </p>

      <button className="relative  w-45 h-9 py-1 px-5 border border-black text-black font-semibold bg-white cursor-pointer shadow-purple-400 hover:transform hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-purple-500">
          <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
          <span className="absolute inset-0 border border-black bg-white z-10"></span>
          <span className="relative z-20   text-black">Web dev</span>
        </button>      
    </div>
    <Summary/>
   </div>
   <About /> 
    </div>

  )
}
