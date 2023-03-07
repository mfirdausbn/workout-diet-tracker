import { React, useContext, useEffect, useState } from "react";
import { Card, Label, Button, Modal } from "flowbite-react";
import axios from "axios";
import appContext from "../context/AppContext";

const UpdateEntry = (props) => {
  const ctx = useContext(appContext);

  const [show, setShow] = useState(false);

  const [file, setFile] = useState(null);
  const [update, setUpdate] = useState({
    // week: props.week,
    // day: props.day,
    // workout: props.workout,
    // feeling: props.feeling,
    // woDetails: props.woDetails,
    // food: props.food,
    // id: props.id,
  });

  const handleChange = (e) => {
    setUpdate({
      ...update,
      [e.target.name]: e.target.value,
    });
  };

  const formUpdate = (e) => {
    fetchUpdate(e);
    setShow(!show);
    props.setEntryUpdated(!props.entryUpdated);
  };

  const handleFetchEntries = async () => {
    // setIsLoading(true);
    const bodyData = JSON.stringify({ week: props.week });
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
      props.setEntries(res.data.entries);
      console.log(res);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      // setIsLoading(false);
    }
    
  };

  useEffect(() => {
    setUpdate({
      week: props.week,
      day: props.day,
      workout: props.workout,
      feeling: props.feeling,
      woDetails: props.woDetails,
      food: props.food,
      id: props.id,
    });

    handleFetchEntries()

    
  }, [props.week, props.entryUpdated]);

  // Function to update the events
  const fetchUpdate = async (e) => {
    e.preventDefault();
    // console.log(1);
    const formData = new FormData(); // create an empty form data object

    // populate the form data object with input data
    formData.append("week", update.week);
    formData.append("day", update.day);
    formData.append("workout", update.workout);
    formData.append("feeling", update.feeling);
    formData.append("woDetails", update.woDetails);
    formData.append("entryImg", file);
    formData.append("food", update.food);
    formData.append("id", update.id);

    // pass the form data object to the server endpoint
    try {
      const response = await axios.patch(
        "http://localhost:5001/entry/update",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${ctx.ACCESS_TOKEN}`,
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Button
        color="success"
        onClick={() => {
          setShow(!show);
        }}
      >
        Update
      </Button>
      <Modal show={show} onClose={() => setShow(!show)}>
        <Modal.Header>Update entry here</Modal.Header>
        <Modal.Body>
          <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Today's Entry
            </h5>

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => formUpdate(e)}
            >
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full group">
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
                      value={update.week}
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
                    value={update.day}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full group">
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
                      value={update.workout}
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
                    value={update.feeling}
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
                  value={update.woDetails}
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
                  value={update.food}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="flex">
                <div className="w-28">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="file_input"
                  >
                    Upload file
                  </label>
                </div>
                <div className="ml-2">
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-200 dark:border-green-600 dark:placeholder-green-400"
                    id="file_input"
                    name="entryImg"
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  ></input>
                </div>
              </div>

              <Button color="success" type="submit">
                Update
              </Button>
            </form>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={() => setShow(!show)}>I accept</Button>
          <Button color="gray" onClick={() => setShow(!show)}>
            Decline
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateEntry;
