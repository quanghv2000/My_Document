import React from "react";

import "./carousel.css";

export const Carousel = () => {
  return (
    <div
      id="carouselIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="container carousel-indicators">
        <li
          data-target="#carouselIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselIndicators" data-slide-to="1"></li>
        <li data-target="#carouselIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668831547/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Movies%20Layout/hero-1_oknmyo.jpg"
            alt="First slide"
          />
          <div className="carousel-overlay"></div>
          <div className="container carousel-caption d-none d-md-block">
            <div className="col-9">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h2>End of the World: Part I</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat unde nostrum sed. Facilis beatae quod tempore voluptate
                et nemo ea.
              </p>
              <div className="movie-trailer">
                <span>PG</span>
                <button>
                  <span>
                    <i className="fa fa-play"></i>
                    PLAY TRAILER
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668831546/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Movies%20Layout/hero-2_picazc.jpg"
            alt="Second slide"
          />
          <div className="carousel-overlay"></div>
          <div className="container carousel-caption d-none d-md-block">
            <div className="col-9">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h2>End of the World: Part II</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat unde nostrum sed. Facilis beatae quod tempore voluptate
                et nemo ea.
              </p>
              <div className="movie-trailer">
                <span>PG</span>
                <button>
                  <span>
                    <i className="fa fa-play"></i>
                    PLAY TRAILER
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668831546/Cyberlearn/ReactJS/Course%201%20-%20ReactJS%20Basic/Projects/Movies%20Layout/hero-3_xscsgj.jpg"
            alt="Third slide"
          />
          <div className="carousel-overlay"></div>
          <div className="container carousel-caption d-none d-md-block">
            <div className="col-9">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h2>End of the World: Part III</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat unde nostrum sed. Facilis beatae quod tempore voluptate
                et nemo ea.
              </p>
              <div className="movie-trailer">
                <span>PG</span>
                <button>
                  <span>
                    <i className="fa fa-play"></i>
                    PLAY TRAILER
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
