import { DAT_CUOC, PLAY_AGAIN, PLAY_GAME } from "../types/GameBauCuaType";

const initialState = {
    danhSachCuoc: [
        { id: 'ga', img: 'https://res.cloudinary.com/dtjin3cf6/image/upload/v1668925366/Cyberlearn/ReactJS/Course%203%20-%20ReactJS%20Hooks/ga_tvjc2g.png', diemCuoc: 0 },
        { id: 'bau', img: 'https://res.cloudinary.com/dtjin3cf6/image/upload/v1668925366/Cyberlearn/ReactJS/Course%203%20-%20ReactJS%20Hooks/bau_zb01a4.png', diemCuoc: 0 },
        { id: 'nai', img: 'https://res.cloudinary.com/dtjin3cf6/image/upload/v1668925366/Cyberlearn/ReactJS/Course%203%20-%20ReactJS%20Hooks/nai_pmzzf3.png', diemCuoc: 0 },
        { id: 'ca', img: 'https://res.cloudinary.com/dtjin3cf6/image/upload/v1668925366/Cyberlearn/ReactJS/Course%203%20-%20ReactJS%20Hooks/ca_iibm7m.png', diemCuoc: 0 },
        { id: 'cua', img: 'https://res.cloudinary.com/dtjin3cf6/image/upload/v1668925366/Cyberlearn/ReactJS/Course%203%20-%20ReactJS%20Hooks/cua_ma4lvz.png', diemCuoc: 0 },
        { id: 'tom', img: 'https://res.cloudinary.com/dtjin3cf6/image/upload/v1668925367/Cyberlearn/ReactJS/Course%203%20-%20ReactJS%20Hooks/tom_kz6ggt.png', diemCuoc: 0 },
    ],
    tongDiem: 1000,
    mangXucXac: [
        { id: 'ga', img: 'https://res.cloudinary.com/dtjin3cf6/image/upload/v1668925366/Cyberlearn/ReactJS/Course%203%20-%20ReactJS%20Hooks/ga_tvjc2g.png' },
        { id: 'bau', img: 'https://res.cloudinary.com/dtjin3cf6/image/upload/v1668925366/Cyberlearn/ReactJS/Course%203%20-%20ReactJS%20Hooks/bau_zb01a4.png' },
        { id: 'nai', img: 'https://res.cloudinary.com/dtjin3cf6/image/upload/v1668925366/Cyberlearn/ReactJS/Course%203%20-%20ReactJS%20Hooks/nai_pmzzf3.png' },
    ],
}

const GameBauCuaReducer = (state = initialState, action) => {
    switch (action.type) {

        case DAT_CUOC: {
            const danhSachCuoc = [...state.danhSachCuoc];
            const index = danhSachCuoc.findIndex(quanCuoc => quanCuoc.id === action.quanCuoc.id);
            if (index !== -1) {
                if ((danhSachCuoc[index].diemCuoc === 0 && action.value === -100) || (action.value === 100 && state.tongDiem === 0)) {
                    return { ...state }
                }
                danhSachCuoc[index].diemCuoc += action.value;
            }
            state.tongDiem = state.tongDiem -= action.value;
            state.danhSachCuoc = [...danhSachCuoc];
            return { ...state }
        }

        case PLAY_GAME: {
            const mangXuxXacNgauNhien = [];
            for (let i = 0; i < 3; i++) {
                let numberRandom = Math.floor(Math.random() * 6);
                const xucXacNgauNhien = state.danhSachCuoc[numberRandom];
                mangXuxXacNgauNhien.push(xucXacNgauNhien);
            }
            state.mangXucXac = [...mangXuxXacNgauNhien];

            // xử lí trả thưởng
            if (action.end) {
                // duyệt mảng xuc xac ngau nhien khi xoc
                mangXuxXacNgauNhien.forEach((xucXacNgauNhien, index) => {
                    // tim vi tri cua quan cuoc khi xoc trong danh sach tat ca 6 quan cuoc
                    let indexDSC = state.danhSachCuoc.findIndex(quanCuoc => quanCuoc.id === xucXacNgauNhien.id);
                    // neu qan cuoc khi xoc co trong danh sach
                    if (indexDSC !== -1) {
                        // lay so diem cuoc + vao tong diem
                        state.tongDiem += state.danhSachCuoc[indexDSC].diemCuoc;
                    }
                })

                // xử lí hoàn tiền 
                state.danhSachCuoc.forEach((quanCuoc, index) => {
                    let indexXucXaxNN = mangXuxXacNgauNhien.findIndex(xxnn => xxnn.id === quanCuoc.id);
                    if (indexXucXaxNN !== -1) {
                        state.tongDiem += quanCuoc.diemCuoc;
                    }
                })

                // reset đặt cược
                state.danhSachCuoc = state.danhSachCuoc.map((quanCuoc, index) => {
                    return { ...quanCuoc, diemCuoc: 0 }
                })
            }

            return { ...state };
        }

        case PLAY_AGAIN: {
            // reset điểm cược
            state.tongDiem = 1000;
            // reset đặt cược
            state.danhSachCuoc = state.danhSachCuoc.map((quanCuoc, index) => {
                return { ...quanCuoc, diemCuoc: 0 }
            });
            return { ...state }
        }


        default:
            return state
    }
}

export default GameBauCuaReducer;