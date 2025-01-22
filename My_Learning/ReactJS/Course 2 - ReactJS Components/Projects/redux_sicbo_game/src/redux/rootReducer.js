import {combineReducers} from 'redux';
import SicboReducer from './SicboReducer'

const rootReducer = combineReducers({
    SicboReducer: SicboReducer,
});

export default rootReducer;