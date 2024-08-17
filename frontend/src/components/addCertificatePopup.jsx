import { useState } from "react";

const AddCertificatePopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="text-center">
     
      <button 
         onClick={togglePopup}
          className="transform transition duration-300 hover:translate-y-2 pr-2 py-2 border shadow-shdB text-[14px] h-9 ml-3 mt-4 w-[119px] font-monteserrat text-darkgray" >
          <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
          <span className="absolute inset-0 border border-black bg-white z-10"></span>
          <span className="relative z-20   text-black"> Add certificate</span>
        </button> 
      {isPopupVisible && (
        <div className="absolute bg-white border-2 border-gray-400 top-[340px] left-72 w-[500px] h-[370px]">
          <div className="font-monteserrat text-xl mt-8">Add certificate</div>
          <input
            className="border broder-1 p-3 border-gray-400 shadow-shdInsetPurp h-11 w-[320px] mt-6 text-sm font-monteserrat outline-none"
            type="text"
            placeholder="certificates"
            required
          />
          <div>
            <button
              className="transform transition duration-300 hover:translate-y-2 pr-2 py-2 border shadow-shdB text-[14px] h-9 ml-3 mt-6 w-[100px] font-monteserrat text-darkgray"
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCertificatePopup;
