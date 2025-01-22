import { ADD_NEW_USER, DELETE_USER, EDIT_USER, UPĐATE_USER } from "../types/UserManagerType";

const initialState = {
    userList: [
        { id: 1, username: 'admin', fullName: 'Nguyễn Văn A', password: '123456', email: 'admin@host.it', phoneNumber: '0382836523', role: 'ROLE_ADMIN' },
        { id: 2, username: 'user', fullName: 'Trần Văn B', password: '654321', email: 'user@host.it', phoneNumber: '0123987654', role: 'ROLE_USER' },
        { id: 3, username: 'anonymous', fullName: 'Đào Thu C', password: '000000', email: 'anonymous@host.it', phoneNumber: '0973652433', role: 'ROLE_ANONYMOUS' },
    ],
    userEdit: { id: 0, username: '', fullName: '', password: '', email: '', phoneNumber: '', role: 'ROLE_ADMIN' },
}


const UserManagerReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_NEW_USER:
            return { ...state, userList: [...state.userList, action.newUser] };

        case EDIT_USER:
            return { ...state, userEdit: action.userEdit };

        case UPĐATE_USER:
            let userUpdate = action.userUpdate;
            let userList = [...state.userList];

            // find user want to update in user list by id
            let indexOfUserFindById = userList.findIndex(user => user.id === userUpdate.id);
            // if user exist => update user info
            if (indexOfUserFindById !== -1) {
                userList[indexOfUserFindById] = userUpdate;
            }
            
            state.userEdit = { id: 0, username: '', fullName: '', password: '', email: '', phoneNumber: '', role: 'ROLE_ADMIN' };
            return { ...state, userList: userList };

        case DELETE_USER:
            return { ...state, userList: state.userList.filter(user => user.id !== action.userId) };
        default:
            return state;
    }
}

export default UserManagerReducer;