import React, { useState } from "react";
import { Card, Carousel } from "flowbite-react";
import axios from "axios";
import { Dropdown } from "flowbite-react";


const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  
  const fetchExcercises = async (muscleType) => {
    const baseUrl = "https://exercisedb.p.rapidapi.com/exercises/target/";
    // "https://api.api-ninjas.com/v1/exercises?muscle="
    const muscle = muscleType;
    console.log(muscleType);
    const fullUrl = `${baseUrl}${muscle}`;
    try {
      const response = await axios.get(fullUrl, {
        headers: {
          // "X-Api-Key": "ubxDPIvOL8sJhmsCqBM4/A==YoxEBSKr2dOsJ0x8",
          "X-RapidAPI-Key":
            "1099a8e149mshdbfec4c00e83bc7p1a48f4jsn4215ab71c789",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      setExercises(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //move the API keys into a .env file

  return (
    <div>
      {localStorage.getItem("token") && (
        <div>
          <div className=" mt-10 flex justify-center">
            <Dropdown
              label="Choose the muscle group you want to work on"
              // placement="left-start"
              size="xl"
              color="gray"
              outline={true}
              gradientDuoTone="tealToLime"
            >
              <Dropdown.Item
                onClick={() => {
                  fetchExcercises("abs");
                }}
              >
                Abdominals
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  fetchExcercises("biceps");
                }}
              >
                Biceps
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  fetchExcercises("calves");
                }}
              >
                Calves
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  fetchExcercises("pectorals");
                }}
              >
                Chest
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  fetchExcercises("forearms");
                }}
              >
                Forearms
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  fetchExcercises("lats");
                }}
              >
                Lats
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  fetchExcercises("traps");
                }}
              >
                Traps
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  fetchExcercises("triceps");
                }}
              >
                Triceps
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  fetchExcercises("cardiovascular system");
                }}
              >
                Cardiovascular system
              </Dropdown.Item>
            </Dropdown>
          </div>
          <div className="flex justify-center">
            <div className="w-3/4">
              {/* <Accordion alwaysOpen={true}>
            {exercises.map((exercise, index) => {
              return (
                <Accordion.Panel>
                  <Accordion.Title>Exercise number {index + 1}</Accordion.Title>
                  <Accordion.Content>
                    <Card>
                      <ul>{exercise.name}</ul>
                      <ul>Type: {exercise.type}</ul>
                      <ul>Muscle: {exercise.muscle}</ul>
                      <ul>Equipment: {exercise.equipment}</ul>
                      <ul>Difficulty: {exercise.difficulty}</ul>
                      <ul>Instructions: {exercise.instructions}</ul>
                    </Card>
                  </Accordion.Content>
                </Accordion.Panel>
              );
            })}
          </Accordion> */}
            </div>
          </div>
          <div className="h-screen">
            <div className="h-1/2 mx-36">
              <Carousel slideInterval={1000000}>
                {exercises.map((exercise, index) => {
                  return (
                    <div className="text-md font-semibold">
                      <Card className="mx-48">
                        <div className="flex justify-around ">
                          <div className="grid grid-rows-3 grid-cols-2">
                            <div>Exercise: </div>
                            <div className="text-lg "> {exercise.name}</div>
                            <div>Target Muscle: </div>
                            <div className="text-lg ">{exercise.target}</div>
                            <div>Equipment: </div>
                            <div className="text-lg ">{exercise.equipment}</div>
                          </div>
                          <div className="">
                            <img src={exercise.gifUrl} />
                          </div>
                        </div>
                      </Card>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exercises;
