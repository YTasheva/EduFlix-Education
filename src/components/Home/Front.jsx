import { useState } from "react";
import SearchBar from "./SearchBar";
import API from "../../utils/API";


export default function Front() {
  const [searchBar, setSearchBar] = useState(false);
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const performSearch = async (searchTerm) => {
    const trimmedQuery = searchTerm.trim();
    if (!trimmedQuery) return;

    setIsSearching(true);
    try {
      const response = await API.search(trimmedQuery);
      const match = response.data?.items?.find(
        (item) => item?.id?.videoId !== undefined
      );

      if (match?.id?.videoId) {
        const videoUrl = `https://www.youtube.com/watch?v=${match.id.videoId}`;
        window.open(videoUrl, "_blank", "noopener,noreferrer");
      } else {
        console.warn("No results found for query:", trimmedQuery);
      }
    } catch (error) {
      console.error("Error searching for modules:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    await performSearch(query);
  };



  return (
    <section className="z-10">
      <div className="sm:w-11/12 mx-auto">
        <div
          className={`py-8 sm:rounded-3xl relative w-full h-[620px] bg-homefrontbg bg-cover lg:bg-center bg-no-repeat bg-left`}
        >
          <div className="absolute bottom-[24%] sm:left-[6%] left-[5%] flex items-center flex-wrap gap-4">
            {searchBar && (
              <form
                className="flex items-end gap-4 flex-wrap"
                onSubmit={handleSearch}
              >
                <SearchBar
                  value={query}
                  onChange={setQuery}
                  isLoading={isSearching}
                  onSelectTerm={(term) => {
                    setQuery(term);
                    performSearch(term);
                  }}
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="bg-white px-2 py-3 w-24 font-bold uppercase text-sm text-black hover:text-white hover:bg-black hover:bg-opacity-50 rounded-md disabled:opacity-60"
                >
                  {isSearching ? "Finding..." : "Find"}
                </button>
              </form>
            )}
            {!searchBar && (
              <button className="sm:text-[20px] bg-button-primary text-[#6C6252] hover:bg-button-primary-hover transition-colors sm:px-10 px-3 py-3 rounded-md capitalize sm:w-auto w-full font-bold">
                Start Your Journey
              </button>
            )}

            {!searchBar && (
              <button
                onClick={() => setSearchBar(!searchBar)}
                className="sm:text-[20px] text-white sm:px-10 px-3 py-3 rounded-md border-[1px] border-white capitalize sm:w-auto w-full font-bold"
              >
                Find Education Modules
              </button>
            )}
        </div>
        </div>
        <article className="lg:flex hidden items-end absolute top-[30%] right-0 w-[30%] border-l-2 h-1/2 px-2 border-l-white">
          <div className="text-white text-[26px] w-[80%]">
            Find the right tutorials, modules, and projects for e-education

          </div>
        </article>
      </div>
    </section >
  );
}
