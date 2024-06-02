import { Outlet } from "react-router-dom";
// import './App.css'
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { AnimeProvider } from "./Context/AnimeContext";
import Loggin from "./Components/Authentication/Loggin";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const {token} = useContext(AuthContext)
  return (
    <AnimeProvider>
      {!token && <Loggin />}
      {token && (
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </AnimeProvider>
  );
}

export default App;
