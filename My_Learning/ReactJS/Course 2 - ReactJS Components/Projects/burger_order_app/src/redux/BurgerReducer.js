const burgerState = {
    burger: { salad: 1, cheese: 1, beef: 1 }, // [{name:'salad',amount:1},{name:'c heese',amount:1},{name:'beef',amount:1}] 
    price: { salad: 10, cheese: 20, beef: 55 },
    total: 85
}

const BurgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case 'UPDATE_MENU': {
            const newBurger = { ...state.burger };
            // console.log(action.item + " - " + action.number)
            switch (action.item) {
                case 'salad': {
                    if (newBurger.salad === 1 && action.number === -1) {
                        return { ...state }
                    }
                    newBurger.salad += action.number;
                    state.total += state.price.salad * action.number;
                    state.burger = newBurger;

                    return { ...state };
                }

                case 'cheese': {
                    if (newBurger.cheese === 1 && action.number === -1) {
                        return { ...state }
                    }
                    newBurger.cheese += action.number;
                    state.total += state.price.cheese * action.number;
                    state.burger = newBurger;

                    return { ...state };
                }

                case 'beef': {
                    if (newBurger.beef === 1 && action.number === -1) {
                        return {...state}
                    }
                    newBurger.beef += action.number;
                    state.total += state.price.beef * action.number;
                    state.burger = newBurger;
                    
                    return {...state};
                }

                default: return { ...state };
            }
        }

        default: return { ...state };
    }
}

export default BurgerReducer;
