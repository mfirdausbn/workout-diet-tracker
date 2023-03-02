import React, { useState } from "react";
import { Card, Label, Button } from "flowbite-react";
import axios from "axios";

const TodayEntry = () => {
  const [entry, setEntry] = useState({
    week: "",
    day: "",
    workout: "",
    feeling: "",
    woDetails: "",
    food: "",
  });

  const handleChange = (e) => {
    setEntry({
      ...entry,
      [e.target.name]: e.target.value,
    });
  };

  const createEntry = async (e) => {
    e.preventDefault();
    const formData = new FormData(); // create an empty form data object

    // populate the form data object with input data
    formData.append("week", entry.week);
    formData.append("day", entry.day);
    formData.append("workout", entry.workout);
    formData.append("feeling", entry.feeling);
    formData.append("woDetails", entry.woDetails);
    // formData.append("entryImg", file);
    formData.append("food", entry.food);
   

    // pass the form data object to the server endpoint
    try {
      const response = await axios.put(
        "http://127.0.0.1:5001/entry/create",
        // formData,
        {
          week: entry.week,
          day: entry.day,
          workout: entry.workout,
          feeling: entry.feeling,
          woDetails: entry.woDetails,
          food: entry.food,
        },

        {
          headers: {
            // "Content-Type": "multipart/form-data",
            "Content-Type": "application/json",

            // Authorization: `Bearer ${ctx.ACCESS_TOKEN}`,
          },
        }
      );
      console.log(response);
      // const url = "http://127.0.0.1:5001/entry/create";

      // const response = await fetch(url, {
      //   method: "PUT",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // return response.json();
    } catch (error) {
      console.error(error.response);
    }

    // unable to console log the form data directly. need to deconstruct to view as per below
    for (const pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
    // setEntry({
    //   week: "",
    //   day: "",
    //   workout: "",
    //   feeling: "",
    //   woDetails: "",
    //   food: "",
    // });
  };

  return (
    <div>
      <Card>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Today's Entry
        </h5>

        <form className="flex flex-col gap-4" onSubmit={(e) => createEntry(e)}>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full group">
              <div className="flex">
                <div className="my-2 block w-32">
                  <Label htmlFor="week" value="Week" />
                </div>
                <input
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                  id="week"
                  type="text"
                  required={true}
                  name="week"
                  value={entry.week}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className="flex">
              <div className="mb-2 block w-32">
                <Label htmlFor="day" value="Day" />
              </div>
              <input
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                id="day"
                type="text"
                required={true}
                name="day"
                value={entry.day}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full group">
              <div className="flex">
                <div className="mb-2 block w-32">
                  <Label htmlFor="day" value="Workout" />
                </div>
                <input
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                  id="day"
                  type="text"
                  placeholder="What muscle group?"
                  name="workout"
                  value={entry.workout}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className="flex">
              <div className="mb-2 block w-32">
                <Label htmlFor="day" value="Feeling" />
              </div>
              <input
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                id="day"
                type="text"
                placeholder="How do you feel"
                name="feeling"
                value={entry.feeling}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="flex">
            <div className="mb-2 block w-28">
              <Label htmlFor="day" value="Details" />
            </div>
            <input
              className="h-32 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
              id="day"
              type="text"
              placeholder="Write your workout here..."
              name="woDetails"
              value={entry.woDetails}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="flex">
            <div className="mb-2 block w-28">
              <Label htmlFor="day" value="Food" />
            </div>
            <input
              className="h-24 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-800 focus:border-green-500 block w-full p-2.5"
              id="day"
              type="text"
              placeholder="What did you eat today?"
              name="food"
              value={entry.food}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="flex">
            <div className="w-28">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="file_input"
              >
                Upload file
              </label>
            </div>
            <div className="ml-2">
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-200 dark:border-green-600 dark:placeholder-green-400"
                id="file_input"
                type="file"
              ></input>
            </div>
          </div>

          <Button color="success" type="submit">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default TodayEntry;
