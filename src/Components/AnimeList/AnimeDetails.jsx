import { useEffect, useState } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";

function AnimeDetails() {
  const [animeDetails, setAnimeDetails] = useState(null); // Use null as the initial state
  const { id } = useParams();

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const data = await response.json();
        console.log(data);
        setAnimeDetails(data.data);
      } catch (error) {
        console.error("Error fetching anime details:", error);
      }
    };

    fetchAnimeDetails();
  }, [id]);

  if (!animeDetails) {
    return <div>Loading...</div>;
  }

  const { title, images, synopsis, broadcast, duration, episodes, rating, type, rank, url, year } = animeDetails;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <Link to="/" className="inline-block mb-6 text-blue-500 hover:text-blue-700">
          &larr; Back to Anime List
        </Link>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="w-full h-96 object-cover md:w-96" src={images.jpg.large_image_url} alt={title} />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4">{title}</h2>
              <p className="text-gray-700 font-serif mb-6">{synopsis}</p>
              <div className="space-y-4">
                <p className="text-gray-700"><strong>Broadcast:</strong> {broadcast.string}</p>
                <p className="text-gray-700"><strong>Duration:</strong> {duration}</p>
                <p className="text-gray-700"><strong>Episodes:</strong> {episodes}</p>
                <p className="text-gray-700"><strong>Rating:</strong> {rating}</p>
                <p className="text-gray-700"><strong>Type:</strong> {type}</p>
                <p className="text-gray-700"><strong>Rank:</strong> {rank}</p>
                <p className="text-gray-700"><strong>Year:</strong> {year}</p>
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeDetails;
