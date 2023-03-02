import React from "react";
import { Card, Label, TextInput, Button } from "flowbite-react";

const TodayEntry = () => {
  return (
    <Card>
      <h5
        className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        value="Today's entry"
      >Today's Entry</h5>
      <form className="flex flex-col gap-4">
        <div className="flex">
          <div className="my-2 block w-20">
            <Label htmlFor="week" value="Week" />
          </div>
          <TextInput id="week" type="text" required={true} />
        </div>
        <div className="flex">
          <div className="mb-2 block w-20">
            <Label htmlFor="day" value="Day" />
          </div>
          <TextInput id="day" type="text" required={true} />
        </div>
        <div className="flex">
          <div className="mb-2 block w-20">
            <Label htmlFor="day" value="Workout" />
          </div>
          <TextInput id="day" type="text" placeholder="What muscle group?" />
        </div>
        <div className="flex">
          <div className="mb-2 block w-20">
            <Label htmlFor="day" value="Details" />
          </div>
          <TextInput
            id="day"
            type="text"
            placeholder="Exercises you did today"
          />
        </div>
        <div className="flex">
          <div className="mb-2 block w-20">
            <Label htmlFor="day" value="Food" />
          </div>
          <TextInput
            id="day"
            type="text"
            placeholder="What did you have today?"
          />
        </div>
        <div className="flex">
          <div className="mb-2 block w-20">
            <Label htmlFor="day" value="Feeling" />
          </div>
          <TextInput id="day" type="text" placeholder="out of 10" />
        </div>
        <div className="flex">
          <div className="mb-2 block w-20">
            <Label htmlFor="day" value="Image" />
          </div>
          <TextInput id="day" type="text" placeholder="upload your image" />
        </div>

        <Button color="success" type="submit">
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default TodayEntry;
