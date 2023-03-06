import React, { useState, useEffect, useContext } from "react";
import { Card, Button, Accordion, Carousel } from "flowbite-react";
import axios from "axios";
import { Dropdown } from "flowbite-react";
import LoginPage from "./LoginPage";
import appContext from "../context/AppContext";

const Exercises = () => {
  

  const [exercises, setExercises] = useState([]);

  const fetchExcercises = async (muscleType) => {
    const baseUrl = "https://api.api-ninjas.com/v1/exercises?muscle=";
    const muscle = muscleType;
    console.log(muscleType);
    const fullUrl = `${baseUrl}${muscle}`;
    try {
      const response = await axios.get(fullUrl, {
        headers: {
          "X-Api-Key": "ubxDPIvOL8sJhmsCqBM4/A==YoxEBSKr2dOsJ0x8",
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      setExercises(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      
        <div>
          <div className=" mt-10 flex justify-center">
            <Dropdown
              label="Choose the muscle group you want to work on"
              placement="right-start"
              color="success"
              size="xl"
            >
              <Dropdown.Item
                onClick={() => {
                  fetchExcercises("abdominals");
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
                  fetchExcercises("chest");
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
                  fetchExcercises("middle_back");
                }}
              >
                Middle Back
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
            <div className="h-5/6 mx-36">
              <Carousel slideInterval={5000}>
                {exercises.map((exercise, index) => {
                  return (
                    <div className="">
                      <Card>
                        <div className="h-full p-10 grid grid-cols-5 grid-rows-5">
                          <div>{exercise.name}</div>
                          <div>Type: {exercise.type}</div>
                          <div>Muscle: {exercise.muscle}</div>
                          <div>Equipment: {exercise.equipment}</div>
                          <div>Difficulty: {exercise.difficulty}</div>
                          <div className="col-span-5 row-start-3 row-span-2">
                            Instructions: {exercise.instructions}
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
      
    </div>
  );
};

export default Exercises;
