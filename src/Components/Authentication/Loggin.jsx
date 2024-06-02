import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "../Authentication/SingUp";
import river from "../../accets/river.png";
import ForgetPassword from "./ForgetPassword";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(true);
  const { login } = useContext(AuthContext);
  const [openPass, setOpenPass] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setSignUpOpen(!signUpOpen);
    setOpenLogin(!openLogin);
  };

  const handleOpen = () => {
    setOpenPass(!openPass);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const token = {
      email: email,
      password: password,
    };
    login(token);
    setEmail("");
    setPassword("");
    navigate("/");
  };

  return (
    <div>
      <Link to="/login"></Link>
      {openLogin && !openPass && (
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage: `url(${river})`,
          }}
        >
          <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-serif">
                  LOG IN
                </h2>
              </div>
              <form className="mt-8 space-y-6" onSubmit={handleClick}>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm h-12"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm h-12"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900 font-serif"
                    >
                      Remember me
                    </label>
                  </div>

                  {!openPass && (
                    <div className="text-sm font-serif text-indigo-200 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <button type="button" onClick={handleOpen}>
                        Forget Password
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-serif"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M4 8V6a4 4 0 118 0v2h2a1 1 0 011 1v5a2 2 0 01-2 2H5a2 2 0 01-2-2V9a1 1 0 011-1h2zm2-2v2h8V6a2 2 0 00-2-2H6a2 2 0 00-2 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Log In
                  </button>

                  <button
                    type="button"
                    onClick={handleToggle}
                    className="mt-1 font-serif group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {signUpOpen && (
        <SignUp handleToggle={handleToggle} signUpOpen={signUpOpen} />
      )}
      {openPass && (
      <ForgetPassword openPass={openPass} setOpenPass={setOpenPass}/>
      )}
    </div>
  );
}

export default Login;
