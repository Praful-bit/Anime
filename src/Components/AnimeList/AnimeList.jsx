/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { AnimeContext } from "../../Context/AnimeContext";

function AnimeList() {
  const { Anime, fetchDataFromApi } = useContext(AnimeContext);

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  if (!Anime || !Anime[1]) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
      {Anime[1].map((anime) => {
        const largeImageUrl = anime.images?.jpg?.large_image_url;

        return (
          <div
            key={anime.mal_id}
            className="w-56 h-72 bg-white shadow-lg rounded-lg overflow-hidden relative text-center p-0 pb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="h-4/5 overflow-hidden">
              <img
                src={largeImageUrl}
                alt={anime.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2 text-center">
              <h3 className="text-lg font-serif font-semibold text-gray-900">
                {anime.title}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AnimeList;
