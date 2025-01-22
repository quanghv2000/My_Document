import {combineReducers} from 'redux';
import RPSReducer from './RPSReducer';

const rootReducer = combineReducers({
    RPSReducer: RPSReducer,
});

export default rootReducer;
