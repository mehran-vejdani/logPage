import React from "react";
import "./cntent.css";

const Content = () => {
  return (
    <div>
      <div className="p-5  bg-image content-container">
        <div className="mask">
          <div className="d-flex flex-column justify-content-center align-items-center ">
            <div className="text-white d-flex ">
              <h3 className="mb-3 text-light">دوره مقدماتی آموزش</h3>
            </div>
            <div className="d-flex justify-content-end   w-25   padding">
              <h1 className="text-primary display-1">React</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
