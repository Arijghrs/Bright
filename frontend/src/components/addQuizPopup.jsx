import { useState } from "react";

const AddQuizPopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [quizTitle, setQuizTitle] = useState("");
  const [quizDescription, setQuizDescription] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [quizQuestion, setQuizQuestion] = useState("");
  const [quizAnswers, setQuizAnswers] = useState(["", "", "", ""]);

  const handleChange = (event, field, index) => {
    switch (field) {
      case "title": {
        setQuizTitle(event.target.value);
        break;
      }
      case "description": {
        setQuizDescription(event.target.value);
        break;
      }
      case "questionType": {
        const selectedType = event.target.value;
        setQuestionType(selectedType);
        break;
      }
      case "question": {
        setQuizQuestion(event.target.value);
        break;
      }
      case "answer": {
        const updatedAnswers = [...quizAnswers];
        updatedAnswers[index] = event.target.value;
        setQuizAnswers(updatedAnswers);
        break;
      }
      default:
        break;
    }
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleAddClick = () => {
    // Reset form fields
    setQuizTitle("");
    setQuizDescription("");
    setQuestionType("");
    setQuizQuestion("");
    setQuizAnswers(["", "", "", ""]);

    togglePopup();
  };

  const renderQuestionType = (selectedType) => {
    switch (selectedType) {
      case "text":
        return (
          <div>
            <input
              className="border border-1 p-3 border-gray-400 shadow-shdInsetPurp h-11 w-[320px] mt-4 text-sm font-monteserrat outline-none"
              type="text"
              value={quizQuestion}
              onChange={(event) => handleChange(event, "question")}
              placeholder="Question"
              required
            />
            <input
              className="border border-1 p-3 border-gray-400 shadow-shdInsetPurp h-11 w-[320px] mt-4 text-sm font-monteserrat outline-none"
              type="text"
              value={quizAnswers[0]}
              onChange={(event) => handleChange(event, "answer", 0)}
              placeholder="Answer"
              required
            />
          </div>
        );
      case "paragraph":
        return (
          <div>
            <input
              className="border border-1 p-3 border-gray-400 shadow-shdInsetPurp h-11 w-[320px] mt-4 text-sm font-monteserrat outline-none"
              type="text"
              value={quizQuestion}
              onChange={(event) => handleChange(event, "question")}
              placeholder="Question"
              required
            />
            <textarea
              placeholder="Description"
              value={quizAnswers[0]}
              onChange={(event) => handleChange(event, "answer", 0)}
              className="resize-none w-[320px] p-3 text-neutral-900 text-opacity-50 mt-4 border-gray-400 shadow-shdInsetPurp text-sm font-montserrat font-normal h-20 grid-rows-6 row-span-full outline-none border"
            ></textarea>
          </div>
        );
      case "checkbox":
        return (
          <div>
            <input
              className="border border-1 p-3 border-gray-400 shadow-shdInsetPurp h-11 w-[320px] mt-4 text-sm font-monteserrat outline-none"
              type="text"
              value={quizQuestion}
              onChange={(event) => handleChange(event, "question")}
              placeholder="Question"
              required
            />
            <div>
              {Array.from({ length: 4 }).map((_, index) => (
                <input
                  key={index}
                  type="text"
                  onChange={(event) => handleChange(event, "answer", index)}
                  className="border border-1 p-3 border-gray-400 shadow-shdInsetPurp h-11 w-[320px] mt-4 text-sm font-monteserrat outline-none"
                  placeholder={`Answer ${index + 1}`}
                />
              ))}
            </div>
          </div>
        );
      case "order":
        return (
          <div>
            <input
              className="border border-1 p-3 border-gray-400 shadow-shdInsetPurp h-11 w-[320px] mt-4 text-sm font-monteserrat outline-none"
              type="text"
              value={quizQuestion}
              onChange={(event) => handleChange(event, "question")}
              placeholder="Question"
              required
            />
            <div className="ml-14">
              {Array.from({ length: 4 }).map((_, index) => (
                <div className="flex gap-2" key={index}>
                  <input
                    type="text"
                    value={quizAnswers[index]}
                    onChange={(event) => handleChange(event, "answer", index)}
                    className="border border-1 p-3 border-gray-400 shadow-shdInsetPurp h-11 w-[320px] mt-4 text-sm font-monteserrat outline-none"
                    placeholder={`Answer ${index + 1}`}
                  />
                  <input
                    type="text"
                    value={quizAnswers[index]}
                    onChange={(event) => handleChange(event, "order", index)}
                    className="border border-1 p-3 border-gray-400 shadow-shdInsetPurp h-11 w-[50px] mt-4 text-sm font-monteserrat outline-none"
                    placeholder="N°"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={togglePopup}
        className="transform transition duration-300 hover:translate-y-2 pr-2 py-2 border shadow-shdB text-[14px] h-9 ml-3 mt-4 w-[100px] font-monteserrat text-darkgray"
      >
        Add quiz
      </button>
      {isPopupVisible && (
        <div className="absolute bg-white border-2 border-gray-400 top-[50px] left-72 w-[500px] h-[670px]">
          <div className="font-monteserrat text-xl mt-8">Add quiz</div>
          <input
            className="border border-1 p-3 border-gray-400 shadow-shdInsetPurp h-11 w-[320px] mt-6 text-sm font-monteserrat outline-none"
            type="text"
            value={quizTitle}
            onChange={(event) => handleChange(event, "title")}
            placeholder="Title"
            required
          />
          <div>
            <textarea
              placeholder="Description"
              value={quizDescription}
              onChange={(event) => handleChange(event, "description")}
              className="resize-none w-[320px] p-3 text-neutral-900 text-opacity-50 mt-4 border-gray-400 shadow-shdInsetPurp text-sm font-montserrat font-normal h-20 grid-rows-6 row-span-full outline-none border"
            ></textarea>
          </div>
          <select
            value={questionType}
            onChange={(event) => handleChange(event, "questionType")}
            className="border text-black border-gray-400 shadow-shdInsetPurp mt-4 px-2 text-sm font-monteserrat leading-tight w-[320px] h-11 text-opacity-50 font-montserrat font-normal outline-none"
          >
            <option value="">Quiz Type</option>
            <option value="text">Text</option>
            <option value="paragraph">Paragraph</option>
            <option value="checkbox">Checkbox</option>
            <option value="order">Order</option>
          </select>
          {renderQuestionType(questionType)}
          <div>
            <button
              onClick={handleAddClick}
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

export default AddQuizPopup;
