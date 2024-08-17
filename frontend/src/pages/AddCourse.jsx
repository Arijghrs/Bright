import Layout from '../components/Layout'
import DragAndDrop from "../components/dragAndDrop";
import AddCourseList from "../components/addCourseList";
import AddVideoPopup from "../components/addVideoPopup";
import AddQuizPopup from "../components/addQuizPopup"; 
import AddCertificatePopup from "../components/addCertificatePopup";
import { useNavigate } from 'react-router-dom';


export default function AddCourse() {
  const navigate = useNavigate();

  function onClose() {
      navigate('/coursesdash');
  }
  return (
    <div>
     <Layout>
     <div className="flex bg-neutral-50 ml-5 w-[1100px]">
      <div className="ml-20 mt-8 ">
        <div className="flex">
          <div className="text-3xl text-gray-700 font-montserrat font-normal mr-2">
            Add course
          </div>
          <button 
          onClick={onClose}
          className="text-base text-violet-400 mt-2 mx-2 font-montserrat font-normal">
            Cancel
          </button>
        </div>
        <div className=" mt-4 flex gap-24 w-[850px] h-[580px] bg-white">
          <div className="pt-6 ">
            <div className="text-black text-2xl font-montserrat font-normal ml-4">
              Add info about the new course
            </div>
            <div className="mt-4 ml-8">
               

              <select
                className="border text-gray-500 broder-1 border-gray-400 shadow-shdInsetPurp  mt-4  px-2  text-sm font-monteserrat leading-tight w-[320px] h-11  text-opacity-50 font-montserrat font-normal outline-none "
              >
                <option value="">Mentor</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>

              <select
                className="border text-gray-500 broder-1 border-gray-400 shadow-shdInsetPurp  mt-4  px-2  text-sm font-monteserrat leading-tight w-[320px] h-11  text-opacity-50 font-montserrat font-normal outline-none "
              >
                <option value="">Category</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>

              <div>
                <input
                  className="border broder-1 p-3 border-gray-400 shadow-shdInsetPurp h-11 w-[320px] mt-4 mb-4  text-sm font-monteserrat outline-none"
                  type="text"
                  placeholder="Experience level"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  cols={33}
                  placeholder="Description"
                  className=" resize-none w-[320px] p-3 text-neutral-900 text-opacity-50 border-gray-400 shadow-shdInsetPurp text-sm font-montserrat font-normal h-44 mb-8 grid-rows-6 row-span-full outline-none border   "
                ></textarea>
              </div>
              <button 
          className="transform transition duration-300 hover:translate-y-2 pr-2 py-2 border shadow-shdB text-[14px] h-9 ml-20 -mt-28 w-[119px] font-monteserrat text-darkgray" >
          <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
          <span className="absolute inset-0 border border-black bg-white z-10"></span>
          <span className="relative z-20   text-black">Save</span>
        </button>
        </div>
          </div>
          <div className="mt-16">
            <DragAndDrop />
          
            <button className="flex items-center  justify-between transform border broder-1 p-3  h-11 border-gray-400  w-[320px] mt-4   text-sm  outline-none  py-2 pr-2  shadow-shdInsetPurp text-[10px]  font-monteserrat">
              <input
              
                className=" outline-none text-sm "
                placeholder="Upload document"
              ></input>

              
            </button>

            <button className="flex items-center  justify-between transform border broder-1 p-3  h-11 border-gray-400  w-[320px] mt-4   text-sm  outline-none  py-2 pr-2  shadow-shdInsetPurp text-[10px]  font-monteserrat">
              <input
                className=" outline-none text-sm "
                placeholder="Price"
              ></input>

              <h1 className="text-sm">TND</h1>
            </button>

            <input
              className="border broder-1 p-3 border-gray-400 shadow-shdInsetPurp h-11 w-[320px] mt-4   text-sm font-monteserrat outline-none"
              type="text"
              placeholder="Skills you will learn"
            />
            <div className="flex items-center  justify-between transform border broder-1 p-3  h-11 border-gray-400  w-[320px] mt-4   text-sm  outline-none  py-2 pr-2  shadow-shdInsetPurp text-[10px]  font-monteserrat">
              <input
                className=" outline-none text-sm "
                placeholder="Duration"
              ></input>

              <h1 className="text-sm">Minutes</h1>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="text-xl font-montserrat ml-4 text-gray-900">
            Add course elements
          </div>
          <div>
            <div className="flex gap-2">
              <AddVideoPopup  />
              <AddQuizPopup  />
              <AddCertificatePopup/>

             
            </div>
            <div className="mt-10 mb-8">
              <AddCourseList category="video" title="Introduction" />
              <AddCourseList category="video" title="Chapter 1: Lorem ipsum" />
              <AddCourseList category="quiz" />
              <AddCourseList category="video" title="Chapter 2: Lorem ipsum" />
              <AddCourseList category="certificate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  

    </Layout>
    </div>
  )
}
