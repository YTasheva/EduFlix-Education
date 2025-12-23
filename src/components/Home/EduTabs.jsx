import { useEffect, useState } from "react";
import $ from "jquery";
import EduCards from "./EduCards";
import TitleSection from "./TitleSection";

const tabConfig = [
  { label: "All", filter: "all" },
  { label: "Technology", filter: "technology" },
  { label: "AI", filter: "ai" },
  { label: "Cyber Security", filter: "cyber-security" },
  { label: "Front-End Development", filter: "front-end" },
];

export default function EduTabs() {
  const [activeTab, setActiveTab] = useState(tabConfig[0].filter);

  useEffect(() => {
    const $tabs = $(".edu-tab-btn");
    $tabs
      .off("mouseenter.eduTab mouseleave.eduTab click.eduTab")
      .on("mouseenter.eduTab", function () {
        $(this)
          .stop(true, true)
          .animate({ marginTop: "-12px" }, 200);
      })
      .on("mouseleave.eduTab", function () {
        $(this)
          .stop(true, true)
          .animate({ marginTop: "0px" }, 200);
      })
      .on("click.eduTab", function () {
        $(this)
          .stop(true, true)
          .animate({ opacity: 0.85 }, 100)
          .animate({ opacity: 1 }, 120);
      });

    return () => {
      $tabs.off("mouseenter.eduTab mouseleave.eduTab click.eduTab");
    };
  }, [activeTab]);

  return (
    <section className="sm:mt-0 mt-14">
      <div className="flex items-center sm:justify-between justify-center flex-wrap my-8">
        <TitleSection title="hot education" />
        <div className="flex overflow-auto">
          {tabConfig.map((tab) => {
            const isActive = activeTab === tab.filter;
            return (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveTab(tab.filter)}
                className={`edu-tab-btn px-4 py-3 font-bold sm:text-[16px] text-[14px] border-b-2 cursor-pointer transition-colors ${
                  isActive
                    ? "text-blue-700 border-blue-500 bg-blue-50"
                    : "text-black border-transparent hover:text-blue-600"
                }`}
                aria-pressed={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      <EduCards filterCategory={activeTab} />
    </section>
  );
}
