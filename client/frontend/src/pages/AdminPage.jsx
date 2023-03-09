import React, { useContext, useEffect, useState } from "react";
import { Card, Accordion, Button } from "flowbite-react";
import appContext from "../context/AppContext";
import axios from "axios";

const AdminPage = () => {
  const ctx = useContext(appContext);

  const [userInfo, setUserInfo] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  const fetchUsers = async () => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ctx.ACCESS_TOKEN}`,
      },
    };
    try {
      const res = await axios.get(
        "http://127.0.0.1:5001/user/allUsers",
        options
      );
      console.log(res.data);
      setUserInfo(res.data);
      setIsFetched(!isFetched);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    
    ctx.SET_ACCESS_TOKEN(localStorage.getItem("token"));
  }, [isFetched]);

  return (
    <div>
      <div className="flex justify-center my-4">
        <Button
          size="xl"
          color="gray"
          outline={true}
          gradientDuoTone="tealToLime"
          pill={true}
          onClick={() => {
            fetchUsers();
          }}
        >
          Display all users
        </Button>
      </div>

      {userInfo && (
        <div className="flex justify-center">
          <div className="w-3/4">
            <Accordion alwaysOpen={true} className="">
              {/* mapping */}
              {userInfo.map((user) => {
                return (
                  <Accordion.Panel>
                    <Accordion.Title>{/* username */}</Accordion.Title>
                    <Accordion.Content>
                      <Card>
                        <h5 className="flex justify-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {user.username}
                        </h5>
                        <div className="flex justify-evenly">
                          <div>
                            <ul>startWeight: {user.startWeight}</ul>
                            <ul>startBodyFat: {user.startBodyFat}</ul>
                            <ul>startMuscleMass: {user.startMuscleMass}</ul>
                            {/* <ul>Feeling: {user.feeling} </ul> */}
                          </div>
                        </div>
                      </Card>
                    </Accordion.Content>
                  </Accordion.Panel>
                );
              })}
            </Accordion>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
