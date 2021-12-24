import React, { useState, useEffect } from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import img from "../images/Roshdana.png";

const Nav = (props) => {
  const token = localStorage.getItem("Data");
  console.log(token);

  return (
    <div>
      <nav className="navbar navbar-expand-lg   bg-dark ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars text-light"></i>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link to="/" className="nav-link text-light fw-bolder">
                  <img src={img} className="logo" />
                  رشدانا
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light">درباره ما</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light">تماس با ما</a>
              </li>
            </ul>
          </div>
          {token ? (
            <Link to="/Dashboard">
              <button type="button" className="btn btn-info text-white  px-5 ">
                داشبورد
              </button>
            </Link>
          ) : (
            <Link to="/LogPage">
              <button type="button" className="btn btn-info text-white  px-5 ">
                ورود
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
