import React from "react";
import TodayEntry from "../components/TodayEntry";
import Quote from "../components/Quote";

const Dashboard = () => {
  return (
    <div>
      <div className="flex my-10">
        <div className="w-1/2 my-4 mx-12">
          <TodayEntry />
        </div>
        <div className="w-72 my-4 mx-48">
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
