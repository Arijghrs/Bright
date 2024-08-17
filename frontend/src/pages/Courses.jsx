import  { useState } from "react";
import graduation from "../assets/graduation.png";
import Course from "../components/Course";
import Button from "../components/Button";
import ExploreCourses from "../components/ExploreCourses";

const Courses = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <section className="">
      <div className="bg-blur h-[480px] relative">
        <img src={graduation} alt="graduation" className="w-full absolute inset-0 h-full object-cover z-[-1]" />
        <h3 className="text-[32px] sm:text-[54px] font-caprasimo font-normal text-center text-white absolute top-1/4 w-11/12 sm:w-[950px] left-1/2 transform -translate-x-1/2">
          Graduate now online from the top universities worldwide
        </h3>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 mt-4">
        <div className="flex items-center border border-blackish px-4 shadow-shdInsetPurp w-full md:w-[200px] h-16 font-montserrat text-1xl focus:outline-none placeholder-gray-500 placeholder-opacity-50">
          <label className="font-montserrat mr-2">Filters:</label>
          <select className="border-none bg-transparent focus:outline-none w-full">
            <option value="regularPrice_asc">All</option>
            <option value="createdAt_desc">Latest</option>
            <option value="createdAt_asc">Oldest</option>
          </select>
        </div>
        <div className="flex items-center border border-blackish px-4 shadow-shdInsetPurp w-full md:w-[520px] h-16 font-montserrat text-2xl focus:outline-none placeholder-gray-500 placeholder-opacity-50">
          <input
            className="flex-grow border-none px-4 focus:outline-none"
            placeholder="What are you looking for?"
            type="text"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <Button name={"Search"} color={"purp"} />
      </div>

      <div className="container mx-auto px-4 py-6 relative mt-2">
        <div className="flex flex-col md:flex-row items-start justify-start md:pl-16 md:-ml-14">
          <h1 className="font-caprasimo text-2xl md:text-4xl leading-10 font-normal mt-4 md:mt-14">
            Popular Courses
          </h1>
          <p className="md:absolute inset-y-0 right-0 mr-4 mt-4 md:mt-14 font-montserrat">Sort by: Default</p>
        </div>
        <div className="flex flex-wrap justify-center">
          <Course />
        </div>
      </div>
      <div className="container mx-auto px-4 py-6 relative -mt-8">
        <div className="flex items-center justify-start pl-16 -ml-14">
          <h1 className="font-caprasimo text-2xl md:text-4xl leading-10 font-normal mt-4 md:mt-14">
            Explore Courses
          </h1>
        </div>
        <div className="flex flex-wrap justify-center">
          <ExploreCourses />
        </div>
      </div>
    </section>
  );
};

export default Courses;
