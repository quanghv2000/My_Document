import React from "react";

import "./new-in.css";

export const NewIn = () => {
  return (
    <section className="new-in">
      <div className="container">
        <h2 className="title">New In</h2>
        <div className="new-in-content">
          <div className="row">
            <div className="col-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668831548/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Movies%20Layout/movie-1_wgw0fl.jpg"
                  alt="Card"
                />
                <div className="card-body">
                  <h5 className="card-title">The Last Post</h5>
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668831548/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Movies%20Layout/movie-2_z7t6zk.jpg"
                  alt="Card"
                />
                <div className="card-body">
                  <h5 className="card-title">Dark and Lonely</h5>
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668831548/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Movies%20Layout/movie-3_dl3cpq.jpg"
                  alt="Card"
                />
                <div className="card-body">
                  <h5 className="card-title">Venture</h5>
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668831547/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Movies%20Layout/movie-4_izmm5g.jpg"
                  alt="Card"
                />
                <div className="card-body">
                  <h5 className="card-title">Hush</h5>
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
