import React from "react";
import './intro.scss';

export const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-content">
        <div className="row">
          <div className="col-4">
            <div className="intro-item">
              <div className="icon">
                <i className="fa fa-bullseye"></i>
              </div>
              <div className="text">
                <p className="title">80,000 online courses</p>
                <p className="sub-title">Explore a variety of fresh topics</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="intro-item">
              <div className="icon">
              <i className="fa fa-spinner"></i>
              </div>
              <div className="text">
                <p className="title">Expert instruction</p>
                <p className="sub-title">Find the right instructor for you</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="intro-item">
              <div className="icon">
              <i className="fa fa-sync-alt"></i>
              </div>
              <div className="text">
                <p className="title">Lifetime access</p>
                <p className="sub-title">Learn on your schedule</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
