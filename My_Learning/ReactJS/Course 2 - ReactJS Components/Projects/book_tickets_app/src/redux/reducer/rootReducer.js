import {combineReducers} from 'redux';
import BookMovieTicketsReducer from './BookMovieTicketsReducer';

const rootReducer= combineReducers({
    BookMovieTicketsReducer: BookMovieTicketsReducer,
});

export default rootReducer;