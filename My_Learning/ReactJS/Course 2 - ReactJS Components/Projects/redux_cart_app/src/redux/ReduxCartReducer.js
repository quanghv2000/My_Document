// set up cart state
const cartState = {
    cart: [{
        "productId": 1,
        "productName": "VinSmart Live",
        "productImage": "./img/vsphone.jpg",
        "quantity": 2,
        "price": 13000000,
    }],
}

const ReduxCartReducer = (state = cartState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case 'ADD_ITEM_TO_CART': {
            let indexOfProductFindInCart = state.cart.findIndex(cartItem => cartItem.productId === action.newCartItem.productId);
            if (indexOfProductFindInCart !== -1) {
                state.cart[indexOfProductFindInCart].quantity += 1;
            } else {
                state.cart.push(action.newCartItem);
            }

            // set state
            state.cart = [...state.cart];

            return {...state};
        };
        case 'DELETE_CART_ITEM': {
            let newCart = [...state.cart];

            let indexOfProductFindInCart = newCart.findIndex(cartItem => cartItem.productId === action.productId);
            if (indexOfProductFindInCart !== -1) {
                newCart.splice(indexOfProductFindInCart, 1);
            }
            state.cart = newCart;

            return {...state};
        };

        case 'EDIT_ITEM_QUANTITY': {
            let newCart =[...state.cart];
            console.log('edit item quantity')
            let indexOfProductFindInCart = newCart.findIndex(cartItem => cartItem.productId === action.productId);
            if (indexOfProductFindInCart !== -1) {
                if (action.number === -1 && newCart[indexOfProductFindInCart].quantity === 1) {
                    return {...state};
                }
                newCart[indexOfProductFindInCart].quantity += action.number;
            }

            state.cart = newCart;
            return {...state};
        };
    }

    return {...state};
}

export default ReduxCartReducer;