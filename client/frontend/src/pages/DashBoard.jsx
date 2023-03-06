import React, { useContext, useState } from "react";
import TodayEntry from "../components/TodayEntry";
import Quote from "../components/Quote";
import appContext from "../context/AppContext";
import LoginPage from "./LoginPage";

const Dashboard = () => {
  const ctx = useContext(appContext);

  // const [isLoggedIn, setIsLoggedIn] = useState(null);

  return (
    <>
      {/* NO ACCESS TOKEN, THEN DISPLAY THIS */}
      {
      !localStorage.getItem("token")
      // !ctx.ACCESS_TOKEN 
       && (
        <LoginPage
          // setIsLoggedIn={setIsLoggedIn}
          // SET_ACCESS_TOKEN={SET_ACCESS_TOKEN}
          // ACCESS_TOKEN={ACCESS_TOKEN}
        />
      )}

      {/* HAVE ACCESS TOKEN, THEN DISPLAY THIS */}
      {localStorage.getItem("token") && (
        <div className="flex justify-evenly my-10">
          <div className="w-1/2 my-4 mx-12">
            <TodayEntry />
          </div>
          <div className="w-72 my-4 mx-48">
            <Quote />
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
