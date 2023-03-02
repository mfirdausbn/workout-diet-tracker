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
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Good Day Firdaus
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>Home</Navbar.Link>
          <Navbar.Link href="/navbars">Weekly Outlook</Navbar.Link>
          <Navbar.Link href="/navbars">Monthly Outlook</Navbar.Link>
          <Navbar.Link href="/navbars">HeatMap</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarFB;
