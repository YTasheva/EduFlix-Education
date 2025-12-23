import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import random from "../../assets/images/quiz.jpg";

const trendingTopics = [
  { label: "AI - Technology", query: "AI technology tutorials" },
  { label: "Front-End Web Development", query: "Front-End Web Development Course" },
  { label: "Facial Recognition", query: "Facial Recognition Machine Learning Tutorial" },
  { label: "Cyber Security", query: "Cyber Security Beginner Course" },
  { label: "Law", query: "Law Lectures for Students and Lawyers" },
  { label: "MIT", query: "MIT Open Courseware" },
];

const projectIdeas = [
  { title: "Cyber Security", subtitle: "400 Projects" },
  { title: "AI", subtitle: "350 Projects" },
  { title: "Geography", subtitle: "102 Projects" },
  { title: "Web Development", subtitle: "300 Projects" },
  { title: "Python", subtitle: "250 Projects" },
  { title: "Science", subtitle: "102 Projects" },
];

export default function SearchBar({
  value,
  onChange,
  isLoading,
  onSelectTerm,
  onSubmit,
}) {
  const [focusBox, setFocusBox] = useState(false);

  const handleSelect = (term) => {
    onChange(term);
    onSelectTerm(term);
    setFocusBox(false);
  };

  useEffect(() => {
    const $topicButtons = $(".hero-topic-btn");
    const $projectButtons = $(".hero-project-btn");

    const attachAnim = ($els) => {
      $els
        .off("mouseenter.heroAnim mouseleave.heroAnim click.heroAnim")
        .on("mouseenter.heroAnim", function () {
          $(this).stop(true, true).animate({ marginTop: "-2px" }, 120);
        })
        .on("mouseleave.heroAnim", function () {
          $(this).stop(true, true).animate({ marginTop: "0px" }, 120);
        })
        .on("click.heroAnim", function () {
          $(this)
            .stop(true, true)
            .animate({ opacity: 0.8 }, 80)
            .animate({ opacity: 1 }, 80);
        });
    };

    attachAnim($topicButtons);
    attachAnim($projectButtons);

    return () => {
      $topicButtons.off("mouseenter.heroAnim mouseleave.heroAnim click.heroAnim");
      $projectButtons.off("mouseenter.heroAnim mouseleave.heroAnim click.heroAnim");
    };
  }, []);

  const handleManualSubmit = () => {
    if (!value.trim()) return;
    onSubmit(value);
    setFocusBox(false);
  };

  return (
    <div className="relative z-40">
      <input
        type="text"
        placeholder="Search by Category, Module, Topic"
        onFocus={() => setFocusBox(true)}
        onBlur={() => setFocusBox(false)}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleManualSubmit();
          }
        }}
        className="bg-white bg-opacity-50 focus:bg-opacity-100 border-[1px] border-white outline-none px-4 py-2 rounded-md sm:w-[500px] w-[300px] placeholder-white"
        disabled={isLoading}
      />
      <button
        type="button"
        onClick={handleManualSubmit}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-sm font-semibold px-3 py-1 rounded-md bg-[#1d3557] hover:bg-[#27476b] transition-colors"
      >
        Search
      </button>
      {focusBox && (
        <div className="bg-white px-4 py-4 absolute top-[2.4rem] left-0 w-full text-[12px] border-t-[1px] border-t-black search_drop_shadow rounded-br-md rounded-bl-md">
          <h2 className="uppercase text-gray-400 font-bold">trending topics</h2>
          <div className="my-4 flex items-center gap-2 flex-wrap">
            {trendingTopics.map((topic) => (
              <button
                key={topic.label}
                type="button"
                className="hero-topic-btn bg-[#F6F6F6] rounded-lg px-2 py-1"
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSelect(topic.query);
                }}
              >
                {topic.label}
              </button>
            ))}
          </div>
          <div>
            <h2 className="uppercase text-gray-400 font-bold py-4">projects</h2>
            <div className="grid grid-cols-2 gap-4">
              {projectIdeas.map((project) => (
                <button
                  key={project.title}
                  type="button"
                  className="hero-project-btn flex items-center gap-2 flex-wrap border-[1px] rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white border-gray-500 text-left"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleSelect(`${project.title} projects`);
                  }}
                >
                  <img
                    src={random}
                    alt={`${project.title} avatar`}
                    className="w-12 h-12 rounded-full"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <h1 className="font-light capitalize text-base">
                      {project.title}
                    </h1>
                    <p className="opacity-40">{project.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>
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
  onSubmit: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  isLoading: false,
  onSelectTerm: () => {},
};
