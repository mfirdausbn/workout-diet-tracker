import React, { useState, useContext } from "react";
import appContext from "../../context/AppContext";
import axios from "axios";
import { Button } from "flowbite-react";

const SigninForm = () => {
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
        "http://127.0.0.1:5001/user/login",
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
      localStorage.setItem("username", login.username);
      console.log(localStorage.getItem("token"));
      console.log(localStorage.getItem("username"));
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

  return (
    <div>
    <div className="selection:bg-green-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-green-600">
                Welcome back!
              </h1>

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
                  type="password"
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
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SigninForm;
