import React, { Component } from "react";
import { cars, models, wheels } from "./data";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carInfo: cars[0],
    };
  }

  handleChangeCarModel = (model) => {
    const carFound = cars.find((car) => car.modelId === model.id);

    this.setState({
      carInfo: carFound,
    });
  };

  renderModels = () => {
    return models.map((model, index) => {
      return (
        <div
          className="card-body p-0 mt-1 ml-1 mr-1"
          style={{ cursor: "pointer" }}
          key={index}
          onClick={() => {
            this.handleChangeCarModel(model);
          }}
        >
          <div className="d-flex border border-link p-2">
            <img style={{ width: 40, height: 40 }} src={model.imgUrl} alt="" />
            <div className="ml-3">
              <h5 className="m-0 p-0" style={{ fontSize: 16 }}>
                {model.name}
              </h5>
              <p className="m-0 p-0" style={{ fontSize: 14 }}>
                {model.type}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  renderWheels = () => {
    return wheels.map((item, index) => {
      return (
        <div
          className="card-body p-0 mt-1 ml-1 mr-1"
          style={{ cursor: "pointer" }}
          key={index}
          onClick={() => {}}
        >
          <div className="d-flex border border-link p-2">
            <img style={{ width: 60, height: 60 }} src={item.img} alt="" />
            <div className="ml-3">
              <h5 style={{ fontSize: 16 }}>{item.title}</h5>
              <p className="m-0 p-0" style={{ fontSize: 16 }}>
                ${item.price}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <>
        <div className="container pt-3">
          <div className="row">
            {/* Car Image */}
            <div className="col-6">
              <img
                className="w-100"
                src={this.state.carInfo.imgUrl}
                alt="car.jpg"
              />
            </div>
            {/* Car Info */}
            <div className="col-6">
              <div className="card">
                <div className="card-header text-black">
                  <h3>Car Infomation</h3>
                </div>
                <table
                  className="table border border-color-right m-0"
                  border={1}
                >
                  <tr>
                    <th>Name</th>
                    <td>{this.state.carInfo.name}</td>
                  </tr>
                  <tr>
                    <th>Color</th>
                    <td>{this.state.carInfo.color}</td>
                  </tr>
                  <tr>
                    <th>Price</th>
                    <td>${this.state.carInfo.price.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <th>Engine Type</th>
                    <td>In-linre-4cylinder</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            {/* Pick Color */}
            <div className="col-6">
              <div className="card pb-1">
                <div className="card-header">
                  <b>Pick Colors</b>
                </div>
                {this.renderModels()}
              </div>
            </div>
            {/* Pick Wheels */}
            <div className="col-6">
              <div className="card pb-1">
                <div className="card-header">
                  <b>Pick Wheels</b>
                </div>
                {this.renderWheels()}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
