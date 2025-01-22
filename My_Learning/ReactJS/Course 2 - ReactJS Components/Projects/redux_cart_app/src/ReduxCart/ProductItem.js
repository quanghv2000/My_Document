import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProductItem extends Component {

    // addItemToCart = () => {

    // }

    render() {

        let { product } = this.props;

        return (
            <div className="card text-center">
                <img className="card-img-top ml-5" src={product.hinhAnh} alt="" style={{ width: '250px', height: '250px' }} />
                <div className="card-body">
                    <h4 className="card-title">{product.tenSP}</h4>
                    <p className="card-text">{product.giaBan.toLocaleString()} đ</p>
                    <button className="btn btn-success" onClick={() => { this.props.addItemToCart(product) }}>Add To Cart</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => {
            let newCartItem = {
                "productId": product.maSP,
                "productName": product.tenSP,
                "productImage": product.hinhAnh,
                "quantity": 1,
                "price": product.giaBan,
            }
            // console.log(cartItem);
            let action = {
                type: 'ADD_ITEM_TO_CART',
                newCartItem,
            };

            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductItem)
