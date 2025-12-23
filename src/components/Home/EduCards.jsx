import PropTypes from "prop-types";
import { useEffect } from "react";
import $ from "jquery";
import EduCard from "./EduCard";
import {
  AIBanner,
  digital_concept_1,
  digital_concept_2,
  digital_concept_3,
  education_1,
  education_2,
  education_4,
  education_5,
  education_6,
  education_7,
  education_8,
  quiz,
} from "../../assets/images";
import business_people from "../../assets/images/Business_people.jpeg";
import facial_recognition from "../../assets/images/Facial-Recognition.jpg";
import jumping_man from "../../assets/images/Jumpink_man.jpg";
import drew_graham from "../../assets/images/drew-graham-338629-unsplash.jpg";

const slugify = (value) =>
  value
    ?.toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

const cards = [
  {
    id: 1,
    price: "free",
    date: "12.03.24",
    topic:
      "React.js Front-End Development - The Complete Guide (incl Hooks, React Router, Redux)",
    image: education_1,
    circleText: "Discover your choice",
    category: "Front-End Development",
  },
  {
    id: 2,
    price: "free",
    date: "14.05.24",
    topic:
      "AI Basics - Creating AI Driven Education for a Better Connected Europe.",
    image: education_2,
    circleText: "LOG IN TO WATCH",
    category: "AI",
  },
  {
    id: 3,
    price: "20,00",
    date: "10.06.24",
    topic:
      "Education Technology Tutorials - The Complete Guide (incl AI, Machine Learning, Data Science)",
    image: digital_concept_1,
    circleText: "DISCOVER MORE",
    category: "Cyber Security",
  },
  {
    id: 11,
    price: "free",
    date: "22.02.24",
    topic: "Cyber Security Full Course - Network and Ethical Hacking (YouTube - Simplilearn)",
    image: digital_concept_2,
    circleText: "Watch now",
    category: "Cyber Security",
    videoUrl: "https://www.youtube.com/watch?v=inWWhr5tnEA",
  },
  {
    id: 12,
    price: "free",
    date: "05.03.24",
    topic: "CompTIA Security+ Full Course (YouTube - Paul Browning)",
    image: education_4,
    circleText: "Watch now",
    category: "Cyber Security",
    videoUrl: "https://www.youtube.com/watch?v=9b6t0uyhh6Y",
  },
  {
    id: 9,
    price: "free",
    date: "01.02.24",
    topic: "Deep Learning Full Course (YouTube - freeCodeCamp)",
    image: facial_recognition,
    circleText: "Watch now",
    category: "AI",
    videoUrl: "https://www.youtube.com/watch?v=tPYj3fFJGjk",
  },
  {
    id: 10,
    price: "free",
    date: "18.01.24",
    topic: "Machine Learning Crash Course (YouTube - Google Developers)",
    image: education_6,
    circleText: "Watch now",
    category: "AI",
    videoUrl: "https://www.youtube.com/watch?v=Gv9_4yMHFhI",
  },

  {
    id: 4,
    price: "30,00",
    date: "10.04.24",
    topic:
      "Start Learning Python. Future-Proof your Career with the Best Python Course on the Market",
    image: business_people,
    circleText: "DISCOVER MORE",
    category: "Technology",
  },
  {
    id: 5,
    price: "20,00",
    date: "16.08.24",
    topic:
      "Photoshop Tutorial for Begginers 2024. Everything you NEED to KNOW! Photoshopping your Drawings. Realistified! ",
    image: drew_graham,
    circleText: "90% match",
    category: "Technology",
  },
  {
    id: 6,
    price: "10,00",
    date: "18.05.24",
    topic: "Learn Bootstrap 5 by Building a Portfolio Website - Full Course",
    image: jumping_man,
    circleText: "95% match",
    category: "Front-End Development",
  },
  {
    id: 7,
    price: "10,00",
    date: "18.05.24",
    topic: "Complete After Effects Course - Motion Graphics Masterclass",
    image: digital_concept_3,
    circleText: "100% match",
    category: "Technology",
  },
  {
    id: 8,
    price: "10,00",
    date: "20.05.24",
    topic:
      "JavaScript Mastery Complete Course. Tutorial For Begginers to Advanced. Ignite Your Front-End Mastery Series!",
    image: AIBanner,
    circleText: "95% match",
    category: "Front-End Development",
  },
  {
    id: 13,
    price: "free",
    date: "11.03.24",
    topic: "Front-End Development Bootcamp (YouTube - freeCodeCamp)",
    image: quiz,
    circleText: "Watch now",
    category: "Front-End Development",
    videoUrl: "https://www.youtube.com/watch?v=zJSY8tbf_ys",
  },
  {
    id: 14,
    price: "free",
    date: "02.02.24",
    topic: "Complete React Developer Course (YouTube - freeCodeCamp)",
    image: education_5,
    circleText: "Watch now",
    category: "Front-End Development",
    videoUrl: "https://www.youtube.com/watch?v=DLX62G4lc44",
  },
  {
    id: 15,
    price: "free",
    date: "15.04.24",
    topic: "JavaScript Full Course for Beginners (freeCodeCamp)",
    image: education_7,
    circleText: "Watch now",
    category: "Front-End Development",
    videoUrl: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
  },
  {
    id: 16,
    price: "free",
    date: "20.04.24",
    topic: "Responsive Web Design Course (freeCodeCamp)",
    image: education_8,
    circleText: "Watch now",
    category: "Front-End Development",
    videoUrl: "https://www.youtube.com/watch?v=srvUrASNj0s",
  },
];


export default function EduCards({ filterCategory }) {
  const normalizedFilter = slugify(filterCategory);
  const cardsWithSlugs = cards.map((card) => ({
    ...card,
    categoryKey: slugify(card.category),
  }));

  const filteredCards =
    normalizedFilter && normalizedFilter !== "all"
      ? cardsWithSlugs.filter((card) => card.categoryKey === normalizedFilter)
      : cardsWithSlugs;

  useEffect(() => {
    // jQuery hover animation for cards
    $(".edu-card")
      .off("mouseenter.eduAnim mouseleave.eduAnim")
      .on("mouseenter.eduAnim", function () {
        $(this).stop(true, true).animate({ marginTop: "-12px" }, 200);
      })
      .on("mouseleave.eduAnim", function () {
        $(this).stop(true, true).animate({ marginTop: "0px" }, 200);
      });

    return () => {
      $(".edu-card").off("mouseenter.eduAnim mouseleave.eduAnim");
    };
  }, [filteredCards]);

  return (
    <article className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4">
      {filteredCards.length > 0 ? (
        filteredCards.map((card) => <EduCard key={card.id} card={card} />)
      ) : (
        <p className="text-center col-span-full">New - Available Soon!</p>
      )}
    </article>
  );
}

EduCards.propTypes = {
  filterCategory: PropTypes.string,
};
