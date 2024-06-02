/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  signUp: (user) => {},
  forget:(email)=>{}
});

export const AuthContextProvider = ({ children }) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(
    initialToken ? JSON.parse(initialToken) : null
  );
  const userLoggedIn = !!token;

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
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
      console.log(resData);
      setToken({ idToken: resData.idToken });
    } catch (err) {
      console.log("Error in login", err);
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
      console.log(resData);
      setToken({ idToken: resData.idToken });
    } catch (err) {
      console.log("Error in SignUp", err);
    }
  };

  const forgetPassword =async(email)=>{
   try{
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
   const resData = await res.json()
   console.log(resData)
   }catch(err){
    console.log('error in forgetPassword',err);
   }
  }

  const contextValue = {
    token: token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logOutHandler,
    signUp: signUpHandler,
    forget: forgetPassword,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
