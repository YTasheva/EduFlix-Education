import { useEffect, useState } from "react";
import $ from "jquery";
import SearchBar from "./SearchBar";
import API from "../../utils/API";

export default function Front() {
  const [searchBar, setSearchBar] = useState(false);
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const $btn = $(".hero-find-btn");
    $btn
      .off("mouseenter.heroFind mouseleave.heroFind click.heroFind")
      .on("mouseenter.heroFind", function () {
        $(this).stop(true, true).animate({ paddingLeft: "18px" }, 150);
      })
      .on("mouseleave.heroFind", function () {
        $(this).stop(true, true).animate({ paddingLeft: "12px" }, 150);
      })
      .on("click.heroFind", function () {
        $(this)
          .stop(true, true)
          .animate({ opacity: 0.7 }, 100)
          .animate({ opacity: 1 }, 100);
      });

    return () => {
      $btn.off("mouseenter.heroFind mouseleave.heroFind click.heroFind");
    };
  }, []);

  const performSearch = async (searchTerm) => {
    const trimmedQuery = searchTerm.trim();
    if (!trimmedQuery) return;

    setIsSearching(true);
    setErrorMessage("");

    try {
      const response = await API.search(trimmedQuery);
      const match = response.data?.items?.find(
        (item) => item?.id?.videoId !== undefined
      );

      if (match?.id?.videoId) {
        const videoUrl = `https://www.youtube.com/watch?v=${match.id.videoId}`;
        window.open(videoUrl, "_blank", "noopener,noreferrer");
      } else {
        setErrorMessage("No results found. Try a different term.");
      }
    } catch (error) {
      console.error("Error searching for modules:", error);
      setErrorMessage("There was a problem searching YouTube. Please try again.");
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
        <div className="py-8 sm:rounded-3xl relative w-full h-[620px] bg-homefrontbg bg-cover lg:bg-center bg-no-repeat bg-left">
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
                  onSubmit={performSearch}
                />
              </form>
            )}
            {!searchBar && (
              <div className="sm:text-[20px] bg-button-primary text-[#6C6252] sm:px-10 px-3 py-3 rounded-md capitalize sm:w-auto w-full font-bold select-none">
                Start Your Journey
              </div>
            )}

            {!searchBar && (
              <button
                type="button"
                aria-label="Find Education Modules"
                onClick={() => setSearchBar(!searchBar)}
                className="hero-find-btn sm:text-[20px] text-white sm:px-10 px-3 py-3 rounded-md border-[1px] border-white capitalize sm:w-auto w-full font-bold"
              >
                Find Education Modules
              </button>
            )}
          </div>
          {errorMessage && (
            <div className="absolute bottom-[12%] left-[5%] text-white bg-black bg-opacity-60 px-3 py-2 rounded-md text-sm">
              {errorMessage}
            </div>
          )}
        </div>
        </div>
    </section>
  );
}
