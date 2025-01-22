import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomComputerItem${Date.now()} {
            from {top: 0px;}
            to {top: 200px;}
        }`;

    return (
      <div className="text-center player">
        <style>{keyframe}</style>
        <div className="thinking">
          <img
            className="mt-3"
            style={{ width: 80 }}
            src={this.props.computer.image}
            alt=""
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668921109/Cyberlearn/ReactJS/Course%202%20-%20ReactJS%20Components/Projects/rock_paper_scissors_game/playerComputer_hnb385.png"
          alt=""
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.RPSReducer.computer,
  };
};

export default connect(mapStateToProps)(Computer);
