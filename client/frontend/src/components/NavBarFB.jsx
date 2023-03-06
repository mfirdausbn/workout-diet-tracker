import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";


const NavBarFB = () => {

  const logOut = () => {
    localStorage.removeItem("token");
}
  
  return (
    <div className="">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <div className="flex items-center space-x-4 ml-4">
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                className="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="font-medium ">
              <div>Firdaus Nooraznan</div>
              <div className="text-sm text-gray-500">
                Journey started on 10 March 2023
              </div>
            </div>
          </div>
          <span className="self-center whitespace-nowrap text-md font-semibold  ml-24">
          The hard days are the best because that's when champions are made, so if you push through, you can push through anything”.
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link to="/dashboard">Home</Link>
          <Link to="/weeklyPage">Weekly Outlook</Link>
          <Link to="/exercises">Exercises</Link>
          <Link to="/heatMap">HeatMap</Link>
          <Navbar.Link href="/dashboard" onClick={logOut}>Logout</Navbar.Link> 
        </Navbar.Collapse>
        {/* use <Navbar.Link> because it refreshes the page 
          using Link will keep the state of the token in the useContext*/}
      </Navbar>
    </div>
  );
};

export default NavBarFB;
