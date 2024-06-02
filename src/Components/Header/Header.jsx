import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

export default function Header() {
  const { logout } = useContext(AuthContext);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow sticky top-0 z-50 w-full bg-custom-header bg-cover bg-center">
      <nav className="border-gray-200 bg-black bg-opacity-70 px-4 lg:px-6 py-2.5">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <NavLink to="/" className="text-3xl font-serif text-white">
            AniManGa.in
          </NavLink>
          <div className="flex items-center lg:hidden">
            <button
              className="px-3 py-2 border rounded text-white border-white hover:text-orange-700 hover:border-orange-700"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <button
              onClick={logout}
              className="ml-4 px-4 py-2 bg-red-600 text-white text-lg font-bold rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300"
            >
              LogOut
            </button>
          </div>
          <div
            className={`w-full lg:flex lg:items-center lg:justify-center ${
              isMenuOpen ? "" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 text-center text-white">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 px-4 text-2xl font-serif duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                  activeClassName="text-blue-700"
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-2 px-4 text-2xl font-serif duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                  activeClassName="text-blue-700"
                  onClick={toggleMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className="block py-2 px-4 text-2xl font-serif duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                  activeClassName="text-blue-700"
                  onClick={toggleMenu}
                >
                  Contact-Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex lg:items-center">
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 text-white text-lg font-bold rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300"
            >
              LogOut
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
