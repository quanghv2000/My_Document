import React from "react";
import { Button } from "src/app/components";
import { InputSearch } from "src/app/components/input-search";
// import logoCoral from "src/assets/imgs/logo-coral.svg";
import "./header.scss";

export const Header = () => {
  return (
    <>
      <header>
        <nav className="elearning-navbar navbar navbar-expand-sm">
          <div className="col-7 navbar-left">
            <div className="navbar-logo">
              <a href="/elearning">
                <img
                  src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668834795/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Elearning%20Layout/logo-coral_b1gqhy.svg"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="navbar-categories">
              <i className="fa fa-th"></i>
              <span>Categories</span>
            </div>
            <form className="navbar-form-search">
              <InputSearch />
            </form>
          </div>
          <div className="col-5 navbar-right">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/elearning">
                  Udemy for Business
                </a>
                <div className="overlay">
                  <p>
                    Get your team access to Udemy's top 2,500 courses anytime,
                    anywhere
                  </p>
                  <a href="/">Try Udemy For Business</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/elearning">
                  Become an Instructor
                </a>
                <div className="overlay">
                  <p>
                    Get your team access to Udemy's top 2,500 courses anytime,
                    anywhere
                  </p>
                  <a href="/">Try Udemy For Business</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/elearning">
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </li>
              <li className="nav-item">
                <Button className="btn-white mr-2">Sign In</Button>
                <Button className="btn-red">Sign Up</Button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
