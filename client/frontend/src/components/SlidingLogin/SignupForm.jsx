import React, { useState, useContext } from "react";
import appContext from "../../context/AppContext";
import axios from "axios";
import { Button, Toast } from "flowbite-react";
const SignupForm = () => {
  const ctx = useContext(appContext);
  const [toast, setToast] = useState(false);
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
    setToast(true);
  };

  return (
    <div className="selection:bg-green-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <div>
                {toast && (
                  <div>
                    <Toast>
                        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                          <svg
                            class="absolute w-12 h-12 text-gray-400 -left-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      
                      <div className="ml-3 text-sm font-normal">
                        User successfully created
                      </div>
                      <Toast.Toggle />
                    </Toast>
                  </div>
                )}
              </div>
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
