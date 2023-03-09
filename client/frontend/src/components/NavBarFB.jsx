import React, { useState } from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import pirAvatar from "../assets/pirAvatar.png";
import { NavbarLink } from "flowbite-react/lib/esm/components/Navbar/NavbarLink";

const NavBarFB = () => {
  const logOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="h-20 z-10">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <div className="h-16"></div>
          {localStorage.getItem("token") && (
            <div className="flex items-center space-x-4 ml-4">
              <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <img src={pirAvatar} />
              </div>
              <div className="font-medium ">
                <div>Firdaus Nooraznan</div>
                <div className="text-sm text-gray-500">
                  Journey started on 10 March 2023
                </div>
              </div>
            </div>
          )}

          {/* <span className="self-center whitespace-nowrap text-md font-semibold  ml-24">
          The hard days are the best because that's when champions are made, so if you push through, you can push through anything”.
          </span> */}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link to="/home">Home</Link>
          <Link to="/weeklyPage">Weekly Outlook</Link>
          <Link to="/exercises">Exercises</Link>
          <Link to="/results">Results</Link>

          <NavbarLink href="/home" onClick={logOut}>
            Logout
          </NavbarLink>
        </Navbar.Collapse>
        {/* use <Navbar.Link> because it refreshes the page 
          using Link will keep the state of the token in the useContext*/}
      </Navbar>
    </div>
  );
};

export default NavBarFB;
