import React, { useContext, useState } from "react";
import TodayEntry from "../components/TodayEntry";
import Quote from "../components/Quote";
import appContext from "../context/AppContext";
import LoginPage from "./LoginPage";
import SlidingLoginPage from "./SlidingLoginPage";

const Dashboard = () => {
  const ctx = useContext(appContext);

  return (
    <>
      {/* NO ACCESS TOKEN, DISPLAY LOGIN PAGE */}
      {
      !localStorage.getItem("token")
      // !ctx.ACCESS_TOKEN 
       && (
        <SlidingLoginPage/>
      )}

      {/* ACCESS TOKEN VALID, THEN DISPLAY THIS */}
      {localStorage.getItem("token") &&  (
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
