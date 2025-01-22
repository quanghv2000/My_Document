import React from "react";
import { Header, Cover, Intro, Banner, Categories, Partners, Jobs, Footer } from "./components";

import "./style.scss";

const Elearning = () => {
  return (
    <div className="elearning">
      <Header />
      <Cover />
      <Intro />
      {/* <Courses /> */}
      {/* <Viewing /> */}
      <Banner />
      <Categories />
      {/* <Students /> */}
      <Partners />
      <Jobs />
      <Footer />
    </div>
  );
};

export default Elearning;
