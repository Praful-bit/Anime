/* eslint-disable react/prop-types */

import { useContext, useRef } from "react";
import { AuthContext } from "../../Context/AuthContext";
import backgroundImage from "../../accets/naru.jpg";

function ForgetPassword({ openPass, setOpenPass }) {
  const { forget } = useContext(AuthContext);
  const newEmail = useRef();

  const handleForget = (e) => {
    e.preventDefault();
    const enterEmail = newEmail.current.value;
    const email = {
      email: enterEmail,
    };
    forget(email);
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-md w-full bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-serif font-extrabold text-gray-100">
          Forgot Password
        </h2>
        <form onSubmit={handleForget} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-serif font-medium text-gray-100"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              ref={newEmail}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Your Registered Email"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <button
              type="submit"
              className="w-full font-serif py-2 px-4 border border-transparent text-lg font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 transform hover:scale-105"
            >
              Forget Password
            </button>
            {openPass && (
              <button
                type="button"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold font-serif rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setOpenPass(false)}
              >
                Back To Login Page
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
