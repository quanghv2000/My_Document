import React from "react";

import "./header.css";

export const Header = () => {
  return (
    <>
      <header className="container">
        <p className="text-right text-white mb-0">
          <i className="fa-solid fa-phone"></i>
          <span className="mx-3 border-right pr-2">098.6915.765</span>
          <i className="fa fa-search"></i>
        </p>
        <nav className="navbar navbar-expand-sm">
          <a className="navbar-brand" href="/">
            <img
              src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668831547/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Movies%20Layout/logo_adspjr.svg"
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#movieCollapsibleNavId"
            aria-controls="movieCollapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="movieCollapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item app-line active">
                <span className="nav-link" href="/">
                  HOME
                </span>
              </li>
              <li className="nav-item app-line">
                <span className="nav-link" href="/">
                  WHAT'S ON
                </span>
              </li>
              <li className="nav-item app-line">
                <span className="nav-link" href="/">
                  SHORTCODES
                </span>
              </li>
              <li className="nav-item app-line">
                <span className="nav-link" href="/">
                  NEWS
                </span>
              </li>
              <li className="nav-item app-line">
                <span className="nav-link" href="/">
                  CONTACT
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
