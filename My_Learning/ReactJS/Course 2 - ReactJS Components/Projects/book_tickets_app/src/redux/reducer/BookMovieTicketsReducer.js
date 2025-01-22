import { DAT_GHE, HUY_GHE } from "../types/BookMovieTicketsTypes";

const stateDefault = {
    seatList: [
        { soGhe: 'B2', gia: 1000 }
    ]
}

const BookMovieTicketsReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DAT_GHE: {
            let newSeatList = [...state.seatList];
            let index = newSeatList.findIndex(item => item.soGhe === action.ghe.soGhe);
            if (index !== -1) {
                newSeatList.splice(index, 1);
            } else {
                newSeatList.push(action.ghe);
            }

            state.seatList = newSeatList;

            return { ...state }
        }

        case HUY_GHE: {
            console.log('huy ghe!');
            let newSeatList = [...state.seatList];
            let index = newSeatList.findIndex(item => item.soGhe === action.soGhe);
            if (index !== -1) {
                newSeatList.splice(index, 1);
            } 

            state.seatList = newSeatList;
            return { ...state }
        }

        default: return { ...state }
    }
}

export default BookMovieTicketsReducer;