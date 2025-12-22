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

  return (
    <div className="h-[550px] w-[320px]">
      <div className="relative rounded-xl overflow-hidden">
        <img src={card.image} alt="fund1" />
        <div className="absolute top-4 uppercase right-4 leading-tight font-bold w-[70px] h-[70px] flex items-center justify-center bg-white text-black rounded-full text-[10px] text-center">
          {card.circleText}
        </div>
      </div>
      <div className="flex items-center gap-4 my-4 px-2">
        <h1 className="bg-[#5c807162] px-3 py-1 rounded-md text-[#6D9886] text-[17px] font-medium">
          € {card.price}
        </h1>
        <p className="text-xs font-bold text-[#6D9886]">
          <i className="fa fa-clock text-xs text-[14px]" /> {card.date}
        </p>
        <i className="fa fa-heart text-xs text-[#6D9886] text-[14px] ml-auto" />
      </div>
      <button
        type="button"
        className="font-bold text-[17px] px-2 text-left hover:text-[#6D9886] transition-colors cursor-pointer disabled:opacity-60"
        onClick={() => searchVideo(card.topic)}
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
  }).isRequired,
};
