import React from "react";
import { Navbar } from "flowbite-react";


const NavBarFB = () => {
  
  return (
    <div className="bg-green-200">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand
        //   as={{
        //     $$typeof: Symbol(react.forward_ref),
        //     render: LinkWithRef,
        //   }}
        //   to="/navbars"
        >
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
            
          /> */}

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
            <div className="font-medium dark:text-white">
              <div>Firdaus Nooraznan</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Journey started on 10 March 2023
              </div>
            </div>
          </div>
          <span className="self-center whitespace-nowrap text-md font-semibold dark:text-white ml-24">
          The hard days are the best because that's when champions are made, so if you push through, you can push through anything”.
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/dashboard" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/weeklyPage">Weekly Outlook</Navbar.Link>
          <Navbar.Link href="/exercises">Exercises</Navbar.Link>
          <Navbar.Link href="/heatMap">HeatMap</Navbar.Link>
          <Navbar.Link href="/dashboard">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarFB;
