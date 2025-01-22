import React, { Component } from 'react'
import { connect } from 'react-redux'
import Computer from './Computer'
import Player from './Player'
import Result from './Result'
import './RPSGame.css'

class RPSGame extends Component {

    render() {
        return (
            <div className="rps_game">
                <div className="row mt-5">
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4">
                        <Result />
                        <button onClick={() => {
                            this.props.playgame()
                        }} className="btn btn-success mt-5">Play Game</button>
                    </div>
                    <div className="col-4">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playgame: () => {
            let count = 0;
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: 'PLAY_GAME',
                })
                count++;
                if (count >= 20) {
                    clearInterval(randomComputerItem);
                    dispatch({
                        type: 'END_GAME',
                    })
                }
            }, 40);
        }
    }
}

export default connect(null, mapDispatchToProps)(RPSGame)
