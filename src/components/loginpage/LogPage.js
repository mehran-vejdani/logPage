import React, { useState } from "react";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
import "./LogoPage.css";
import logImg from "../images/logomain.png";
import { Link } from "react-router-dom";

// valid
const FormValidate = yup.object().shape({
  username: yup.string().required("نام کاربری را وارد کنید"),
  password: yup
    .string()
    .required("رمزعبور را وارد کنید ")
    .min(4, "رمز عبور باید بیشتر از 4 باشد"),
});

const LogPage = (props) => {
  const [tokenvalue, setTokenValue] = useState("");
  const sendData = (values) => {
    console.log(values);
    axios({
      url: "http://185.204.197.151:8000/auth/login",
      method: "POST",
      data: {
        username: values.username,
        password: values.password,
      },
    })
      .then((res) => {
        console.log("res", res);
        localStorage.setItem("Data", res.data.token);
        setTokenValue(localStorage.getItem("Data"));
      })
      .catch((err) => {
        console.log("errrr", err);
      });
  };

  return (
    <div className="contain bg-infoo">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(value) => {
          sendData(value);
          value.password = "";
          value.username = "";
        }}
        validationSchema={FormValidate}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <form
            onSubmit={handleSubmit}
            className="flex-column d-flex bg-dark size"
          >
            <div className="pb-4 text-center">
              <img src={logImg} alt="لوگو رشدانا" className="logo-Log" />
            </div>

            <h2 className="text-white ">ورود</h2>
            <input
              className="form-control my-1"
              placeholder="نام کابری"
              id="username"
              name="username"
              type="text"
              onChange={handleChange}
              value={values.username}
            />
            <div className="text-danger">
              {errors.username && touched.username && errors.username}
            </div>
            <input
              className="form-control"
              placeholder="رمز عبور "
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password}
            />

            <div className="text-danger">
              {errors.password && touched.password && errors.password}
            </div>
            <button
              type="submit"
              className="my-4 btn btn-info text-white w-100 "
            >
              ثبت
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LogPage;
