import React, { useState } from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";


import NavBarFB from "./components/NavBarFB";

import Dashboard from "./pages/Dashboard";
import HeatMap from "./pages/HeatMap";
import WeeklyPage from "./pages/WeeklyPage";
import Exercises from "./pages/Exercises";
import LoginPage from "./pages/LoginPage";

import appContext from "./context/AppContext";

function App() {
  const [ACCESS_TOKEN, SET_ACCESS_TOKEN] = useState("");

  return (
    <>
      <appContext.Provider
        value={{
          ACCESS_TOKEN,
          SET_ACCESS_TOKEN,
        }}
      >
        <NavBarFB />

        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/weeklyPage" element={<WeeklyPage />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/heatMap" element={<HeatMap />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </appContext.Provider>
    </>
  );
}

export default App;
