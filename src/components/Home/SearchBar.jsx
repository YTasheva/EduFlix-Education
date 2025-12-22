import { useState } from "react";
import PropTypes from "prop-types";
import random from "../../assets/images/quiz.jpg";

export default function SearchBar({ value, onChange, isLoading, onSelectTerm }) {
  const [focusBox, setFocusBox] = useState(false);

  return (
    <div className="relative z-40">
      <input
        type="text"
        placeholder="Search by Category, Module, Topic"
        onFocus={() => setFocusBox(true)}
        onBlur={() => setFocusBox(false)}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white bg-opacity-50 focus:bg-opacity-100 border-[1px] border-white outline-none px-4 py-2 rounded-md sm:w-[500px] w-[300px] placeholder-white"
        disabled={isLoading}
      />
      {focusBox && (
        <div className="bg-white px-4 py-4 absolute top-[2.4rem] left-0 w-full text-[12px] border-t-[1px] border-t-black search_drop_shadow rounded-br-md rounded-bl-md">
          <h2 className="uppercase text-gray-400 font-bold">trending topics</h2>
          <div className="my-4 flex items-center gap-2 flex-wrap">
            <button
              type="button"
              className="bg-[#F6F6F6] rounded-lg px-2 py-1"
              onMouseDown={() => {
                onChange("AI - Technology");
                onSelectTerm("AI - Technology");
              }}
            >
              AI - Technology
            </button>
            <button
              type="button"
              className="bg-[#F6F6F6] rounded-lg px-2 py-1"
              onMouseDown={() => {
                onChange("Front-End Web Development");
                onSelectTerm("Front-End Web Development");
              }}
            >
              Front-End Web Development
            </button>
            <button
              type="button"
              className="bg-[#F6F6F6] rounded-lg px-2 py-1"
              onMouseDown={() => {
                onChange("Facial Recognition");
                onSelectTerm("Facial Recognition");
              }}
            >
              Facial Recognition
            </button>
            <button
              type="button"
              className="bg-[#F6F6F6] rounded-lg px-2 py-1"
              onMouseDown={() => {
                onChange("Cyber Security");
                onSelectTerm("Cyber Security");
              }}
            >
              Cyber Security
            </button>
            <button
              type="button"
              className="bg-[#F6F6F6] rounded-lg px-2 py-1"
              onMouseDown={() => {
                onChange("Law");
                onSelectTerm("Law");
              }}
            >
              Law
            </button>
            <button
              type="button"
              className="bg-[#F6F6F6] rounded-lg px-2 py-1"
              onMouseDown={() => {
                onChange("MIT");
                onSelectTerm("MIT");
              }}
            >
              MIT
            </button>
          </div>
          <div>
            <h2 className="uppercase text-gray-400 font-bold py-4">projects</h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center gap-2 flex-wrap border-[1px] rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white border-gray-500 text-left"
                onMouseDown={() => {
                  onChange("Cyber Security");
                  onSelectTerm("Cyber Security projects");
                }}
              >
                <img
                  src={random}
                  alt="random"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h1 className="font-light capitalize text-base">
                    Cyber Security
                  </h1>
                  <p className="opacity-40">400 Projects</p>
                </div>
              </button>
              <button
                type="button"
                className="flex items-center gap-2 flex-wrap border-[1px] rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white border-gray-500 text-left"
                onMouseDown={() => {
                  onChange("AI projects");
                  onSelectTerm("AI projects");
                }}
              >
                <img
                  src={random}
                  alt="random"
                  className="w-12 h-12 rounded-full"
                />

                <h1 className="font-light capitalize text-base">AI</h1>
                <p className="opacity-40">350 Projects</p>
                <h1 className="font-light capitalize text-base">
                  Geography
                </h1>
                <p className="opacity-40">102 Projects</p>

              </button>
            </div>
            <button
              type="button"
              className="flex items-center gap-2 flex-wrap border-[1px] rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white border-gray-500 text-left"
              onMouseDown={() => {
                onChange("Web Development projects");
                onSelectTerm("Web Development projects");
              }}
            >
              <img
                src={random}
                alt="random"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h1 className="font-light capitalize text-base">
                  Web Development
                </h1>
                <p className="opacity-40">300 Projects</p>
              </div>
              </button>
              <button
                type="button"
                className="flex items-center gap-2 flex-wrap border-[1px] rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white border-gray-500 text-left"
                onMouseDown={() => {
                  onChange("Python projects");
                  onSelectTerm("Python projects");
                }}
              >
                <img
                  src={random}
                  alt="random"
                  className="w-12 h-12 rounded-full"
                />
                <div>

                  <h1 className="font-light capitalize text-base">Python</h1>
                  <p className="opacity-40">250 Projects</p>

                  <h1 className="font-light capitalize text-base">
                  Science
                  </h1>
                  <p className="opacity-40">102 Projects</p>

                </div>
              </button>
            </div>
          </div>
      )}
    </div>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  onSelectTerm: PropTypes.func,
};

SearchBar.defaultProps = {
  isLoading: false,
  onSelectTerm: () => {},
};
