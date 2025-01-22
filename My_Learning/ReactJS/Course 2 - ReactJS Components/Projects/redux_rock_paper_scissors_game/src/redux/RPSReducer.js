const rpsState = {
  dataRPS: [
    {
      id: "scissors",
      image:
        "https://res.cloudinary.com/dtjin3cf6/image/upload/v1668921108/Cyberlearn/ReactJS/Course%202%20-%20ReactJS%20Components/Projects/rock_paper_scissors_game/keo_ygphst.png",
      value: false,
    },
    {
      id: "rock",
      image:
        "https://res.cloudinary.com/dtjin3cf6/image/upload/v1668921108/Cyberlearn/ReactJS/Course%202%20-%20ReactJS%20Components/Projects/rock_paper_scissors_game/bua_airw32.png",
      value: true,
    },
    {
      id: "paper",
      image:
        "https://res.cloudinary.com/dtjin3cf6/image/upload/v1668921108/Cyberlearn/ReactJS/Course%202%20-%20ReactJS%20Components/Projects/rock_paper_scissors_game/bao_qn19h6.png",
      value: false,
    },
  ],
  result: `I'm Iron Man, I love You 3000`,
  numberOfWin: 0,
  numberOfPlayed: 0,
  computer: {
    id: "scissors",
    image:
      "https://res.cloudinary.com/dtjin3cf6/image/upload/v1668921108/Cyberlearn/ReactJS/Course%202%20-%20ReactJS%20Components/Projects/rock_paper_scissors_game/keo_ygphst.png",
    value: false,
  },
};

const RPSReducer = (state = rpsState, action) => {
  switch (action.type) {
    case "BETTED": {
      let newDataRPS = [...state.dataRPS];
      newDataRPS = newDataRPS.map((item, index) => {
        if (item.id === action.bettedId) {
          return { ...item, value: true };
        }
        return { ...item, value: false };
      });

      // let index = newDataRPS.findIndex(item => item.id === action.bettedId);
      // if (index !== -1) {
      //     newDataRPS[index].value = true;
      // }
      // console.log('you betted: ' + newDataRPS[index].id);

      state.dataRPS = newDataRPS;
      return { ...state };
    }

    case "PLAY_GAME": {
      console.log("YOU JUST CLICKED PLAY GAME");
      let randomNumber = Math.floor(Math.random() * 3);
      let newComputer = state.dataRPS[randomNumber];

      state.computer = newComputer;
      return { ...state };
    }

    case "END_GAME": {
      let player = state.dataRPS.find((item) => item.value === true);
      let computer = state.computer;

      console.log("player: " + player.id);
      console.log("computer: " + computer.id);

      switch (player.id) {
        case "scissors":
          if (computer.id === "scissors") {
            state.result = "HOÀ NHAU !!!";
          } else if (computer.id === "rock") {
            state.result = "BẠN THUA !!!";
          } else {
            state.result = `I'm Iron Man, I love You 3000`;
            state.numberOfWin += 1;
          }
          break;

        case "rock":
          if (computer.id === "rock") {
            state.result = "HOÀ NHAU !!!";
          } else if (computer.id === "paper") {
            state.result = "BẠN THUA !!!";
          } else {
            state.result = `I'm Iron Man, I love You 3000`;
            state.numberOfWin += 1;
          }
          break;

        case "paper":
          if (computer.id === "paper") {
            state.result = "HOÀ NHAU !!!";
          } else if (computer.id === "scissors") {
            state.result = "BẠN THUA !!!";
          } else {
            state.result = `I'm Iron Man, I love You 3000`;
            state.numberOfWin += 1;
          }
          break;

        default:
          return { ...state };
      }

      state.numberOfPlayed += 1;

      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default RPSReducer;
