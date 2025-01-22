import React from "react";
// import booking from "src/assets/imgs/booking.svg";
// import volkswagen from "src/assets/imgs/volkswagen.svg";
// import mercedes from "src/assets/imgs/mercedes.svg";
// import pinterest from "src/assets/imgs/pinterest.svg";
// import adidas from "src/assets/imgs/adidas.svg";
// import paypal from "src/assets/imgs/paypal.svg";

import "./partners.scss";

export const Partners = () => {
  return (
    <section className="partners">
      <div className="partners-title">
        <h3>Trusted by companies of all sizes</h3>
      </div>
      <div className="partners-content">
        <div className="partners-item">
          <img
            src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668834790/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Elearning%20Layout/booking_asxhms.svg"
            alt="partner-logo"
          />
        </div>
        <div className="partners-item">
          <img
            src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668834797/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Elearning%20Layout/volkswagen_eqpo9d.svg"
            alt="partner-logo"
          />
        </div>
        <div className="partners-item">
          <img
            src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668834795/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Elearning%20Layout/mercedes_bjfwqk.svg"
            alt="partner-logo"
          />
        </div>
        <div className="partners-item">
          <img
            src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668834795/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Elearning%20Layout/pinterest_ljky60.svg"
            alt="partner-logo"
          />
        </div>
        <div className="partners-item">
          <img
            src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668834790/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Elearning%20Layout/adidas_vfcq6x.svg"
            alt="partner-logo"
          />
        </div>
        <div className="partners-item">
          <img
            src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668834795/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Elearning%20Layout/paypal_mb9jkb.svg"
            alt="partner-logo"
          />
        </div>
      </div>
    </section>
  );
};
