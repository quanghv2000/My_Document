import React from "react";
import { Button } from "src/app/components";

import './jobs.scss';

export const Jobs = () => {
  return (
    <section className="jobs">
      <div className="jobs-content container">
        <div className="row">
          <div className="col-6 border-right">
            <div className="jobs-item">
              <h3>Become an Instructor</h3>
              <p>
                Top instructor from around the world teach millions of students
                on Udemy. We provide the tools and skills to teach what you love.
              </p>
              <Button className="btn-red">Start Teaching Today</Button>
            </div>
          </div>
          <div className="col-6">
            <div className="jobs-item">
              <h3>Udemy for Business</h3>
              <p>
                Get unlimited access to 4,000+ of Udemy's top courses for your team.
              </p>
              <Button className="btn-red">Get Udemy for Business</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
