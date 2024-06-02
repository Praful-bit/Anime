/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import novel from "../../accets/novel.png"
function SignUp({ handleToggle, singUpOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    signUp(user);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center p-4"
        style={{
          backgroundImage: `url(${novel})`,
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-lg  transform transition duration-500 hover:scale-105 w-full max-w-md"
        >
          <h2 className="text-4xl font-semibold font-serif mb-6 text-center">Sign Up</h2>
          <label
            htmlFor="email"
            className="block text-black text-xl font-serif mb-1"
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
            className="w-full p-3 mb-4 border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <label
            htmlFor="password"
            className="block mb-1 font-serif text-black text-xl"
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="6"
            maxLength="20"
            placeholder="Enter Your Password"
            required
            className="w-full p-3 mb-6 border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="w-full py-2 bg-indigo-500 text-white font-bold rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400  text-2xl font-serif mb-2"
          >
            Sign Up
          </button>
          {!singUpOpen && (
            <button
              onClick={handleToggle}
              type="button"
              className="w-full py-2 bg-indigo-500 text-white font-bold rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400  text-2xl font-serif"
            >
              Back To LogIn
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
