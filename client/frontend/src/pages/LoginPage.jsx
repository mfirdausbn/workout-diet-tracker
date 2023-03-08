import React, { useState, useContext } from "react";
import appContext from "../context/AppContext";
import axios from "axios";
import { Button, Card } from "flowbite-react";

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
            <div className="px-10 pt-10">
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
              <div className="ml-4 mt-10">
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
  );
};

export default LoginPage;
