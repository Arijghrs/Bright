import search from "../assets/searchIcon.png";
import clock from "../assets/clock.png";
import chevron from "../assets/chevron-bas.png"
import { useEffect, useState } from "react";



const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`/api/user/users?search=${searchTerm}`);
        const data = await response.json();

        const userRoleUsers = data.filter(user => user.role === 'user');
        setUsers(userRoleUsers);

        const creationDates = userRoleUsers.map(user => new Date(user.createdAt));
        const formattedDates = creationDates
          .map(date => date.toLocaleDateString('en-US', { year: '2-digit', month: '2-digit' }))
          .filter((value, index, self) => self.indexOf(value) === index);
        setDates(formattedDates);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [searchTerm]);  // Dependency on searchTerm to refetch when it changes

  useEffect(() => {
    if (selectedDate) {
      const filtered = users.filter(user => {
        const userDate = new Date(user.createdAt).toLocaleDateString('en-US', { year: '2-digit', month: '2-digit' });
        return userDate === selectedDate;
      });
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, [selectedDate, users]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div className="flex bg-neutral-50 ml-5 w-[1100px]">
      <div>

      <div className="flex items-center justify-between mt-8 ml-14 mr-14">
      <h1 className="font-semibold text-3xl mb-2 text-gray-700 text-left">Users</h1>       
         </div>
         <div className="bg-white w-[940px] h-[813px] ml-12 border-2s">
         <div className="flex justify-between mb-7 mt-12 ml-4 mr-20">
         <div className="flex gap-1">
         <div className="flex items-center mt-10  w-30 text-gray-500 bg-white border rounded-sm shadow-sm outline-none">
         <img src={clock} className="w-4 h-4 ml-2" alt="clock" />
         <select onChange={handleDateChange} value={selectedDate}>
                  <option value="" disabled>
                    Date range
                  </option>
                  {dates.map((date, index) => (
                    <option key={index} value={date}>{date}</option>
                  ))}
                </select>
       

               
              </div>
            </div>
            <div className="flex  relative mt-10">             
            <input
                placeholder="Search by name, email or phone number..."
                type="text"
                className="w-full lg:w-[411px] h-9 pl-7 bg-neutral-100 rounded-sm shadow-sm outline-none"
                value={searchTerm}  
                onChange={handleSearchChange} 
              />
              <div className="absolute w-5 h-5 mt-2 ml-1">
                <img src={search} alt="search" />
              </div>
            </div>
          </div>

          <div className="ml-4">
            <table className="border-2 w-[900px]">
              <thead className="">
                <tr className="grid ml-0 grid-cols-12 gap-4 justify-items-start py-1 bg-[#FBFBFB] text-gray-700">
                  <th className="col-span-1 w-[47px]">
                    <input type="checkbox" />
                  </th>
                  <th className="col-span-3 font-semibold">Name</th>
                  <th className="col-span-3 font-semibold">Email</th>
                  <th className="col-span-2 font-semibold">Phone</th>
                  <th className="col-span-2 font-semibold">Certificate</th>
                  <th className="col-span-1 font-semibold"></th>
                </tr>
              </thead>

              <tbody className="">
              {filteredUsers.map((user) => (
              <tr className="grid grid-cols-12 gap-4 justify-items-start font-montserrat font-normal  border-t-2 h-12 py-2 bg-neutral-50 text-gray-600"
              key={user.id} >
        <td className="col-span-1">
          <input className="ml-4 " type="checkbox" />
        </td>
        <td className="col-span-3">{user.username}</td>
                    <td className="col-span-3">{user.email}</td>
                    <td className="col-span-2">{user.phone}</td>
                    <td className="col-span-2">{user.certificate}</td>
        <td className="col-span-1"><button><img className="w-4 h-4 mt-2" src={chevron}/></button></td>
      </tr>
      ))}
              </tbody>
            </table>
          </div>
          <div className="w-[900px] h-[52px] mt-10 ml-4  bg-neutral-50 flex justify-between items-center">
          <div className="w-[161px] ml-4 flex">
              <h1 className="pl-1 text-gray-600 font-semibold">{filteredUsers.length}</h1>

              <h1 className="pl-2 text-gray-600">Results</h1>
            </div>
            <div className="flex">
              <button className="w-20 p-2 mr-4 bg-white border border-gray-100 text-gray-600 font-semibold text-sm">
                Previous
              </button>
              <button className="w-14 p-2 mr-4 bg-white border border-gray-100 text-gray-600 font-semibold text-sm">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
