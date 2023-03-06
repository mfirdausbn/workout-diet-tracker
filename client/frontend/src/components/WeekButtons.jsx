import { React, useContext, useEffect, useState } from "react";
import { Button } from "flowbite-react";
import axios from "axios";
import appContext from "../context/AppContext";

const WeekButtons = ({ week, setWeek, setEntries }) => {
  const ctx = useContext(appContext);
  const handleClick = (week) => {
    setWeek(week);
    console.log(week);
  };

  
 

  useEffect(() => {
    handleFetchEntries();
    
  }, [week]);

  const handleFetchEntries = async () => {
    // setIsLoading(true);
    const bodyData = JSON.stringify({ week: week });
    const options = {
      headers: {
        Authorization: `Bearer ${ctx.ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "http://127.0.0.1:5001/entry/showbyweek",
        bodyData,
        options
      );
      setEntries(res.data.entries);
      console.log(res);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      // setIsLoading(false);
    }
    
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <div>
          <Button
          
            size="xl"
            color="gray"
            outline={true}
            gradientDuoTone="tealToLime"
            pill={true}
            onClick={() => {
              handleClick(1);
            }}
          >
            Week 1
          </Button>
        </div>
        <div>
          <Button
            size="xl"
            color="gray"
            outline={true}
            gradientDuoTone="tealToLime"
            pill={true}
            onClick={() => handleClick(2)}
          >
            Week 2
          </Button>
        </div>
        <div>
          <Button
            size="xl"
            color="gray"
            outline={true}
            gradientDuoTone="tealToLime"
            pill={true}
            onClick={() => handleClick(3)}
          >
            Week 3
          </Button>
        </div>
        <div>
          <Button
            size="xl"
            color="gray"
            outline={true}
            gradientDuoTone="tealToLime"
            pill={true}
            onClick={() => handleClick(4)}
          >
            Week 4
          </Button>
        </div>
        <div>
          <Button
            size="xl"
            color="gray"
            outline={true}
            gradientDuoTone="tealToLime"
            pill={true}
            onClick={() => handleClick(5)}
          >
            Week 5
          </Button>
        </div>
        <div>
          <Button
            size="xl"
            color="gray"
            outline={true}
            gradientDuoTone="tealToLime"
            pill={true}
            onClick={() => handleClick(6)}
          >
            Week 6
          </Button>
        </div>
        <div>
          <Button
            size="xl"
            color="gray"
            outline={true}
            gradientDuoTone="tealToLime"
            pill={true}
            onClick={() => handleClick(7)}
          >
            Week 7
          </Button>
        </div>
        <div>
          <Button
            size="xl"
            color="gray"
            outline={true}
            gradientDuoTone="tealToLime"
            pill={true}
            onClick={() => handleClick(8)}
          >
            Week 8
          </Button>
        </div>
        <div>
          <Button
            size="xl"
            color="gray"
            outline={true}
            gradientDuoTone="tealToLime"
            pill={true}
            onClick={() => handleClick(9)}
          >
            Week 9
          </Button>
        </div>
        <div>
          <Button
            size="xl"
            color="gray"
            outline={true}
            gradientDuoTone="tealToLime"
            pill={true}
            onClick={() => handleClick(10)}
          >
            Week 10
          </Button>
        </div>
        <div>
          <Button
            size="xl"
            color="gray"
            outline={true}
            gradientDuoTone="tealToLime"
            pill={true}
            onClick={() => handleClick(11)}
          >
            Week 11
          </Button>
        </div>
        <div>
          <Button
            size="xl"
            color="gray"
            outline={true}
            gradientDuoTone="tealToLime"
            pill={true}
            onClick={() => handleClick(12)}
          >
            Week 12
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WeekButtons;
