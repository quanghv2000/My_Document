import React from "react";
import { tabContents, tabs } from "./data";
import './courses.scss';

export const Courses = () => {
  const [tabActive, setTabActive] = React.useState("dev-tab");
  return (
    <section className="courses">
      <div className="courses-content">
        <div className="row">
          <div className="col-4">
            <div className="courses-content-left">
              <h2>The world's largest selection of courses</h2>
              <p>
                Choose from over 80,000 online video courses with new additions
                published every month
              </p>
            </div>
          </div>
          <div className="col-8">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              {tabs.map((tab, index) => {
                return (
                  <li
                    className="nav-item"
                    key={index}
                    onClick={() => setTabActive(tab.id)}
                  >
                    <a
                      className={`nav-link ${
                        tab.id === tabActive ? "active" : ""
                      }`}
                      id={tab.id}
                      data-toggle="tab"
                      href={`/${tab.id}`}
                      role="tab"
                    >
                      {tab.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="tab-content" id="myTabContent">
              {tabContents.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`tab-pane fade show ${
                      item.id === tabActive ? "active" : ""
                    }`}
                    id={item.id}
                    role="tabpanel"
                  >
                    <div className="row">
                      {item.courses.map((course, index) => {
                        return (
                          <div className="col-3">
                            <div
                              key={index}
                              className="card"
                              // style={{ width: "90%" }}
                            >
                              <img
                                className="card-img-top"
                                src="https://picsum.photos/200"
                                alt="Card"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </p>
                                <a href="/" className="btn btn-primary">
                                  Go somewhere
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
