import { useEffect, useState } from "react";
import search from "../assets/searchIcon.png";
import clock from "../assets/clock.png";
import flag from "../assets/flag-line.png";
import chevron from "../assets/chevron-bas.png";
import checkbox from "../assets/checkbox-circle-fill.png";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch(`/api/certificate/getCertificates?search=${searchTerm}`);
        if (!response.ok) {
          throw new Error("Failed to fetch certificates");
        }
        const data = await response.json();
        setCertificates(data);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      }
    };

    fetchCertificates();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
    <div className="flex bg-neutral-50 ml-5 w-[1100px]">
      <div>
        <div className="flex items-center justify-between mt-8 ml-14 mr-14">
          <h1 className="font-semibold text-3xl mb-0 text-gray-700">Certificates</h1>
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
                  <option value="option1">option1</option>
                  <option value="option2">option2</option>
                  <option value="option3">option3</option>
                </select>
              </div>
            </div>
            <div className="flex relative mt-10">
              <input
                placeholder="Search by name, email, or phone number..."
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
                  <th className="col-span-3 font-semibold">Phone</th>
                  <th className="col-span-2 font-semibold">Mentor</th>
                  <th className="col-span-2 font-semibold">Creation date</th>
                  <th className="col-span-1 font-semibold"></th>
                </tr>
              </thead>
              <tbody>
                {certificates.map((certificate) => (
                  <tr
                    key={certificate._id}
                    className="grid grid-cols-12 gap-4 justify-items-start font-montserrat font-normal border-t-2 h-12 py-2 bg-neutral-50 text-gray-600"
                  >
                    <td className="col-span-1">
                      <input className="ml-4" type="checkbox" />
                    </td>
                    <td className="col-span-3">{certificate.title}</td>
                    <td className="col-span-3">
                      <span className="relative inline-flex items-center px-3 py-1 font-semibold text-[#165E3D] leading-tight">
                        <span aria-hidden className="absolute inset-0 bg-[#EDFFEA] opacity-50 rounded-full"></span>
                        <img src={checkbox} className="w-4 h-4 mr-2" alt="check" />
                        <span className="relative">Delivered</span>
                      </span>
                    </td>
                    <td className="col-span-2">{certificate.Mentor}</td>
                    <td className="col-span-2">{formatDate(certificate.createdAt)}</td>
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
              <h1 className="pl-1 text-gray-600 font-montserrat font-bold">{certificates.length}</h1>
              <h1 className="pl-2 text-gray-600 font-montserrat font-normal">Results</h1>
            </div>
            <div>
              <button className="w-20 p-2 mr-4 bg-white border border-gray-100 text-gray-600 font-medium font-montserrat text-sm">Previous</button>
              <button className="w-14 p-2 mr-4 bg-white border border-gray-100 text-gray-600 font-medium font-montserrat text-sm">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
