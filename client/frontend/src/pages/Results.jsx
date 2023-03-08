import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from "flowbite-react";
import appContext from "../context/AppContext";
import axios from "axios";
import { Buffer } from "buffer";

const Results = () => {
  const ctx = useContext(appContext);
  const [firstEntry, setFirstEntry] = useState({});
  const [lastEntry, setLastEntry] = useState([]);

  const fetchFirstEntry = async () => {
    // setIsLoading(true);
    const bodyData = JSON.stringify({
      week: 1,
      day: 1,
    });
    const options = {
      headers: {
        Authorization: `Bearer ${ctx.ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "http://127.0.0.1:5001/entry/showbydayandweek",
        bodyData,
        options
      );
      
      setFirstEntry(res.data.entry[0]);
      
      console.log("First entry:", res.data.entry[0]);
    } catch (err) {
      console.log(err);
    } finally {
      // setIsLoading(false);
    }
  };

  const fetchLastEntry = async () => {
    // setIsLoading(true);
    const bodyData = JSON.stringify({
      week: 12,
      day: 7,
    });
    const options = {
      headers: {
        Authorization: `Bearer ${ctx.ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "http://127.0.0.1:5001/entry/showbydayandweek",
        bodyData,
        options
      );
      
      setLastEntry(res.data.entry[0]);
      
      console.log("Last Entry:", res.data.entry[0]);
    } catch (err) {
      console.log(err);
    } finally {
      // setIsLoading(false);
    }
  };

  //   useEffect(() => {
  //     fetchFirstEntry();
  //     fetchLastEntry();
  //   });

  const fetchResults = () => {
    fetchFirstEntry();
    fetchLastEntry();
    console.log(firstEntry);
    console.log(lastEntry);
  };

  return (
    <>
      <div>
        <Button
          onClick={() => {
            fetchResults();
          }}
        >
          Results Here
        </Button>
      </div>
      <div>
        <div>
          {firstEntry && (
            <Card>
              <h5 className="flex justify-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                First
              </h5>
              <div className="flex justify-evenly">
                <div>
                  <ul>Workout: {firstEntry.workout}</ul>
                  <ul>Details: {firstEntry.woDetails}</ul>
                  <ul>Food: {firstEntry.food}</ul>
                  <ul>Feeling: {firstEntry.feeling} </ul>
                </div>

                <div className="w-48">
                  {/* <img src={`data:image/jpg;base64,${base64string}`} /> */}
                </div>
              </div>
            </Card>
          )}
        </div>
        <div>
          {lastEntry && (
            <Card>
              <h5 className="flex justify-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Final Entry
              </h5>
              <div className="flex justify-evenly">
                <div>
                  <ul>Workout: {lastEntry.workout}</ul>
                  <ul>Details: {lastEntry.woDetails}</ul>
                  <ul>Food: {lastEntry.food}</ul>
                  <ul>Feeling: {lastEntry.feeling} </ul>
                </div>

                <div className="w-48">
                  {/* <img src={`data:image/jpg;base64,${base64string}`} /> */}
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default Results;
