import PropTypes from "prop-types";

export default function TitleSection({ title, classes }) {
  return (
    <h1
      className={`md:text-[40px] text-[30px] font-bold uppercase ${
        classes && classes
      }`}
    >
      {title}
    </h1>
  );
}

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.string,
};
