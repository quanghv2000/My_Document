import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning">{this.props.result}</div>
                <div className="display-4 text-success">Số ván thắng: <span className="text-warning">{this.props.numberOfWin}</span></div>
                <div className="display-4 text-success">Tổng số ván chơi: <span className="text-warning">{this.props.numberOfPlayed}</span></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        result: state.RPSReducer.result,
        numberOfWin: state.RPSReducer.numberOfWin,
        numberOfPlayed: state.RPSReducer.numberOfPlayed,
    }
}

export default connect(mapStateToProps)(Result)
