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
  },
  {
    id: 3,
    image: digital_concept_3,
    title: "Live",
  },
];

const AboutCard = ({ card }) => {
  return (
    <div className="relative rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform">
      <img src={card.image} alt="about_image" />
      <div className="absolute bottom-10 capitalize left-10 text-white font-bold md:text-[50px] text-[40px]">
        {card.title}
      </div>
    </div>
  );
};

AboutCard.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default function About() {
  return (
    <section className="my-14">
      <Container>
        <div>
          <TitleSection title="about" />
          <div className="grid lg:grid-cols-3 mt-8 sm:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4">
            {cards.map((card) => (
              <AboutCard card={card} key={card.id} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
