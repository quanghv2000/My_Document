import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../redux/actions/BookMovieTicketsActions'

class BookingInformation extends Component {
    render() {
        return (
            <div>
                <div className="mt-5">
                    <button className="gheDuocChon"></button>
                    <span className="text-light ml-2" style={{ fontSize: '30px' }}>Ghế đã đặt</span>
                    <br />
                    <button className="gheDangChon"></button>
                    <span className="text-light ml-2" style={{ fontSize: '30px' }}>Ghế đang đặt</span>
                    <br />
                    <button className="ghe" style={{ marginLeft: 0 }}></button>
                    <span className="text-light ml-2" style={{ fontSize: '30px' }}>Ghế chưa đặt</span>
                </div>
                <div className='mt-5'>
                    <table className="table" border="1">
                        <thead>
                            <tr className="text-light" style={{ fontSize: '30px' }}>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th>Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody className="text-warning">
                            {this.props.seatList.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.soGhe}</td>
                                        <td>{item.gia.toLocaleString()}</td>
                                        <td><button onClick={() => { this.props.dispatch(huyGheAction(item.soGhe)) }}>Huỷ</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td className="text-warning">Tổng Tiền:</td>
                                <td className="text-warning">{this.props.seatList.reduce((totalAmount, item, index) => {
                                    return totalAmount += item.gia
                                }, 0).toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        seatList: state.BookMovieTicketsReducer.seatList
    }
}

export default connect(mapStateToProps)(BookingInformation)
