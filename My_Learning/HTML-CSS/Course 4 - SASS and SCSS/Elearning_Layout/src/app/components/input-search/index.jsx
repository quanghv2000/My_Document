import React from "react";
import './style.scss';

export const InputSearch = () => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search for courses"
      />
      <div className="input-group-append">
        <span className="input-group-text" id="basic-addon2">
          <i className="fa fa-search"></i>
        </span>
      </div>
    </div>
  );
};
