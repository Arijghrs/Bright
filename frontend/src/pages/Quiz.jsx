import About from "../components/About";
import Summary from "../components/Summary";

export default function Quiz() {
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
            Write a 200 characters paragraph explaining the Web developer job mission.
          </p>
          <div>
                <textarea
                  rows={5}
                  cols={33}
                  placeholder="200 Characters required ..."
                  className=" resize-none w-[500px] p-1 text-neutral-900 text-opacity-50 border-gray-400 shadow-shdInsetPurp text-sm font-montserrat font-normal h-32 mb-3 grid-rows-6 row-span-full outline-none border   "
                ></textarea>
              </div>
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
  );
}
