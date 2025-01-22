import React from "react";
import { InputSearch } from "src/app/components/input-search";
// import bgCover from "src/assets/imgs/cover.jpg";

import "./cover.scss";

export const Cover = () => {
  return (
    <section className="cover" style={{ backgroundImage: `url(https://res.cloudinary.com/dtjin3cf6/image/upload/v1668834791/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Elearning%20Layout/cover_yye5n5.jpg)` }}>
      <div className="cover-content">
        <h1>Learn on your schedule</h1>
        <p>
          Study any topic, anytime. Explore thousands of courses for as low as
          <b> $19.99</b>
        </p>
        <form className="cover-content-form">
          <InputSearch />
        </form>
      </div>
    </section>
  );
};
