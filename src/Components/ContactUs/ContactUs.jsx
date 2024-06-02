import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AnimeContext } from "../../Context/AnimeContext";
import monster from '../../accets/monster.jpg'
function ContactUs() {
  const { HandleApi } = useContext(AnimeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [des, setDes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      des: des,
    };
    HandleApi(user);
    setEmail("");
    setName("");
    setDes("");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-4"
      style={{
        backgroundImage: `url(${monster})`,
      }}
    >
      <Link to="/contact-us" >
      </Link>
      <div className="w-full max-w-md bg-white bg-opacity-10 rounded-lg shadow-lg p-6 transform transition-all duration-500 ease-in-out hover:scale-105">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-white"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300"
              placeholder="Enter Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-white"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300"
              placeholder="Enter Your Registered Email"
            />
          </div>
          <div>
            <label
              htmlFor="des"
              className="block text-lg font-medium text-white"
            >
              Description:
            </label>
            <input
              type="text"
              id="des"
              value={des}
              onChange={(e) => setDes(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300"
              placeholder="Please Describe Your Problem"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white text-lg font-semibold rounded-lg py-3 px-4 cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
