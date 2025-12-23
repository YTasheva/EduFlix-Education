import { useState } from "react";
import PropTypes from "prop-types";
import API from "../../utils/API";

export default function EduCard({ card }) {
  const [isSearching, setIsSearching] = useState(false);

  const searchVideo = async (query) => {
    setIsSearching(true);
    try {
      const response = await API.search(query);
      const match = response.data?.items?.find(
        (item) => item?.id?.videoId !== undefined
      );

      if (match?.id?.videoId) {
        const videoUrl = `https://www.youtube.com/watch?v=${match.id.videoId}`;
        window.open(videoUrl, "_blank", "noopener,noreferrer");
      } else {
        console.warn("No video results returned for query:", query);
      }
    } catch (error) {
      console.error("Error fetching video:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleClick = () => {
    if (card.videoUrl) {
      window.open(card.videoUrl, "_blank", "noopener,noreferrer");
      return;
    }
    searchVideo(card.topic);
  };

  return (
    <div className="edu-card h-[550px] w-[320px]">
      <div className="relative rounded-xl overflow-hidden">
        <img
          src={card.image}
          alt="fund1"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-4 uppercase right-4 leading-tight font-bold px-3 py-2 bg-gradient-to-br from-[#d9e6f5] to-[#bcd3ec] text-[#1d3557] rounded-md text-[10px] text-center shadow-lg shadow-black/20">
          {card.circleText}
        </div>
      </div>
      <div className="flex items-center gap-4 my-4 px-2">
        <h1 className="bg-[#d9e6f5] px-3 py-1 rounded-md text-[#1d3557] text-[17px] font-medium">
          £ {card.price}
        </h1>
        <p className="text-xs font-bold text-[#1d3557] flex items-center gap-1">
          <i className="fa fa-clock text-xs text-[14px]" aria-hidden="true" />{" "}
          {card.date}
        </p>
        <i
          className="fa fa-heart text-xs text-[#1d3557] text-[14px] ml-auto"
          aria-hidden="true"
        />
      </div>
      <button
        type="button"
        className="card-title font-bold text-[17px] px-2 text-left cursor-pointer disabled:opacity-60"
        onClick={handleClick}
        disabled={isSearching}
      >
        {isSearching ? "Searching for video..." : card.topic}
      </button>
    </div>
  );
}

EduCard.propTypes = {
  card: PropTypes.shape({
    price: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    circleText: PropTypes.string.isRequired,
    videoUrl: PropTypes.string,
  }).isRequired,
};
