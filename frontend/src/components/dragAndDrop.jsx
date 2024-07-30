import  { useState } from "react";
import imageInput from "../assets/imageInput.svg"; // Assurez-vous que le chemin est correct

const DragAndDrop = () => {
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    console.log(files);
  };

  return (
    <div className="relative">
      <div
        className={`file-input ${
          dragging ? "dragging" : ""
        } bg-gray-100 w-[320px] h-60 flex items-center justify-center relative`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
          <img className="mb-2" src={imageInput} alt="Image Input" />
          <div className="text-sm text-gray-500 text-center">
            Drag and drop a file here or click to select
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
