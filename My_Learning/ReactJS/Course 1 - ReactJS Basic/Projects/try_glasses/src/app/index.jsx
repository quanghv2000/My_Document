import React, { Component } from "react";
import data from "./data.json";

import "./style.css";

export default class App extends Component {
  state = {
    glasses: data[0],
  };

  changeGlasses = (newGlasses) => {
    this.setState({
      glasses: newGlasses,
    });
  };

  renderGlassesList = data.map((glasses, index) => {
    return (
      <div className="ml-1 mr-1 p-2 border border-width-1">
        <img
          onClick={() => {
            this.changeGlasses(glasses);
          }}
          key={index}
          style={{ cursor: "pointer", height: 30 }}
          src={glasses.url}
          alt={glasses.name}
        />
      </div>
    );
  });

  render() {
    const keyFrame = `@keyframes glassesChangeAnimation${Date.now()} {
        from {
            width: 0px;
            transform: rotate(45deg);
            opacity: 1;
        }
        to {
            width: 150px;
            transform: rotate(0deg);
            opacity: 0.8;
        }
    }`;

    const glassesStyle = {
      position: "absolute",
      width: "150px",
      top: "75px",
      right: "150px",
      opacity: "0.8",
      animation: `glassesChangeAnimation${Date.now()} 1.2s`,
    };

    const glasseInfoStyle = {
      position: "absolute",
      width: "250px",
      height: "105px",
      top: "200px",
      right: "100px",
      backgroundColor: "rgba(255, 127, 0, 0.3)",
      textAlign: "left",
    };

    return (
      <div
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dtjin3cf6/image/upload/v1668691988/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Try%20Glasses/background_p1es9i.jpg)",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <style>{keyFrame}</style>

        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", height: "100vh" }}>
          <h3
            className="text-center text-white text-light p-5"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div
            className="container"
            style={{
              minHeight: 305,
              maxHeight: 305,
              width: "100%",
            }}
          >
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668691987/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Try%20Glasses/model_tyszog.jpg"
                    alt="model.jpg"
                    style={{ width: "250px", position: "absolute", right: 100 }}
                  />
                  <img
                    src={this.state.glasses.url}
                    alt="v1.jpg"
                    style={glassesStyle}
                    className="glasses"
                  />
                  <div style={glasseInfoStyle} className="pl-2 pt-1">
                    <p className="font-weight-bold text-dark mb-0">
                      {this.state.glasses.name} - ${this.state.glasses.price}
                    </p>
                    <p style={{ fontSize: "13px" }}>
                      {this.state.glasses.desc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="position-relative">
                  <img
                    src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668691987/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Try%20Glasses/model_tyszog.jpg"
                    alt="model.jpg"
                    style={{ width: "250px", position: "absolute", left: 100 }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="container bg-light text-center mt-5 d-flex justify-content-center align-items-center"
            style={{ minHeight: 100, maxHeight: 100 }}
          >
            {this.renderGlassesList}
          </div>
        </div>
      </div>
    );
  }
}
