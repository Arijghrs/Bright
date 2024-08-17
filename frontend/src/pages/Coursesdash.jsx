import { useState, useEffect } from "react";
import search from "../assets/searchIcon.png";
import clock from "../assets/clock.png";
import flag from "../assets/flag-line.png";
import chevron from "../assets/chevron-bas.png";
import { useNavigate } from "react-router-dom";

const Coursesdash = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`/api/course/getcourses?search=${searchTerm}`);
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, [searchTerm]); // Fetch courses whenever searchTerm changes

  const handleAddCourse = () => {
    navigate('/addcourse');
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex bg-neutral-50 ml-5 w-[1100px]">
      <div>
        <div className="flex items-center justify-between mt-8 ml-14 mr-14">
          <h1 className="font-semibold text-3xl mb-0 text-gray-700">Courses</h1>
          <button
            className="relative w-40 h-10 py-1 px-2 border border-black text-black font-semibold bg-white cursor-pointer shadow-purple-400 hover:transform hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-purple-500"
            onClick={handleAddCourse}
          >
            <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
            <span className="absolute inset-0 border border-black bg-white z-10 flex items-center justify-center"></span>
            <span className="relative z-20 font-normal">Add course</span>
          </button>
        </div>

        <div className="bg-white w-[940px] h-[813px] ml-12 border-2s">
          <div className="flex justify-between mb-7 mt-12 ml-4 mr-20">
            <div className="flex gap-1">
              <div className="flex items-center mt-10 w-30 text-gray-500 bg-white border rounded-sm shadow-sm outline-none">
                <img src={clock} className="w-4 h-4 ml-2" alt="clock" />
                <select>
                  <option value="" disabled defaultValue>Date range</option>
                  <option>01-02</option>
                  <option>03-04</option>
                  <option>05-06</option>
                </select>
              </div>
              <div className="flex items-center mt-10 w-30 text-gray-500 bg-white border rounded-sm shadow-sm outline-none">
                <img src={flag} className="w-4 h-4 ml-2" alt="flag" />
                <select>
                  <option value="" disabled defaultValue>Status</option>
                  <option>option1</option>
                  <option>option2</option>
                  <option>option3</option>
                </select>
              </div>
            </div>
            <div className="flex relative mt-10">
              <input
                placeholder="Search by title, category, or mentor..."
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-[411px] h-9 pl-7 bg-neutral-100 rounded-sm shadow-sm outline-none"
              />
              <div className="absolute w-5 h-5 mt-2 ml-1">
                <img src={search} alt="search" />
              </div>
            </div>
          </div>

          <div className="ml-4">
            <table className="border-2 w-[900px]">
              <thead>
                <tr className="grid grid-cols-12 gap-4 justify-items-start py-2 bg-[#FBFBFB] text-gray-700">
                  <th className="col-span-1 w-[47px]">
                    <input type="checkbox" />
                  </th>
                  <th className="col-span-3 font-semibold">Title</th>
                  <th className="col-span-3 font-semibold">Category</th>
                  <th className="col-span-2 font-semibold">Mentor</th>
                  <th className="col-span-2 font-semibold">Creation date</th>
                  <th className="col-span-1 font-semibold"></th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr
                    key={course._id}
                    className="grid grid-cols-12 gap-4 justify-items-start font-montserrat font-normal border-t-2 h-12 py-2 bg-neutral-50 text-gray-600"
                  >
                    <td className="col-span-1">
                      <input className="ml-4" type="checkbox" />
                    </td>
                    <td className="col-span-3">{course.title}</td>
                    <td className="col-span-3">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden className="absolute inset-0 bg-greey opacity-50 rounded-full"></span>
                        <span className="relative">{course.Category}</span>
                      </span>
                    </td>
                    <td className="col-span-2">{course.Mentor}</td>
                    <td className="col-span-2">{new Date(course.createdAt).toLocaleDateString()}</td>
                    <td className="col-span-1">
                      <button>
                        <img className="w-4 h-4 mt-2" src={chevron} alt="details" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-[900px] h-[52px] mt-10 ml-4 bg-neutral-50 flex justify-between items-center">
            <div className="w-[161px] ml-4 flex">
              <h1 className="pl-1 text-gray-600 font-montserrat font-bold">{courses.length}</h1>
              <h1 className="pl-2 text-gray-600 font-montserrat font-normal">Results</h1>
            </div>
            <div className="">
              <button className="w-20 p-2 mr-4 bg-white border border-gray-100 text-gray-600 font-medium font-montserrat text-sm">Previous</button>
              <button className="w-14 p-2 mr-4 bg-white border border-gray-100 text-gray-600 font-medium font-montserrat text-sm">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursesdash;
