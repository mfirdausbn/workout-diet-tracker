import React, { useContext, useEffect, useState } from "react";
import { Card, Button, Accordion, Carousel } from "flowbite-react";
import ButtonWeek from "./WeekButtons";
import { Buffer } from "buffer";
import UpdateEntry from "./UpdateEntry";


const WeeklyEntries = () => {
  
  const [week, setWeek] = useState(1);
  const [entries, setEntries] = useState([]);

  // const [entryUpdated, setEntryUpdated] = useState(""); 
  // //this is to send down to UpdateEntry component to allow this component to rerender when entry is being updated
  
  // useEffect(() => {
    
  // },[entryUpdated])
 
  return (
    <>
      <div className="my-10 flex justify-center">
        <ButtonWeek week={week} setWeek={setWeek} setEntries={setEntries}  />
      </div>

      <div className="flex justify-center">
      <div className="w-3/4">
        <Accordion alwaysOpen={true} className="">
          {/* mapping */}
          {entries.map((entry) => {
            const base64string = Buffer.from(entry.entryImg.data.data).toString(
              "base64"
            );
            return (
              <Accordion.Panel>
                <Accordion.Title>
                  Week {week} Day {entry.day}
                </Accordion.Title>
                <Accordion.Content>
                  <Card>
                    <h5 className="flex justify-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Week {week} Day {entry.day} Entry
                    </h5>
                    <div className="flex justify-evenly">
                      <div>
                        <ul>Workout: {entry.workout}</ul>
                        <ul>Details: {entry.woDetails}</ul>
                        <ul>Food: {entry.food}</ul>
                        <ul>Feeling: {entry.feeling} </ul>
                      </div>

                      <div className="w-48">
                        <img src={`data:image/jpg;base64,${base64string}`} />
                      </div>
                    </div>
                    <UpdateEntry
                      day={entry.day}
                      week={entry.week}
                      workout={entry.workout}
                      woDetails={entry.woDetails}
                      food={entry.food}
                      feeling={entry.feeling}
                      id={entry._id}
                      // setEntryUpdated={setEntryUpdated}
                    />
                  </Card>
                </Accordion.Content>
              </Accordion.Panel>
            );
          })}
        </Accordion>
      </div>
      </div>
    </>
  );
};

export default WeeklyEntries;
