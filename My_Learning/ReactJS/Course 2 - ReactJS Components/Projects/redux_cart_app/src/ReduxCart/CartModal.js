import React, { Component } from 'react';

// connect to get data from redux store
import { connect } from 'react-redux';

class CartModal extends Component {

    totalPayment = () => {
        let { cart } = this.props;
        return cart.reduce((totalAmount, cartItem, index) => {
            return totalAmount += (cartItem.quantity * cartItem.price);
        }, 0)
    }

    renderCartItems = () => {
        let { cart } = this.props;
        let buttonStyle = { backgroundColor: 'orange', border: 'none', borderRedius: '5px solid', height: '24px' }

        if (cart.length > 0) {
            return cart.map((item, index) => {
                return (
                    <tr key={index}>
                        <td className="align-middle">{item.productId}</td>
                        <td className="align-middle"><img style={{ width: '50px' }} src={item.productImage} alt={item.productImage} /></td>
                        <td className="align-middle">{item.productName}</td>
                        <td className="align-middle">{item.price.toLocaleString()} đ</td>
                        <td className="align-middle">
                            <button className="border border-warning rounded text-white" style={buttonStyle} onClick={() => {this.props.editItemQuantity(item.productId, 1)}}>
                                <span>+</span>
                            </button>
                            <span style={{ padding: '6px' }}>{item.quantity}</span>
                            <button className="border border-warning rounded text-white" style={buttonStyle} onClick={() => {this.props.editItemQuantity(item.productId, -1)}}>
                                <span style={{ padding: '2px' }}>-</span>
                            </button>
                        </td>
                        <td className="align-middle">{(item.price * item.quantity).toLocaleString()} đ</td>
                        <td className="align-middle">
                            <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => {this.props.deleteCartItem(item.productId)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                </svg>
                            </button>
                        </td>
                    </tr>
                )
            })
        }

        return;
    }

    render() {
        return (
            <div>
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div style={{ minWidth: '1000px' }} className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Mã sản phẩm</th>
                                            <th>Hình ảnh</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Đơn giá</th>
                                            <th>Số lượng</th>
                                            <th>Thành tiền</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderCartItems()}
                                    </tbody>
                                </table>
                                <h6>Tổng Thanh Toán: {this.totalPayment().toLocaleString()} đ</h6>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cartState.cart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCartItem: (productId) => {
            let action = {
                type: 'DELETE_CART_ITEM',
                productId
            };
            // console.log(productId);
            dispatch(action);
        },
        editItemQuantity: (productId, number) => {
            let action = {
                type: 'EDIT_ITEM_QUANTITY',
                productId,
                number,
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModal)