import { Link } from "react-router-dom";
import AnimeList from "../AnimeList/AnimeList";
import naru from "../../accets/naru.jpg"; 

function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage: `url(${naru})`,
      }}
    >
      <div className="w-full max-w-5xl p-8 bg-white bg-opacity-10 rounded-lg shadow-2xl">
        <Link
          to="/"
          className="text-indigo-600 text-lg font-semibold mb-4 inline-block"
        >
        </Link>
        <h2 className="text-4xl font-bold  mb-6 text-center font-serif text-gray-100">
          Anime List
        </h2>
        <AnimeList />
      </div>
    </div>
  );
}

export default Home;
