/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AnimeContext = createContext({
  Anime: [],
  fetchDataFromApi: () => {},
  HandleApi:()=>{}
});

export const AnimeProvider = ({ children }) => {
  const [Anime, setAnime] = useState([]);

  const handleFetch = async () => {
    try {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=naruto&sfw`)
      const resData = await res.json();
      console.log(resData);
      const array = []
      for (const key in resData) {
        array.push(resData[key])
      }
      setAnime(array);
    } catch (err) {
      console.log(err);
    }
  };

  const HandleClick =async(user)=>{
 try{
 const res = await fetch(
   `https://anime-api-f9b87-default-rtdb.firebaseio.com/user.json`,
   {
     method: "POST",
     body: JSON.stringify(user),
     headers: {
       "Content-type": "application/json",
     },
   }
 );
 const resData = await res.json();
 console.log(resData);
 }catch(err){
console.log("Contact-US",err);
 }
  }

  const contextValue = {
    Anime: Anime,
    fetchDataFromApi: handleFetch,
    HandleApi:HandleClick
  };

  return (
    <AnimeContext.Provider value={contextValue}>
      {children}
    </AnimeContext.Provider>
  );
};
