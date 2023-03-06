import React, { useState, useContext } from "react";
import appContext from "../context/AppContext";
import axios from "axios";

const LoginPage = () => {
  const ctx = useContext(appContext);

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:5001/admin/login",
        login,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      ctx.SET_ACCESS_TOKEN(response.data.access);
      localStorage.setItem("token", response.data.access);
      console.log(localStorage.getItem("token"));
      console.log(ctx.ACCESS_TOKEN);
    } catch (error) {
      console.error(error.response.data);
    }

    // fetch("http://127.0.0.1:5001/admin/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(login),
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(result.access);
    //     ctx.SET_ACCESS_TOKEN(result.access);
    //     localStorage.setItem("token", result.access);
    //     console.log(localStorage.getItem("token"));
    //     console.log(ctx.ACCESS_TOKEN);
    //   });
  };

  const createUser = (e) => {
    e.preventDefault();
    console.log("created user");

    fetch("http://127.0.0.1:5001/admin/create", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setLogin({
      username: "",
      password: "",
    });
  };

  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-primary-200 m-10">
        <span className="font-DM text-base font-normal">
          <div className="p-10">
            <div className="font-DM text-xl font-normal ml-5 w-44">
              Enter Login Details
            </div>
            <form className="m-4" onSubmit={(e) => loginUser(e)}>
              <input
                className="border-2 border-lightgray-200 mx-auto mb-2 rounded-lg p-1"
                placeholder="username"
                type="text"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={login.username}
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
                value={login.password}
                name="password"
              ></input>
              <br />
              <button
                className="inline-block px-4 mx-2 py-2.5 bg-primary-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-800 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out"
                placeholder="submit"
              >
                Submit
              </button>
              <button
                className="inline-block px-4 mx-2 py-2.5 bg-primary-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-800 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out"
                placeholder="create"
                onClick={(e) => createUser(e)}
              >
                create
              </button>
            </form>
          </div>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
