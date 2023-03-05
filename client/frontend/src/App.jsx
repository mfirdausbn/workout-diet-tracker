import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import NavBarFB from "./components/NavBarFB";
import Quote from "./components/Quote";
import TodayEntry from "./components/TodayEntry";
import WeeklyEntries from "./components/WeeklyEntries";
import Dashboard from "./pages/Dashboard";
import HeatMap from "./pages/HeatMap";
import WeeklyPage from "./pages/WeeklyPage";
import Exercises from "./pages/Exercises";

function App() {
  return (
    <>
      <NavBarFB />

      <Routes>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/weeklyPage" element={<WeeklyPage />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/heatMap" element={<HeatMap />} />
        {/* <div className='flex my-10'>
        <div className='w-1/2 my-4 mx-12'><TodayEntry /></div>
        <div className='w-72 my-4 mx-48'><Quote /></div>
      </div>
      <div className='w-3/4 mx-auto'><WeeklyEntries /></div> */}
      </Routes>
    </>
  );
}

export default App;
