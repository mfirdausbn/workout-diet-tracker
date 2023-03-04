import React, { useState } from "react";
import { Card, Button, Accordion } from "flowbite-react";
import ButtonWeek from "./ButtonWeek";
import { Buffer } from "buffer";

const WeeklyEntries = () => {
  const [week, setWeek] = useState("1");
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <div>
      <div>
        <ButtonWeek week={week} setWeek={setWeek} setEntries={setEntries} />
      </div>


      <div>
        <Accordion>
      {/* mapping */}
      {entries.map((entry) => {
        const base64string = Buffer.from(entry.entryImg.data.data).toString(
          "base64"
        );
        return (
          <Accordion.Panel>
            <Accordion.Title>Week {week} Day {entry.day}</Accordion.Title>
              <Accordion.Content>
                <Card>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Day {entry.day} Entry
                  </h5>
                  <div className="">
                    <ul>Workout: {entry.workout}</ul>
                    <ul>Details: {entry.woDetails}</ul>
                    <ul>Food: {entry.food}</ul>
                    <ul>Feeling: {entry.feeling} </ul>
                    <img src={`data:image/jpg;base64,${base64string}`} />
                  </div>
                  <Button color="success">
                    Update
                  </Button>
                </Card>
              </Accordion.Content>
          </Accordion.Panel>
        )
      })}
      </Accordion>
      </div>



      {/* {entries ? (
        <div>
          <Accordion alwaysOpen={true}>
            <Accordion.Panel>
              <Accordion.Title>Week {week} Day 1</Accordion.Title>
              <Accordion.Content>
                <Card>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Day 1 Entry
                  </h5>
                  <div className="">
                    <ul>Workout: {entries[0].workout}</ul>
                    <ul>Details: {entries[0].woDetails}</ul>
                    <ul>Food: {entries[0].food}</ul>
                    <ul>Feeling: {entries[0].feeling} </ul>
                    <ul></ul>
                  </div>
                  <Button color="success">
                    Update
                    
                  </Button>
                </Card>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Week 1 Day 2</Accordion.Title>
              <Accordion.Content>
                <Card>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Day 2 Entry
                  </h5>
                  <div className="">
                    <ul>Workout: </ul>
                    <ul>Details: </ul>
                    <ul>Food: </ul>
                    <ul>Feeling: </ul>
                    <ul></ul>
                  </div>
                  <Button color="success">
                    Update
                    <svg
                      className="ml-2 -mr-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </Card>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Week 1 Day 3</Accordion.Title>
              <Accordion.Content>
                <Card>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Day 3 Entry
                  </h5>
                  <div className="">
                    <ul>Workout: </ul>
                    <ul>Details: </ul>
                    <ul>Food: </ul>
                    <ul>Feeling: </ul>
                    <ul></ul>
                  </div>
                  <Button color="success">
                    Update
                    <svg
                      className="ml-2 -mr-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </Card>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Week 1 Day 4</Accordion.Title>
              <Accordion.Content>
                <Card>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Day 4 Entry
                  </h5>
                  <div className="">
                    <ul>Workout: </ul>
                    <ul>Details: </ul>
                    <ul>Food: </ul>
                    <ul>Feeling: </ul>
                    <ul></ul>
                  </div>
                  <Button color="success">
                    Update
                    <svg
                      className="ml-2 -mr-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </Card>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Week 1 Day 5</Accordion.Title>
              <Accordion.Content>
                <Card>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Day 5 Entry
                  </h5>
                  <div className="">
                    <ul>Workout: </ul>
                    <ul>Details: </ul>
                    <ul>Food: </ul>
                    <ul>Feeling: </ul>
                    <ul></ul>
                  </div>
                  <Button color="success">
                    Update
                    <svg
                      className="ml-2 -mr-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </Card>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Week 1 Day 6</Accordion.Title>
              <Accordion.Content>
                <Card>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Day 6 Entry
                  </h5>
                  <div className="">
                    <ul>Workout: </ul>
                    <ul>Details: </ul>
                    <ul>Food: </ul>
                    <ul>Feeling: </ul>
                    <ul></ul>
                  </div>
                  <Button color="success">
                    Update
                    <svg
                      className="ml-2 -mr-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </Card>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Week 1 Day 7</Accordion.Title>
              <Accordion.Content>
                <Card>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Day 7 Entry
                  </h5>
                  <div className="">
                    <ul>Workout: </ul>
                    <ul>Details: </ul>
                    <ul>Food: </ul>
                    <ul>Feeling: </ul>
                    <ul></ul>
                  </div>
                  <Button color="success">
                    Update
                    <svg
                      className="ml-2 -mr-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </Card>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      ) : null} */}
    </div>
  );
};

export default WeeklyEntries;
