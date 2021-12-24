import React, { useEffect } from "react";
import Contetnt from "./content";
import CourseList from "./courseList/CourseList";
import axios from "axios";
const Home = () => {
  const GetCards = async () => {
    await axios({
      method: "GET",
      url: "http://185.204.197.151:8000/api/v1/allshops",
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    GetCards();
  }, []);

  return (
    <div>
      <Contetnt />
      <CourseList />
    </div>
  );
};

export default Home;
