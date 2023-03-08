import React, { useState, useContext } from "react";
import appContext from "../../context/AppContext";
import axios from "axios";
import { Button, Card } from "flowbite-react";
const SignupForm = () => {
  const ctx = useContext(appContext);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const createUser = (e) => {
    e.preventDefault();
    console.log("created user");

    fetch("http://127.0.0.1:5001/user/create", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setUser({
      username: "",
      password: "",
      startWeight: "",
      startBodyFat: "",
      startMuscleMass: "",
    });
  };


  return (
    <div className="selection:bg-green-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-green-600">
                Create account
              </h1>

              <form className="m-4" onSubmit={(e) => createUser(e)}>
                <input
                  className="border-2 border-lightgray-200 mx-auto mb-2 rounded-lg p-1"
                  placeholder="username"
                  type="text"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={user.username}
                  name="username"
                ></input>
                <br />
                <input
                  className="border-2 border-lightgray-200 mx-auto mb-2 rounded-lg p-1"
                  placeholder="password"
                  type="text"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={user.password}
                  name="password"
                ></input>
                <br />
                <input
                  className="border-2 border-lightgray-200 mx-auto mb-2 rounded-lg p-1"
                  placeholder="starting Weight in kgs"
                  type="text"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={user.startWeight}
                  name="startWeight"
                ></input>
                <br />
                <input
                  className="border-2 border-lightgray-200 mx-auto mb-2 rounded-lg p-1"
                  placeholder="starting BodyFat %"
                  type="text"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={user.startBodyFat}
                  name="startBodyFat"
                ></input>
                <br />
                <input
                  className="border-2 border-lightgray-200 mx-auto mb-2 rounded-lg p-1"
                  placeholder="starting MuscleMass %"
                  type="text"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={user.startMuscleMass}
                  name="startMuscleMass"
                ></input>
                <button></button>
                <br />
                <Button
                size="md"
                color="success"
                placeholder="create"
                onClick={(e) => createUser(e)}
              >
                Create User
              </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;