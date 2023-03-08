import React, { useState, useContext } from "react";
import appContext from "../context/AppContext";
import axios from "axios";
import { Button, Card } from "flowbite-react";
import SlidingLoginPage from "./SlidingLoginPage";

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
          <Card>
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
                <button></button>
                <br />
                <Button
                  size="md"
                  color="success"
                  className="flex justify-center"
                  placeholder="submit"
                  onClick={(e) => loginUser(e)}
                >
                  Submit
                </Button>
              </form>
              <div className="ml-4">
              <Button
                size="xs"
                color="success"
                placeholder="create"
                onClick={(e) => createUser(e)}
              >
                Create User?
              </Button>
              </div>
            </div>
          </Card>
        </span>
      </div>
    </div>
    
    // <div className="w-full max-w-xs">
    //   <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    //     <div className="mb-4">
    //       <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
    //         Username
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="username"
    //         type="text"
    //         placeholder="Username"
    //       />
    //     </div>
    //     <div className="mb-6">
    //       <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
    //         Password
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         id="password"
    //         type="password"
    //         placeholder="********"
    //       />
    //     </div>
    //     <div className="flex items-center justify-between">
    //       <button
    //         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //         type="button"
    //       >
    //         Sign In
    //       </button>
    //       <a
    //         className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
    //         href="#"
    //       >
    //         Forgot Password?
    //       </a>
    //     </div>
    //   </form>
    //   <p className="text-center text-gray-500 text-xs">
    //     &copy;2023 ACME Corporation. All rights reserved.
    //   </p>
    // </div>
    
  );
};

export default LoginPage;
