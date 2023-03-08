import React, { useContext, useEffect, useState } from "react";
import { Card, Button, Label, Modal } from "flowbite-react";
import appContext from "../context/AppContext";
import axios from "axios";
import { Buffer } from "buffer";

const Results = () => {
  const ctx = useContext(appContext);
  const [firstEntry, setFirstEntry] = useState(null);
  const [lastEntry, setLastEntry] = useState(null);
  const [userInfo, setUserInfo] = useState();
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState({
    username: localStorage.getItem("username"),

    endWeight: "",
    endBodyFat: "",
    endMuscleMass: "",
  });

  const calculateDiff = (start, end) => {
    return parseInt(start) - parseInt(end);
  };

  const handleChange = (e) => {
    setUpdate({
      ...update,
      [e.target.name]: e.target.value,
    });
  };

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

  const fetchUserInfo = async () => {
    const currentUser = localStorage.getItem("username");
    const bodyData = JSON.stringify({ username: currentUser });
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "http://127.0.0.1:5001/user/currentUser",
        bodyData,
        options
      );
      console.log(res.data);
      setUserInfo(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUpdate = async (e) => {
    e.preventDefault();

    const bodyData = JSON.stringify({
      username: update.username,
      startWeight: userInfo.startWeight,
      startBodyFat: userInfo.startBodyFat,
      startMuscleMass: userInfo.startMuscleMass,
      endWeight: update.endWeight,
      endBodyFat: update.endBodyFat,
      endMuscleMass: update.endMuscleMass,
    });

    try {
      const response = await axios.patch(
        "http://127.0.0.1:5001/user/update",
        bodyData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchResults = () => {
    fetchFirstEntry();
    console.log("User:", localStorage.getItem("username"));
    fetchUserInfo();
  };

  const formUpdate = (e) => {
    fetchUpdate(e);
    setShow(!show);
    fetchUserInfo();
    fetchLastEntry();
  };

  return (
    <>
    {localStorage.getItem("token") && (<div className="flex flex-col items-center justify-center mt-4">
        <Button
          color="success"
          onClick={() => {
            fetchResults();
          }}
        >
          Display your first entry
        </Button>
      </div>)}
      
      <div>
        <div>
          {firstEntry && userInfo && (
            <div className="flex justify-center">
              <div className="w-2/3 m-4">
                <Card>
                  <h5 className="flex justify-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    First Entry
                  </h5>
                  <div className="flex justify-evenly text-md font-semibold">
                    <div>
                      <ul>Workout: {firstEntry.workout}</ul>
                      <ul>Details: {firstEntry.woDetails}</ul>
                      <ul>Food: {firstEntry.food}</ul>
                      <ul>Feeling: {firstEntry.feeling} </ul>
                    </div>
                    <div>
                      <ul>Start Weight: {userInfo.startWeight} kg</ul>
                      <ul>Start Body Fat: {userInfo.startBodyFat} %</ul>
                      <ul>Start Muscle Mass: {userInfo.startMuscleMass} %</ul>
                    </div>

                    <div className="w-48">
                      <img
                        src={`data:image/jpg;base64,${Buffer.from(
                          firstEntry.entryImg.data.data
                        ).toString("base64")}`}
                      />
                    </div>
                  </div>
                </Card>
                <div className="flex flex-col items-center justify-center mt-4 ">
                  <Button
                    color="success"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    Update your weight, body fat and muscle mass here
                  </Button>
                  <Modal show={show} onClose={() => setShow(!show)}>
                    <Modal.Header>
                      Update your weight, body fat and muscle mass
                    </Modal.Header>
                    <Modal.Body>
                      <Card>
                        <form
                          className="flex flex-col gap-4"
                          onSubmit={(e) => formUpdate(e)}
                        >
                          <div className="grid grid-cols-3 gap-6">
                            <div className="relative z-0 w-full group">
                              <div className="flex">
                                <div className="mb-2 block w-32 h-20">
                                  <Label value="Ending Weight" />
                                </div>
                                <input
                                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                  type="text"
                                  required={true}
                                  name="endWeight"
                                  value={update.endWeight}
                                  onChange={(e) => handleChange(e)}
                                />
                              </div>
                            </div>

                            <div className="flex">
                              <div className="mb-2 block w-32">
                                <Label value="Ending Body Fat" />
                              </div>
                              <input
                                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                type="text"
                                required={true}
                                name="endBodyFat"
                                value={update.endBodyFat}
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                            <div className="flex">
                              <div className="mb-2 block w-32">
                                <Label value="Ending Muscle Mass" />
                              </div>
                              <input
                                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                type="text"
                                name="endMuscleMass"
                                value={update.endMuscleMass}
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                          </div>
                          <Button color="success" type="submit">
                            Update
                          </Button>
                        </form>
                      </Card>
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          {lastEntry && (
            <div className="w-2/3">
              <Card>
                <h5 className="flex justify-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Final Entry
                </h5>
                <div className="flex justify-evenly text-md font-semibold">
                  <div>
                    <ul>Workout: {lastEntry.workout}</ul>
                    <ul>Details: {lastEntry.woDetails}</ul>
                    <ul>Food: {lastEntry.food}</ul>
                    <ul>Feeling: {lastEntry.feeling} </ul>
                  </div>
                  <div>
                    <ul>End weight: {userInfo.endWeight} kg</ul>
                    <ul>End Body Fat: {userInfo.endBodyFat} %</ul>
                    <ul>End Muscle Mass: {userInfo.endMuscleMass} %</ul>
                  </div>

                  <div className="w-48">
                    <img
                      src={`data:image/jpg;base64,${Buffer.from(
                        lastEntry.entryImg.data.data
                      ).toString("base64")}`}
                    />
                  </div>
                </div>
              </Card>

              <div class=" bg-green-100 flex flex-col justify-center relative overflow-hidden sm:py-12">
                <div class="max-w-7xl mx-auto">
                  <div class="relative group">
                    <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                      <div class="space-y-2 text-lg font-semibold">
                        <div className="flex justify-center ">
                          Congratulations on completing your 12 week journey.
                          You must look and feel great!
                        </div>
                        <br />
                        <div className="flex justify-center">
                          You have lost{" "}
                          {calculateDiff(
                            userInfo.startWeight,
                            userInfo.endWeight
                          )}{" "}
                          kg,{" "}
                          {calculateDiff(
                            userInfo.startBodyFat,
                            userInfo.endBodyFat
                          )}
                          % BodyFat and gained{" "}
                          {calculateDiff(
                            userInfo.endMuscleMass,
                            userInfo.startMuscleMass
                          )}
                          % Muscle Mass
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Results;
