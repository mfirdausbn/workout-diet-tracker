import React, { useState } from "react";
import { Route, Routes, Navigate} from "react-router-dom";

import NavBarFB from "./components/NavBarFB";

import Home from "./pages/Home";
import WeeklyPage from "./pages/WeeklyPage";
import Exercises from "./pages/Exercises";
import AdminPage from "./pages/AdminPage";
import Results from "./pages/Results";
import SlidingLoginPage from "./pages/SlidingLoginPage";

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
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/weeklyPage" element={<WeeklyPage />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/results" element={<Results />} />
          <Route path="/slidingLogin" element={<SlidingLoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </appContext.Provider>
    </>
  );
}

export default App;
