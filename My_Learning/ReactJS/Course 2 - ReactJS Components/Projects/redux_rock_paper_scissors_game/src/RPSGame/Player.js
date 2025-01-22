import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  renderRPS = () => {
    return this.props.dataRPS.map((item, index) => {
      const border = {
        border: "none",
      };
      if (item.value) {
        border.border = "3px solid orange";
      }
      return (
        <div className="col-4" key={index}>
          <button
            onClick={() => {
              this.props.betted(item.id);
            }}
            className="btn-rps"
            style={border}
          >
            <img style={{ width: 35 }} src={item.image} alt="" />
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="text-center player">
        <div className="thinking">
          <img
            className="mt-3"
            style={{ width: 80 }}
            src={this.props.dataRPS.find((item) => item.value === true).image}
            alt=""
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="https://res.cloudinary.com/dtjin3cf6/image/upload/v1668921109/Cyberlearn/ReactJS/Course%202%20-%20ReactJS%20Components/Projects/rock_paper_scissors_game/player_job22l.png"
          alt=""
        />

        <div className="row">{this.renderRPS()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRPS: state.RPSReducer.dataRPS,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    betted: (bettedId) => {
      let action = {
        type: "BETTED",
        bettedId,
      };
      // console.log('you betted! - ' + bettedId)
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
