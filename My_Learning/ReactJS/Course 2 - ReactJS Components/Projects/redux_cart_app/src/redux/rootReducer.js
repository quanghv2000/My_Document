import {combineReducers} from 'redux';
import ReduxCartReducer from './ReduxCartReducer';

const rootReducer = combineReducers({
    cartState: ReduxCartReducer,
})

export default rootReducer;