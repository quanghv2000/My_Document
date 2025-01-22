import React, { Component } from 'react'
import {connect} from 'react-redux'

class Result extends Component {
    render() {
        return (
            <div>
                <div className="display-4">
                    BẠN CHỌN: <span className="text-danger">{this.props.sicbo === true ? 'TÀI' : 'XỈU'}</span>
                </div>
                <div className="display-4">
                    SỐ BÀN THẮNG: <span className="text-success">{this.props.numberOfWin}</span>
                </div>
                <div className="display-4">
                    TỔNG SỐ VÒNG CHƠI: <span className="text-primary">{this.props.numberOfPlayed}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sicbo: state.SicboReducer.sicbo,
        numberOfWin: state.SicboReducer.numberOfWin,
        numberOfPlayed: state.SicboReducer.numberOfPlayed,
    }
}

export default connect(mapStateToProps)(Result);