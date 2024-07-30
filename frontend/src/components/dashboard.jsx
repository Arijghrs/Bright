import SquareChart from './Squarechart';
import LineChart from './LineChart';
import Rating from './Rating';
import Down from '../assets/down.png';
import Up from '../assets/up.png';
import Thomas from '../assets/Mentor.png';

const Dashboard = () => {
  const courses = [
    { name: "Introduction to web...", category: "Technologies", rating: 4, students: "115 Student" },
    { name: "Marketing for begin...", category: "Art & science", rating: 4, students: "100 Student" },
    { name: "Introduction to web...", category: "Technologies", rating: 2, students: "115 Student" },
    { name: "Introduction to web...", category: "Technologies", rating: 3, students: "115 Student" }
  ];

  const students = [
    { name: "Jesse Thomas", points: "120 Points", profileImage: Thomas, flecheImage: Down },
    { name: "Ken Alba", points: "120 Points", profileImage: Thomas, flecheImage: Up},
    { name: "Jesse Thomas", points: "120 Points", profileImage: Thomas, flecheImage: Down }
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="bg-[#FBFBFB] w-full h-auto p-10">
      <h1 className="font-semibold text-3xl mb-0 text-gray-700 text-left">Overview</h1>
        <div className="flex">
          <SquareChart total="Total Sales" month="Sales of the month" today="Sales of today" sTotal={5432} sMonth={1500} sToday={750} />
          <SquareChart total="Total Users" month="Users of the month" today="Users of today" sTotal={1500} sMonth={200} sToday={15} />
          <SquareChart total="Profit" month="Sales of the month" today="Sales of today" sTotal={5420} sMonth={1500} sToday={750} />
          <SquareChart total="Profit" month="Sales of the month" today="Sales of today" sTotal={5420} sMonth={1500} sToday={750} />
          <SquareChart total="Total Sales" month="Partners" today="Professor" sTotal={3400} sMonth={1500} sToday={1500}  />
        </div>

        <div className="bg-neutral-100 w-full mt-10 flex flex-col lg:flex-row gap-4">
          <div className="lg:w-2/3">
            <LineChart />
            <div className="bg-white p-5 mt-7 shadow rounded">
              <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
                <div>
                  <p className="text-left text-[#273240] text-sm font-semibold mb-2">Highest Selled Courses</p>
                  <p className="text-left text-[#C4C4C4] text-xs">Rating based on the users reviews</p>
                </div>
                <div className="flex-grow text-right mt-4 lg:mt-0">
                  <button className="relative w-full lg:w-28 h-8 py-1 px-4 border border-grey text-purp font-semibold bg-white">
                    <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
                    <span className="absolute inset-0 border border-black bg-white z-10 flex items-center justify-center"></span>
                    <span className="relative z-20 font-montserrat text-xs font-normal">View report</span>
                  </button>
                </div>
              </div>

              <table className="w-full border-collapse">
                <tbody>
                  {courses.map((course, index) => (
                    <tr key={index} className="border-b-2 border-gray-300 text-[#273240]">
                      <td className="py-2">{course.name}</td>
                      <td className="py-2">{course.category}</td>
                      <td className="py-2"><Rating rating={course.rating} /></td>
                      <td className="py-2">{course.students}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:w-1/3 bg-white p-5 mt-7 shadow rounded">
            <p className="font-semibold text-lg mb-6">Student Leaderboard</p>
            <table className="w-full">
              <tbody>
                {students.map((student, index) => (
                  <tr key={index} className='mb-3'>
                    <td className="p-2 w-16">
                      <img src={student.profileImage} alt={student.name} className="w-12 h-12 rounded-full" />
                    </td>
                    <td className="p-2">
                      <p className="text-[#2C3439] text-sm font-semibold">{student.name}</p>
                      <p className="text-[#C4C4C4] text-xs">{student.points}</p>
                    </td>
                    <td className="p-2 w-8">{index + 1}</td>
                    <td className="p-2 w-16">
                      <img src={student.flecheImage} alt="fleche" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
