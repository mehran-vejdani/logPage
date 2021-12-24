import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
// -------css
import "./dashboard.css";
const Dashboard = () => {
  const [profileName, setProfileName] = useState([]);
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  const userProfile = async () => {
    await axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
    })
      .then((res) => {
        console.log(res.data);
        setProfileName(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    userProfile();
  }, []);

  return (
    <div>
      <div className="dashboard container mt-5 d-flex">
        <div className="profile  pt-5">
          <Avatar size={64} icon={<UserOutlined />} />
          {profileName.slice(0, 1).map((item, key) => (
            <p key={item.id} className="mt-4">
              {item.name}
            </p>
          ))}
          <a href="/LogPage">
            <button
              type="button"
              className="btn btn-warning text-white px-5 "
              onClick={clearLocalStorage}
            >
              خروج
            </button>
          </a>
        </div>

        <div className="information">
          <div className="head p-2">
            <h3>اطلاعات شخصی</h3>
          </div>
          <div className="edit mt-5">
            <div className="form d-flex flex-column">
              <input type="text" className=" m-2 form-control w-25" />
              <input type="text" className=" m-2 form-control w-25" />
              <button type="button" className="btn btn-info w-25 text-white">
                ویرایش
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
