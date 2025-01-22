const sicboState = {
    sicbo: true,
    dices: [
        {id: 1, image: './sicbo_image/1.png'},
        {id: 2, image: './sicbo_image/2.png'},
        {id: 3, image: './sicbo_image/3.png'},
    ],
    numberOfPlayed: 0,
    numberOfWin: 0,
}

const SicboReducer = (state = sicboState, action) => {
    switch(action.type) {
        case 'BETTED': 
            console.log('your betted is: ' + action.value);
            state.sicbo = action.value;
            return {...state};

        case 'PLAY_GAME':
            console.log('play game!');
            let dices = [];
            for (let i = 0; i < 3; i++) {
                let randomNumber = Math.floor(Math.random() * 6) + 1;
                let dice = {id: randomNumber, image: `./sicbo_image/${randomNumber}.png`}
                dices.push(dice);
            }
            state.dices = dices;
            state.numberOfPlayed += 1;

            let numberOfScore = state.dices.reduce((numberOfScore, dice, index) => {
                return numberOfScore += dice.id;
            }, 0);
            if ((numberOfScore > 10 && state.sicbo === true) || (numberOfScore <= 10 && state.sicbo === false)) {
                state.numberOfWin += 1;
            }

            return {...state};
        default: return {...state}
    } 
}

export default SicboReducer;