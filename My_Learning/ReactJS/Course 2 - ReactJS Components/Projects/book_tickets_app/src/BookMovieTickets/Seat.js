import React, { Component } from 'react'
import { connect } from 'react-redux';
import { datGheAction } from '../redux/actions/BookMovieTicketsActions';

class Seat extends Component {

    renderSeat = () => {
        return this.props.seat.danhSachGhe.map((item, index) => {
            let cssGheDaDat = '';
            let disabled = false;
            if (item.daDat) {
                cssGheDaDat = 'gheDuocChon'
                disabled = true;
            }

            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === item.soGhe);
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon';
            }

            return (
                <button onClick={() => { this.props.datGhe(item) }} key={index} className={`ghe ${cssGheDaDat}  ${cssGheDangDat}`} disabled={disabled}>
                    {item.soGhe}
                </button>
            )
        })
    }

    renderSoHangShe = () => {
        return this.props.seat.danhSachGhe.map((hang, index) => {
            return (
                <button key={index} className="rowNumber">{hang.soGhe}</button>
            )
        })
    }


    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className="ml-4">
                {this.props.seat.hang}
                {this.renderSoHangShe()}
            </div>
        } else {
            return (
                <div>
                    {this.props.seat.hang}
                    {this.renderSeat()}
                </div>
            )
        }
    }

    render() {
        return (
            <div className="text-warning text-left ml-2 mt-2" style={{ fontSize: 30 }}>
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BookMovieTicketsReducer.seatList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Seat);