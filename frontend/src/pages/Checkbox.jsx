import About from "../components/About";
import Summary from "../components/Summary";

export default function QuizFinish() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="ml-20 mt-[40px]">
          <div className="flex gap-5 items-center">
            <h3 className="text-black text-[24px]  font-semibold tracking-[.36px]">
              Choose the right answer
            </h3>
            <span className="text-darkBlue opacity-50 text-[20px]  font-semibold tracking-[.36px]">
              2 min
            </span>
          </div>
          <p className="text-black text-[16px] font-normal tracking-[.24px] my-5 text-start">
            Which of the following is NOT a web development programming language?
          </p>
          <ul>
            <li className="mb-2 text-start">
              <label className="text-black text-[16px]  font-normal  inline-flex items-center">
                <input
                  className="mr-6 w-6 h-6  border-gray-600 rounded-full "
                  type="radio"
                  name="question"
                  value="Html"
                />
                HTML
              </label>
            </li>
            

            <li className="mb-2 text-start">
              <label className="text-black text-[16px]  font-normal inline-flex items-center">
                <input
                  className="mr-6 w-6 h-6 border-5 border-gray-600 rounded-full "
                  type="radio"
                  name="question"
                  value="Css"
                />
                CSS
              </label>
            </li>

            <li className="mb-2 text-start">
              <label className="text-black text-[16px]  font-normal inline-flex items-center">
                <input
                  className="mr-6 w-6 h-6  border-gray-600 rounded-full "
                  type="radio"
                  name="question"
                  value="JavaScript"
                />
                JavaScript
              </label>
            </li>

            <li className="mb-2 text-start">
              <label className="text-black text-[16px]  font-normal  inline-flex items-center">
                <input
                  className="mr-6 w-6 h-6 border-gray-600    rounded-full "
                  type="radio"
                  name="question"
                  value="Perl"
                />
               Perl
              </label>
            </li>
          </ul>
          <p className="text-darkBlue opacity-50 text-[16px] font-montserrat font-normal tracking-[.24px] my-5 text-start">
          Check your answers, once you submit your choice it cannot be edited!</p>
          <div className="flex items-center">
      <button className="relative w-45 h-9 py-1 px-14 border border-black text-black font-semibold bg-white cursor-pointer shadow-purple-400 hover:transform hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-purple-500">
    <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
    <span className="absolute inset-0 border border-black bg-white z-10"></span>
    <span className="relative z-20 text-black">Next</span>
  </button>
  <p className="ml-4 text-darkBlue opacity-50 text-[24px]  tracking-[.36px]">
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
