import React from "react";
import { Button } from "src/app/components";
// import googleBtn from "src/assets/imgs/google_btn.png";
// import appleBtn from "src/assets/imgs/apple_btn.png";
// import bgBanner from "src/assets/imgs/pngkit_udemy-logo-png_2223616.png"

import "./banner.scss";

export const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content container">
        <h2>Learn anytime, anywhere</h2>
        <p>Take courses on any of your devices</p>
        <p>Go at your own pace with lifetime access</p>
        <p>Try risk-free with our 30-day money-back guarantee</p>
        <div className="btn-sign-up">
          <Button className="btn-red" text="Sign Up For Free" />
        </div>
        <div className="row logo">
          <div className="col-6 text-right">
            <img
              src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668834790/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Elearning%20Layout/google_btn_kfiiuv.png"
              alt="google"
            />
          </div>
          <div className="col-6 text-left">
            <img
              src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668834791/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Elearning%20Layout/apple_btn_u5e6wb.png"
              alt="apple"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
