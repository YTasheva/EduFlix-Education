import { useEffect } from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";

const statsData = [
  { value: "120k+", label: "Education Modules" },
  { value: "200k", label: "Users" },
  { value: "£200M", label: "Education Grants" },
  { value: "500k+", label: "Tutorials" },
];

const text3D = {
  textShadow:
    "1px 1px 0 rgba(255,255,255,0.35), 3px 3px 8px rgba(17,31,46,0.35)",
};

const StatItem = ({ value, label }) => (
  <div className="stat-item rounded-xl p-4 transition-all w-full text-center">
    <h1
      className="stat-title md:text-[40px] text-[28px] font-bold text-[#1d3557] drop-shadow"
      style={text3D}
    >
      {value}
    </h1>
    <p
      className="text-[#1d3557] text-sm md:text-base font-semibold"
      style={text3D}
    >
      {label}
    </p>
  </div>
);

StatItem.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default function Stats() {
  useEffect(() => {
    const $items = $(".stat-item");
    $items.css({ opacity: 0, marginTop: "16px" });
    $items.each(function (index) {
      $(this)
        .delay(index * 100)
        .animate({ opacity: 1, marginTop: "0px" }, 250);
    });

    return () => {
      $items.stop(true, true);
      $(".stat-title").off("mouseenter.stat hover.stat mouseleave.stat");
    };
  }, []);

  useEffect(() => {
    const $titles = $(".stat-title");
    $titles
      .off("mouseenter.stat mouseleave.stat")
      .on("mouseenter.stat", function () {
        $(this)
          .stop(true, true)
          .animate({ letterSpacing: "2px", opacity: 0.85 }, 150);
      })
      .on("mouseleave.stat", function () {
        $(this)
          .stop(true, true)
          .animate({ letterSpacing: "0px", opacity: 1 }, 150);
      });

    return () => {
      $titles.off("mouseenter.stat mouseleave.stat");
    };
  }, []);

  return (
    <section className="stats_box py-10 grid place-items-center lg:grid-cols-4 grid-cols-2 gap-4 sm:w-9/12 w-11/12 mx-auto -mt-8 px-4">
      {statsData.map((stat) => (
        <StatItem key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </section>
  );
}
