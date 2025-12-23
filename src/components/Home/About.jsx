import { useState } from "react";
import {
  digital_concept_1,
  digital_concept_2,
  digital_concept_3,
} from "../../assets/images";
import PropTypes from "prop-types";
import Container from "../Container";
import TitleSection from "./TitleSection";

const cards = [
  {
    id: 1,
    image: digital_concept_1,
    title: "Courses",
  },
  {
    id: 2,
    image: digital_concept_2,
    title: "Tutorials",
    links: [
      {
        label: "JavaScript DOM Tutorial (Traversy Media)",
        href: "https://www.youtube.com/watch?v=0ik6X4DJKCc",
      },
      {
        label: "CSS Grid Tutorial (Kevin Powell)",
        href: "https://www.youtube.com/watch?v=rg7Fvvl3taU",
      },
      {
        label: "React Hooks Tutorial (Web Dev Simplified)",
        href: "https://www.youtube.com/watch?v=TNhaISOUy6Q",
      },
    ],
  },
  {
    id: 3,
    image: digital_concept_3,
    title: "Live",
    links: [
      {
        label: "Fireship Live Coding Sessions",
        href: "https://www.youtube.com/@Fireship/live",
      },
      {
        label: "The Net Ninja Live Streams",
        href: "https://www.youtube.com/@NetNinja/live",
      },
      {
        label: "GitHub Copilot Live Demos",
        href: "https://www.youtube.com/results?search_query=github+copilot+live",
      },
    ],
  },
];

const AboutCard = ({ card, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform w-full text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1d3557]"
      aria-label={`Learn more about ${card.title}`}
    >
      <img
        src={card.image}
        alt={`about ${card.title}`}
        loading="lazy"
        decoding="async"
      />
      <div className="absolute bottom-10 capitalize left-10 text-white font-bold md:text-[50px] text-[40px]">
        {card.title}
      </div>
    </button>
  );
};

AboutCard.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

export default function About() {
  const [openSection, setOpenSection] = useState(null);

  const courseLinks = [
    {
      label: "Front-End Web Development Full Course",
      href: "https://www.youtube.com/watch?v=EWv2jnhZErc",
    },
    {
      label: "Complete React Developer Course",
      href: "https://www.youtube.com/watch?v=DLX62G4lc44",
    },
    {
      label: "JavaScript Full Course",
      href: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
    },
  ];

  return (
    <section className="my-14">
      <Container>
        <div>
          <TitleSection title="about" />
          <div className="grid lg:grid-cols-3 mt-8 sm:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4">
            {cards.map((card) => (
              <div key={card.id} className="w-full">
                <AboutCard
                  card={card}
                  onClick={() =>
                    setOpenSection((prev) =>
                      prev === card.title ? null : card.title
                    )
                  }
                />
                {openSection === card.title && (
                  <div className="mt-4 bg-white bg-opacity-80 backdrop-blur-md rounded-2xl border border-gray-200 shadow-sm p-6">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {(card.links || courseLinks).map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-4 py-3 bg-[#f6f9fc] rounded-xl border border-gray-100 hover:border-[#1d3557] hover:shadow transition-all text-[#1d3557] font-semibold text-sm sm:text-base"
                        >
                          <span>{link.label}</span>
                          <span
                            aria-hidden="true"
                            className="text-base sm:text-lg"
                          >
                            →
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
