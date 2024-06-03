import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  signUp: (user) => {},
  forget: (email) => {}
});

export const AuthContextProvider = ({ children }) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken || null);
  const [loginError, setLoginError] = useState(null);
  const userLoggedIn = !!token;

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const loginHandler = async (credentials) => {
    try {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCdvmwW7-reJ0JgB1RZB8jXYxXVRSFaUw8`,
        {
          method: "POST",
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resData = await res.json();

      if (res.status !== 200) {
        setLoginError(resData.error.message);
        return;
      }

      setToken(resData.idToken);
      setLoginError(null);
    } catch (err) {
      console.error("Error in login", err);
      setLoginError("An error occurred during login.");
    }
  };

  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const signUpHandler = async (user) => {
    try {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCdvmwW7-reJ0JgB1RZB8jXYxXVRSFaUw8`,
        {
          method: "POST",
          body: JSON.stringify({
            email: user.email,
            password: user.password,
            returnSecureToken: true,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const resData = await res.json();
      if (resData.error) {
        throw new Error(resData.error.message);
      }
      setToken(resData.idToken);
    } catch (err) {
      console.error("Error in SignUp", err);
    }
  };

  const forgetPassword = async (email) => {
    try {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCdvmwW7-reJ0JgB1RZB8jXYxXVRSFaUw8`,
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: email.email,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const resData = await res.json();
      if (resData.error) {
        throw new Error(resData.error.message);
      }
      console.log(resData);
    } catch (err) {
      console.error("Error in forgetPassword", err);
    }
  };

  const contextValue = {
    token: token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logOutHandler,
    signUp: signUpHandler,
    forget: forgetPassword,
    loginError,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
