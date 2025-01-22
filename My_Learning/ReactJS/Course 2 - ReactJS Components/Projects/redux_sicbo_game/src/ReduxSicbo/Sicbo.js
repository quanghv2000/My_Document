import React, { Component } from "react";
import Dice from "./Dice";
import Result from "./Result";
import "./Sicbo.css";
import { connect } from "react-redux";

class Sicbo extends Component {
  render() {
    return (
      <div
        className="sicbo-game"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dtjin3cf6/image/upload/v1668922737/Cyberlearn/ReactJS/Course%202%20-%20ReactJS%20Components/Projects/sicbo_game/background_yipcpx.png)",
        }}
      >
        <div className="game-title text-center mt-5">
          <h1 className="display-4">Sicbo Game</h1>
        </div>
        <div className="row text-center mt-5">
          <div className="col-5">
            <button
              className="btn-choose"
              onClick={() => {
                this.props.betted(true);
              }}
            >
              TÀI
            </button>
          </div>
          <div className="col-2">
            <Dice />
          </div>
          <div className="col-5">
            <button
              className="btn-choose"
              onClick={() => {
                this.props.betted(false);
              }}
            >
              XỈU
            </button>
          </div>
        </div>
        <div className="result text-center">
          <Result />
        </div>
        <div className="play-game text-center">
          <button
            className="btn btn-success p-2 display-4 mt-5"
            onClick={() => {
              this.props.playGame();
            }}
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    betted: (value) => {
      let action = {
        type: "BETTED",
        value,
      };
      dispatch(action);
    },
    playGame: () => {
      let action = {
        type: "PLAY_GAME",
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(Sicbo);
