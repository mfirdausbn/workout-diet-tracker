import React, { useContext, useEffect } from "react";
import WeeklyEntries from "../components/WeeklyEntries";
// import appContext from "../context/AppContext";

const WeeklyPage = () => {
//   const ctx = useContext(appContext);

//   useEffect(() => {
//     ctx.SET_ACCESS_TOKEN(localStorage.getItem("token"));
//     console.log(localStorage.getItem("token"));
//     console.log(ctx.ACCESS_TOKEN);
//   }, []);

  return (
    <div>
      <WeeklyEntries />
    </div>
  );
};

export default WeeklyPage;
