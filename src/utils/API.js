import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3/search";
// Prefer an env var for the API key but fall back to the existing key so the UI still works locally.
const API_KEY =
  import.meta.env.VITE_YOUTUBE_API_KEY ||
  "AIzaSyBzBmmP2hecqGCQDGiNYnq92Ea6foRIdms";

// Export an object containing methods we'll use for accessing the Youtube APi
export default {
  search(query) {
    return axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        part: "snippet",
        maxResults: 5,
        type: "video", // ensure we only get playable video results
        q: query,
      },
    });
  },
};
