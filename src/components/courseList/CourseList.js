import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import "./CourseList.css";
import axios from "axios";

const CourseList = () => {
  const { Meta } = Card;
  const baseURL = "https://jsonplaceholder.typicode.com/photos";

  const [cardList, setCardList] = useState([]);

  const GetCards = async () => {
    await axios({
      method: "GET",
      url: baseURL,
    })
      .then((res) => {
        console.log(res.data);
        setCardList(res.data);
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
      <div className="header p-4">
        <h2> لیست دور ها </h2>
      </div>
      <div className="list p-4 d-flex flex-wrap">
        {cardList.slice(0, 10).map((item, key) => (
          <Card
            key={item.id}
            className="card-size m-2 "
            hoverable
            cover={<img alt="example" src={item.thumbnailUrl} />}
          >
            <div className="text-center">
              <Meta title={item.title} description={item.url} />
              <Button type="primary" className="mt-3 block">
                جزییات دوره
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
