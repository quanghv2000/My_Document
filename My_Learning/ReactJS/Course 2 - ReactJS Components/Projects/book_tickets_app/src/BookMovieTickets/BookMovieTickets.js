import React, { Component } from 'react'
import BookingInformation from './BookingInformation'
import './BookMovieTickets.css'
import danhSachGheData from '../Data/danhSachGhe.json'
import Seat from './Seat'

export default class BookMovieTickets extends Component {

    renderHangGhe = () => {
        return danhSachGheData.map((item, index) => {
            return (
                <div key={index} style={{marginLeft: 180}}>
                    <Seat seat={item} soHangGhe={index} />
                </div>
            )
        })
    }

    render() {
        return (
            <div className="booking-movie-tickets text-white" style={{ backgroundImage: "url('./image/bgmovie.jpg')", position: 'fixed', width: '100%', height: '100%', backgroundSize: '100%' }}>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', position: 'fixed', width: '100%', height: '100%' }}>
                    <div className="container-fluid mt-2">
                        <div className="row">
                            <div className="col-8 text-center">
                                <div className="text-warning display-4">ĐẶT VÉ XEM PHIM</div>
                                <div className="mt-3" style={{ fontSize: '25px' }}>Màn Hình</div>
                                <div className="mt-2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <div className="screen" style={{marginLeft: 120}}></div>
                                    <div >{this.renderHangGhe()}</div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="text-light mt-3" style={{ fontSize: '35px' }}>
                                    DANH SÁCH GHẾ BẠN CHỌN
                                </div>
                                <BookingInformation />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
