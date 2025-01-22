import React from "react";
import "./categories.scss";

export const Categories = () => {
  return (
    <section className="categories">
      <div className="categories-content">
        <h2>Top Categories</h2>
        <div className="row">
          <div className="col-3">
            <div className="categories-item">
              <i className="fa fa-code"></i>
              <span>Development</span>
            </div>
          </div>
          <div className="col-3">
            <div className="categories-item">
              <i className="fa fa-chart-bar"></i>
              <span>Business</span>
            </div>
          </div>
          <div className="col-3">
            <div className="categories-item">
              <i className="fa fa-laptop-code"></i>
              <span>IT and Software</span>
            </div>
          </div>
          <div className="col-3">
            <div className="categories-item">
              <i className="fa fa-pencil-alt"></i>
              <span>Design</span>
            </div>
          </div>

          <div className="col-3">
            <div className="categories-item">
              <i className="fa fa-bullseye"></i>
              <span>Marketing</span>
            </div>
          </div>
          <div className="col-3">
            <div className="categories-item">
              <i className="fa fa-book"></i>
              <span>Personal</span>
            </div>
          </div>
          <div className="col-3">
            <div className="categories-item">
              <i className="fa fa-camera-retro"></i>
              <span>Photograhpy</span>
            </div>
          </div>
          <div className="col-3">
            <div className="categories-item">
              <i className="fa fa-music"></i>
              <span>Music</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
