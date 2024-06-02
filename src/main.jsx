import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import AnimeDetails from "./Components/AnimeList/AnimeDetails.jsx";
import AnimeList from "./Components/AnimeList/AnimeList.jsx";
// import AnimeList from "./Components/AnimeList/AnimeList.jsx";
// import App from "./App.jsx";
// import Home from "./Components/Home/Home.jsx";
// import About from "./Components/About/About.jsx";
// import ContactUs from "./Components/ContactUs/ContactUs.jsx";
// import Loggin from "./Components/Authentication/Loggin.jsx";


const App = lazy(()=> import("./App.jsx"));
const Home = lazy(()=> import("./Components/Home/Home.jsx"));
const About = lazy(()=> import ('./Components/About/About.jsx'))
const ContactUs = lazy(()=> import('./Components/ContactUs/ContactUs.jsx'))
const Loggin = lazy(()=> import('./Components/Authentication/Loggin.jsx'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Suspense fallback={<p>Loading...</p>}><App /></Suspense>}>
      <Route path="/loggin" element={<Suspense fallback={<p>Loading...</p>}><Loggin/></Suspense>}/>
      <Route path="/" element={<Suspense fallback={<p>Loading...</p>}><Home /></Suspense>} />
      <Route path="/about" element={<Suspense fallback={<p>Loading...</p>}><About /></Suspense>} />
      <Route path="/contact-us" element={<Suspense fallback={<p>Loading...</p>}><ContactUs /></Suspense>} />
      <Route path ='/anime' element={<AnimeList/>}/>
      <Route path="/anime/:id" element ={<AnimeDetails/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
