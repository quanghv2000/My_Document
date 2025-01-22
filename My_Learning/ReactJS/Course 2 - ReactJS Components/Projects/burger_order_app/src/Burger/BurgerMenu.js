import React, { Component } from 'react'
import { connect } from 'react-redux'

class BurgerMenu extends Component {

    render() {
        return (
            <div className="burger-detail">
                <h3 className="text-success">Chọn thức ăn</h3>
                <br />
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th>Thức ăn</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Salad</td>
                            <td>$ {this.props.burgerState.price.salad}</td>
                            <td>
                                <button className="bg-success button" onClick={() => {this.props.updateMenu('salad', 1)}}>+</button>
                                <span style={{ padding: '5px' }}>{this.props.burgerState.burger.salad}</span>
                                <button className="bg-danger button" onClick={() => {this.props.updateMenu('salad', -1)}}>-</button>
                            </td>
                            <td>$ {this.props.burgerState.price.salad * this.props.burgerState.burger.salad}</td>
                        </tr>
                        <tr>
                            <td>Cheese</td>
                            <td>$ {this.props.burgerState.price.cheese}</td>
                            <td>
                                <button className="bg-success button" onClick={() => {this.props.updateMenu('cheese', 1)}}>+</button>
                                <span style={{ padding: '5px' }}>{this.props.burgerState.burger.cheese}</span>
                                <button className="bg-danger button" onClick={() => {this.props.updateMenu('cheese', -1)}}>-</button>
                            </td>
                            <td>$ {this.props.burgerState.price.cheese * this.props.burgerState.burger.cheese}</td>
                        </tr>
                        <tr>
                            <td>Beef</td>
                            <td>$ {this.props.burgerState.price.beef}</td>
                            <td>
                                <button className="bg-success button" onClick={() => {this.props.updateMenu('beef', 1)}}>+</button>
                                <span style={{ padding: '5px' }}>{this.props.burgerState.burger.beef}</span>
                                <button className="bg-danger button" onClick={() => {this.props.updateMenu('beef', -1)}}>-</button>
                            </td>
                            <td>$ {this.props.burgerState.price.beef * this.props.burgerState.burger.beef}</td>
                        </tr>
                    </tbody>
                </table>
                <div>Tổng cộng: <span>$ {this.props.burgerState.total}</span></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        burgerState: state.BurgerReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMenu: (item ,number) => {
            dispatch({
                type: 'UPDATE_MENU',
                item,
                number,
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu)