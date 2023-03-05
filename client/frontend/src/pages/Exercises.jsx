import React, { useState, useEffect } from "react";
import { Card, Button, Accordion } from "flowbite-react";
import axios from "axios";
import { Dropdown } from "flowbite-react";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  const fetchExcercises = async () => {
    try {
      const response = await axios.get(
        "https://api.api-ninjas.com/v1/exercises?muscle=biceps",
        {
          headers: {
            "X-Api-Key": "ubxDPIvOL8sJhmsCqBM4/A==YoxEBSKr2dOsJ0x8",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setExercises(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Dropdown label="Dropdown">
        <Dropdown.Item onClick={fetchExcercises}>Abdominals</Dropdown.Item>
        <Dropdown.Item onClick={fetchExcercises}>Biceps</Dropdown.Item>
        <Dropdown.Item onClick={fetchExcercises}>Calves</Dropdown.Item>
        <Dropdown.Item onClick={fetchExcercises}>Chest</Dropdown.Item>
        <Dropdown.Item onClick={fetchExcercises}>Forearms</Dropdown.Item>
        <Dropdown.Item onClick={fetchExcercises}>Lats</Dropdown.Item>
        <Dropdown.Item onClick={fetchExcercises}>Traps</Dropdown.Item>
        <Dropdown.Item onClick={fetchExcercises}>Triceps</Dropdown.Item>
        <Dropdown.Item onClick={fetchExcercises}>Middle Back</Dropdown.Item>
      </Dropdown>
      <Button onClick={fetchExcercises}>Fetch exercises</Button>
      <div>
        <Accordion alwaysOpen={true}>
          {exercises.map((exercise, index) => {
            return (
              <Accordion.Panel>
                <Accordion.Title>Exercise number {index + 1}</Accordion.Title>
                <Accordion.Content>
                  <ul>{exercise.name}</ul>
                  <ul>Type: {exercise.type}</ul>
                  <ul>Muscle: {exercise.muscle}</ul>
                  <ul>Equipment: {exercise.equipment}</ul>
                  <ul>Difficulty: {exercise.difficulty}</ul>
                  <ul>Instructions: {exercise.instructions}</ul>
                </Accordion.Content>
              </Accordion.Panel>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default Exercises;
